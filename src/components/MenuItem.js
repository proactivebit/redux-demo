import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export const MenuItem = ({
  id,
  name,
  price,
  quanity,
  total,
  onRemove,
  onUpdatePrice,
  onUpdateQuanity,
}) => {
  return (
    <Card>
      <Card border="secondary">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      aria-label="Amount (to the nearest dollar)"
                      value={price}
                      onChange={(event) => onUpdatePrice(event.target.value)}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Quanity</Form.Label>
                  <Form.Control
                    type="number"
                    value={quanity}
                    onChange={(event) => onUpdateQuanity(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>Total</Form.Label>
                <div>${total}</div>
              </Col>
            </Row>
            <Row xs="3" className="justify-content-end">
              <Button variant="outline-danger" type="submit" onClick={onRemove}>
                Remove
              </Button>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Card>
  );
};
