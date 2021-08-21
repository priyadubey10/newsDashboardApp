import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import styled from 'styled-components'
import * as StyledComponent from "../CommonStyledComponents";

export default function NewsCard(props) {
    let cardTitle = props.cardData.title
    let cardDesc = props.cardData.description
    let imgUrl = props.cardData.urlToImage
    let author = props.cardData.author

    return (
        <>
            <Card className="flex-row mb-5">
                {imgUrl &&
                    <ImageWrapper src={imgUrl}/>
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

const ImageWrapper = styled(Card.Img)`
    max-height: 15rem;
    max-width: 30%;
    align-self: center;
`;

NewsCard.propTypes = {
    cardData: PropTypes.object,
}