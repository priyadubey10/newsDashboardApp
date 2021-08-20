import { Row, Col} from "react-bootstrap";
import SearchBar from "./SearchBar"

export default function NewsApp(props){
    return (
        <Row>
            <Col md={8} >
                <header>
                    <h1>UK Today</h1>
                    <p>Get the latest news here</p>
                </header>
            </Col>
            <Col md={3} >
                <SearchBar />
            </Col>
        </Row>
    )
}