// pages/api/subscribe.js
export default async (req, res) => {
    const { email, message } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
  
    try {
      const response = await fetch(`https://<dc>.api.mailchimp.com/3.0/lists/<list-id>/members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: { MESSAGE: message },
        }),
      });
  
      if (response.status >= 400) {
        return res.status(400).json({ message: 'There was an error subscribing to the newsletter.' });
      }
  
      return res.status(201).json({ message: 'Successfully subscribed!' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  