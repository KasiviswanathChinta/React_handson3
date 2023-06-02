import React, { Component } from 'react'
import './App.css';

class ThreeChild extends Component {

  render() {
    return (
      <>
      <div className='arr'>
          {this.props.value.map((item)=>{
              return(
                <h2 className="span">Name={item.name} || Department={item.department} || rating={item.rating}</h2>
              )
          }
          )
          }
      </div>
      <button className="back" onClick={this.props.tf}>Go Back</button>
      </>
    )
  }
}

export default ThreeChild;