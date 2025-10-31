# 🚀 START HERE - Dual Form Submission Setup

## ✅ What's Already Done

Your website forms now submit to **3 systems at once**:

1. **Google Sheets** (via Google Forms)
2. **Your CRM** (via Webhook)
3. **Email** (sales@urbanestrealty.in)

## ⚠️ What You Need to Do (5 Minutes)

### Find Your Google Form Entry IDs

**Step 1:** Go to your Google Form
```
https://docs.google.com/forms/d/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/edit
```

**Step 2:** Click the 3 dots (⋮) → "Get pre-filled link"

**Step 3:** Fill test data in all fields, then click "Get link"

**Step 4:** Copy the URL you get. It will have numbers like:
```
...&entry.123456=Name&entry.789012=Phone&entry.345678=Email
```

**Step 5:** Update this file:
```
/components/utils/dual-form-submit.ts
```

Change line 11-15 from:
```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.YOUR_NAME_ENTRY_ID',
  contact: 'entry.YOUR_CONTACT_ENTRY_ID',
  email: 'entry.YOUR_EMAIL_ENTRY_ID',
};
```

To (using YOUR numbers):
```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.123456',
  contact: 'entry.789012',
  email: 'entry.345678',
};
```

**Step 6:** Save and test!

---

## 🧪 Test It

1. Open your website
2. Fill out any form (Awards section or click "Enquire Now")
3. Submit the form
4. Check:
   - ✅ Google Sheets (should have new row)
   - ✅ Your CRM (should have new lead)
   - ✅ Email inbox (should have notification)

---

## 📚 Need More Help?

**Quick Guide:** Open `QUICK_START_DUAL_FORMS.md`

**Visual Guide:** Open `HOW_TO_FIND_ENTRY_IDS.md`

**Complete Details:** Open `DUAL_SUBMISSION_COMPLETE_GUIDE.md`

**System Overview:** Open `SYSTEM_OVERVIEW.md`

**In Browser:** Press F12, then type: `showEntryIDInstructions()`

---

## 🎯 That's It!

Once you update those Entry IDs, **you're 100% done!**

Every form submission will automatically go to all 3 systems.

---

## 📞 Quick Links

- **Your Google Form:** [Edit Form](https://docs.google.com/forms/d/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/edit)
- **CRM Webhook:** https://apps.cratiocrm.com/Customize/Webhooks/webhook.php?id=395555
- **Email:** sales@urbanestrealty.in
- **WhatsApp:** +91 9972505291

---

**Questions?** Check the documentation files or use browser console commands!

**Last Updated:** October 14, 2025
