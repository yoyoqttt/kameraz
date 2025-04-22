import React, { useState, useEffect } from "react";
import axios from "axios";

const AddRoomForm = () => {
    const [roomData, setRoomData] = useState({
        image: null,
        location: { lat: "", lng: "" },
        address: "",
        phone: "",
        price: ""
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setRoomData(prev => ({
                ...prev,
                location: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            }));
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setRoomData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", roomData.image);
        formData.append("lat", roomData.location.lat);
        formData.append("lng", roomData.location.lng);
        formData.append("address", roomData.address);
        formData.append("phone", roomData.phone);
        formData.append("price", roomData.price);

        try {
            await axios.post("http://localhost:5000/routes/rooms", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Room added successfully!");
        } catch (error) {
            console.error("Error uploading room:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleImageChange}   />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
            <button type="submit">Add Room</button>
        </form>
    );
};

export default AddRoomForm;
