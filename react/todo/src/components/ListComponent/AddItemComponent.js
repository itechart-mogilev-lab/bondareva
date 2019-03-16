import React , {Component} from "react";
import Button from '@material-ui/core/Button';

export default class AddtemComponent extends Component{

    render(){
        return(
            <form onSubmit={this.props.addMethod}>
                <input type="text"  name="name"/>
                <input type="text"  name="description"/>
                <Button variant="contained" color="primary" type="submit">Save</Button>
            
                <button type="submit">Save</button>
            </form>
        );
    }
}