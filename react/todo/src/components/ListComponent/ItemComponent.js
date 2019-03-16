import React , {Component} from "react";
import EditItemComponent from './EditItemComponent';

export default class ItemComponent extends Component{
    
    constructor(props){
        super(props);

        this.state={
            isEdit: false,
            name: this.props.name,
            description: this.props.description
        };
        this.showEditFields=this.showEditFields.bind(this);
        this.saveItem=this.saveItem.bind(this);
    }

    showEditFields(){
        this.setState({isEdit: true});
    }
    
    saveItem(event){
        this.setState({
            isEdit: false,
            name: event.target.name.value,
            description: event.target.description.value
        });
        event.preventDefault();
    }

    render(){
        
        if(this.state.isEdit){
            return(
                <EditItemComponent
                    name={this.state.name}
                    description={this.state.description}
                    saveMethod={this.saveItem}
                />
            );
        } else {
            return(
                <React.Fragment>
                    <p>Name: {this.state.name}</p>
                    <p>Description: {this.state.description}</p>
                    <button onClick={this.showEditFields}>Change item</button>
                    <button onClick={this.props.deleteMethod}>Delete item</button>
                </React.Fragment>
            );
        }
        
    }
}