import './signin.css';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Signin() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
//sign up
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username.length < 4) {
            alert('Username must be at least 4 characters long.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isValidPassword(password)) {
            alert('Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.');
            return;
        }

        console.log('Form submitted:', { username, email, password });
        setShowSuccessModal(true);

        setUsername('');
        setEmail('');
        setPassword('');
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return passwordRegex.test(password);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
    };

// login
    const handleSubmits = (event) => {
        event.preventDefault();
        if (!isValidEmails(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isValidPasswords(password)) {
            alert('Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.');
            return;
        }

        console.log('Form submitted:', { username, email, password });
        setShowSuccessModal(true);

        setEmail('');
        setPassword('');
    };

    const isValidEmails = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPasswords = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return passwordRegex.test(password);
    };

    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="chk" aria-hidden="true" style={{ color: 'black' }} className='label'>Sign up</label>
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="User name"
                        required
                    />
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type='submit' className='button'>Sign up</button>
                </form>
            </div>

            <div className="login">
                <form onSubmit={handleSubmits}>
                    <label htmlFor="chk" aria-hidden="true" className='label'>Login</label>
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type='submit' className='button'>Login</button>
                </form>
            </div>

            <Modal show={showSuccessModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title> Success </Modal.Title>
                </Modal.Header>
                <Modal.Body>You are signed successfully!</Modal.Body>
                <Modal.Footer>
                    <Link variant="secondary" onClick={handleCloseModal} to={"/home"}>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Go To Product
                    </Button>                       
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Signin;
