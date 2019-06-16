import React, { Component } from 'react'

export class ChildComp extends Component {
  render() {
      // console.log(this.props)
    return (
      <div>
        <i className={this.props.itype}></i>
      </div>
    )
  }
}

export default ChildComp
