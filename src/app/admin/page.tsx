'use client';
import ImageUpload from "@/components/selectimage/selectimage";
import React, { useState } from 'react';
import { getUserByEmail, getUserById, saveArtwork } from "@/lib/data";
import { useSession } from "next-auth/react";


const Page = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { status, data: session } = useSession();
    console.log(selectedImage)
  console.log("session log:", session, status);
const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const year = form.year.value;
    const category = form.category.value;
    const medium = form.medium.value;
    const description = form.description.value;
    const artist = await getUserByEmail(session?.user?.email || '');
    const reader = new FileReader();
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
    reader.onloadend = async () => {
      const base64Image = reader.result;
      const artwork = {
        Title: title,
        Year: year,
        Category: category,
        Medium: medium,
        Description: description,
        Poster: base64Image,
        Artist: artist ? { ...artist } : null,
      };
    
    // Save the artwork
    try {
      const savedArtwork = await saveArtwork(artwork);
      console.log("Artwork saved:", savedArtwork);
    } catch (error) {
      console.error("Error saving artwork:", error);
    }
}
  };
  const handleImageSelect = (imageFile) => {
    // Handle the selected image file (e.g., set it to state, upload it, etc.)
    setSelectedImage(imageFile);
  };
    return(
        <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
          <input type="text" id="title" name="title" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year:</label>
          <input type="number" id="year" name="year" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category:</label>
          <input type="text" id="category" name="category" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="medium" className="block text-gray-700 font-bold mb-2">Medium:</label>
          <input type="text" id="medium" name="medium" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
          <textarea id="description" name="description" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        </div>
        <div className="mb-4">
          <ImageUpload onImageSelect={handleImageSelect} />
          {selectedImage && (
            <div className="mt-4">
              <h2 className="text-gray-700 font-bold mb-2">Selected Image Preview:</h2>
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="w-full h-auto rounded-md shadow-md" />
            </div>
          )}
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </form>
      
    )
}
export default Page;