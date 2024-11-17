import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
import random
import joblib

# Step 1: Load the pre-trained model (assuming it's saved)
model = joblib.load('/Users/saiperam/Desktop/HackUTD/HackUTD-Fall-2024-Project/budget_prediction_model.joblib')  # Load the pre-trained model

# Step 2: Randomize the number of days of recorded data (between 5 and 25 days)
random_days = random.randint(5, 25)  # Random value between 5 and 20 days

# Step 3: Generate synthetic transaction data for the randomized number of days
start_date = datetime(2024, 11, 1)
days_in_month = 30

# Generate random daily transaction amounts based on the randomized number of days
transaction_dates = [start_date + timedelta(days=i) for i in range(random_days)]
transaction_amounts = np.random.uniform(10, 150, random_days)  # Random spending between 10 and 150

# Create a DataFrame with the generated data
df_synthetic = pd.DataFrame({
    'Date': transaction_dates,
    'Amount': transaction_amounts
})

# Step 4: Predict the total spending for the rest of the month (after the recorded days)
# We need to use the model to predict for the remaining days of the month
future_days = np.array(range(random_days, days_in_month)).reshape(-1, 1)  # Days after the recorded data
predicted_amounts = model.predict(future_days)

# Step 5: Combine both actual and predicted data
all_dates = transaction_dates + [start_date + timedelta(days=i) for i in range(random_days, days_in_month)]
all_amounts = list(transaction_amounts) + list(predicted_amounts)

# Step 6: Calculate cumulative sum for both actual and predicted spending
df_combined = pd.DataFrame({
    'Date': all_dates,
    'Amount': all_amounts
})

df_combined['Cumulative Actual'] = df_combined['Amount'].cumsum()

# Step 7: Define a user-targeted monthly budget value
monthly_budget_target = 4000  # This value can be set based on user input or requirements

# Step 8: Check if the actual or predicted cumulative spending reaches or exceeds the target
reached_budget_actual = df_combined['Cumulative Actual'] >= monthly_budget_target
reached_budget_predicted = df_combined['Cumulative Actual'][random_days:] >= monthly_budget_target

# Step 9: Plot the cumulative actual spending for the recorded days and predicted for the rest of the month
plt.figure(figsize=(10, 6))

# Plot cumulative actual transaction amounts for the recorded days (blue dashed line)
plt.plot(df_synthetic['Date'], df_synthetic['Amount'].cumsum(), label=f'Cumulative Actual Spending ({random_days} Days)', color='blue', linestyle='--', marker='o')

# Plot cumulative predicted transaction amounts for the rest of the month (red solid line)
plt.plot(df_combined['Date'][random_days:], df_combined['Cumulative Actual'][random_days:], label='Cumulative Predicted Spending (Rest of the Month)', color='red', linestyle='-', marker='x')

# Plot the user-targeted monthly budget as a horizontal line (green)
plt.axhline(y=monthly_budget_target, color='green', linestyle='-', label=f'Monthly Budget Target ({monthly_budget_target})')

# Adding labels and title
plt.xlabel('Date')
plt.ylabel('Cumulative Amount')
plt.title(f'Cumulative Actual vs Predicted Monthly Spending (First {random_days} Days of This Month Recorded)')
plt.legend()

# Step 10: Check for intersections and alert the user
intersection_actual = df_combined['Cumulative Actual'] >= monthly_budget_target
intersection_predicted = df_combined['Cumulative Actual'][random_days:] >= monthly_budget_target

# If the intersection happens at the last day of actual data
if intersection_actual[random_days - 1]:
    print("Alert: You have reached your monthly budget goal today!")
    
# If the intersection happens during predicted data
elif intersection_predicted.any():
    print("Alert: Your predicted spending will exceed your monthly budget goal by the end of the month!")
    
# If the intersection happens at any actual data point except the last one
elif intersection_actual.any():
    print("Alert: You have already exceeded your monthly budget!")

# Display the plot
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
