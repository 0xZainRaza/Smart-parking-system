import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ParkForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastNamfe: '',
    phone: '',
    email: '',
    licensePlate: '',
    state: '',
    year: '',
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

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1>Parking Application Form</h1>
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
        <h2>Vehicle Information</h2>
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
        <Form.Group className="mb-3" controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={handleInputChange}
            value={formData.year}
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
        <Button variant="primary" type="submit" style={{ display: 'block', margin: '0 auto' }}>
          Send
        </Button>
      </Form>
    </div>
  );
}

export default ParkForm;
