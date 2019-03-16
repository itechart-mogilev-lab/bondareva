import React , {Component} from "react";
import EditItemComponent from './EditItemComponent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
                <Card className="card">
                    <EditItemComponent
                        name={this.state.name}
                        description={this.state.description}
                        saveMethod={this.saveItem}
                    />
                </Card>
            );
        } else {
            return(
                <Card className="card">
                     <CardContent>
                        <Typography gutterBottom variant="h6">
                            Name: {this.state.name}
                        </Typography>
                        <Typography component="p">
                            Description: {this.state.description}
                        </Typography>
                     </CardContent>
                    
                    
                    <CardActions>
                        <Button  variant="contained" color="primary" onClick={this.showEditFields}>Change item</Button> 
                        <Button variant="outlined" color="secondary" onClick={this.props.deleteMethod}>Delete item</Button> 
                    </CardActions>
                </Card>
            );
        }
        
    }
}