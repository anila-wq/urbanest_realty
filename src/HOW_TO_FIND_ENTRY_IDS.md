# 🚀 Quick Guide: Find Google Form Entry IDs in 2 Minutes

## The Easiest Method (Pre-filled Link)

### Step 1: Open Your Google Form
Go to your form in **EDIT mode**:
https://docs.google.com/forms/d/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/edit

### Step 2: Get Pre-filled Link
1. Click the **three dots (⋮)** in top-right corner
2. Select **"Get pre-filled link"**

### Step 3: Fill Test Data
Enter ANY test data in each field:
- **Name**: `TestName`
- **Contact/Phone**: `9999999999`
- **Email**: `test@test.com`

### Step 4: Get the Link
1. Scroll to bottom
2. Click **"Get link"** button
3. Click **"COPY LINK"**

### Step 5: Extract Entry IDs
Paste the link somewhere. It will look like this:

```
https://docs.google.com/forms/d/e/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/viewform?usp=pp_url&entry.1234567890=TestName&entry.9876543210=9999999999&entry.5556667777=test@test.com
```

**Look for the pattern**: `entry.XXXXXXXXXX=YourTestData`

The numbers between `entry.` and `=` are your Entry IDs!

### Example from the URL above:
- **Name Entry ID**: `1234567890` (full: `entry.1234567890`)
- **Contact Entry ID**: `9876543210` (full: `entry.9876543210`)
- **Email Entry ID**: `5556667777` (full: `entry.5556667777`)

---

## What to Do with These Entry IDs

### Open this file: `/components/utils/dual-form-submit.ts`

### Find this section (around line 11):

```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.YOUR_NAME_ENTRY_ID',      // Replace with actual entry ID
  contact: 'entry.YOUR_CONTACT_ENTRY_ID', // Replace with actual entry ID
  email: 'entry.YOUR_EMAIL_ENTRY_ID',     // Replace with actual entry ID
};
```

### Replace with YOUR actual entry IDs:

```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.1234567890',      // Use YOUR Name entry ID here
  contact: 'entry.9876543210',   // Use YOUR Contact entry ID here
  email: 'entry.5556667777',     // Use YOUR Email entry ID here
};
```

⚠️ **IMPORTANT**: 
- Keep the quotes `' '`
- Keep the `entry.` prefix
- Only replace the numbers

---

## Visual Example

**Before (Default):**
```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.YOUR_NAME_ENTRY_ID',
  contact: 'entry.YOUR_CONTACT_ENTRY_ID',
  email: 'entry.YOUR_EMAIL_ENTRY_ID',
};
```

**After (With YOUR IDs):**
```typescript
const GOOGLE_FORM_ENTRIES = {
  name: 'entry.1234567890',
  contact: 'entry.9876543210',
  email: 'entry.5556667777',
};
```

---

## Test It!

After updating:

1. **Save the file** `/components/utils/dual-form-submit.ts`
2. **Refresh your website**
3. **Fill out any form** (Awards section or Enquire Now button)
4. **Click Submit**
5. **Check your Google Form responses** - You should see a new entry!

---

## Quick Checklist ✅

- [ ] Got pre-filled link from Google Form
- [ ] Extracted all 3 entry IDs from the URL
- [ ] Updated `/components/utils/dual-form-submit.ts` with real entry IDs
- [ ] Saved the file
- [ ] Tested form submission
- [ ] Confirmed data appears in Google Sheets

---

## Still Stuck?

### Common Issues:

**Q: I don't see "Get pre-filled link" option**
- Make sure you're in EDIT mode (not view mode)
- Make sure you own the form or have edit access

**Q: The URL doesn't show entry IDs**
- Make sure you filled in ALL fields before getting the link
- The URL should have `entry.` multiple times

**Q: Form submits but no data in Google Sheets**
- Double-check you copied the entry IDs correctly
- Make sure there are no extra spaces
- Check that Google Form is accepting responses

---

## Need to Contact Support?

When asking for help, provide:
1. The pre-filled URL you generated
2. The entry IDs you extracted
3. Any error messages from browser console (F12)

---

**That's it! You're done! 🎉**

Once you update the entry IDs, your forms will automatically send data to:
✅ Google Sheets
✅ Your CRM Webhook  
✅ Email (sales@urbanestrealty.in)
