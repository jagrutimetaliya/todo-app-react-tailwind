
import React, { Component } from 'react'
import Plan from './Plan'

 class App extends Component {
   state = {
     items : [],
     text : '',
   }
   handleChange = e => {
     this.setState({text : e.target.value})
   };
   handleAdd = e => {
     if(this.state.text!==''){
        const items = [...this.state.items, this.state.text];
        this.setState({items:items, text : ''});
     }
   };
   handleDelete = id => {
     const oldItems = [...this.state.items];
     const items = oldItems.filter((element,i) => {
        return i !== id;
     })
     this.setState({items:items});
   }
  render() {
    return (
      <div className="container grid mx-auto ">
        <div className=" grid-cols-2 mx-auto"> 
        <div className="shadow-md p-3">
           <h2 className="text-center font-extrabold"> Today's Plan </h2>
           <div className="grid-rows-2 flex">
              <div className="col-span-2">
                <input type="text" className="rounded shadow-md h-10 m-2 p-2" placeholder="Write your plan here" value={this.state.text} onChange={this.handleChange}></input>
              </div>
              <div className="col-span-1">
                  <button type="button" className="bg-yellow-500 text-violet-700 text-base font-semibold px-6 py-2 mt-2 top-10 border-white text-black rounded-lg" onClick={this.handleAdd}>Add</button>
              </div>
           </div>
            <div className="grid"> 
              {/* <ul className="m-5 w-max text-white grid grid-cols-2 grid-flow-row gap-4">
                {this.state.items.map((value,i) => {
                  return  <Plan value={value} key={i} id={i} sendData={this.handleDelete}/>
                })}
               
              </ul> */}
              <ul className="m-5 w-max text-white grid grid-cols-2 grid-flow-row gap-4">
              <Plan p={this.state.items} sendData={this.handleDelete}/>
              </ul>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
export default App;