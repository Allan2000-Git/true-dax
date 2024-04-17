import { Resend } from "resend";
import { Request, Response } from 'express';

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactController = async (req: Request, res: Response) => {
    const { name, email, companyName, message } = req.body;

    const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["jostonallan2000@gmail.com"],
        subject: "Let's Connect: New Inquiry Received!",
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #f0f0f0;
                    margin: 20px 0;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    margin-top: 0;
                    color: #4f46e5;
                }
                .info-item {
                    margin-bottom: 15px;
                }
                .info-item label {
                    font-weight: bold;
                    display: inline-block;
                    width: 150px;
                }
                .info-item span {
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="container">
            <h2>Contact Form Submission</h2>
            <div class="info-item">
                <label>Name:</label>
                <span>${name}</span>
            </div>
            <div class="info-item">
                <label>Email:</label>
                <span>${email}</span>
            </div>
            <div class="info-item">
                <label>Company Name:</label>
                <span>${companyName}</span>
            </div>
            <div class="info-item">
                <label>Message:</label>
                <span>${message}</span>
            </div>
            </div>
        </body>
        </html>        
        `,
    });

    if (error) {
        return res.status(400).json({ 
            error ,
            message: "Error while sending an email"
        });
    }

    res.status(200).json({ 
        data,
        message: "Your query has been sent to the support team successfully"
    });
}