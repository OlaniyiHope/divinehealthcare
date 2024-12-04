import React, { useState, useEffect } from "react";

import Quill from "quill";
import ImageResize from "quill-image-resize-module-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageResize", ImageResize);

// Register the Image Resize module
Quill.register("modules/imageResize", ImageResize);

const EditHiv = ({ initialDescription, onSave }) => {
  const [description, setDescription] = useState(initialDescription || ""); // Ensure the initial description defaults to an empty string
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch the existing description on component mount
  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/divine/get-hiv`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.description) {
          setDescription(data.description);
        }
      } catch (error) {
        console.error("Error fetching description:", error);
      }
    };

    fetchDescription();
  }, [apiUrl]); // Include apiUrl as a dependency

  const handleSave = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/divine/put-hiv`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save description.");
      }

      alert("Description saved successfully!");
    } catch (error) {
      console.error("Error saving description:", error);
      alert(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Edit HIV Description</h2>
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
          imageResize: {}, // Enable image resizing
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
          "color",
          "background",
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

export default EditHiv;
