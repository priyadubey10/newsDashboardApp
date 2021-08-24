import React from 'react';
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import * as StyledComponent from "../CommonStyledComponents";

export default function NewsCard(props) {
    let {cardData, getMediaQuery} = {...props}

    let cardTitle = cardData.title
    let cardDesc = cardData.description
    let imgUrl = cardData.urlToImage
    let author = cardData.author

    return (
        <>
            <Card className={getMediaQuery.isTabletOrMobile ? "flex-column mb-5" : "flex-row mb-5"}>
                {imgUrl &&
                    <StyledComponent.ImageWrapper src={imgUrl} isTabletOrMobile={getMediaQuery.isTabletOrMobile}/>
                }
                
                <Card.Body>
                    <StyledComponent.CardTitle onClick={() => props.onClick(props.cardData)}>{cardTitle}</StyledComponent.CardTitle>
                    <Card.Text>
                        {cardDesc}
                        <footer className="text-end">
                            <small className="text-muted">
                                By Author <cite title="Source Title">{author}</cite>
                            </small>
                        </footer>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

NewsCard.propTypes = {
    cardData: PropTypes.object,
    getMediaQuery: PropTypes.object,
}