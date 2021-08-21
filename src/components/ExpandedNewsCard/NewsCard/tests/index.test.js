import React from "react";
import ExpandedNewsCard from "../index";
import {shallow} from "enzyme"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ExpandedNewsCard />', () => {
    it('should load ExpandedNewsCard', () => {
        const ExpandedNewsCardRender = shallow(
          <ExpandedNewsCard />
        );
    
        expect(ExpandedNewsCardRender.find('p').length).toEqual(1);
      });
})