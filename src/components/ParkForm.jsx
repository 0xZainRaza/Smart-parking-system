/* eslint-disable react/prop-types */
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function Popup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Booked!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Your Slot has been booked. The verfication code has been send via email.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ParkForm({show, handleClose, index, slot, slots, setSlots}) {
  const [modalShow, setModalShow] = React.useState(false);
  const [formData, setFormData] = useState({
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
  });

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
        handleClose()
        setModalShow(true);
        setTimeout(() => {
          setModalShow(false)
        }, 5000)
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
    console.log(id, value)
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div>
      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
