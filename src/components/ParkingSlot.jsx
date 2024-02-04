/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import ParkForm from './ParkForm';

function ParkingSlot({ slot }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const isAvailable = slot.available;
  const statusColor = isAvailable ? 'success' : 'danger';

  const handleClick = () => {
    if (isAvailable && !show) {
      handleShow();
    }
  }

  return (
    <Card id="card" bg={statusColor} text={isAvailable ? 'dark' : 'white'}>
      <Card.Body onClick={handleClick}>
          <ParkForm show={show} handleClose={handleClose}></ParkForm>
      </Card.Body>
    </Card>
  );
}

export default ParkingSlot;
