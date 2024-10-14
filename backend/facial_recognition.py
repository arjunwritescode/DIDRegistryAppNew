











# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import cv2
# import os
# import base64

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# def detect_faces(image_path):
#     # Load the pre-trained face detection model
#     face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

#     # Read the image from the provided path
#     image = cv2.imread(image_path)
#     if image is None:
#         return False, None  # Image not found

#     # Convert the image to grayscale
#     gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

#     # Detect faces
#     faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

#     # Draw rectangles around the detected faces
#     for (x, y, w, h) in faces:
#         cv2.rectangle(image, (x, y), (x + w, y + h), (255, 0, 0), 2)

#     # Save the image with rectangles drawn around detected faces
#     output_path = os.path.join('uploads', 'output_' + os.path.basename(image_path))
#     cv2.imwrite(output_path, image)  # Save the image with drawn rectangles

#     # Convert the output image to base64 for frontend display
#     with open(output_path, "rb") as img_file:
#         encoded_img = base64.b64encode(img_file.read()).decode('utf-8')

#     # Return True if at least one face is detected and the base64-encoded image
#     return len(faces) > 0, encoded_img  # Return the result and the base64 image

# def log_verification(did, status):
#     # Implement the logic to log the verification status to your blockchain
#     print(f"Logging verification for DID: {did} with status: {status}")
#     # e.g., blockchain_service.log_verification(did, status)

# @app.route('/verify', methods=['POST'])
# def verify_user():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400
    
#     file = request.files['file']
#     user_did = request.form.get('did')  # Get the DID from the request

#     if not user_did:
#         return jsonify({"error": "DID is required"}), 400
    
#     # Save the uploaded file temporarily
#     upload_folder = 'uploads'
#     os.makedirs(upload_folder, exist_ok=True)  # Create the uploads directory if it doesn't exist
#     file_path = os.path.join(upload_folder, file.filename)
#     file.save(file_path)

#     # Process the image and verify
#     verification_result, encoded_img = detect_faces(file_path)

#     # Log the result to the blockchain
#     if verification_result:
#         log_verification(user_did, "Verified")
#         return jsonify({"status": "verified", "did": user_did, "image": encoded_img})
#     else:
#         log_verification(user_did, "Failed")
#         return jsonify({"status": "failed", "did": user_did, "image": encoded_img})

# if __name__ == "__main__":
#     app.run(debug=True)








# old code for blockchain logging



# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import cv2
# import os
# import base64
# from web3 import Web3  # Import web3 for blockchain interaction

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # Initialize web3 connection (using Infura, Alchemy, etc.)
# alchemy_url = 'https://eth-sepolia.g.alchemy.com/v2/lvGxcBTgpSowpm4Q72GsgWdgPrXlA59R'  # Replace with your Infura project ID
# web3 = Web3(Web3.HTTPProvider(infura_url))

# # Replace these with your deployed contract details
# contract_address = '0xYourDeployedContractAddress'  # Replace with your contract address
# abi = [ ]  # Replace with your contract ABI

# # Connect to the deployed contract
# contract = web3.eth.contract(address=contract_address, abi=abi)

# def detect_faces(image_path):
#     # Load the pre-trained face detection model
#     face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

#     # Read the image from the provided path
#     image = cv2.imread(image_path)
#     if image is None:
#         return False, None  # Image not found

#     # Convert the image to grayscale
#     gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

#     # Detect faces
#     faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

#     # Draw rectangles around the detected faces
#     for (x, y, w, h) in faces:
#         cv2.rectangle(image, (x, y), (x + w, y + h), (255, 0, 0), 2)

#     # Save the image with rectangles drawn around detected faces
#     output_path = os.path.join('uploads', 'output_' + os.path.basename(image_path))
#     cv2.imwrite(output_path, image)  # Save the image with drawn rectangles

#     # Convert the output image to base64 for frontend display
#     with open(output_path, "rb") as img_file:
#         encoded_img = base64.b64encode(img_file.read()).decode('utf-8')

#     # Return True if at least one face is detected and the base64-encoded image
#     return len(faces) > 0, encoded_img  # Return the result and the base64 image

# # Log verification result to the blockchain
# def log_verification(did, status):
#     # Make sure MetaMask is connected and you have funds for gas fees
#     account = '0xYourEthereumAccountAddress'  # Replace with your Ethereum account address
#     private_key = 'YourPrivateKey'  # Replace with your private key

#     nonce = web3.eth.getTransactionCount(account)

#     # Create a transaction for logging the DID and verification status
#     transaction = contract.functions.logVerification(did, status).buildTransaction({
#         'from': account,
#         'nonce': nonce,
#         'gas': 500000,  # Adjust gas limit as needed
#         'gasPrice': web3.toWei('20', 'gwei')
#     })

#     # Sign the transaction with your private key
#     signed_txn = web3.eth.account.sign_transaction(transaction, private_key)

#     # Send the transaction to the blockchain
#     txn_hash = web3.eth.sendRawTransaction(signed_txn.rawTransaction)

#     # Wait for the transaction to be mined
#     receipt = web3.eth.wait_for_transaction_receipt(txn_hash)
#     print(f"Transaction receipt: {receipt}")
#     return receipt

# @app.route('/verify', methods=['POST'])
# def verify_user():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400
    
#     file = request.files['file']
#     user_did = request.form.get('did')  # Get the DID from the request

#     if not user_did:
#         return jsonify({"error": "DID is required"}), 400
    
#     # Save the uploaded file temporarily
#     upload_folder = 'uploads'
#     os.makedirs(upload_folder, exist_ok=True)  # Create the uploads directory if it doesn't exist
#     file_path = os.path.join(upload_folder, file.filename)
#     file.save(file_path)

#     # Process the image and verify
#     verification_result, encoded_img = detect_faces(file_path)

#     # Log the result to the blockchain
#     if verification_result:
#         receipt = log_verification(user_did, "Verified")  # Call the function to log to blockchain
#         return jsonify({"status": "verified", "did": user_did, "image": encoded_img, "blockchain_receipt": str(receipt)})
#     else:
#         log_verification(user_did, "Failed")
#         return jsonify({"status": "failed", "did": user_did, "image": encoded_img})

# if __name__ == "__main__":
#     app.run(debug=True)





# without blockchain logging
import random
from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import os
import base64

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def detect_faces(image_path):
    # Load the pre-trained face detection model
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

    # Read the image from the provided path
    image = cv2.imread(image_path)
    if image is None:
        return False, None  # Image not found

    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Detect faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    # Draw rectangles around the detected faces
    for (x, y, w, h) in faces:
        cv2.rectangle(image, (x, y), (x + w, y + h), (255, 0, 0), 2)

    # Save the image with rectangles drawn around detected faces
    output_path = os.path.join('uploads', 'output_' + os.path.basename(image_path))
    cv2.imwrite(output_path, image)  # Save the image with drawn rectangles

    # Convert the output image to base64 for frontend display
    with open(output_path, "rb") as img_file:
        encoded_img = base64.b64encode(img_file.read()).decode('utf-8')

    # Return True if at least one face is detected and the base64-encoded image
    return len(faces) > 0, encoded_img  # Return the result and the base64 image

def log_verification(did, status):
    # Simulate a random block number and other transaction data
    block_number = random.randint(1000000, 5000000)  # Random block number
    transaction_hash = f'0x{random.getrandbits(256):064x}'  # Random transaction hash
    gas_used = random.randint(20000, 100000)  # Random gas used
    
    # Simulate the transaction receipt
    simulated_receipt = {
        "block_number": block_number,
        "transaction_hash": transaction_hash,
        "gas_used": gas_used
    }

    # Return the simulated receipt
    print(f"Simulated log for DID: {did}, Status: {status}, Block: {block_number}")
    return simulated_receipt

@app.route('/verify', methods=['POST'])
def verify_user():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    user_did = request.form.get('did')  # Get the DID from the request

    if not user_did:
        return jsonify({"error": "DID is required"}), 400
    
    # Save the uploaded file temporarily
    upload_folder = 'uploads'
    os.makedirs(upload_folder, exist_ok=True)  # Create the uploads directory if it doesn't exist
    file_path = os.path.join(upload_folder, file.filename)
    file.save(file_path)

    # Process the image and verify
    verification_result, encoded_img = detect_faces(file_path)

    # Simulate logging to the blockchain (without actual blockchain interaction)
    if verification_result:
        simulated_receipt = log_verification(user_did, "Verified")
        return jsonify({"status": "verified", "did": user_did, "image": encoded_img, "blockchain_receipt": simulated_receipt})
    else:
        log_verification(user_did, "Failed")
        return jsonify({"status": "failed", "did": user_did, "image": encoded_img})

if __name__ == "__main__":
    app.run(debug=True)
