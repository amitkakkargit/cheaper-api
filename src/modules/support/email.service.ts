import { Injectable, Logger } from '@nestjs/common';

interface SendEmailInput {
  to: string;
  subject: string;
  text: string;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly fromEmail =
    process.env.SUPPORT_FROM_EMAIL ?? 'Cheaper Support <support@cheaper.local>';

  async send(input: SendEmailInput): Promise<void> {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      this.logger.log(
        `Email fallback: to=${input.to} subject="${input.subject}" body=${input.text}`,
      );
      return;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: this.fromEmail,
        to: input.to,
        subject: input.subject,
        text: input.text,
      }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      throw new Error(`Email provider failed: ${response.status} ${body}`);
    }
  }
}
