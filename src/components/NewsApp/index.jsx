import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import NewsCard from "../NewsCard";
import { Row, Col, CardColumns } from "react-bootstrap";
import * as StyledComponent from "../CommonStyledComponents";
import PropTypes from 'prop-types';

export default function NewsApp(props){
    console.log("prop data", props.newsArticleData)
    return (
        <>
            <StyledComponent.Wrapper>
                <StyledComponent.MainContent>
                    <Row>
                        <Col md={3}>
                            <StyledComponent.UserInfoHeader>Priya Dubey</StyledComponent.UserInfoHeader>
                            {/* <h2>{Date.now.toString()}</h2> */}
                            <StyledComponent.CategoriesSection>
                                <ul>
                                    <li>Home</li>
                                </ul>
                            </StyledComponent.CategoriesSection>
                        </Col>
                        <Col md={9}>
                            <AppHeader />
                                <CardColumns >
                                    {props.newsArticleData && props.newsArticleData.length > 0 && props.newsArticleData.map((newsArticle, index) => 
                                        <NewsCard cardData = {newsArticle} key={index}/>
                                    )}
                                </CardColumns>
                            <AppFooter />
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