import React from "react";
import NewsCard from "../index";
import {shallow} from "enzyme"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<NewsCard />', () => {
    it('should render NewsCard', () => {
        const NewsCardRenderer = shallow(
          <NewsCard cardData={{title : "x"}}/>
        )
    
        expect(NewsCardRenderer.find('ImageWrapper').length).toEqual(0);
      });
})