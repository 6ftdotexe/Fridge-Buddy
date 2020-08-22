import React, { Component } from "react";
import '../styles/mainStyles.css'
class GroceryList extends Component {
    constructor(props) {
        super(props);
        // Setting the component's initial state
        this.state = {
            groceryItems: [],
            currentItem: ""
        };
    }

    handleInputChange = event => {
        this.setState({
            currentItem: event.target.value
        });

    }
    addItem = () => {
        this.setState(state => {
            const groceryItems = state.groceryItems.concat(state.currentItem);
            return {
                groceryItems,
                currentItem: '',
            };
        })
    }
    removeItem = (index) => {

        let newList = [...this.state.groceryItems];
        newList.splice(index, 1)
        console.log(newList);
        console.log(index);
        this.setState({
            groceryItems: newList
        })

    }
    handleFormSubmit = () => {
        this.addItem();
    }

    render() {

        return (



            <div>
                <h3 className="heading">Grocery List</h3>
                <div className="groceryList" >
                    {this.state.groceryItems.map((item, index) => (
                        <li key={item}  >
                            <input type="checkbox" />{item}

                            <button onClick={() => this.removeItem(index)}>X</button>
                        </li>
                    )
                    )}
                    <input
                        value={this.state.currentItem}
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Add to list"
                    />

                    <button onClick={this.handleFormSubmit}>Add</button>
                </div>
            </div >


        );
    }
}



export default GroceryList;
