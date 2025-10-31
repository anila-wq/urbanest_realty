# 🚀 QUICK START: Enable Google Forms + Webhook

## What You Need to Do (5 Minutes)

### 1️⃣ Get Pre-filled Link from Google Form

Go to: https://docs.google.com/forms/d/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/edit

1. Click **three dots (⋮)** → **"Get pre-filled link"**
2. Fill in test data for all 3 fields
3. Click **"Get link"** → **"COPY LINK"**

### 2️⃣ Extract Entry IDs from the Link

Your link will look like:
```
...&entry.123456=Name&entry.789012=Phone&entry.345678=Email
```

Write down these 3 numbers:
- Name Entry ID: `______________________`
- Contact Entry ID: `______________________`
- Email Entry ID: `______________________`

### 3️⃣ Update the Code

**File:** `/components/utils/dual-form-submit.ts`

**Line 11-15**, change from:
```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.YOUR_NAME_ENTRY_ID',
  contact: 'entry.YOUR_CONTACT_ENTRY_ID',
  email: 'entry.YOUR_EMAIL_ENTRY_ID',
};
```

**To** (using YOUR numbers):
```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.123456',    // ← Your Name entry ID
  contact: 'entry.789012',  // ← Your Contact entry ID
  email: 'entry.345678',    // ← Your Email entry ID
};
```

### 4️⃣ Save & Test

1. Save the file
2. Refresh your website
3. Submit any form (Awards section or Enquire Now button)
4. Check Google Sheets for the new entry

---

## ✅ That's It!

Your forms now send to:
- ✅ Google Sheets
- ✅ Your CRM Webhook
- ✅ Email (sales@urbanestrealty.in)

---

## 📚 More Help?

- **Detailed Guide:** Open `DUAL_SUBMISSION_COMPLETE_GUIDE.md`
- **Visual Guide:** Open `HOW_TO_FIND_ENTRY_IDS.md`
- **Google Forms Setup:** Open `GOOGLE_FORM_SETUP_GUIDE.md`

---

## 🧪 Quick Test

Open browser console (F12) and type:
```javascript
testDualSubmit()
```

Check the results in console and Google Sheets!
