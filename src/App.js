import React, { Component } from 'react'; //different
// import ReactDOM from 'react-dom';
import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//     };
//   }

//   componentDidMount() {

//     fetch("https://zillow-com1.p.rapidapi.com/images?zpid=2080998890", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "zillow-com1.p.rapidapi.com",
//         "x-rapidapi-key": "07d603d0dfmshc188ce990889ca2p123130jsn40bf6dbd5d8b"
//       }
//     })
//     .then(response => {
//       return response.json();
//     }).then(json => {
//       this.setState({ data: json});
//     }).catch(err => {
//       console.error(err);
//     });

//   }

//   render() {
//     if (this.state.data) {
//       return <img src={this.state.data.props[0].imgSrc} alt="alternate"/>
//     }
//     else {
//       return <div>Loading...</div>
//     }
//   }
// }
// ReactDOM.render(
//    <App/>,
//    document.getElementById('root')
// );


// export default App;




class App extends Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch("https://zillow-com1.p.rapidapi.com/images?zpid=2080998890", {
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
            DataisLoaded: true
        });
    })
  }
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
 
      return(
      <div className = "App">
          <h1> Fetch data from an api in react </h1>
          <h2>{JSON.parse(items).resultsPerPage}</h2>
          <img src={items.props[0].imgSrc.image} alt="alternate"/>
      </div>
  );
}
}
 
export default App;