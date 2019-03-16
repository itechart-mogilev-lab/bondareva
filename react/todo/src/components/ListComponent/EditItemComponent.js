import React , {Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
            <form onSubmit={this.props.saveMethod} className="form">
                <TextField
                    label="Name"
                    // className={classes.textField}
                    name="name"
                    value={this.state.name}
                    onChange={this.changeName.bind(this)}
                    margin="normal"
                />
                <TextField
                    label="Description"
                    // className={classes.textField}
                    name="description"
                    value={this.state.description}
                    onChange={this.changeDescription.bind(this)}
                    margin="normal"
                />
                <Button variant="outlined" color="primary" type="submit" size="small">Save</Button> 

            </form>
        );
    }
}