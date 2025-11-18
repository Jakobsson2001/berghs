// Example: Next.js App Router API Route
// File: app/api/subscribe/route.ts
// This route handles newsletter subscriptions via Mailchimp/Brevo/ConvertKit

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate input
    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Valid email is required' }, { status: 400 });
    }

    // Get API key from environment variables (stored in .env file)
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    
    if (!apiKey || !listId) {
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // TODO: Call Mailchimp API
    // Example with Mailchimp:
    // const response = await fetch(
    //   `https://us1.api.mailchimp.com/3.0/lists/${listId}/members`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${apiKey}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email_address: email,
    //       status: 'subscribed',
    //     }),
    //   }
    // );

    // For now, just return success
    return Response.json({ ok: true, message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Subscribe error:', error);
    return Response.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}

