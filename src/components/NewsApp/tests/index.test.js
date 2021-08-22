import React from "react";
import NewsApp from "../index";
import {shallow} from "enzyme"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<NewsApp />', () => {
    it('should load NewsApp with AppHeader, Spinner and AppFooter', () => {
        const NewsAppRender = shallow(
          <NewsApp/>
        );
    
        expect(NewsAppRender.find('GreetHeader').length).toEqual(1);
        expect(NewsAppRender.find('AppHeader').length).toEqual(1);
        expect(NewsAppRender.find('Spinner').length).toEqual(1);
        expect(NewsAppRender.find('AppFooter').length).toEqual(1);
    });

    it('should load NewsApp with n NewsCard components', () => {
        let newsArticleData = [
                                {content: "ABC", description: "ABC", urlToImage: "xyz", author: "abc"},
                                {content: "ABC", description: "ABC", urlToImage: "xyz", author: "abc"},
                                {content: "ABC", description: "ABC", urlToImage: "xyz", author: "abc"},
                              ]
        const NewsAppRender = shallow(
            <NewsApp newsArticleData={newsArticleData} dataFetched={true}/>
        );

        expect(NewsAppRender.find('NewsCard').length).toEqual(newsArticleData.length);
    });

    it('should load NewsApp with ExpandedNewsCard component when one article is clicked', () => {
        let newsArticleData = [
            {content: "ABC", description: "ABC", urlToImage: "xyz", author: "abc"},
            {content: "ABC", description: "ABC", urlToImage: "xyz", author: "abc"},
            {content: "ABC", description: "ABC", urlToImage: "xyz", author: "abc"},
          ]

        const NewsAppRender = shallow(
            <NewsApp newsArticleData={newsArticleData} dataFetched={true}/>
        );

        NewsAppRender.find('NewsCard').at(0).simulate('click', newsArticleData[0])
        expect(NewsAppRender.find('ExpandedNewsCard').length).toEqual(1);
    });
})