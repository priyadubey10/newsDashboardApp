import React from 'react';
import { Card, Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import styled from 'styled-components'

export default function ExpandedNewsCard(props) {
    let {cardData} = {...props}
    let cardTitle = cardData && cardData.title 
    let cardDesc = cardData && cardData.description
    let imgUrl = cardData && cardData.urlToImage
    let cardContent = cardData && cardData.content 
    let author = cardData && cardData.author 

    return (
        <>
            <Button variant="outline-primary" className="mb-4" onClick={props.onBackClick}>Back to dashboard</Button>
            <Card>
                <Card.Img src={imgUrl} />
            </Card>
            <Card className="text-end">
                <blockquote className="blockquote mb-0 card-body">
                    <p>
                        {cardDesc}
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            By Author <cite title="Source Title">{author}</cite>
                        </small>
                    </footer>
                </blockquote>
            </Card>
            <Card className="mb-5">
                <CardBody>
                    <Card.Body>
                        <Card.Title>{cardTitle}</Card.Title>
                        <Card.Text>
                            {cardContent}
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </CardBody>
            </Card>
        </>
    )
}

const CardBody = styled.div`
    background: #edd3bc;
`;

ExpandedNewsCard.propTypes = {
    cardData: PropTypes.object,
    onBackClick: PropTypes.func
}