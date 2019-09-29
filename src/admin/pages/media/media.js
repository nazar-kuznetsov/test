import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {
  fetchImages,
  uploadImages,
  deleteImages,
  altImages
} from './services/action';
import { Modal } from '../../components/modal';
import { getImages } from './services/selectors';
import Files from './files';
import { getBytes } from '../../../helpers/get-bytes';


class Media extends Component {
    state = {
      selected: null,
      isOpen: false,
      index: null
    }

    componentDidMount() {
      if (this.props.mediaFiles.length === 0) {
        this.props.fetchImages();
      }
    }

    componentDidUpdate(prevProps) {
      // console.log(prevProps.mediaFiles); !== добавить
      // console.log(this.props.mediaFiles);
    }

    selected = (selected, index) => {
      this.setState({ selected, isOpen: true, index });
    }

    close = () => {
      this.setState({ isOpen: false });
    }

    upload = ({ target }) => {
      const data = new FormData();
      if (target.files.length > 10) {
        alert('Максимум 10 файлов за 1 раз');
      }
      for (let i = 0; i < target.files.length; i++) {
        data.append('file', target.files[i]);
      }

      this.props.uploadImages(data);
      target.value = null;
    }

    shouldComponentUpdate(nextProps, nextState) {
      return JSON.stringify(this.props.mediaFiles) !== JSON.stringify(nextProps.mediaFiles.length)
            ||
            this.state.isOpen !== nextState.isOpen;
    }
    // пвзять массив вставить иднкс взять ид
    onDelete = () => {
      this.close();
      this.props.deleteImages(this.state.selected._id);
    }

    setAlt = e => {
      if (e.target.value.length === 0) return;
      this.props.altImages(this.props.mediaFiles[this.state.index]._id, e.target.value);
      e.target.value = null;
    }

    prev = () => this.setState(({ index }) => ({ index: index - 1 }));

    next = () => this.setState(({ index }) => ({ index: index + 1 }));


    render() {
      const { selected, index } = this.state;
      const { mediaFiles } = this.props;
      return (
        <div>
          {
            this.state.isOpen &&
                    <Modal
                      title="Параметры файлы"
                      modalClose={this.close}
                      prev={this.prev}
                      next={this.next}
                      disablePrev={index === 0}
                      disableNext={index === mediaFiles.length - 1}
                    >
                      {
                        <div style={{ display: 'flex' }}>
                          <img className="dialog-img" src={mediaFiles[index].path.replace('../public', '')} alt={mediaFiles[index]} />
                          <div className="upload-info">
                            <p>Тип файла: {mediaFiles[index].type}</p>
                            <p>Загружен: {new Date(mediaFiles[index].createdAt).toLocaleString()}</p>
                            <p>Размер файла: {getBytes(mediaFiles[index].size)}</p>
                            <p>Альтернативный текст: {mediaFiles[index].alt}</p>
                            <TextField
                              id="outlined-dense"
                              placeholder="Альтернативный текст"
                              margin="dense"
                              onBlur={this.setAlt}
                              variant="outlined"
                            />
                            <Button
                              onClick={this.onDelete}
                              color="secondary"
                              variant="contained"
                            >Удалить
                            </Button>
                          </div>
                        </div>
                      }
                    </Modal>
          }


          <label>
            <input
              accept="image/*"
              onChange={this.upload}
              style={{ display: 'none' }}
              multiple={true}
              type="file"
            />
            <Button color="primary" variant="contained" component="span">Добавить</Button>
          </label>
          {
            <Files
              files={this.props.mediaFiles}
              selected={this.selected}
            />
          }
        </div>
      );
    }
}


const mapStateToProps = state => {
  return {
    mediaFiles: getImages(state)
  };
};


const mapDispatchToProps = {
  fetchImages,
  uploadImages,
  deleteImages,
  altImages
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);
