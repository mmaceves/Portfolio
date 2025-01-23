import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import { useState } from 'react';


function Contact() {
   
        const [errors, setErrors] = useState({});
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
            // Clear error when user starts typing
            if(errors[name]) {
                setErrors({
                    ...errors,
                    [name]: ''
                });
            }
        };
    
        const validateForm = () => {
            const newErrors = {};
            if (!formData.name.trim()) {
                newErrors.name = 'Name is required';
            }
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            }
            if (!formData.message.trim()) {
                newErrors.message = 'Message is required';
            }
            return newErrors;
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const formErrors = validateForm();
            if (Object.keys(formErrors).length > 0) {
                setErrors(formErrors);
                return;
            }
            alert('Form submitted successfully!');
        };

    return (
        <div>
            <Header />
            <section className="full-dev">
            <h2>Full Stack Developer!</h2>
        </section>
        <div className="page-section">
        <h2>Contact Me</h2>
           
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Jon Doe" id="name" name="name" value={formData.name} onChange={handleChange} required />

                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Example@email.com" id="email" name="email" value={formData.email} onChange={handleChange} required />

                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Your message" id="message" name="message" value={formData.message} onChange={handleChange} required />
                    
                    <Button variant="secondary" type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </div>
    </div>
    <Footer />
    </div>
    );
}

export default Contact;
