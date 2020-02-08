import React, { Component } from 'react';

export class TodoInput extends Component {
    
    render() {
        const {item, change, submit, editItem} = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={submit}>
<div className="input-group">
    <div className="input-group-prepend">
<div className="input-group-text bg-primary text-white">
<i className='fas fa-book'></i>
</div>
    </div>
<input 
className="form-control text-capitalize " placeholder='add todo list'
value={item}
onChange={change}
></input>
</div>
<button 
disabled={item?false:true}
type="submit" 
className={editItem? "btn btn-block bg-success mt-3 text-uppercase" : "btn btn-block bg-primary mt-3 text-uppercase"}
 > {editItem? "edit item": "Add item"}</button>
                </form>
            </div>
        );
    }
}

export default TodoInput;
