import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ParkingSlot from './ParkingSlot';

function ParkingGrid() {
  const [slots, setSlots] = useState(Array(16).fill({available: true}));

  return (
    <Container id="ParkGrid">
      <Row>
        {slots.map((slot, index) => (
          <Col key={index} xs={3}>
            <ParkingSlot index={index} slot={slot} slots={slots} setSlots={setSlots}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ParkingGrid;
