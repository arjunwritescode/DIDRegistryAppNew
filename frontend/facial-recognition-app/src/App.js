// import React, { useState } from 'react';
// import { verifyUser } from './services/api';
// import './index.css';
// const FaceVerification = () => {
//     const [image, setImage] = useState(null);
//     const [did, setDid] = useState('');

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleDidChange = (event) => {
//         setDid(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('file', image);
//         formData.append('did', did);

//         const response = await fetch('http://127.0.0.1:5000/verify', {
//             method: 'POST',
//             body: formData,
//         });

//         const result = await response.json();
//         console.log(result); // Handle the verification result here
//     };

//     return (
//         <div>
//             <h1>Face Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={did}
//                     onChange={handleDidChange}
//                     placeholder="Enter your DID"
//                     required
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     required
//                 />
//                 <button type="submit">Verify</button>
//             </form>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div className="App">
//             <FaceVerification />
//         </div>
//     );
// };

// export default App;


// import React, { useState } from 'react';
// import { verifyUser } from './services/api'; // Make sure this imports correctly
// import './index.css';

// const FaceVerification = () => {
//     const [image, setImage] = useState(null);
//     const [did, setDid] = useState('');
//     const [result, setResult] = useState(null); // State for the verification result
//     const [error, setError] = useState(''); // State for error messages

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleDidChange = (event) => {
//         setDid(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError(''); // Reset error state
//         setResult(null); // Reset result state

//         if (!image || !did) {
//             setError('Please provide a DID and an image file.');
//             return;
//         }

//         try {
//             // Call the verifyUser function
//             const response = await verifyUser(did, image);
//             setResult(response); // Store the verification result
//         } catch (error) {
//             setError('Verification failed. Please try again.');
//             console.error('Verification error:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Face Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={did}
//                     onChange={handleDidChange}
//                     placeholder="Enter your DID"
//                     required
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     required
//                 />
//                 <button type="submit">Verify</button>
//             </form>
//             {result && <h2>Status: {result.status}</h2>} {/* Display the verification status */}
//             {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div className="App">
//             <FaceVerification />
//         </div>
//     );
// };

// export default App;











// import React, { useState } from 'react';
// import './index.css';

// const FaceVerification = () => {
//     const [image, setImage] = useState(null);
//     const [did, setDid] = useState('');
//     const [result, setResult] = useState(null); // State for the verification result
//     const [error, setError] = useState(''); // State for error messages
//     const [verifiedImage, setVerifiedImage] = useState(null); // State for displaying the returned image

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleDidChange = (event) => {
//         setDid(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError(''); // Reset error state
//         setResult(null); // Reset result state
//         setVerifiedImage(null); // Reset the displayed image

//         if (!image || !did) {
//             setError('Please provide a DID and an image file.');
//             return;
//         }

//         try {
//             // Prepare the form data
//             const formData = new FormData();
//             formData.append('file', image);
//             formData.append('did', did);

//             // Send request to the backend
//             const response = await fetch('http://127.0.0.1:5000/verify', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();
//             setResult(result); // Store the verification result

//             if (result.status === 'verified' || result.status === 'failed') {
//                 setVerifiedImage(`data:image/jpeg;base64,${result.image}`); // Set the base64 image
//             }
//         } catch (error) {
//             setError('Verification failed. Please try again.');
//             console.error('Verification error:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>Face Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={did}
//                     onChange={handleDidChange}
//                     placeholder="Enter your DID"
//                     required
//                     className="input-field"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     required
//                     className="input-field"
//                 />
//                 <button type="submit" className="submit-button">Verify</button>
//             </form>

//             {/* Display the verification result */}
//             {result && <h2>Status: {result.status}</h2>}

//             {/* Display the error message if any */}
//             {error && <p className="error">{error}</p>}

//             {/* Display the verified image if available */}
//             {verifiedImage && (
//                 <div>
//                     <h3>Verified Face Image:</h3>
//                     <img src={verifiedImage} alt="Verified Face" />
//                 </div>
//             )}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div className="App">
//             <FaceVerification />
//         </div>
//     );
// };

// export default App;





// import { useState } from 'react';
// import { ethers } from 'ethers';
// import './index.css';

// // Replace with your deployed contract address and ABI
// const contractAddress = '0xYourDeployedContractAddress';  // Replace this with your contract address
// const contractABI = [ /* Your contract ABI here */ ];      // Replace with your contract ABI

// const FaceVerification = () => {
//     const [image, setImage] = useState(null);
//     const [did, setDid] = useState('');
//     const [result, setResult] = useState(null);  // State for the verification result
//     const [error, setError] = useState('');      // State for error messages
//     const [verifiedImage, setVerifiedImage] = useState(null); // State for displaying the returned image
//     const [blockchainStatus, setBlockchainStatus] = useState('');  // State for blockchain transaction status

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleDidChange = (event) => {
//         setDid(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError(''); // Reset error state
//         setResult(null); // Reset result state
//         setVerifiedImage(null); // Reset the displayed image

//         if (!image || !did) {
//             setError('Please provide a DID and an image file.');
//             return;
//         }

//         try {
//             // Prepare the form data
//             const formData = new FormData();
//             formData.append('file', image);
//             formData.append('did', did);

//             // Send request to the backend for facial verification
//             const response = await fetch('http://127.0.0.1:5000/verify', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();
//             setResult(result); // Store the verification result

//             if (result.status === 'verified' || result.status === 'failed') {
//                 setVerifiedImage(`data:image/jpeg;base64,${result.image}`); // Set the base64 image
//             }

//             // If verification is successful, log to the blockchain
//             if (result.status === 'verified') {
//                 await logToBlockchain(did, result.status);
//             }
//         } catch (error) {
//             setError('Verification failed. Please try again.');
//             console.error('Verification error:', error);
//         }
//     };

//     // Function to log verification result to the blockchain
//     const logToBlockchain = async (did, status) => {
//         if (!window.ethereum) {
//             setError('MetaMask is not installed!');
//             return;
//         }

//         try {
//             // Connect to MetaMask
//             const provider = new ethers.providers.Web3Provider(window.ethereum);
//             const signer = provider.getSigner();

//             // Connect to the deployed contract
//             const contract = new ethers.Contract(contractAddress, contractABI, signer);

//             // Call the logVerification function from your smart contract
//             const transaction = await contract.logVerification(did, status);

//             // Wait for the transaction to be confirmed
//             const receipt = await transaction.wait();
//             console.log('Transaction confirmed:', receipt);
//             setBlockchainStatus('Logged to blockchain successfully');
//         } catch (error) {
//             console.error('Blockchain error:', error);
//             setBlockchainStatus('Error logging to blockchain');
//         }
//     };

//     return (
//         <div className="container">
//             <h1>Face Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={did}
//                     onChange={handleDidChange}
//                     placeholder="Enter your DID"
//                     required
//                     className="input-field"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     required
//                     className="input-field"
//                 />
//                 <button type="submit" className="submit-button">Verify</button>
//             </form>

//             {/* Display the verification result */}
//             {result && <h2>Status: {result.status}</h2>}

//             {/* Display the error message if any */}
//             {error && <p className="error">{error}</p>}

//             {/* Display the verified image if available */}
//             {verifiedImage && (
//                 <div>
//                     <h3>Verified Face Image:</h3>
//                     <img src={verifiedImage} alt="Verified Face" />
//                 </div>
//             )}

//             {/* Display the blockchain transaction status */}
//             {blockchainStatus && <p>{blockchainStatus}</p>}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div className="App">
//             <FaceVerification />
//         </div>
//     );
// };

// export default App;





// import React, { useState } from 'react';
// import './index.css';

// const FaceVerification = () => {
//     const [image, setImage] = useState(null);
//     const [did, setDid] = useState('');
//     const [result, setResult] = useState(null);  // State for the verification result
//     const [error, setError] = useState('');  // State for error messages
//     const [verifiedImage, setVerifiedImage] = useState(null);  // State for displaying the returned image
//     const [blockchainReceipt, setBlockchainReceipt] = useState('');  // State for blockchain transaction receipt

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleDidChange = (event) => {
//         setDid(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError('');  // Reset error state
//         setResult(null);  // Reset result state
//         setVerifiedImage(null);  // Reset the displayed image
//         setBlockchainReceipt('');  // Reset the blockchain receipt

//         if (!image || !did) {
//             setError('Please provide a DID and an image file.');
//             return;
//         }

//         try {
//             // Prepare the form data
//             const formData = new FormData();
//             formData.append('file', image);
//             formData.append('did', did);

//             // Send request to the backend for facial verification
//             const response = await fetch('http://127.0.0.1:5000/verify', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();
//             setResult(result);  // Store the verification result

//             // If the verification result is either verified or failed, display the image
//             if (result.status === 'verified' || result.status === 'failed') {
//                 setVerifiedImage(`data:image/jpeg;base64,${result.image}`);  // Set the base64 image
//             }

//             // If the blockchain receipt is included, store it and display
//             if (result.blockchain_receipt) {
//                 setBlockchainReceipt(result.blockchain_receipt);  // Store the blockchain receipt
//             }

//         } catch (error) {
//             setError('Verification failed. Please try again.');
//             console.error('Verification error:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>Face Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={did}
//                     onChange={handleDidChange}
//                     placeholder="Enter your DID"
//                     required
//                     className="input-field"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     required
//                     className="input-field"
//                 />
//                 <button type="submit" className="submit-button">Verify</button>
//             </form>

//             {/* Display the verification result */}
//             {result && <h2>Status: {result.status}</h2>}

//             {/* Display the error message if any */}
//             {error && <p className="error">{error}</p>}

//             {/* Display the verified image if available */}
//             {verifiedImage && (
//                 <div>
//                     <h3>Verified Face Image:</h3>
//                     <img src={verifiedImage} alt="Verified Face" />
//                 </div>
//             )}

//             {/* Display the blockchain receipt if available */}
//             {blockchainReceipt && (
//                 <div>
//                     <h3>Blockchain Transaction Receipt:</h3>
//                     <pre>{blockchainReceipt}</pre>
//                 </div>
//             )}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div className="App">
//             <FaceVerification />
//         </div>
//     );
// };

// export default App;







// without blockchain logging

// import React, { useState } from 'react';
// import './index.css';

// const FaceVerification = () => {
//     const [image, setImage] = useState(null);
//     const [did, setDid] = useState('');
//     const [result, setResult] = useState(null);  // State for the verification result
//     const [error, setError] = useState('');  // State for error messages
//     const [verifiedImage, setVerifiedImage] = useState(null);  // State for displaying the returned image
//     const [blockchainReceipt, setBlockchainReceipt] = useState('');  // State for blockchain transaction receipt

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleDidChange = (event) => {
//         setDid(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError('');  // Reset error state
//         setResult(null);  // Reset result state
//         setVerifiedImage(null);  // Reset the displayed image
//         setBlockchainReceipt('');  // Reset the blockchain receipt

//         if (!image || !did) {
//             setError('Please provide a DID and an image file.');
//             return;
//         }

//         try {
//             // Prepare the form data
//             const formData = new FormData();
//             formData.append('file', image);
//             formData.append('did', did);

//             // Send request to the backend for facial verification
//             const response = await fetch('http://127.0.0.1:5000/verify', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();
//             setResult(result);  // Store the verification result

//             // If verification is successful, display the image
//             if (result.status === 'verified' || result.status === 'failed') {
//                 setVerifiedImage(`data:image/jpeg;base64,${result.image}`);
//             }

//             // Handle the simulated blockchain receipt
//             if (result.blockchain_receipt) {
//                 const { block_number, transaction_hash, gas_used } = result.blockchain_receipt;
//                 setBlockchainReceipt(`Block Number: ${block_number}, Transaction Hash: ${transaction_hash}, Gas Used: ${gas_used}`);
//             }

//         } catch (error) {
//             setError('Verification failed. Please try again.');
//             console.error('Verification error:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>Face Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={did}
//                     onChange={handleDidChange}
//                     placeholder="Enter your DID"
//                     required
//                     className="input-field"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     required
//                     className="input-field"
//                 />
//                 <button type="submit" className="submit-button">Verify</button>
//             </form>

//             {/* Display the verification result */}
//             {result && <h2>Status: {result.status}</h2>}

//             {/* Display the error message if any */}
//             {error && <p className="error">{error}</p>}

//             {/* Display the verified image if available */}
//             {verifiedImage && (
//                 <div>
//                     <h3>Verified Face Image:</h3>
//                     <img src={verifiedImage} alt="Verified Face" />
//                 </div>
//             )}

//             {/* Display the simulated blockchain receipt if available */}
//             {blockchainReceipt && (
//                 <div>
//                     <h3>Simulated Blockchain Transaction Information:</h3>
//                     <pre>{blockchainReceipt}</pre>
//                 </div>
//             )}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div className="App">
//             <FaceVerification />
//         </div>
//     );
// };

// export default App;





// import React, { useState } from 'react';
// import './index.css';

// const FaceVerification = () => {
//     const [image, setImage] = useState(null);
//     const [did, setDid] = useState('');
//     const [result, setResult] = useState(null);  // State for the verification result
//     const [error, setError] = useState('');  // State for error messages
//     const [verifiedImage, setVerifiedImage] = useState(null);  // State for displaying the returned image
//     const [blockchainReceipt, setBlockchainReceipt] = useState('');  // State for blockchain transaction receipt

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleDidChange = (event) => {
//         setDid(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError('');  // Reset error state
//         setResult(null);  // Reset result state
//         setVerifiedImage(null);  // Reset the displayed image
//         setBlockchainReceipt('');  // Reset the blockchain receipt

//         if (!image || !did) {
//             setError('Please provide a DID and an image file.');
//             return;
//         }

//         try {
//             // Prepare the form data
//             const formData = new FormData();
//             formData.append('file', image);
//             formData.append('did', did);

//             // Send request to the backend for facial verification
//             const response = await fetch('http://127.0.0.1:5000/verify', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();
//             setResult(result);  // Store the verification result

//             // If verification is successful, display the image
//             if (result.status === 'verified' || result.status === 'failed') {
//                 setVerifiedImage(`data:image/jpeg;base64,${result.image}`);
//             }

//             // If blockchain receipt exists, display it
//             if (result.blockchain_receipt) {
//                 const { block_number, transaction_hash, gas_used } = result.blockchain_receipt;
//                 setBlockchainReceipt(`Block Number: ${block_number}, Transaction Hash: ${transaction_hash}, Gas Used: ${gas_used}`);
//             }

//         } catch (error) {
//             setError('Verification failed. Please try again.');
//             console.error('Verification error:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>DID Registry Face Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={did}
//                     onChange={handleDidChange}
//                     placeholder="Enter your DID"
//                     required
//                     className="input-field"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     required
//                     className="input-field"
//                 />
//                 <button type="submit" className="submit-button">Verify</button>
//             </form>

//             {/* Display the verification result */}
//             {result && <h2>Status: {result.status}</h2>}

//             {/* Display the error message if any */}
//             {error && <p className="error">{error}</p>}

//             <div className="image-container">
//                 {/* Display the verified image if available */}
//                 {verifiedImage && (
//                     <div>
//                         <h3>Verified Face Image:</h3>
//                         <img src={verifiedImage} alt="Verified Face" className="verified-image" />
//                     </div>
//                 )}

//                 {/* Display the simulated blockchain receipt in a box */}
//                 {blockchainReceipt && (
//                     <div className="blockchain-box">
//                         <h3>Blockchain Transaction Details</h3>
//                         <pre>{blockchainReceipt}</pre>
//                     </div>
//                 )}
//             </div>

//             {/* Contact Information Panel */}
//             <div className="contact-panel">
//                 <h2>Contact Information</h2>
//                 <p>Doubts? Need assistance? Contact me:</p>
//                 <p>Email: <a href="mailto:arjunveersinghrathore12@gmail.com">arjunveersinghrathore12@gmail.com</a></p>
                
//                 <p>
//         Github: 
//         <a href="https://github.com/arjunwritescode" target="_blank" rel="noopener noreferrer"> arjunwritescode</a>
//     </p>
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div className="App">
//             <FaceVerification />
//         </div>
//     );
// };

// export default App;



// import React, { useState } from 'react';
// import './index.css';

// const FaceVerification = () => {
//     const [image, setImage] = useState(null);
//     const [did, setDid] = useState('');
//     const [result, setResult] = useState(null);  // State for the verification result
//     const [error, setError] = useState('');  // State for error messages
//     const [verifiedImage, setVerifiedImage] = useState(null);  // State for displaying the returned image
//     const [blockchainReceipt, setBlockchainReceipt] = useState('');  // State for blockchain transaction receipt
//     const [animating, setAnimating] = useState(false); // State for animation
//     const [fadeOut, setFadeOut] = useState(false); // State for fade out

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleDidChange = (event) => {
//         setDid(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError('');  // Reset error state
//         setResult(null);  // Reset result state
//         setVerifiedImage(null);  // Reset the displayed image
//         setBlockchainReceipt('');  // Reset the blockchain receipt

//         if (!image || !did) {
//             setError('Please provide a DID and an image file.');
//             return;
//         }

//         // Start animation
//         setAnimating(false); 
//         setFadeOut(false); // Reset fade out state

//         try {
//             // Prepare the form data
//             const formData = new FormData();
//             formData.append('file', image);
//             formData.append('did', did);

//             // Send request to the backend for facial verification
//             const response = await fetch('http://127.0.0.1:5000/verify', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();
//             setResult(result);  // Store the verification result

//             // If verification is successful, display the image
//             if (result.status === 'verified' || result.status === 'failed') {
//                 setVerifiedImage(`data:image/jpeg;base64,${result.image}`);
//             }

//             // If blockchain receipt exists, display it
//             if (result.blockchain_receipt) {
//                 const { block_number, transaction_hash, gas_used } = result.blockchain_receipt;
//                 setBlockchainReceipt({ blockNumber: block_number, transactionHash: transaction_hash, gasUsed: gas_used });

//                 // Trigger animation after successful verification
//                 setAnimating(true); 

//                 // Fade out after 6 seconds
//                 setTimeout(() => {
//                     setFadeOut(true); // Start fading out
//                     setAnimating(false); // Stop animation
//                 }, 6000); // Display for 6 seconds

//             }

//         } catch (error) {
//             setError('Verification failed. Please try again.');
//             console.error('Verification error:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>DID Registry Face Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={did}
//                     onChange={handleDidChange}
//                     placeholder="Enter your DID"
//                     required
//                     className="input-field"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     required
//                     className="input-field"
//                 />
//                 <button type="submit" className="submit-button">Verify</button>
//             </form>

//             {/* Display the verification result */}
//             {result && <h2>Status: {result.status}</h2>}

//             {/* Display the error message if any */}
//             {error && <p className="error">{error}</p>}

//             <div className="image-container">
//                 {/* Display the verified image if available */}
//                 {verifiedImage && (
//                     <div>
//                         <h3>Verified Face Image:</h3>
//                         <img src={verifiedImage} alt="Verified Face" className="verified-image" />
//                     </div>
//                 )}

//                 {/* Display the simulated blockchain receipt in a box */}
//                 {blockchainReceipt && (
//                     <div className="blockchain-box">
//                         <h3>Blockchain Transaction Details</h3>
//                         <p>Block Number: {blockchainReceipt.blockNumber}</p>
//                         <p className="transaction-hash">
//                             Transaction Hash: 
//                             <span className="hidden-hash">{blockchainReceipt.transactionHash}</span>
//                             <span className="masked-hash"> {'*****'}</span>
//                         </p>
//                         <p>Gas Used: {blockchainReceipt.gasUsed}</p>
//                     </div>
//                 )}
//             </div>

//             {/* Blockchain Animation Box */}
//             {animating && (
//                 <div className={`animation-box ${fadeOut ? 'fade-out' : ''}`}>
//                     <div className="block" />
//                 </div>
//             )}

//             {/* Contact Information Panel */}
//             <div className="contact-panel">
//                 <h2>Contact Information</h2>
//                 <p>Doubts? Need assistance? Contact me:</p>
//                 <p>Email: <a href="mailto:arjunveersinghrathore12@gmail.com">arjunveersinghrathore12@gmail.com</a></p>
//                 <p>
//                     Github: 
//                     <a href="https://github.com/arjunwritescode" target="_blank" rel="noopener noreferrer"> arjunwritescode</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div className="App">
//             <FaceVerification />
//         </div>
//     );
// };

// export default App;



import React, { useState } from 'react';
import './index.css';

const FaceVerification = () => {
    const [image, setImage] = useState(null);
    const [did, setDid] = useState('');
    const [result, setResult] = useState(null);  // State for the verification result
    const [error, setError] = useState('');  // State for error messages
    const [verifiedImage, setVerifiedImage] = useState(null);  // State for displaying the returned image
    const [blockchainReceipt, setBlockchainReceipt] = useState('');  // State for blockchain transaction receipt
    const [animating, setAnimating] = useState(false); // State for animation
    const [fadeOut, setFadeOut] = useState(false); // State for fade out

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleDidChange = (event) => {
        setDid(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');  // Reset error state
        setResult(null);  // Reset result state
        setVerifiedImage(null);  // Reset the displayed image
        setBlockchainReceipt('');  // Reset the blockchain receipt

        if (!image || !did) {
            setError('Please provide a DID and an image file.');
            return;
        }

        // Start animation
        setAnimating(false); 
        setFadeOut(false); // Reset fade out state

        try {
            // Prepare the form data
            const formData = new FormData();
            formData.append('file', image);
            formData.append('did', did);

            // Send request to the backend for facial verification
            const response = await fetch('http://127.0.0.1:5000/verify', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            setResult(result);  // Store the verification result

            // If verification is successful, display the image
            if (result.status === 'verified' || result.status === 'failed') {
                setVerifiedImage(`data:image/jpeg;base64,${result.image}`);
            }

            // If blockchain receipt exists, display it
            if (result.blockchain_receipt) {
                const { block_number, transaction_hash, gas_used } = result.blockchain_receipt;
                setBlockchainReceipt({ blockNumber: block_number, transactionHash: transaction_hash, gasUsed: gas_used });

                // Trigger animation after successful verification
                setAnimating(true); 

                // Fade out after 6 seconds
                setTimeout(() => {
                    setFadeOut(true); // Start fading out
                    setAnimating(false); // Stop animation
                }, 6000); // Display for 6 seconds
            }

        } catch (error) {
            setError('Verification failed. Please try again.');
            console.error('Verification error:', error);
        }
    };

    return (
        <div className="container">
            <h1>DID Registry Face Verification</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={did}
                    onChange={handleDidChange}
                    placeholder="Enter your DID"
                    required
                    className="input-field"
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                    className="input-field"
                />
                <button type="submit" className="submit-button">Verify</button>
            </form>

            {/* Display the verification result */}
            {result && <h2>Status: {result.status}</h2>}

            {/* Display the error message if any */}
            {error && <p className="error">{error}</p>}

            <div className="image-container">
                {/* Display the verified image if available */}
                {verifiedImage && (
                    <div>
                        <h3>Verified Face Image:</h3>
                        <img src={verifiedImage} alt="Verified Face" className="verified-image" />
                    </div>
                )}

                {/* Display the simulated blockchain receipt in a box */}
                {blockchainReceipt && (
                    <div className="blockchain-box">
                        <h3>Blockchain Transaction Details</h3>
                        <p>Block Number: {blockchainReceipt.blockNumber}</p>
                        <p className="transaction-hash">
                            Transaction Hash: 
                            <span className="hidden-hash">{blockchainReceipt.transactionHash}</span>
                            <span className="masked-hash"> {'*****'}</span>
                        </p>
                        <p>Gas Used: {blockchainReceipt.gasUsed}</p>
                    </div>
                )}
            </div>

            {/* Blockchain Animation Box */}
            {animating && (
                <div className={`animation-box ${fadeOut ? 'fade-out' : ''}`}>
                    <div className="block" />
                </div>
            )}

            {/* Use Cases Panel */}
            <div className="use-cases-panel">
                <h2>Use Cases of DID Registry</h2>
                <ul>
        <li>
            <span class="highlight">Enhanced Security for Online Transactions:</span> AI-driven facial recognition combined with blockchain ensures secure user authentication, significantly reducing the risk of fraud in digital transactions.
        </li>
        <li>
            <span class="highlight">Smart Contract Automation:</span> DIDs facilitate automated identity verification through smart contracts, enabling real-time, trustworthy interactions while minimizing human error.
        </li>
        <li>
            <span class="highlight">Trustworthy Digital Transactions:</span> Facilitate secure and transparent transactions through verifiable digital identities.
        </li>
    </ul>
            </div>

            {/* Contact Information Panel */}
            <div className="contact-panel">
                <h2>Contact Information</h2>
                <p>Doubts? Need assistance? Contact me:</p>
                <p>Email: <a href="mailto:arjunveersinghrathore12@gmail.com">arjunveersinghrathore12@gmail.com</a></p>
                <p>
                    Github: 
                    <a href="https://github.com/arjunwritescode" target="_blank" rel="noopener noreferrer"> arjunwritescode</a>
                </p>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="App">
            <FaceVerification />
        </div>
    );
};

export default App;
