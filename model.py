import joblib
import pandas as pd
import os
import importlib.util

# Load the trained Random Forest model
model_path = "/Users/saiperam/Desktop/HackUTD/HackUTD-Fall-2024-Project/random_forest_50_trees.pkl"  # Change this to your model path
model_rf = joblib.load(model_path)

# Function to predict fraud for new transaction data
def predict_fraud(transaction_data):
    """
    Predict if the transaction is fraudulent or not.
    
    Args:
        transaction_data (dict or DataFrame): New transaction data
    
    Returns:
        str: 'Fraudulent' or 'Not Fraudulent'
    """
    # Convert input data into DataFrame if it's a dictionary
    if isinstance(transaction_data, dict):
        transaction_data = pd.DataFrame([transaction_data])
    
    # Ensure the input data has the same structure as training data
    input_data = transaction_data.values
    
    # Predict using the trained model
    prediction = model_rf.predict(input_data)
    
    # Return the prediction as a human-readable string
    return "Flagged for Suspicion!" if prediction[0] == 1 else "No Suspicious Activity Detected"

# Directory containing the transaction files
transactions_folder = "/Users/saiperam/Desktop/HackUTD/HackUTD-Fall-2024-Project/transactions"  # Change this to the actual path to your transactions folder

# Initialize a counter to track transaction number
transaction_counter = 1

# Iterate through all Python files in the transactions folder
for filename in os.listdir(transactions_folder):
    if filename.endswith(".py"):  # Ensure it's a Python file
        file_path = os.path.join(transactions_folder, filename)
        
        # Dynamically import the transaction data from the file
        spec = importlib.util.spec_from_file_location("transaction", file_path)
        transaction_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(transaction_module)
        
        # Assuming the new_transaction variable is defined in each file
        if hasattr(transaction_module, 'new_transaction'):
            transaction_data = transaction_module.new_transaction
            result = predict_fraud(transaction_data)
            print(f"Transaction {transaction_counter} status: {result}")
            transaction_counter += 1
        else:
            print(f"No transaction data found in {filename}")
