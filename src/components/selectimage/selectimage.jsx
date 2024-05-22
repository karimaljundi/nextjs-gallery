import React from 'react';

const ImageUpload = ({ onImageSelect }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Process the selected file (e.g., upload it, display preview, etc.)
      onImageSelect(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUpload;
