import { Form ,FormControl, Button} from "react-bootstrap";

export default function SearchBar(props){
    return (
        <>
            <Form className="d-flex pt-2">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </>
    )
}