/* eslint-disable react/prop-types */
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

function ParkForm({show, handleClose, index, slot, slots, setSlots}) {
  const [modalShow, setModalShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [modalFormData, setModalFormData] = useState({verificationCode: ''});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    licensePlate: '',
    state: '',
    date: '',
    time: '',
    make: '',
    model: '',
  });

  const handleModalVerification = () => {
    setModalShow(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          firstName: '',
          lastNamfe: '',
          phone: '',
          email: '',
          licensePlate: '',
          state: '',
          date: '',
          time: '',
          make: '',
          model: '',
        })
        handleClose();
        setModalShow(true);
        setSlots((slots) =>
        slots.map((element, i) => {
          if (i == index) {
            return {available: false};
          }
        return element;
      })
      );
        // Add any additional logic after successful form submission
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

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
            <p style={{ marginLeft: '10px' }}>Your booking has been confirmed!</p>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
  if (modalShow) {
    return (
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Booked!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your Slot has been booked. The verfication code has been send via email.
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
    );
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title >Parking Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <h1 style={{'fontSize': '25px'}}>Parking Application Form</h1>
        <Row className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Group as={Col} controlId="firstName">
            <Form.Control
              type="text"
              placeholder="First"
              onChange={handleInputChange}
              value={formData.firstName}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="lastName">
            <Form.Control
              type="text"
              placeholder="Last"
              onChange={handleInputChange}
              value={formData.lastName}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Phone Number"
            onChange={handleInputChange}
            value={formData.phone}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            onChange={handleInputChange}
            value={formData.email}
          />
        </Form.Group>
        <h2 style={{'fontSize': '25px'}}>Vehicle Information</h2>
        <Form.Group className="mb-3" controlId="licensePlate">
          <Form.Label>License Plate No.</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={handleInputChange}
            value={formData.licensePlate}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={handleInputChange}
            value={formData.state}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder=""
            onChange={handleInputChange}
            value={formData.date}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="year">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            placeholder=""
            onChange={handleInputChange}
            value={formData.time}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="make">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={handleInputChange}
            value={formData.make}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={handleInputChange}
            value={formData.model}
          />
        </Form.Group>
      </Form>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ParkForm;
