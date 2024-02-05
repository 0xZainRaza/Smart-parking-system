import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ParkingSlot from './ParkingSlot';

function ParkingGrid() {
  const [slots, setSlots] = useState(Array(16).fill({available: true}));

  return (
    <Container id="ParkGrid">
      <Row>
        {slots.map((slot, index) => (
          <Col key={index} index={index} slot={slot} slots={slots} setSlots={setSlots} xs={3}>
            <ParkingSlot slot={slot} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ParkingGrid;
