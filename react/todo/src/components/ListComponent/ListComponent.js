import React , {Component} from "react";
import ItemComponent from './ItemComponent';
import AddItemComponent from './AddItemComponent';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';

const styles =  {
    btn: {
      margin: '20px 0'
    }
  };

class ListComponent extends Component{
    
    constructor(){
        super();

        this.state={
            items:[
                {name: "Item 1", description: "description 1"},
                {name: "Item 2", description: "description 3"}
            ],
            isAdd: false
        };
        this.showAddItem= this.showAddItem.bind(this);
        this.eachItem= this.eachItem.bind(this);
        this.headerRender= this.headerRender.bind(this);
    }

    eachItem(item, i){
        return (
            <ItemComponent
                key={i}
                index={i}
                name={item.name}
                description={item.description}
                deleteMethod={this.deleteItem.bind(this, i)}
            />
        );
    }

    showAddItem(){
        this.setState({isAdd: true});
    }

    addItem(event){
        const newItem = {
            name: event.target.name.value,
            description: event.target.description.value
        };
        this.setState(
            {
                items: [...this.state.items, newItem],
                isAdd:false
        });
        event.preventDefault();
    }

    deleteItem(index){
        const items =  this.state.items.filter((item, indexItem)=>{
            return indexItem!==index;
        });
        this.setState({items});
    }

    headerRender(){
        if(this.state.isAdd){
            return( 
                <AddItemComponent
                    addMethod={this.addItem.bind(this)}
                />
            );
        } else{
            return(
                <Button variant="outlined" color="primary" className={this.props.classes.btn} onClick={this.showAddItem}>
                    Add new item
                </Button>
            );
        }
    }

    render(){
        return(
            <div className="list">
                {this.headerRender()}
                {this.state.items.map(this.eachItem)}
            </div>
        );
    }
}

export default withStyles(styles)(ListComponent);
