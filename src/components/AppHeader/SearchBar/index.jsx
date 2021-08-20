import { InputGroup ,FormControl, Button} from "react-bootstrap";

export default function SearchBar(props){
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search text"
                    aria-label="Search text"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-primary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </>
    )
}