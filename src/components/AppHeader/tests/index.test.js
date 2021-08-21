import React from "react";
import AppHeader from "../index";
import {shallow} from "enzyme"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<AppHeader />', () => {
    it('should load AppHeader with SearchBar', () => {
        const AppHeaderRender = shallow(
          <AppHeader showSearchBar={true}/>
        ).dive();
    
        expect(AppHeaderRender.find('SearchBar').length).toEqual(1);
      });

      it('should load AppHeader without SearchBar', () => {
        const AppHeaderRender = shallow(
          <AppHeader showSearchBar={false}/>
        ).dive();
    
        expect(AppHeaderRender.find('SearchBar').length).toEqual(0);
      });
})