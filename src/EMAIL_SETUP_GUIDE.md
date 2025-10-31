# Email Setup Guide for Urbanest Realty

This guide will help you configure email functionality to send enquiry form submissions to **sales@urbanestrealty.in**.

## Option 1: EmailJS (Recommended - Free & Easy)

EmailJS allows you to send emails directly from your frontend application without a backend server.

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

### Step 2: Set Up Email Service

1. After logging in, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set up your template with these fields:
   - **To Email:** `sales@urbanestrealty.in`
   - **From Name:** `{{from_name}}`
   - **Subject:** `New Enquiry from {{from_name}}`
   - **Content/Body:**
     ```
     New enquiry received from Urbanest Realty website:
     
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone_number}}
     
     Please contact them as soon as possible.
     ```
4. Save the template and copy the **Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (looks like a random string)

### Step 5: Update the Code

Open `/components/EnquiryForm.tsx` and replace these values around line 44:

```typescript
const serviceId = 'service_urbanest'; // Replace with your Service ID
const templateId = 'template_enquiry'; // Replace with your Template ID
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your Public Key
```

### Step 6: Test

1. Fill out the enquiry form on your website
2. Submit the form
3. Check if you receive an email at sales@urbanestrealty.in

---

## Option 2: Web3Forms (Alternative - Also Free)

If you prefer a simpler solution without creating templates:

### Step 1: Get Access Key

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email: **sales@urbanestrealty.in**
3. You'll receive an **Access Key** via email

### Step 2: Update the Code

Replace the `handleSubmit` function in `/components/EnquiryForm.tsx` with:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const validationError = validateFormData(formData);
  if (validationError) {
    toast.error(validationError);
    return;
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your key
        name: formData.name,
        email: formData.email,
        phone: formData.number,
        subject: 'New Enquiry from Urbanest Realty Website',
        message: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.number}`,
      }),
    });

    if (response.ok) {
      toast.success('Thank you for your enquiry! We will contact you soon.');
      setFormData({ name: '', number: '', email: '' });
      setIsOpen(false);
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  } catch (error) {
    toast.error('Failed to submit enquiry. Please try again.');
  }
};
```

---

## Option 3: Google Forms (Simplest)

If you want the absolute simplest solution:

1. Create a Google Form with fields for Name, Email, and Phone
2. Get the form's submission endpoint
3. Update the form to POST to that endpoint

---

## Recommended: EmailJS

I recommend **EmailJS** because:
- ✅ Free tier is generous (200 emails/month)
- ✅ Easy to set up with your existing email
- ✅ Professional email templates
- ✅ Reliable delivery
- ✅ Email tracking and analytics

## Important Notes

- **For Production:** Consider upgrading to a paid plan for higher email limits
- **Security:** The API keys used here are public keys and safe to use in frontend code
- **Testing:** Always test with a test email first before going live
- **Backup:** Consider having a phone number visible as a backup contact method

## Support

If you need help setting this up, contact:
- EmailJS Support: https://www.emailjs.com/docs/
- Web3Forms Support: https://web3forms.com/

---

**Current Status:** The form is configured with EmailJS. You need to add your API keys to make it functional.
