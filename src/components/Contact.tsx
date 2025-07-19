import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const form = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(!name);
    setEmailError(!email);
    setMessageError(!message);

    if (name && email && message) {
      const templateParams = { name, email, message };

      emailjs
        .send(
          'service_yrqdd3s',
          'template_qxbwa8o',
          templateParams,
          '1lPvTZs_sU4GAUDbj'
        )
        .then(
          () => {
            setSuccessMsg('✅ Message sent successfully!');
            setErrorMsg('');
            setName('');
            setEmail('');
            setMessage('');
          },
          () => {
            setErrorMsg('❌ Failed to send message. Please try again.');
            setSuccessMsg('');
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          {successMsg && <p className="success-message">{successMsg}</p>}
          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                fullWidth
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />

              <TextField
                fullWidth
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
              />
            </div>

            <TextField
              fullWidth
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter your message' : ''}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
              sx={{ marginTop: '10px' }}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
