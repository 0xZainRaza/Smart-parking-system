/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import ParkForm from './ParkForm';

function ParkingSlot({ index, slot, slots, setSlots}) {
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
      <Card.Title style={{fontSize: '16px'}}>Slot {index + 1}</Card.Title>
      <Card.Img variant="bottom" src={img}/>
          <ParkForm show={show} handleClose={handleClose} index={index} slot={slot} slots={slots} setSlots={setSlots}></ParkForm>
    </Card>
  );
}

export default ParkingSlot;
