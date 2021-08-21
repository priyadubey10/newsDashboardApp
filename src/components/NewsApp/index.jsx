import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import NewsCard from "../NewsCard";
import { Row, Col, Spinner} from "react-bootstrap";
import * as StyledComponent from "../CommonStyledComponents";
import PropTypes from 'prop-types';
import { useState,useEffect } from "react";
import MorningImage from "../../assets/Morning.png";
import AfternoonImage from "../../assets/Afternoon.png";
import EveningImage from "../../assets/Evening.png";
import ExpandedNewsCard from "../ExpandedNewsCard/NewsCard";

export default function NewsApp(props){
    const [dayTime, setDayTime] = useState("Morning")
    const [currentDate, setCurrentDate] = useState("")
    const [currentTime, setCurrentTime] = useState("")
    const [currentNewsCard, setCurrentNewsCard] = useState({cardSelected: false, cardData: null})
    const [filteredNewsData, setFilteredNewsData] = useState(props.newsArticleData)

    const ImageMap = {
        "Morning": MorningImage,
        "Afternoon": AfternoonImage,
        "Evening": EveningImage
    };

    useEffect(() => {
        if(props.newsArticleData && props.newsArticleData.length > 0 ){
            setFilteredNewsData(props.newsArticleData)
        }
    }, [props.newsArticleData])

    useEffect(() => {
        let currentHour = new Date().getHours();

        if(currentHour < 12){
            setDayTime("Morning")
        }
        else if(currentHour >= 12 && currentHour < 16){
            setDayTime("Afternoon")
        }
        else if(currentHour >= 16){
            setDayTime("Evening")
        }
        let currentDateTimeObject = new Date();
        let tempCurrentDate = currentDateTimeObject.toDateString();
        let tempCurrentHour = currentDateTimeObject.getHours();
        let tempCurrentMin = currentDateTimeObject.getMinutes();
        tempCurrentHour = String(tempCurrentHour).padStart(2, "0");
        tempCurrentMin = String(tempCurrentMin).padStart(2, "0");
        setCurrentDate(tempCurrentDate);
        setCurrentTime(`${tempCurrentHour}:${tempCurrentMin}`);
    })

    const handleCardClick = (newsArticle) => {
        setCurrentNewsCard({cardSelected : true, cardData: newsArticle})
    }

    const handleCardBackClick = () => {
        setCurrentNewsCard({cardSelected : false, cardData: null})
    }

    const handleSearchBarClick = (e) => {
        e.preventDefault();
        if(e.target.value && e.target.value.length > 0){
            let enteredValue = e.target.value.toLowerCase()
            let tempData = props.newsArticleData.filter(article => {
                return article.content.toLowerCase().includes(enteredValue) || 
                            article.description.toLowerCase().includes(enteredValue) || 
                                article.title.toLowerCase().includes(enteredValue) || 
                                    article.author.toLowerCase().includes(enteredValue)
            })
            setFilteredNewsData(tempData)
        }else{
            setFilteredNewsData(props.newsArticleData)
        }
    }

    return (
        <>
            <StyledComponent.Wrapper>
                <StyledComponent.MainContent>
                    <Row>
                        <Col md={3}>
                            <StyledComponent.RightSideWrapper inputColor="#f3f7fa">
                                <header className="mb-5">
                                    <StyledComponent.GreetHeader>Good {dayTime} <img src={ImageMap[dayTime]} alt="Greeting" width="50" height="50"/></StyledComponent.GreetHeader>
                                    <StyledComponent.DateTimeHeader>{`${currentDate} ${currentTime}`}</StyledComponent.DateTimeHeader>
                                </header>
                                <StyledComponent.CategoriesSection>
                                    <ul>
                                        <StyledComponent.ListStyle>Home</StyledComponent.ListStyle>
                                        <StyledComponent.ListStyle>International</StyledComponent.ListStyle>
                                        <StyledComponent.ListStyle>Entertainment</StyledComponent.ListStyle>
                                        <StyledComponent.ListStyle>Sports</StyledComponent.ListStyle>
                                        <StyledComponent.ListStyle>Health</StyledComponent.ListStyle>
                                    </ul>
                                </StyledComponent.CategoriesSection>
                            </StyledComponent.RightSideWrapper>
                        </Col>
                        
                        <Col md={9}>
                            <StyledComponent.RightSideWrapper>
                                <AppHeader onSearchData={handleSearchBarClick} showSearchBar = {!currentNewsCard.cardSelected}/>
                                {
                                    !props.dataFetched && !currentNewsCard.cardSelected &&
                                    <div className="text-center">
                                        <Spinner animation="border" variant="primary" />
                                    </div>
                                }
                                {props.dataFetched && !currentNewsCard.cardSelected && filteredNewsData && filteredNewsData.length > 0 && filteredNewsData.map((newsArticle, index) => 
                                    <NewsCard cardData = {newsArticle} key={index} onClick={handleCardClick}/> 
                                )}
                                {
                                    currentNewsCard.cardSelected &&
                                    <ExpandedNewsCard cardData={currentNewsCard.cardData} onBackClick={handleCardBackClick}/>
                                }
                                <AppFooter />
                            </StyledComponent.RightSideWrapper>
                        </Col>
                    </Row>
                </StyledComponent.MainContent>
            </StyledComponent.Wrapper>
        </>
    )
}

NewsApp.propTypes = {
    newsArticleData: PropTypes.array,
    dataFetched: PropTypes.bool,
}