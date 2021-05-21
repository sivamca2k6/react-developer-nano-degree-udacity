import React,{Component} from 'react';
import Additem from './add-item';
import ListItems from './list-items'
import DeleteLastItem from './delete-item'

 class ShoppingList extends Component {

    state = {
        items: [],
      };
    
      addItem = itemtoadd => {
        this.setState(oldState => ({
          items: [...oldState.items,itemtoadd],
        }));
      };
    
      deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
      };
    
      noItemsFound = () => {
        return this.state.items.length === 0;
      };

    render(){ return (
        <div>
            <Additem OnAdditem={this.addItem}  />
            <DeleteLastItem noItemsFound ={this.noItemsFound} onDeleteLastItem ={this.deleteLastItem} />
            <ListItems items={this.state.items} />
        </div>
    )}
}

export default ShoppingList