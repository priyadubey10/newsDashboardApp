import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import styled from 'styled-components'
import "./ExpandedNewsCard.css";

export default function ExpandedNewsCard(props) {
    let cardTitle = props.cardData.title
    let imgUrl = props.cardData.urlToImage
    let cardContent = props.cardData.content

    return (
        <>
            <div className="news-card-back-button" onClick={props.onBackClick}>Back</div>
            {
                imgUrl &&
                <img src={imgUrl} alt="source" width="780" height="550"/>
            }
            <h1>{cardTitle}</h1>
            <p>{cardContent}</p>
        </>
    )
}