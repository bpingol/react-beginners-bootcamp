// @flow

import React from 'react'

import App from './App'

const styles = {
  success: {
    color: 'limegreen',
  },

  failure: {
    color: 'red',
  },
}

class Guessnumber extends React.Component {

  state = {
    number: 0,
    guessed: 0,
    guessInput: '',
  }

  guess() {
    this.setState({ guessed: Number(this.state.guessInput) })
  }

  renderOutput() {
    const { guessed, number } = this.state
    if (!guessed) {
      return null
    }
    if (guessed === number) {
      return <div style={styles.success}>[{guessed}]: Bullseye!</div>
    }
    return <div style={styles.failure}>[{guessed}]: Too {guessed > number ? 'High' : 'Low'}...</div>
  }

  render() {
    return (
      <App
        appName="Guessnumber (using App)"
        controls={
          <div className="input-group">
            <input
              value={this.state.guessInput}
              onChange={evt => this.setState({ guessInput: evt.target.value })}
              className="form-control"
              type="number"
              placeholder="Place your guess here"
              min={1}
              max={100}
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={() => this.guess()}>Guess</button>
            </span>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Guessnumber
