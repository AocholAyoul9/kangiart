import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = {
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  };

  sendEmail() {
    emailjs
      .send(
        'service_hr64wgw',
        'template_ezrie6k',
        this.form,
        'nDlGAVa1AnbUOZHoQ'
      )
      .then(() => {
        alert('Email sent successfully!');
        this.form = {
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        };
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again.');
      });
  }
}
