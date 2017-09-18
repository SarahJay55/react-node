import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Packing from './component/Packing'


// import Sunrise from './server/sunrise/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      images: ["https://eoimages.gsfc.nasa.gov/images/imagerecords/76000/76244/oahu_ast_2010013_lrg.jpg", "http://i.dailymail.co.uk/i/pix/2013/09/01/article-2408442-1B900343000005DC-267_964x842.jpg", "https://eoimages.gsfc.nasa.gov/images/imagerecords/6000/6661/landsat_maui_kah_lrg.jpg", "http://www.hawaiiforvisitors.com/images/kauai/kauai-satellite-image-01-by-nasa-600x508.jpg"],
      currentImage: "",
      showImage: false,
      packing: []
    }

    this.changeImage = this.changeImage.bind(this);
    this.packingItem = this.packingItem.bind(this);

  }


  // componentDidMount() {
  //   axios.get("http://api.sunrise-sunset/")
  //        .then((response) => {
  //          if (response.status === 200) {
  //            this.setState({
  //              sun: response.data
  //            })
  //          } else {
  //            console.log('did not work')
  //          }
  //        })
  // }

  changeImage(i) {
    this.setState({
      showImage: true,
      currentImage: this.state.images[i]
    })
  }

  packingItem(value) {
    let packingCopy = this.state.packing.slice();
    packingCopy.push(value);

    this.setState({
      packing: packingCopy
    })
  }


  render() {
    return (
      <div className="App">
        <h1>The Hawaiian Islands</h1>


        <button onClick={() => this.changeImage(0)}>Oahu</button>
        <button onClick={() => this.changeImage(1)}>Hawaii</button>
        <button onClick={() => this.changeImage(2)}>Maui</button>
        <button onClick={() => this.changeImage(3)}>Kauai</button>

        <img src={this.state.currentImage} alt="" height="500px" width="500px" />

        <Packing packingList={this.state.packing} packingItem={this.packingItem} />

      </div>
    );
  }
}

export default App;
