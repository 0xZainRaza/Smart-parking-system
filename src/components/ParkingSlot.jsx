/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import ParkForm from './ParkForm';
import RemoveCar from './RemoveCar';

function ParkingSlot({ index, slot, slots, setSlots}) {
  const [show, setShow] = useState(false);
  const [removeShow, setRemoveShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const isAvailable = slot.available;

  const handleRemoveClose = () => setRemoveShow(false);
  const handleRemoveShow = () => setRemoveShow(true);

  const handleClick = () => {
    if (isAvailable && !show) {
      handleShow();
    }
    if (!slot.isAvailable && !removeShow) {
      handleRemoveShow();
    }
  }

    const img = isAvailable ? "src/assets/img/park.png":"src/assets/img/file.png";

  return (
    <Card id="card" bg={"light"}  onClick={handleClick}>
      <Card.Title style={{fontSize: '16px', padding: 0}}>Slot {index + 1}</Card.Title>
        <Card.Img variant="bottom" src={img} style={{height: '12vh', width: '16vw', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
          { isAvailable? 
            <ParkForm show={show} handleClose={handleClose} index={index} slot={slot} slots={slots} setSlots={setSlots} />: 
            <RemoveCar show={removeShow} handleShow={handleRemoveShow} setShow={setRemoveShow}/> }
    </Card>
  );
}

export default ParkingSlot;
