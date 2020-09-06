import React, { Component } from 'react';
import './App.css';
import ListItems from './component/listItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isSwitchOn: false,
      items:[],
      currentItem:{
        text:"",
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.upDate = this.upDate.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
    }
    
    
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text !==""){
        const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
      }
    }
    
    deleteItem(key){
      const filteritems = this.state.items.filter(item => item.key !==key);
      this.setState({
        items:filteritems
      })
    }
    
    upDate(text, key){
      const items =  this.state.items;
      items.map(item =>{
        if(item.key===key){
          item.text=text;
        }
        this.setState({
      items:items
        })
      })
    }
  render(){
    const isOn = this.state.isSwitchOn;
    return(
      <>
      <div className="contact">
      <div className= { isOn ? "light-mode" : "dark-mode"}>
        <div>
        <button className={isOn ? "text-black modeBtn" : "text-black modeBtn"} 
          onClick={() => this.setState({isSwitchOn: !isOn})}  > 
          {isOn ? 'D' : 'N'}
        </button>
    
        </div>

      <div className="app">
<form className="form" onSubmit={this.addItem}>

  <input className="formIput" type="text"  placeholder="ADD TASK" 
  value={this.state.currentItem.text}
  onChange={this.handleInput}/>

  <ListItems items={this.state.items}
  deleteItem ={this.deleteItem}
  upDate={this.upDate} />
  <button type="submit">Add New</button>

</form>
</div>
</div>
</div>
      </>
    )
  }
}

export default App;