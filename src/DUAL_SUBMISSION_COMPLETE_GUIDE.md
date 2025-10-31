# 🎯 Complete Dual Submission Setup - Google Forms + CRM Webhook

## ✅ What's Already Done

Your website now submits ALL forms to **THREE systems simultaneously**:

1. **🟢 Google Forms** → Stores data in Google Sheets
2. **🔵 CRM Webhook** → Sends to your CRM system  
3. **🟡 Web3Forms** → Sends email to sales@urbanestrealty.in (Enquire Now only)

### Forms That Use Dual Submission:
- ✅ **Awards Section Form** (Name, Contact, Email) → Google Forms + Webhook
- ✅ **Enquire Now Modal** (All "Enquire Now" buttons) → Google Forms + Webhook + Web3Forms

---

## ⚠️ ONE STEP REMAINING: Update Google Form Entry IDs

### Why This is Needed:
Google Forms uses unique "Entry IDs" for each field. We need to tell the code which Entry ID corresponds to Name, Contact, and Email.

---

## 📋 Step-by-Step Instructions

### STEP 1: Get Pre-filled Link

1. Open your Google Form in **EDIT mode**:
   ```
   https://docs.google.com/forms/d/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/edit
   ```

2. Click **three dots (⋮)** in top-right corner

3. Select **"Get pre-filled link"**

4. Fill in ANY test data:
   - Name: `Test Name`
   - Contact/Phone: `9999999999`  
   - Email: `test@test.com`

5. Scroll down and click **"Get link"**

6. Click **"COPY LINK"**

### STEP 2: Extract Entry IDs

Paste the copied link. It looks like:
```
https://docs.google.com/forms/d/e/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/viewform?usp=pp_url&entry.123456789=Test+Name&entry.987654321=9999999999&entry.555666777=test@test.com
```

**Find the Entry IDs:**
- Look for `entry.XXXXXXXXXX=` patterns
- The numbers after `entry.` and before `=` are your Entry IDs

**Example from URL above:**
- Name: `entry.123456789`
- Contact: `entry.987654321`
- Email: `entry.555666777`

### STEP 3: Update the Code

**File to edit:** `/components/utils/dual-form-submit.ts`

**Find this code (around line 11-15):**
```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.YOUR_NAME_ENTRY_ID',      // Replace with actual entry ID
  contact: 'entry.YOUR_CONTACT_ENTRY_ID', // Replace with actual entry ID
  email: 'entry.YOUR_EMAIL_ENTRY_ID',     // Replace with actual entry ID
};
```

**Replace with YOUR entry IDs:**
```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.123456789',      // Use YOUR actual Name entry ID
  contact: 'entry.987654321',   // Use YOUR actual Contact entry ID
  email: 'entry.555666777',     // Use YOUR actual Email entry ID
};
```

⚠️ **Important:**
- Keep the quotes `' '`
- Keep the `entry.` prefix
- Only replace the numbers
- Save the file after editing

---

## 🧪 Testing

### Method 1: Use Form on Website

1. Go to your website
2. Scroll to **Awards section** or click any **"Enquire Now"** button
3. Fill in the form with test data
4. Click **Submit**
5. Check all three systems:
   - ✅ Google Sheets (linked to your Google Form)
   - ✅ Your CRM dashboard
   - ✅ Email inbox (for Enquire Now only)

### Method 2: Use Browser Console

1. Open your website
2. Press **F12** to open developer console
3. Type: `testDualSubmit()` and press Enter
4. Check the console for results
5. Verify data in Google Sheets and CRM

### Method 3: Check Configuration

In browser console, type:
```javascript
showCurrentConfig()
```

This shows all configured URLs.

---

## 📊 Expected Results

### Successful Submission Shows:

**On Website:**
```
✓ Thank you! Your details have been submitted successfully. 
  We'll contact you soon.
```

**In Browser Console:**
```
📊 Submission Results:
Overall Success: ✅
Google Forms:    ✅ Submitted
CRM Webhook:     ✅ Submitted
```

**In Google Sheets:**
- New row with Name, Contact, Email, Timestamp

**In Your CRM:**
- New lead entry with all details

**In Email (Enquire Now only):**
- Email to sales@urbanestrealty.in with form details

---

## 🔧 Troubleshooting

### Issue: Data not appearing in Google Sheets

**Possible Causes:**
1. Entry IDs are incorrect
2. Google Form is not accepting responses
3. Form requires sign-in

**Solutions:**
1. Double-check Entry IDs from pre-filled link
2. In Google Form settings, ensure "Accepting responses" is ON
3. In Google Form settings, ensure "Restrict to [organization]" is OFF

### Issue: CRM not receiving data

**Note:** The webhook uses `no-cors` mode, so you won't see errors in browser.

**Solutions:**
1. Check CRM webhook logs directly
2. Verify webhook URL is correct
3. Contact CRM support to verify webhook is active

### Issue: Email not received (Enquire Now)

**Solutions:**
1. Check spam/junk folder
2. Verify Web3Forms access key: `2166cd5f-a57a-4eae-91df-ebe88267aa2d`
3. Check Web3Forms dashboard for submission logs

### Issue: "Entry ID" errors in console

**Solution:**
You haven't updated the Entry IDs yet. Follow Step 3 above.

---

## 📁 Files Modified

These files now include dual submission:

1. `/components/utils/dual-form-submit.ts` - Main dual submission logic
2. `/components/Awards.tsx` - Awards section form
3. `/components/EnquiryForm.tsx` - Enquire Now modal
4. `/components/utils/test-dual-submit.ts` - Testing utilities
5. `/App.tsx` - Loads test utilities

---

## 🔐 URLs & Credentials

### Google Forms:
- **Form ID:** `1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA`
- **View URL:** https://docs.google.com/forms/d/e/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/viewform?usp=pp_url
- **Submit URL:** https://docs.google.com/forms/d/e/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/formResponse

### CRM Webhook:
- **URL:** https://apps.cratiocrm.com/Customize/Webhooks/webhook.php?id=395555

### Web3Forms (Email):
- **URL:** https://api.web3forms.com/submit
- **Access Key:** `2166cd5f-a57a-4eae-91df-ebe88267aa2d`
- **Email To:** sales@urbanestrealty.in

---

## 📱 WhatsApp Integration

All forms also trigger WhatsApp redirect:
- **Number:** +91 9972505291
- **Triggered:** When forms are submitted successfully

---

## 🎯 Next Steps

1. [ ] Find and update Google Form Entry IDs (See STEP 1-3 above)
2. [ ] Test form submission on website
3. [ ] Verify data in Google Sheets
4. [ ] Verify data in CRM
5. [ ] Verify email received (for Enquire Now)
6. [ ] Monitor submissions in production

---

## 💡 Pro Tips

### View All Form Submissions:
- **Google Sheets:** Automatically linked to your Google Form
- **CRM Dashboard:** Check your CRM's lead management section
- **Email:** Check sales@urbanestrealty.in inbox

### Rate Limiting:
- Web3Forms has rate limits (handled automatically)
- Google Forms: No rate limits
- CRM Webhook: Depends on your CRM settings

### Data Flow:
```
User Fills Form
      ↓
Submits Data
      ↓
    ┌─────────────┬─────────────┬─────────────┐
    ↓             ↓             ↓             ↓
Google Forms   Webhook    Web3Forms    Success Message
    ↓             ↓             ↓
Google Sheets  CRM DB     Email
```

---

## 🆘 Need Help?

If you're stuck, check these files for reference:
1. `HOW_TO_FIND_ENTRY_IDS.md` - Visual guide for Entry IDs
2. `GOOGLE_FORM_SETUP_GUIDE.md` - Detailed Google Forms setup
3. Open browser console and type `showCurrentConfig()` to see URLs

---

## ✅ Verification Checklist

Before going live:

- [ ] Entry IDs updated in `/components/utils/dual-form-submit.ts`
- [ ] Test submission completed
- [ ] Data appeared in Google Sheets
- [ ] Data appeared in CRM
- [ ] Email received (for Enquire Now)
- [ ] Success message displayed on website
- [ ] No errors in browser console
- [ ] Forms work on mobile and desktop

---

**🎉 Once Entry IDs are updated, you're 100% done!**

All form submissions will automatically go to Google Forms, your CRM, and send email notifications. No further configuration needed!
