import React,{Component} from 'react';
//import from Semantic Ui -- front end UI
import { Button } from 'semantic-ui-react';
import Gift from './Gift';

class APP extends Component {
    constructor(props){
    	super(props);
    	this.state = {gifts:[]};
    }
    onClick(){
      let gifts = [...this.state.gifts];
      const id = gifts.map(value => value.id)
      const Max_id =id.length > 0 ? Math.max(...id) : 0;
      gifts.push({id:Max_id + 1});
      this.setState({gifts})
    }
    removeClick(id){
      const copyGift = [...this.state.gifts];
      let filteredGift = copyGift.filter(value => value.id !== id);
      this.setState({gifts:filteredGift})
    }
    renderDom(){
      return  this.state.gifts.map((value,index) => {
        return (
          <Gift key={index} removeClick={this.removeClick.bind(this)} value={value}/>
        )
      })
    }
    render() {
        return (
            <div className="APP">
                  <h2>Gift Giver</h2>
                  <div className='gift-list'>
                    {this.renderDom()}
                  </div>
                  <Button
                  className='add-button'
                  onClick={this.onClick.bind(this)}
                  >
                   Add
                 </Button>
            </div>
        );
    }
}

export default APP
