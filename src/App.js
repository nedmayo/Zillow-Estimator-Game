import React, { Component} from 'react'; //different
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import { BasicAppBar } from './components/BasicAppBar';

class App extends Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          propCount: 0,
          DataisLoaded: false
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch("https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=santa%20monica%2C%20ca&home_type=Houses", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "zillow-com1.p.rapidapi.com",
        "x-rapidapi-key": "07d603d0dfmshc188ce990889ca2p123130jsn40bf6dbd5d8b"
      }
    })
    .then((res) => res.json())
    .then((json) => {
        this.setState({
            items: json,
            DataisLoaded: true,
        });
    })
  }

  render() {
      const { DataisLoaded, items} = this.state;
      if (!DataisLoaded) return <div>
          <h1> Please wait some time.... </h1> </div> ;
      return(
      <div className = "App">
          <BasicAppBar />
          <Carousel width={"50%"}> 
            <div>
              <img src={items.props[0].imgSrc} alt="descrip"/>
            </div>
            <div>
              <img src={items.props[1].imgSrc} alt="descripi"/>
            </div>
            <div>
              <img src={items.props[2].imgSrc} alt="descrip"/>
            </div>
            <div>
              <img src={items.props[3].imgSrc} alt="descript"/>
            </div>
          </Carousel>
      </div>
  );
}
}
 
export default App;