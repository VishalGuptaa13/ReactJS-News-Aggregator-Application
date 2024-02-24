import React, { Component } from 'react';
import loadingImage from "./loading.gif";

export default class LoadingComponent extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={loadingImage} alt="loading"   style={{maxWidth:"60px",maxHeight:"70px"}}/>
      </div>
    );
  }
}
