import React, { useState } from 'react';
import { Card, Button, Modal, Form, Image } from 'react-bootstrap';
import ParkForm from './ParkForm';

function ParkingSlot({ index, slot, slots, setSlots }) {
  const [show, setShow] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isAvailable = slot.available;

  const handleClick = () => {
    if (isAvailable && !show) {
      handleShow();
    }
  };

  const handleLockButtonClick = (e) => {
    e.stopPropagation(); // Prevent card click event propagation
    setShowVerificationModal(true);
  };

  const img = isAvailable ? "src/assets/img/park.png" : "src/assets/img/file.png";

  const handleVerificationSubmit = () => {
    // Perform verification logic here
    // For demonstration purposes, let's simulate a successful authentication after 2 seconds
    setTimeout(() => {
      setShowVerificationModal(false);
      setShowSuccessModal(true);
    }, 2000);
  };

  return (
    <Card id="card" bg={"light"} onClick={handleClick}>
      <Card.Title style={{ fontSize: '16px', padding: 0 }}>Slot {index + 1}</Card.Title>
      <div style={{ position: 'relative' }}>
        <Card.Img variant="bottom" src={img} style={{ height: '12vh', width: '16vw', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        {!isAvailable && (
          <Button
            variant="light"
            style={{ position: 'absolute', bottom: -18, right: -10, padding: '4px 8px', fontSize: '12px', color: 'white' }}
            onClick={handleLockButtonClick}
          >
            <img src="src/assets/img/Lockhehe.png" alt="Button Image" style={{ width: '25px', height: '15px' }} />
          </Button>
        )}
      </div>
      <ParkForm show={show} handleClose={handleClose} index={index} slot={slot} slots={slots} setSlots={setSlots} />
      
      {/* Verification Code Modal */}
      <Modal show={showVerificationModal} onHide={() => setShowVerificationModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Verification Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter the verification code to authenticate from Blockchain:</p>
          <Form.Control type="text" placeholder="Verification Code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowVerificationModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleVerificationSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Authentication Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src="src/assets/img/green-tick.png" alt="Tick Icon" style={{ width: '100px', height: '100px' }} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default ParkingSlot;
