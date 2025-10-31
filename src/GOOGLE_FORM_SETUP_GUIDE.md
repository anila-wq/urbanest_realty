# Google Forms Integration Setup Guide

## Overview
Your forms now submit to **THREE systems simultaneously**:
1. ✅ **Google Forms** - For data collection in Google Sheets
2. ✅ **CRM Webhook** - For your CRM system
3. ✅ **Web3Forms** - For email notifications to sales@urbanestrealty.in

## ⚠️ IMPORTANT: Find Your Google Form Entry IDs

To complete the setup, you need to find the **Entry IDs** from your Google Form.

### Step-by-Step Instructions:

#### Method 1: Using Browser Inspector (Recommended)

1. **Open your Google Form** in edit mode:
   - Go to: https://docs.google.com/forms/d/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/edit

2. **For each field (Name, Contact, Email)**:
   - Right-click on the field → Select **"Inspect"** or press `F12`
   - In the inspector, look for an attribute that looks like: `data-params` or `name`
   - Find the value that starts with `entry.` followed by numbers
   - Example: `entry.123456789`

3. **Note down all three Entry IDs**:
   ```
   Name field:    entry.XXXXXXXXX
   Contact field: entry.XXXXXXXXX
   Email field:   entry.XXXXXXXXX
   ```

#### Method 2: Using Pre-filled Link (Easier)

1. **Open your Google Form** in edit mode
2. Click the **three dots** (⋮) in the top-right corner
3. Select **"Get pre-filled link"**
4. Fill in test data for all three fields:
   - Name: Test Name
   - Contact: 1234567890
   - Email: test@example.com
5. Click **"Get link"** at the bottom
6. Copy the URL you get. It will look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/viewform?
   usp=pp_url&
   entry.123456789=Test+Name&
   entry.987654321=1234567890&
   entry.555666777=test@example.com
   ```

7. **Extract the entry IDs** from the URL:
   - The numbers after `entry.` and before `=` are your Entry IDs
   - In the example above:
     - Name: `entry.123456789`
     - Contact: `entry.987654321`
     - Email: `entry.555666777`

## Update the Code

Once you have the Entry IDs, update the file: `/components/utils/dual-form-submit.ts`

### Find this section (around line 11-15):

```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.YOUR_NAME_ENTRY_ID',      // Replace with actual entry ID
  contact: 'entry.YOUR_CONTACT_ENTRY_ID', // Replace with actual entry ID
  email: 'entry.YOUR_EMAIL_ENTRY_ID',     // Replace with actual entry ID
};
```

### Replace with your actual Entry IDs:

```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.123456789',      // Your Name field entry ID
  contact: 'entry.987654321',   // Your Contact field entry ID
  email: 'entry.555666777',     // Your Email field entry ID
};
```

## Testing

After updating the Entry IDs:

1. **Submit a test form** on your website
2. **Check three places**:
   - ✅ **Google Sheets** (linked to your Google Form) - Should have a new row
   - ✅ **Your CRM** - Should receive the webhook data
   - ✅ **Your Email** (sales@urbanestrealty.in) - Should receive notification email

## Current Form URLs

- **Google Form (View)**: https://docs.google.com/forms/d/e/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/viewform?usp=pp_url
- **Google Form (Submit Endpoint)**: https://docs.google.com/forms/d/e/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/formResponse
- **CRM Webhook**: https://apps.cratiocrm.com/Customize/Webhooks/webhook.php?id=395555
- **Web3Forms**: https://api.web3forms.com/submit (Access Key: 2166cd5f-a57a-4eae-91df-ebe88267aa2d)

## Where Forms are Used

The dual submission (Google Forms + Webhook + Web3Forms) is active in:

1. **Awards Section Form** - The "Submit" button at the bottom of Awards section
2. **Enquire Now Modal** - The "Enquire Now" buttons throughout the site

## Troubleshooting

### Form submits but data doesn't appear in Google Sheets?
- Double-check the Entry IDs are correct
- Make sure your Google Form is set to accept responses
- Check if the Google Form has any restrictions (e.g., requires sign-in)

### Webhook not receiving data?
- The webhook uses `no-cors` mode, so you won't see errors
- Check your CRM logs directly
- Make sure the webhook URL is correct

### Email not received?
- Check spam folder
- Verify Web3Forms access key is correct
- Check Web3Forms dashboard for submission logs

## Need Help?

If you need assistance:
1. Share the Entry IDs you found
2. Share any error messages from browser console
3. Test with a simple submission and check all three systems

## Security Note

- Google Forms submissions are public unless you restrict them
- The webhook uses POST with form data
- Web3Forms sends emails securely via their API
- All form fields are required to prevent spam
