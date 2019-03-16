import React , {Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';

const styles =  {
    root: {
      marginTop: '20px'
    }
  };

 class AddItemComponent extends Component{

    render(){
        
        return(
            <form onSubmit={this.props.addMethod}>
                <TextField
                        label="Name"
                        name="name"
                        margin="normal"
                        variant="outlined"
                />
                <TextField
                        label="Description"
                        name="description"
                        margin="normal"
                        variant="outlined"
                />
                <Button variant="contained" size="large" className={this.props.classes.root} color="primary" type="submit">Save</Button> 
            </form>
        );
    }
}

export default withStyles(styles)(AddItemComponent);
