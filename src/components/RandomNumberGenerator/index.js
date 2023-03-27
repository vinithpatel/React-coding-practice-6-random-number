import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="info-container">
          <h1 className="random-number-heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="genarate-button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="genarated-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
