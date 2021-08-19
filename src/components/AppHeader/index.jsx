import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "./SearchBar"

export default function NewsApp(props){

    // const dispatch = useDispatch()

    // useEffect(() => {

    // })

    return (
        <>
        <Container>
            <Row>
                <Col md={{span: "7", offset: "1"}} >
                    <header>
                        <h1>UK Today</h1>
                        <p>Get the latest news here</p>
                    </header>
                </Col>
                <Col md={3} >
                    <SearchBar />
                </Col>
            </Row>
            </Container>
        </>
    )
}