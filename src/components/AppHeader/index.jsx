import React from 'react';
import { Row, Col} from "react-bootstrap";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

export default function AppHeader(props){
    const {isMobile, isTabletOrMobile} = {...props.getMediaQuery}
    return (
        <Row>
            <Col md={props.showSearchBar? isTabletOrMobile ? 8 : 9 : 12} >
                <header>
                    <h1>UK Today</h1>
                    <p>Get the latest news here</p>
                </header>
            </Col>
            {props.showSearchBar &&
                <Col md={isTabletOrMobile ? 4 : 3} className={isMobile && "mb-4"}>
                    <SearchBar onSearchData={props.onSearchData} />
                </Col>
            }
        </Row>
    )
}

AppHeader.propTypes = {
    onSearchData: PropTypes.func,
    showSearchBar: PropTypes.bool,
    getMediaQuery: PropTypes.object,
}