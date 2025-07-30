import { Component, inject, ChangeDetectorRef } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  private toastr = inject(ToastrService);
  private cdr = inject(ChangeDetectorRef);

  sendEmail() {
    emailjs
      .send(
        'service_hr64wgw',
        'template_ezrie6k',
        this.form,
        'nDlGAVa1AnbUOZHoQ'
      )
      .then(() => {
        this.form = {
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        };
        this.cdr.detectChanges();
        this.toastr.success('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        this.toastr.error('Failed to send email. Please try again.');
      });
  }
}
