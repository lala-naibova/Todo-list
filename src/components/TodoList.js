import React, { Component } from 'react';
import TodoItem from './Todoitem'

export class TodoList extends Component {
    render() {
        const {list, handleDelete, handleEdit, clearItems} = this.props
        return (
           <ul className='list-group my-3'>
               <h3 className='text-capitalize text-center'>todo list</h3>
               {list.map(item=>{
                   return( <TodoItem key={item.id} title={item.title} handleDelete={() =>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)}/>)
               })}
            <button type="button" className="btn-danger btn-block text-uppercase mt-3" onClick={clearItems}>clear all</button>
           </ul>
           
        );
    }
}

export default TodoList;
