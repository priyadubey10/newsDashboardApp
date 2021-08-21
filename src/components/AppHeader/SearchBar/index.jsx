import { FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

export default function SearchBar(props){
    return (
        <>
            {/* <Form className="mb-3 flex-column"> */}
                <FormControl
                    placeholder="Search text"
                    aria-label="Search text"
                    aria-describedby="basic-addon2"
                    name="searchInput"
                    onChange = {(e) => {props.onSearchData(e)}}
                />
                {/* <Button variant="outline-primary" id="button-addon2" type="Submit" name="searchButton">
                    Search
                </Button> */}
            {/* </Form> */}
        </>
    )
}

SearchBar.propTypes = {
    onSearchData: PropTypes.func,
}