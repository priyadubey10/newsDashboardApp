import React from 'react';
import { shallow} from "enzyme";
import { createStore } from 'redux';
import createReducer from '../../../rootReducer';
// import { Provider, useDispatch } from 'react-redux';
import NewsApp from '../../../components/NewsApp';
import { fetchNewsDataRequest } from '../actions';
import NewsAppContainer from '../index';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider, useDispatch, useSelector}from "react-redux";
import * as constants from "../constants";

configure({ adapter: new Adapter() });

describe('NewsAppContainer', () => {
    let store;
    beforeAll(() => {
        store = createStore(createReducer());
        let mockDispatch = jest.fn()
        jest.mock('react-redux', () => ({
            useSelector: jest.fn(),
            useDispatch: () => mockDispatch
        }));
    })
    afterEach(() => {
      jest.restoreAllMocks();
    });
    
  it('should render NewsAppContainer', () => {
    const tree = shallow(
      <Provider store={store}>
        <NewsAppContainer />
      </Provider>
    ).dive();
    expect(tree.find(NewsApp).length).toBeDefined()
  });
  it('Should call the fetchNewsDataRequest action', () => {
    let result = {}
     let dispatch = jest.fn((action) => {
       result = action
     })
     dispatch(fetchNewsDataRequest())
     expect(result).toEqual({type: constants.FETCH_NEWS_DATA_REQUEST})
     expect(dispatch).toHaveBeenCalledTimes(1)
  });
});
