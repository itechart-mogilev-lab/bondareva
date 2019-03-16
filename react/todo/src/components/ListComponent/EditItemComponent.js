import React , {Component} from "react";

export default class EditItemComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            name: this.props.name,
            description: this.props.description
        };
    }

    changeName(event){
        this.setState({name: event.target.value})
    }

    changeDescription(event){
        this.setState({description: event.target.value})
    }

    render(){
        return(
            <form onSubmit={this.props.saveMethod}>
                <input type="text" value={this.state.name} onChange={this.changeName.bind(this)} name="name"/>
                <input type="text" value={this.state.description} onChange={this.changeDescription.bind(this)} name="description"/>
                <button type="submit">Save</button>
            </form>
        );
    }
}