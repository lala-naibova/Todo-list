import React, {Component} from 'react';
import './App.css';
import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
//import "@fortawesome/fontawesome-free/css/all.min.css";
 

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    items:[],
    id:uuid(),
    item:'',
    itemEdit: false
  }
}
handleChange = e =>{
  const value= e.target.value;
  this.setState({item : value})
}
handleSubmit = e =>{
  e.preventDefault();
  const newItem = {id:this.state.id, title: this.state.item};
  const updateditems = [...this.state.items, newItem ];
  this.setState({ 
    items : updateditems ,
    id:uuid(),
    item:'',
    editItem: false}, ()=>console.log(this.state));
}
handleDelete = id =>{
  const filteredList = this.state.items.filter((item)=> item.id!==id )
  this.setState({items : filteredList})
}
handleEdit = id =>{
  const filteredList = this.state.items.filter((item)=> item.id!==id ) ;
  const currItem = this.state.items.find(elem=> elem.id===id);
  this.setState({item : currItem.title, id:currItem.id, items:filteredList, editItem:true})
}
clearItems = ()=>{
  this.setState({
    items:[],
    id:uuid(),
    item:'',
    itemEdit: false
  });
}
  render(){
    return (
      <div>
        <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
              <h1 className="text-capitalize text-center">todo input</h1>
          <TodoInput 
          item={this.state.item} 
          change={this.handleChange} 
          submit={this.handleSubmit}
          editItem={this.state.editItem}/>
          <TodoList 
          list={this.state.items} 
          handleDelete = {this.handleDelete}
          handleEdit={this.handleEdit}
          clearItems={this.clearItems}/>
          </div>
  
          </div>
        </div>
      </div>
    )
  }

}

export default App;
