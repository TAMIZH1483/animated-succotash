import React, { Component } from 'react'
import CardEle from './CardEle';

export class login extends Component {    
  render() {
    const mapValues = [1,2,3,5,6,7,8,8,8]
    // mapValues.map(valu => console.log(valu))
    return (
      <div>
          {
        mapValues.map(valu => <CardEle valu={valu} >{valu}</CardEle>)
          }
      </div>
      
    )
    
  }
}

export default login
