# DIDRegistry Face Verification App

### Overview
The **DIDRegistry Face Verification App** is a web-based application designed to leverage AI/ML facial recognition technologies and blockchain's decentralized identity (DID) infrastructure. This project integrates facial biometric verification with smart contracts on the Ethereum blockchain, enabling secure user authentication and identity verification.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [AI/ML & Blockchain Integration](#aiml--blockchain-integration)
5. [Setup Instructions](#setup-instructions)
6. [Running Locally](#running-locally)
7. [Hosting](#hosting)
8. [Contact Information](#contact-information)
9. [License](#license)

---

## Project Overview

This project provides an **identity verification system** by integrating facial recognition technology with **Decentralized Identity (DID)** powered by blockchain. The app allows users to submit facial images and their DID to verify their identity securely using **AI/ML** models and logs the verification status on the **Ethereum** blockchain. The goal is to establish a decentralized, secure, and immutable method of identity verification.

---

## Technologies Used

### Frontend:
- **React**: Frontend library used to build the UI of the web app.
- **HTML/CSS**: For structuring and styling the web pages.
- **JavaScript (ES6+)**: Used for logic and interactions in the app.
  
### Backend:
- **Flask**: Backend framework for API routes and image processing.
- **OpenCV**: Pre-trained AI model for facial recognition and image processing.
  
### Blockchain:
- **Ethereum & Sepolia Testnet**: Smart contract deployment for Decentralized Identity (DID) management.
- **Solidity**: Programming language used for writing smart contracts.
- **Web3.js**: Used to interact with the Ethereum blockchain.
  
### Hosting:
- **Frontend**: Hosted on [Surge](https://surge.sh/), a free static hosting service.
- **Backend**: Hosted on a cloud service (Heroku/Render).
  
---

## Features

- **Facial Recognition**: Uses AI/ML for facial verification of users.
- **Decentralized Identity (DID)**: Users provide their DID to verify their identity on the blockchain.
- **Blockchain Logging**: Stores verification results on the Ethereum blockchain.
- **Simulated Blockchain Transactions**: Displays blockchain transaction information, such as block numbers and transaction hashes.
- **Secure Authentication**: Ensures only authorized users can access their identity data.
- **Interactive UI**: User-friendly interface built with React for seamless user experience.

---

## AI/ML & Blockchain Integration

This project highlights the integration of **AI/ML** and **Blockchain** technologies:

### AI/ML:
- **Facial Recognition**: The system uses a pre-trained model (`OpenCV`) for real-time facial recognition. When a user uploads an image, the backend (Flask) processes it and detects the face to verify identity.

### Blockchain:
- **Decentralized Identity (DID)**: Blockchain is used to store and verify user identities. After successful verification, the user's DID and verification status (verified/failed) are logged immutably on the blockchain.
- **Smart Contracts**: Smart contracts on the Ethereum blockchain ensure the secure and transparent management of user identities, reducing the risk of fraud and ensuring trust in digital transactions.

---

## Setup Instructions

1. **Clone the Repository**: Clone the repository from GitHub and navigate into it.
2. **Install Frontend Dependencies**: Go into the frontend directory and install the required dependencies using npm.
3. **Install Backend Dependencies**: Go into the backend directory and install the required dependencies using pip.
4. **Set Up Environment Variables**: Configure environment variables for Ethereum node URL and private keys.
5. **Deploy the Smart Contract**: Use Truffle to deploy the smart contract to Ethereum Sepolia Testnet.
6. **Run the Backend**: Start the Flask backend server.
7. **Run the Frontend**: Start the React frontend server.

---

## Running Locally

Once both the frontend and backend are set up:

- The React app will run locally at `http://localhost:3000`.
- The Flask API will run at `http://localhost:5000`.

Test the app by uploading a facial image and submitting your DID for verification.

---

## Hosting

### Frontend Hosting

The React app is hosted using [Surge](https://surge.sh/). You can deploy it by building the app and using Surge to host the build folder.

### Backend Hosting

The Flask backend can be hosted on platforms like [Heroku](https://heroku.com) or [Render](https://render.com), both of which offer free tiers for small projects.

---

## Contact Information

**Author**: Arjun Veer Singh Rathore  
**Email**: arjunveersinghrathore12@gmail.com  
**GitHub**: [arjunwritescode](https://github.com/arjunwritescode)

For any inquiries or assistance regarding the project, please feel free to reach out!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
