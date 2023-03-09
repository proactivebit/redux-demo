import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersFromApi } from "../redux-toolkit/charactersSlice";
import { selectCharacters } from "../redux-toolkit/selectors";

export const StarWarsCharacters = () => {
  const { data, loading } = useSelector(selectCharacters);
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchCharactersFromApi(searchTerm));
    setSearchTerm("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Form.Group>
        <Button className="mt-2 mb-3" variant="primary" type="submit">
          Search
        </Button>
        {loading && <Alert variant="info">Loading</Alert>}
        {data.map((item) => (
          <Alert key={item.id} variant="primary">
            {item.name}
          </Alert>
        ))}
      </Form>
    </div>
  );
};
