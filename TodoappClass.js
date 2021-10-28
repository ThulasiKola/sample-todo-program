import React,{Component} from 'react'
import TodoListClass from './TodoListClass';

class TodoappClass extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      
    }
    handleChange = (e) => {
        this.setState({ text: e.target.value });
      }

      handleSubmit = (e) => {
        e.preventDefault();
       
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: ''
        }));
      }
    
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoListClass items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
}
export default TodoappClass
    
  
   
  
  
  
  