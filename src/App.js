import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fFamily: "serif",
      fSize: "18",
      fColor: "black",
      fWeight: "normal"
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
  onInputChangeW = e => {
    this.setState({fWeight: e.target.value});
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
              <td>
                <select placeholder="Input font family" onChange={ this.onInputChangeF }>
                  <option value="serif">serif</option>
                  <option value="arial">arial</option>
                  <option value="helvetica">helvetica</option>
                  <option value="times new roman">times new roman</option>
                  <option value="times">times</option>
                  <option value="courier new">courier new</option>
                  <option value="courier">courier</option>
                  <option value="verdana">verdana</option>
                  <option value="georgia">georgia</option>
                  <option value="palatino">palatino</option>
                  <option value="garamond">garamond</option>
                  <option value="bookman">bookman</option>
                  <option value="comic sans ms">comic sans ms</option>
                  <option value="trebuchet">trebuchet</option>
                  <option value="arial black">arial black</option>
                  <option value="impact">impact</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Font size</td>
              <td><input type="number" placeholder="Input font size" value={ this.state.fSize } onChange={ this.onInputChangeS }/></td>
            </tr>
            <tr>
              <td>Font color</td>
              <td><input placeholder="Input font color" value={ this.state.fColor } onChange={ this.onInputChangeC }/></td>
            </tr>
            <tr>
              <td>Font weight</td>
              <td>
                <select placeholder="Input font weight" onChange={ this.onInputChangeW }>
                  <option value="normal">normal</option>
                  <option value="bold">bold</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{
          fontFamily: this.state.fFamily,
          fontSize: this.state.fSize+"px",
          color: this.state.fColor,
          fontWeight: this.state.fWeight
        }}>
          This text {this.state.fFamily} {this.state.fSize}px {this.state.fColor}
        </p>
      </div>
    );
  }
}

export default App;
