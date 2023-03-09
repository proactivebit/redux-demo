import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export const NewItemForm = ({ onSubmit }) => {
  const [inputs, setInputs] = React.useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs.name, inputs.price);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Label>Price</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          name="price"
          type="number"
          aria-label="Amount (to the nearest dollar)"
          value={inputs.price || ""}
          onChange={handleChange}
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};
