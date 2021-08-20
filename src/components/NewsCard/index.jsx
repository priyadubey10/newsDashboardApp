import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import styled from 'styled-components'

export default function NewsCard(props) {
    let cardTitle = props.cardData.title
    let cardDesc = props.cardData.description
    let imgUrl = props.cardData.urlToImage
    let cardContent = props.cardData.content 
    let author = props.cardData.author 

    const CardBody = styled.div`
        background: #f2f5ee;
    `;
    return (
        <>
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

NewsCard.propTypes = {
    cardData: PropTypes.object,
}