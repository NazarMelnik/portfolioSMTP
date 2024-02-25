module.exports = ({ name, email, phone, message }) => {
    return `
          <div class="container" style="margin: 20px auto; background-color: #fefefe; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
              <h2 style="margin-top: 0; color: #FFA500;">New Message</h2>
              <div class="message-detail">
                  <p style="margin: 10px 0; line-height: 1.6; color: #666;"><strong>Name:</strong> ${name}</p>
                  <p style="margin: 10px 0; line-height: 1.6; color: #666;"><strong>Phone:</strong> ${phone}</p>
                  <p style="margin: 10px 0; line-height: 1.6; color: #666;"><strong>Email:</strong> ${email}</p>
                  <p style="margin: 10px 0; line-height: 1.6; color: #666;"><strong>Message:</strong> ${message}</p>
              </div>
          </div>`
};
