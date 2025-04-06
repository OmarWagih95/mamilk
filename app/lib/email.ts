import nodemailer from 'nodemailer';
export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // const transport = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: SMTP_EMAIL,
  //     pass: SMTP_PASSWORD,
  //   },
  // });
  const transport = nodemailer.createTransport({
    host: "mail.smtp2go.com",        // SMTP2GO's SMTP server
    port: 2525,                        // or 2525, or 465 for SSL
    secure: false,                   // true for port 465 (SSL), false for others
    auth: {
      user: process.env.SMTP_EMAIL,    // Your SMTP2GO username (usually your email)
      pass: process.env.SMTP_PASSWORD, // Your SMTP2GO password
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

// export function compileWelcomeTemplate(name: string, url: string) {
//   const template = handlebars.compile(welcomeTemplate);
//   const htmlBody = template({
//     name: name,
//     url: url,
//   });
//   return htmlBody;
// }