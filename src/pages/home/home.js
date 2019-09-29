import React, {useEffect, useState} from 'react';
import Hello from '../../components/translation/hello';
import Thank from '../../components/translation/thank-you';

const Home = () => {
  const [data, setData] = useState([]);
  const [img_data, setFile] = useState([]);

  useEffect(() => {

  }, []);

  const handleChange = event => {
    const img_data = [];
    for (let i = 0; i < event.target.files.length; i++) {
      img_data.push(URL.createObjectURL(event.target.files[i]));
    }
    console.log(event.target.files);
    setFile(img_data);
    // if (event.target.files[0]) {
    //     setFile(URL.createObjectURL(event.target.files[0]));
    // } else {
    //     setFile(null);
    // }
  };


  return (
    <div>
      {
        img_data.map((item, index) => {
          return (
            <img key={index} src={item} alt="123"/>
          );
        })
      }
      {/* <img src={img} alt="картинка"/> */}
      <input type="file" onChange={handleChange} multiple={true}/>
            Home
      {
        data.length > 0
          ? data.map(item => {
            return (
              <div key={item._id}>
                <p>{item.name}</p>
                <img style={{width: '250px'}} src={item.url} alt=""/>
              </div>
            );
          })
          : null
      }
      <hr/>
      <Hello />
      <Thank />
    </div>
  );
};

export default Home;
