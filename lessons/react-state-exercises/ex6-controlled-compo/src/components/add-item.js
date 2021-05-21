import React,{Component} from 'react';

class Additem extends Component{
    
    state = {
        value: '',
      };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    addItem = event => {
        event.preventDefault(); // prevent form submit while button action click
        this.props.OnAdditem(this.state.value);
    };

    //validation  
    inputIsEmpty = () => this.state.value === '';

    render(){
        return (
            <form onSubmit={this.addItem}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
        );
    }
}

export default Additem