import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import NewsCard from "../NewsCard";
import { Row, Col} from "react-bootstrap";
import * as StyledComponent from "../CommonStyledComponents";
import PropTypes from 'prop-types';
import { useState,useEffect } from "react";
import MorningImage from "../../assets/Morning.png";
import AfternoonImage from "../../assets/Afternoon.png";
import EveningImage from "../../assets/Evening.png";


export default function NewsApp(props){
    const [dayTime, setDayTime] = useState("Morning")
    const [currentDate, setCurrentDate] = useState("")
    const [currentTime, setCurrentTime] = useState("")

    const ImageMap = {
        "Morning": MorningImage,
        "Afternoon": AfternoonImage,
        "Evening": EveningImage
    };

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
        setCurrentDate(tempCurrentDate);
        setCurrentTime(`${tempCurrentHour}:${tempCurrentMin}`);
    })

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
                                        <li>Home</li>
                                    </ul>
                                </StyledComponent.CategoriesSection>
                            </StyledComponent.RightSideWrapper>
                        </Col>
                        
                        <Col md={9}>
                            <StyledComponent.RightSideWrapper>
                                <AppHeader />
                                {props.newsArticleData && props.newsArticleData.length > 0 && props.newsArticleData.map((newsArticle, index) => 
                                    <NewsCard cardData = {newsArticle} key={index}/> 
                                )}
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
}