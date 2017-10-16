import React from 'react';
import {shallow} from 'enzyme';
import setupTest from '../setupTest';
import App from './App';
import Gift from './Gift';

describe('App', () => {
  //define app
  const app = shallow(<App/>);
  const gift = shallow(<Gift />);

  //new describe for html
  describe('html (static)', () => {
    it('renders correctly', () => {
      expect(app).toMatchSnapshot();
    })
    it('starts with a state, an empty array list of gifts', () => {
      expect(app.state().gifts).toEqual([]);
    })
  })
  //ends here

  //new describe for javaScript
  describe('javascript (behavior)', () => {
    const id = 1;
    beforeEach(() => {
      app.find('.add-button').simulate('click');
    })
    afterEach(() => {
      app.setState({gifts:[]})
    })
    it('add a new gift when click a button, add-gift', () => {
      expect(app.state().gifts).toEqual([{id}])
    })
    it('add a new gift to the rendered list when Clicking the add gift', () => {
      expect(app.find('.gift-list').children()).toHaveLength(1);
    })
    it('create a  Gift component correctly', () => {
      expect(gift.exists()).toBe(true);
    })

    //remove a gift
    describe('User wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeClick(id);
      })
      it('removees the gift from state', () => {
        expect(app.state().gifts).toEqual([]);
      })
    })
    //ends here

  })
  //ends here

})
