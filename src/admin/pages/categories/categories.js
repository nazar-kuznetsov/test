import React, { Component } from 'react';
import Upload from '../../modules/upload';

class Categories extends Component {
  state = {
    imagesGallery: []
  }

  save = imagesGallery => {
    this.setState({ imagesGallery });
  }

  render() {
    return (
      <div>
        <Upload
          title="Галерея"
          save={this.save}
          min={1}
          max={5}
        />
        <Upload
          title="Галерея"
          save={this.save}
          min={1}
          max={5}
                />
      </div>
    );
  }
}

export default Categories;
