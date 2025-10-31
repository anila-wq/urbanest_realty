# Quick Email Setup - 2 Minutes ⚡

Your enquiry form is ready! Just follow these 2 simple steps:

## Step 1: Get Your Free Access Key (1 minute)

1. Go to: **https://web3forms.com**
2. Enter your email: **sales@urbanestrealty.in**
3. Click "Get Access Key"
4. Check your email inbox for the access key (it arrives instantly)
5. Click the verification link in the email

## Step 2: Add the Access Key to Your Code (1 minute)

1. Open the file: `/components/EnquiryForm.tsx`
2. Find line 52 (around there)
3. Look for: `const accessKey = 'YOUR_ACCESS_KEY_HERE';`
4. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key from the email
5. Save the file

**Example:**
```typescript
const accessKey = 'abc123def456'; // Your actual key from Web3Forms
```

## That's It! 🎉

Your form will now send all enquiries directly to **sales@urbanestrealty.in**

### What You'll Receive:

Every time someone fills out the form, you'll get an email with:
- Customer Name
- Email Address
- Phone Number
- Timestamp

---

## Testing

1. Fill out the enquiry form on your website
2. Submit it
3. Check your inbox at sales@urbanestrealty.in
4. You should receive the enquiry within seconds!

---

## Features

✅ **No monthly fees** - Completely free for up to 250 submissions/month  
✅ **Instant delivery** - Emails arrive in seconds  
✅ **Spam protection** - Built-in security  
✅ **No backend needed** - Works from your frontend  
✅ **Reliable** - 99.9% uptime guarantee  

---

## Need Help?

- **Web3Forms Documentation:** https://docs.web3forms.com
- **Support:** https://web3forms.com/contact

---

## Alternative: If You Prefer EmailJS

If you'd rather use EmailJS (more features, customizable templates):

1. Go to https://www.emailjs.com
2. Create a free account
3. Follow the detailed guide in `/EMAIL_SETUP_GUIDE.md`

---

**Current Status:** Form is configured with Web3Forms. Just add your access key and you're done!
