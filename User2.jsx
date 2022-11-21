import React, { Component } from 'react'

export class User2 extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.city}
      </div>
    )
  }
}

export default User2
