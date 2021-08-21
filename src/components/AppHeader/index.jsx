import { Row, Col} from "react-bootstrap";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

export default function AppHeader(props){
    return (
        <Row>
            <Col md={props.showSearchBar? 9 : 12} >
                <header>
                    <h1>UK Today</h1>
                    <p>Get the latest news here</p>
                </header>
            </Col>
            {props.showSearchBar &&
                <Col md={3} >
                    <SearchBar onSearchData={props.onSearchData} />
                </Col>
            }
        </Row>
    )
}

AppHeader.propTypes = {
    onSearchData: PropTypes.func,
    showSearchBar: PropTypes.bool,
}