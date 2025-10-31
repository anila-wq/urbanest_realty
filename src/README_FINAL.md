# 🏢 Urbanest Realty - Website Documentation

**Last Updated:** October 14, 2025

---

## 🚀 Quick Start (5 Minutes)

### Setup Google Forms Integration:

1. **Get Google Form Entry IDs:**
   - Go to: https://docs.google.com/forms/d/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/edit
   - Click 3 dots (⋮) → "Get pre-filled link"
   - Fill test data → Copy link
   - Extract `entry.XXXXX` numbers from URL

2. **Update File:**
   - Open: `/components/utils/dual-form-submit.ts`
   - Lines 11-15: Replace placeholder Entry IDs with YOUR numbers
   - Save file

3. **Test:**
   - Submit a form on your website
   - Check: Google Sheets, CRM, Email

✅ **Done!** Forms now submit to all 3 systems.

---

## 📊 System Overview

### Form Submission Flow:
```
User Submits Form
       ↓
   ┌───┴───┬─────────┬─────────┐
   ↓       ↓         ↓         ↓
Google  CRM     Web3Forms  Success
Sheets Webhook   (Email)   Message
```

### Where Forms Are:
- **Awards Section:** Bottom of Awards page
- **Enquire Now:** Modal (all "Enquire Now" buttons)

### Where Data Goes:
- **Google Sheets:** Automatic logging
- **CRM:** https://apps.cratiocrm.com/.../webhook.php?id=395555
- **Email:** sales@urbanestrealty.in

---

## 🧪 Testing & Debugging

### Browser Console Commands:
```javascript
testDualSubmit()              // Test with sample data
showEntryIDInstructions()     // Show Entry ID guide
showCurrentConfig()           // Show all URLs
```

### Common Issues:

**Forms not submitting?**
- Check browser console (F12) for errors
- Verify Entry IDs are updated
- Clear cache and hard refresh

**Data not in Google Sheets?**
- Verify Entry IDs match your form
- Check Google Form is accepting responses

**CRM not receiving data?**
- Check CRM webhook logs (no-cors mode prevents browser errors)

**Email not received?**
- Check spam folder
- Verify: sales@urbanestrealty.in

---

## 📁 Key Files

### Components:
- `/App.tsx` - Main application
- `/components/Hero.tsx` - Hero section with dark theme
- `/components/Projects.tsx` - 3 projects with horizontal carousel
- `/components/Awards.tsx` - Awards with form submission
- `/components/EnquiryForm.tsx` - Enquire Now modal

### Form Logic:
- `/components/utils/dual-form-submit.ts` - Triple submission logic
- `/components/utils/form-validation.ts` - Input validation
- `/components/utils/test-dual-submit.ts` - Testing utilities

### Images:
- `/images/` - All image assets
- `/components/constants/images.ts` - Image imports

---

## 🔧 Configuration

### URLs:
- **Google Form:** 1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA
- **CRM Webhook:** https://apps.cratiocrm.com/Customize/Webhooks/webhook.php?id=395555
- **Email:** sales@urbanestrealty.in
- **WhatsApp:** +91 9972505291

### Analytics:
- **Google Ads ID:** AW-11565888128
- **Web3Forms Key:** 2166cd5f-a57a-4eae-91df-ebe88267aa2d

---

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark theme Hero section
- ✅ Light grey theme for other sections
- ✅ Horizontal carousels for projects
- ✅ Smooth scrolling navigation
- ✅ WhatsApp float button
- ✅ Google Ads tracking
- ✅ Triple form submission (Google/CRM/Email)
- ✅ Form validation
- ✅ Success/error messages

---

## 🎯 Next Steps After Setup

### Content Updates:
1. Replace placeholder images with actual property photos
2. Update project details (prices, descriptions)
3. Add more testimonials
4. Update team member information

### SEO Optimization:
1. Add meta descriptions
2. Optimize image alt tags
3. Add structured data (schema.org)
4. Submit sitemap to Google

### Marketing:
1. Connect Google Analytics (replace G-XXXXXXXXXX in App.tsx)
2. Set up Google Ads campaigns
3. Create social media profiles
4. Set up email marketing

### Monitoring:
1. Check form submissions daily (first week)
2. Monitor Google Sheets for leads
3. Track CRM integration
4. Review email delivery

---

## 📞 Support

### Quick Links:
- [Edit Google Form](https://docs.google.com/forms/d/1FAIpQLSfg5KxUvwdGUJ6zKENzKJd_xt2PBwt10-vFj79qtekZ0HL1XA/edit)
- Email: sales@urbanestrealty.in
- WhatsApp: +91 9972505291

### Troubleshooting:
- Check browser console (F12)
- Run `testDualSubmit()` in console
- Review form submissions in Google Sheets
- Check CRM webhook logs

---

## ✅ Checklist

- [ ] Google Form Entry IDs updated
- [ ] Test form submission completed
- [ ] Data verified in Google Sheets
- [ ] Data verified in CRM
- [ ] Email received and tested
- [ ] Mobile responsive tested
- [ ] All images loading correctly
- [ ] WhatsApp integration tested
- [ ] Team trained on system

---

**Status:** 95% Complete - Update Entry IDs to finish!

**Questions?** Open browser console and type: `showEntryIDInstructions()`
