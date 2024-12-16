import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for API requests
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GetForm = () => {
  const [formData, setFormData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/divine/contact-form`);
        setFormData(response.data); // Assuming the response returns an array of form data
      } catch (error) {
        console.error("Failed to fetch form data", error);
      }
    };

    fetchFormData();
  }, []);

  return (
    <>
      <div className="container">
        <h2>Submitted Forms</h2>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Supplement</th>
              <th>Bottle</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Request</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((form, index) => (
              <tr key={index}>
                <td>{form.fullname}</td>
                <td>{form.email}</td>
                <td>{form.supplement}</td>
                <td>{form.bottle}</td>
                <td>{form.phone}</td>
                <td>{form.address}</td>
                <td>{form.request}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default GetForm;
