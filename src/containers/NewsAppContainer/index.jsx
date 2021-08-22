/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import NewsApp from "../../components/NewsApp";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsDataRequest } from "./actions";

export default function NewsAppContainer(props){
    const [newsArticleData, setNewsArticleData] = useState([])
    const dispatch = useDispatch()
    const newsData = useSelector(state => state.newsData)

    useEffect(() => {
        dispatch(fetchNewsDataRequest())
    }, [])

    useEffect(() => {
        if(newsData.newsDataFetched){
            const fetchedData = newsData.responseNewsData
            setNewsArticleData(fetchedData)
        }
    }, [newsData.newsDataFetched])

    return <NewsApp newsArticleData={newsArticleData} dataFetched={newsData.newsDataFetched}/>
}