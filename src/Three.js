import { Component } from 'react';
import "./App.css"
import ThreeChild from './ThreeChild';

class Three extends Component {
  
  state={
    name:"",
    department:"",
    rating:"",
    click:true,
    data:[]
  }

  handleClick=()=>{
    let obj={
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating,
    }
      this.state.data.push(obj);
      this.setState({data:this.state.data, click:false, name:"", department:"", rating:""})
      console.log(this.state.data)
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  functiontoggle=()=>{
    this.setState({click:!this.state.click})
  }
   
  render(){
    return (
        <>
           {this.state.click ?
              <>
              <div className="main">
                <label className="label">Name:</label>
                <input className="input" type="text" name="name" onChange={this.handleChange} placeholder="Enter Your Name" value={this.state.name}/>
                <br/><br/>
                <label className="label">Department:</label>
                <input className="input"  type="text" name="department" onChange={this.handleChange}  placeholder="Enter Your Department"  value={this.state.department}/>
                <br/><br/>
                <label className="label">Rating:</label>
                <input className="input"  type="number" name="rating" onChange={this.handleChange}  placeholder="Enter Your Rating"  value={this.state.rating}/>   
                <br/><br/>
                <button className="submit" onClick={this.handleClick}>Submit</button>
              </div>
              </>
              :
              <ThreeChild value={this.state.data} tf={this.functiontoggle} />
            }
        </>
    );
  }
}

export default Three;
