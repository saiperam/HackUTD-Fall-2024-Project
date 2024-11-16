import os
from transformers import AutoModelForCausalLM, AutoTokenizer

# Use the absolute path to your model folder
model_dir = "/Users/james/Downloads/distilgpt"

# Check if the path exists
if not os.path.exists(model_dir):
    raise FileNotFoundError(f"Directory not found: {model_dir}")

# Load the model and tokenizer from the local directory
model = AutoModelForCausalLM.from_pretrained(model_dir)
tokenizer = AutoTokenizer.from_pretrained(model_dir)

# Ensure the pad token is set properly
tokenizer.pad_token = tokenizer.eos_token

# Input text
user_input = '''Use this fact to answer the question: Title of each class Trading Symbol(s) Name of each exchange on which registered
Common Stock, Par Value $.01 Per Share MMM New York Stock Exchange
MMM Chicago Stock Exchange, Inc.
1.500% Notes due 2026 MMM26 New York Stock Exchange
1.750% Notes due 2030 MMM30 New York Stock Exchange
1.500% Notes due 2031 MMM31 New York Stock Exchange

What stocks should I invest in maximum growth?

'''

# Tokenize the input, explicitly add the attention mask
inputs = tokenizer(user_input, return_tensors="pt", padding=True, truncation=True)

# Generate response
outputs = model.generate(
    input_ids=inputs["input_ids"],
    attention_mask=inputs["attention_mask"],  # Pass the attention mask
    max_length=200,
    num_beams=5,       # Use beam search for better output
    no_repeat_ngram_size=2,  # Avoid repetition
    early_stopping=True,     # Stop generation if converged
    pad_token_id=tokenizer.pad_token_id  # Explicitly set pad token ID
)

# Decode the generated tokens to text
response = tokenizer.decode(outputs[0], skip_special_tokens=True)

print(response)
