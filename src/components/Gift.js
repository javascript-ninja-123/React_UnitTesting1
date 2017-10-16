import React,{Component} from 'react';
import { Input ,Form, Icon } from 'semantic-ui-react'

class GIFT extends Component {
    constructor(props){
    	super(props);
    	this.state = {person:'',present:''};
    }
    onChangePerson(e){
      this.setState({person:e.target.value})
    }
    onChangePresent(e){
      this.setState({present:e.target.value})
    }
    render() {
        return (
            <div className="GIFT">
              <Form>
                 <Form.Field>
                  <label>Person</label>
                  <Input
                  placeholder='person'
                  type='text'
                  value={this.state.person}
                  className='person-input'
                  onChange={this.onChangePerson.bind(this)}
                   />
                 </Form.Field>
                 <Form.Field>
                   <label>Present</label>
                    <Input
                    placeholder='present'
                    type='text'
                    className='present-input'
                    value={this.state.present}
                    onChange={this.onChangePresent.bind(this)}
                     />
                 </Form.Field>
                 <Icon
                 name='remove'
                 className='remove-btn'
                 onClick={() => this.props.removeClick(this.props.value.id)}
                 />
              </Form>
            </div>
        );
    }
}

export default GIFT
