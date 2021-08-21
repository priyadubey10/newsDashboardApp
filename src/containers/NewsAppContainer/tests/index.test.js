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
import * as redux from "react-redux";

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
    
  it('should render NewsAppContainer', () => {
    const tree = shallow(
      <redux.Provider store={store}>
        <NewsAppContainer />
      </redux.Provider>
    ).dive();
    expect(tree.find(NewsApp).length).toBeDefined()
  });
  it('Should call the fetchNewsDataRequest action', () => {
    let mockDispatch = jest.fn();
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(mockDispatch);
    store.dispatch(fetchNewsDataRequest());
    let expectedAction = fetchNewsDataRequest();
    const spyLastCall = mockDispatch.mock.calls[0][0]
    // expect(store.dispatch.type).toHaveBeenCalledWith(fetchNewsDataRequest().type);
    expect(spyLastCall.type).toHaveBeenCalledWith(expectedAction.type);
    });
});
