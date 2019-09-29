import React from 'react';
import {connect} from 'react-redux';

const Home = () => {
    return (
        <div>
          Главная
        </div>
    );
};

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, null)(Home);
