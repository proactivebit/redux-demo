import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const Summary = ({
  tipPercentage,
  subtotal,
  tipAmount,
  total,
  updateTipPercentage,
}) => {
  return (
    <div>
      <div>
        <Row className="mb-2">
          <Form.Group>
            <Form.Label>How much do you want to tip?</Form.Label>
            <Form.Select
              value={tipPercentage}
              onChange={(event) => updateTipPercentage(event.target.value)}
            >
              <option value={10}>10%</option>
              <option value={20}>20%</option>
              <option value={30}>30%</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <strong>Subtotal</strong>
          </Col>
          <Col>${subtotal}</Col>
        </Row>
        <Row>
          <Col>
            <strong>TipAmpunt</strong>
          </Col>
          <Col>${tipAmount}</Col>
        </Row>
        <Row>
          <Col>
            <strong>Total</strong>
          </Col>
          <Col>${total}</Col>
        </Row>
      </div>
    </div>
  );
};
