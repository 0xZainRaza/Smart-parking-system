/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';

function ParkingSlot({ slot }) {
  const isAvailable = slot.available;
  const statusColor = isAvailable ? 'success' : 'danger';


  const handleClick = () => {
    if (isAvailable) {
      console.log(true);
    }
  }

  return (
    <Card bg={statusColor} text={isAvailable ? 'dark' : 'white'}>
      <Card.Body onClick={handleClick}>{slot.name}</Card.Body>
    </Card>
  );
}

export default ParkingSlot;
