/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import ParkForm from './ParkForm';

function ParkingSlot({ slot }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const isAvailable = slot.available;

  const handleClick = () => {
    if (isAvailable && !show) {
      handleShow();
    }
  }

    const img = isAvailable ? "src/assets/img/park.png":"src/assets/img/car.png";


  return (
    <Card id="card" bg={"light"}  onClick={handleClick}>
      <Card.Img variant="bottom" src={img}/>
          <ParkForm show={show} handleClose={handleClose}></ParkForm>
    </Card>
  );
}

export default ParkingSlot;
