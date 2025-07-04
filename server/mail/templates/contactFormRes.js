// Update this function in your backend to match the new form data.
exports.contactUsEmail = (name, email, message,subject) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Contact Form Confirmation</title>
      <style>
        /* Add your email styles here */
      </style>
    </head>
    <body>
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #6a0dad;">Thank You for Contacting, ${name}!</h2>
        <p>I have received your message and appreciate you reaching out.I will review your message and get back to you as soon as possible, usually within 24 hours.</p>
        <p>Here is a summary of the information you submitted:</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #6a0dad; margin-top: 20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Your Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border-radius: 5px; border: 1px solid #eee;">${message}</p>
        </div>
        <p>In the meantime, feel free to explore my Portfolio.</p>
        <p>Best regards,<br>Shivam Kumar</p>
      </div>
    </body>
    </html>
  `;
};