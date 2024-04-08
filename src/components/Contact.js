const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        toEmail: 'krod_2567@yahoo.com', // Specify the recipient email address here
      }),
    });

    if (response.ok) {
      // Handle successful form submission
      console.log('Message sent successfully');
      alert('Message sent successfully'); // Show a success message
      setFormData({ name: '', email: '', message: '' }); // Clear form data
    } else {
      // Handle error
      console.error('Failed to send message');
      alert('Failed to send message'); // Show an error message
    }
  } catch (error) {
    // Handle network error
    console.error('Network error:', error);
    alert('Network error. Please try again.'); // Show a network error message
  }
};
