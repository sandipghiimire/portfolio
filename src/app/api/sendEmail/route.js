import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        // Extract data from the request body
        const { name, email, message } = await request.json();

        // Basic validation for required fields
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        // Create a nodemailer transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Gmail username from env
                pass: process.env.GMAIL_PASS, // Gmail password or app password from env
            },
        });

        // Email options with plain text and HTML versions
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `New Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `
  <p>
    Hi, it's me ${name}.<br /><br />
    <h3>${message}</h3>
  </p>
  <p>
    Sincerely,<br />
    ${name}<br />
    ${email}
  </p>
`,

        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({ error: 'Error sending email' }),
            { status: 500 }
        );
    }
}
