import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditErectile = ({ initialDescription, onSave }) => {
  const [description, setDescription] = useState(initialDescription);
  const apiUrl = process.env.REACT_APP_API_URL;
  // Fetch the existing fibroid description on component mount
  useEffect(() => {
    const fetchFibroidDescription = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/divine/get-erectile`);

        const data = await response.json();
        if (data.description) {
          setDescription(data.description);
        }
      } catch (error) {
        console.error("Error fetching fibroid description:", error);
      }
    };

    fetchFibroidDescription();
  }, []); // Empty dependency array to run only once when the component mounts

  const handleSave = async () => {
    try {
      // PUT request to update the fibroid description
      const response = await fetch(
        `${apiUrl}/api/divine/put-erectile`,

        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Handle successful save
        alert("Description saved successfully!");
        console.log(data);
      } else {
        // Handle error
        alert(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error saving description:", error);
      alert("Failed to save description.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Edit Erectile</h2>
      <ReactQuill
        theme="snow"
        value={description}
        onChange={setDescription}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ size: ["small", false, "large", "huge"] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [
              {
                color: [
                  "#000000",
                  "#FF0000",
                  "#00FF00",
                  "#0000FF",
                  "#FFFF00",
                  "#FF00FF",
                  "#00FFFF",
                ],
              },
              {
                background: [
                  "#000000",
                  "#FF0000",
                  "#00FF00",
                  "#0000FF",
                  "#FFFF00",
                  "#FF00FF",
                  "#00FFFF",
                ],
              },
            ],
            ["link", "image"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "list",
          "bullet",
          "link",
          "color", // Enables text color changes
          "image",
        ]}
      />
      <button
        onClick={handleSave}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditErectile;
