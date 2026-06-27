import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error: missing email API key.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required.' },
        { status: 400 }
      );
    }

    if (!phone.startsWith('+')) {
      return NextResponse.json(
        { error: 'Mobile number must include a country code starting with +.' },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: 'nandan555@nmstudios.ai',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="background-color: #f8fafc; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; min-height: 100%; color: #0f172a;">
          <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08); overflow: hidden; border: 1px solid #e2e8f0;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0b1528 0%, #1e293b 100%); padding: 35px 30px; text-align: center; border-bottom: 3px solid #06b6d4;">
              <div style="display: inline-block; background-color: rgba(6, 182, 212, 0.15); border-radius: 50%; padding: 12px; margin-bottom: 12px;">
                <span style="font-size: 24px; display: block; line-height: 1;">✉️</span>
              </div>
              <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">New Message Received</h2>
              <p style="margin: 6px 0 0 0; color: #94a3b8; font-size: 14px;">Submitted via your Portfolio website</p>
            </div>
            
            <!-- Body -->
            <div style="padding: 30px;">
              <!-- Sender Information Table -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 100px; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; vertical-align: top;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px; font-weight: 600; vertical-align: top;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; vertical-align: top;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px; vertical-align: top;">
                    <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; vertical-align: top;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px; vertical-align: top;">
                    <a href="tel:${phone}" style="color: #0f172a; text-decoration: none; font-weight: 500;">${phone}</a>
                  </td>
                </tr>
              </table>
              
              <!-- Message Box -->
              <div style="margin-bottom: 30px;">
                <h4 style="margin: 0 0 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Message</h4>
                <div style="background-color: #f8fafc; border-left: 4px solid #06b6d4; padding: 20px; border-radius: 0 12px 12px 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin-top: 5px;">${message}</div>
              </div>
              
              <!-- Action Button -->
              <div style="text-align: center; margin-top: 35px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #06b6d4; color: #ffffff; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 32px; border-radius: 8px; box-shadow: 0 4px 12px rgba(6, 182, 212, 0.25); text-transform: uppercase; letter-spacing: 0.5px;">Reply via Email</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 24px 30px; text-align: center; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px; line-height: 1.5;">
              <p style="margin: 0;">This email was automatically sent from your website's contact form.</p>
              <p style="margin: 6px 0 0 0;">&copy; ${new Date().getFullYear()} NM Studios. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send message.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
