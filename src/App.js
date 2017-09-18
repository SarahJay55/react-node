import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import Packing from './component/Packing'
import Buttons from './component/Buttons'



class App extends Component {
  constructor() {
    super()
    this.state = {
      images: ["https://eoimages.gsfc.nasa.gov/images/imagerecords/76000/76244/oahu_ast_2010013_lrg.jpg", "http://i.dailymail.co.uk/i/pix/2013/09/01/article-2408442-1B900343000005DC-267_964x842.jpg", "https://eoimages.gsfc.nasa.gov/images/imagerecords/6000/6661/landsat_maui_kah_lrg.jpg", "http://www.hawaiiforvisitors.com/images/kauai/kauai-satellite-image-01-by-nasa-600x508.jpg"],
      currentImage: "",
      showImage: false,
      packing: [],
      packingToDisplay: [],
    }

    this.changeImage = this.changeImage.bind(this);
    this.packingItem = this.packingItem.bind(this);

  }


  componentDidMount() {
    axios.all([
      axios.get("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400"),
      axios.get("http://localhost:3000/api/sun")
    ])
    .then(axios.spread((sunrise, images) => {
      this.setState({
        sun: sunrise.data.results.sunrise,
        sunImages: images.data
      })
      console.log(images)
    }))
  }

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

        <img className="sunimage" src={this.state.sunImages}/>

        <p>The Sunrise for Hawaii is at {this.state.sun}</p>


        {/* <button onClick={() => this.changeImage(0)}>Oahu</button>
        <button onClick={() => this.changeImage(1)}>Hawaii</button>
        <button onClick={() => this.changeImage(2)}>Maui</button>
        <button onClick={() => this.changeImage(3)}>Kauai</button> */}

        <img src={this.state.currentImage} alt="" height="400px" width="400px" />
        <Buttons changeImage={this.changeImage}/>
        <Packing packingList={this.state.packing} packingItem={this.packingItem} />

      </div>
    );
  }
}

export default App;
