// src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [did, setDid] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDIDChange = (e) => {
        setDid(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('did', did);

        try {
            const response = await axios.post('http://localhost:5000/verify', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onUpload(response.data); // Pass the response to the parent component
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} required />
            <input type="text" placeholder="Enter your DID" value={did} onChange={handleDIDChange} required />
            <button type="submit">Upload</button>
        </form>
    );
};

export default FileUpload;
