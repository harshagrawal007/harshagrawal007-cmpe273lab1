import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { Button } from "react-bootstrap";



class App extends Component {
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
      stringeval:"",
    };
    this.onbuttonPressed = this.onbuttonPressed.bind(this);
    this.onEvaluate = this.onEvaluate.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onbuttonPressed(text) {
    console.log("inside " +text);
    this.setState((prev) => ({stringeval: prev.stringeval + text}));
  }
  
  onEvaluate() {
    console.log("inside evaluate"+ this.state.stringeval );
    const data = {
      evalstring: this.state.stringeval
    };
    axios.post("http://localhost:3001/eval", data).then(response => {
      console.log("Status Code : ", response.status);
      this.setState({
        stringeval: response.data
      });
    });
    //const result = eval(this.state.stringeval);
    //this.setState({stringeval: result.toString()});
  }
  
  onClear() {
    console.log("inside clear");
    this.setState({
     // stringeval: prev.stringeval.length <= 1 ? '0' : prev.stringeval.slice(0, -1)
     stringeval:""
    });
  }

  render() {
    return (
      <div className="App">
        <div className="display">
        <div> {this.state.stringeval}</div>
      </div>
        
      <div className="component-button-panel">
        <div className= "component-button" >
         <Button text="C" onClick={this.onClear} > C</Button>
          <Button text="%" onClick={() => this.onbuttonPressed(" % ")} > %</Button>
          <Button text="÷" onClick={() => this.onbuttonPressed(" / ")} > ÷  </Button>
        </div>
        <div className= "component-button">
          <Button text="7" onClick={() => this.onbuttonPressed("7")} >7 </Button>
          <Button text="8" onClick={() => this.onbuttonPressed("8")} >8</Button>
          <Button text="9" onClick={() => this.onbuttonPressed("9")} >9</Button>
          <Button text="x" onClick={() => this.onbuttonPressed("*")} > x </Button>
        </div>
        <div className= "component-button">
          <Button text="4" onClick={() => this.onbuttonPressed("4")} > 4</Button>
          <Button text="5" onClick={() => this.onbuttonPressed("5")} > 5</Button>
          <Button text="6" onClick={() => this.onbuttonPressed("6")} > 6</Button>
          <Button text="-" onClick={() => this.onbuttonPressed(" - ")} > -</Button>
        </div>
        <div className= "component-button">
          <Button text="1" onClick={() => this.onbuttonPressed("1")} > 1</Button>
          <Button text="2" onClick={() => this.onbuttonPressed("2")} > 2</Button>
          <Button text="3" onClick={() => this.onbuttonPressed("3")} > 3</Button>
          <Button text="+" onClick={() => this.onbuttonPressed(" + ")} > +</Button>
        </div>
        <div className= "component-button">
          <Button text="0" onClick={() => this.onbuttonPressed("0")}> 0</Button>
          <Button text="." onClick={() => this.onbuttonPressed(".")} > .</Button>
          <Button text="=" onClick={this.onEvaluate}  > =</Button>
        </div>
      </div>
       
      </div>
      
    );
  }
}

export default App;
