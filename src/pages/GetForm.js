import React, { useState } from "react";
import axios from "axios"; // Import Axios for API requests
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GetForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    supplement: "",
    bottle: "",
    phone: "",
    address: "",
    request: "",
  });
  const apiUrl = process.env.REACT_APP_API_URL;

  const { fullname, email, supplement, bottle, phone, address, request } =
    formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/contact-forms`, formData);
      alert(response.data.message); // Show success message or handle the response
    } catch (error) {
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <Footer />
    </>
  );
};

export default GetForm;
