import { Container, Row, Col } from 'react-bootstrap';
import ParkingSlot from './ParkingSlot';

function ParkingGrid() {
  const slots = Array(16).fill({available: true});

  return (
    <Container id="ParkGrid">
      <Row>
        {slots.map((slot, index) => (
          <Col key={index} xs={3}>
            <ParkingSlot slot={slot} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ParkingGrid;
