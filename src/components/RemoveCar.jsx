/* eslint-disable react/prop-types */

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const RemoveCar = ({show, handleShow, setShow}) => {
    
  const [modalFormData, setModalFormData] = useState({verificationCode: ''});
  const [confirmShow, setConfirmShow] = useState(false);
  const handleModalVerification = () => {
    setShow(false);
    setConfirmShow(true);
    setTimeout(() => {
      setConfirmShow(false)
    }, 5000);
  }
  const handleModalInputChange = (e) => {
    const { id, value } = e.target;
    setModalFormData(() => ({
      verificationCode: value,
    }));
  }
  if (confirmShow) {
    return (
      <Modal
        show={confirmShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.07.02l-3.99 4.99L5.04 7.34a.75.75 0 1 0-1.08 1.32l2.7 2.5a.75.75 0 0 0 1.05.02l4.5-5.5a.75.75 0 0 0-.02-1.05z"/>
            </svg>
            <p style={{ marginLeft: '10px' }}>Your booking has been removed!</p>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
    return (
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Remove Booking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your Slot is being removed. The verfication code has been send via email.
          </p>
          <Form>
          <Form.Label>Verification</Form.Label>
            <Form.Group as={Col} controlId="veriCode">
              <Form.Control
                type="text"
                placeholder="Verification Code"
                onChange={handleModalInputChange}
                value={modalFormData.verificationCode}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
            <Button variant="primary" onClick={handleModalVerification}>
              Send
            </Button>
      </Modal>
    )
}

export default RemoveCar