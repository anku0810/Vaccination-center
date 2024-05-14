import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import './SlotReg.css'; 
import Navbar from './Navbar';

const generateBookingId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8;
  let bookingId = '';
  for (let i = 0; i < length; i++) {
    bookingId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return bookingId;
};

const SlotReg = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    bloodGroup: '',
    age: '',
    dob: '',
    state:'',
  });
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

  const generatedBookingId = generateBookingId();
    setBookingId(generatedBookingId);


    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      bloodGroup: formData.bloodGroup,
      age: formData.age,
      dob: formData.dob,
      bookingId: generatedBookingId,
      BookingStatus: "Confirmed",
      State: formData.state,
    };

    emailjs.send('service_xb7epcb', 'template_nlhvu8d', templateParams, '8AfzJFo4CSeLRo8Nh')
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
        setBookingStatus('Confirmed');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <Navbar /> 
      <div className="vaccination-container">
        <br />
        <h1 className='fancy3'>PATIENT DETAILS</h1>
        {isFormSubmitted ? (
          <div className="confirmation-message">
            <p>Congratulations! Your vaccination slot has been booked!</p>
            <p>Your booking ID: {bookingId}</p>
            <p>Booking Status: {bookingStatus}</p>
            <p>Check your inbox for all the details.</p>
          </div>
        ) : (
          <form className="booking-form2" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />

            <label htmlFor="bloodGroup">Blood Group:</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <label htmlFor="dob">Date of Birth:</label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <label>
  State
  <select
    name="state"
    value={formData.state}
    onChange={handleChange}
    className="input-field"
    required
  >
    <option value="">Select State</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
    <option value="Daman and Diu">Daman and Diu</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Delhi">Delhi</option>
    <option value="Puducherry">Puducherry</option>
  </select>
</label>
          
            <button type="submit" onClick={handleSubmit}>Book Slot</button>
          </form>
        )}
      </div>
    </>
  );
}

export default SlotReg;
