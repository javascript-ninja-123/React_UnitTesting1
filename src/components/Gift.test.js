import React from 'react';
import {shallow} from 'enzyme';
import setupTest from '../setupTest';
import Gift from './Gift';

//Gift description
describe('Gift', () => {
  //define gift
  const mockRemove = jest.fn();
  const value = {id:1};
  const props = {value, removeClick:mockRemove}
  const gift = shallow(<Gift {...props}/>);

  //HTML description
  describe('HTML (static)', () => {
    it('renders it correctly', () => {
      expect(gift).toMatchSnapshot();
      expect(gift.exists()).toBe(true);
    })
    it('initiate a state with a person and a present', () => {
      expect(gift.state()).toEqual({person:'',present:''})
    })
  })
  //ends here

  //Javasript description
  describe('Javascript (behavior)', () => {
    //person input
    describe('when typing into person input', () => {
      const uncle = 'Uncle';
      beforeEach(() => {
        gift.find('.person-input').simulate('change',{target:{value:uncle}})
      })
      it('update the person in state', () => {
        expect(gift.state().person).toEqual(uncle)
      })
    })
  })
    //ends here

    //present input
    describe('when typing into present input', () => {
        const robot = 'robot';
      beforeEach(() => {
          gift.find('.present-input').simulate('change',{target:{value:robot}})
      })
      it('update the person in state', () => {
        expect(gift.state().present).toEqual(robot)
      })
    })
    //ends here

    //remove a gift Button
    describe('when clicking the Remove button', () => {
      beforeEach(() => {
        gift.find('.remove-btn').simulate('click')
      })
      it('calls the removeGift callback', () => {
        expect(mockRemove).toHaveBeenCalledWith(value.id)
      })
    })
    //ends here
})
//ends here
