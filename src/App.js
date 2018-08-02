import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fFamily: "serif",
      fSize: "18",
      fColor: "black"
    }
  }
  onInputChangeF = e => {
    this.setState({fFamily: e.target.value});
  }
  onInputChangeS = e => {
    this.setState({fSize: e.target.value});
  }
  onInputChangeC = e => {
    this.setState({fColor: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Webfont Previewer</h1>
        </header>
        <table>
          <tbody>
            <tr>
              <td>Font family</td>
              <td><input placeholder="Input font family" value={ this.state.fFamily } onChange={ this.onInputChangeF }/></td>
            </tr>
            <tr>
              <td>Font size</td>
              <td><input type="number" placeholder="Input font size" value={ this.state.fSize } onChange={ this.onInputChangeS }/></td>
            </tr>
            <tr>
              <td>Font color</td>
              <td><input placeholder="Input font color" value={ this.state.fColor } onChange={ this.onInputChangeC }/></td>
            </tr>
          </tbody>
        </table>
        <p style={{
          fontFamily: this.state.fFamily,
          fontSize: this.state.fSize+"px",
          color: this.state.fColor,
        }}>
          This text {this.state.fFamily} {this.state.fSize}px {this.state.fColor}
        </p>
      </div>
    );
  }
}

export default App;
