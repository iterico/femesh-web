import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

    console.log('[Waitlist] Incoming:', { name, email });
    console.log('[Waitlist] Resend API Key:', process.env.RESEND_API_KEY?.slice(0, 10)); // Partial for safety

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // ✅ must be verified in Resend
      to: 'damgnj@gmail.com',       // ✅ test receiver (change this!)
      subject: 'New Waitlist Signup',
      html: `<strong>${name}</strong> joined the waitlist with email <strong>${email}</strong>.`,
    });

    console.log('[Waitlist] Resend response:', data);

    if (data.error) {
        console.error('[Waitlist] Resend Error:', data.error);
        return new Response(JSON.stringify({ success: false, error: data.error }), { status: 500 });
    }
      

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error('[Waitlist] Exception:', err);
    return new Response(JSON.stringify({ success: false, error: err }), { status: 500 });
  }
}
