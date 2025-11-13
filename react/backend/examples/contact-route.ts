// Example: Next.js App Router API Route
// File: app/api/contact/route.ts
// This route handles contact form submissions and sends emails via SendGrid/Postmark/Mailgun

export async function POST(req: Request) {
  try {
    const { email, message, name } = await req.json();

    // Validate input
    if (!email || !message) {
      return Response.json({ error: 'Email and message are required' }, { status: 400 });
    }

    // Get API key from environment variables (stored in .env file)
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // TODO: Call SendGrid API
    // Example with SendGrid:
    // await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${apiKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: 'your-email@example.com' }] }],
    //     from: { email: 'noreply@yourdomain.com' },
    //     subject: `Contact form: ${name || 'Anonymous'}`,
    //     content: [{ type: 'text/plain', value: `From: ${email}\n\n${message}` }],
    //   }),
    // });

    // For now, just return success
    return Response.json({ ok: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

