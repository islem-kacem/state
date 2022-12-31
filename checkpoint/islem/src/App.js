import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      fullName: "islem",
      bio: "Bio1",
      imgSrc: "islem.jpg",
      profession: "Software",
    };
  }

  showProfile=()=>{this.setState({ show: !this.state.show })}

  changeProfile=()=>{
    this.setState(
      {
        fullName:"another islem ",
        bio: "Bio2",
        imgSrc: "islem2.jpg",
        profession: "IT Support"
      }
    )
  }

  componentDidMount() {
    this.chgFName = setInterval(
      () => this.changeProfile(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.chgFName);
  }

  render() {
  return (
      <div className="App">
          <button  onClick={this.showProfile} >
          CLICK HERE
          </button>
          {
          this.state.show && 
          <div className='Person'>
                <h1>{this.state.fullName}</h1>
                <p>{this.state.bio}</p>
                <p>{this.state.profession}</p>
                <img src={this.state.imgSrc}></img>
          </div>
          }
    </div>
  )
}
}

export default App;