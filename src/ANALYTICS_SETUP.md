# 📊 Google Analytics Setup Guide

This guide will help you set up Google Analytics to track visitors, conversions, and user behavior on your Urbanest Realty website.

---

## Why Google Analytics?

Google Analytics will help you:
- **Track visitor numbers** and demographics
- **Understand user behavior** (which pages they visit, how long they stay)
- **Measure conversions** (form submissions, calls, WhatsApp clicks)
- **Optimize marketing campaigns** (see which channels bring the most leads)
- **Make data-driven decisions** for your real estate business

---

## Step 1: Create Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **"Start measuring"** (or "Admin" if you already have an account)
3. **Account Setup:**
   - Account name: `Urbanest Realty`
   - Check the boxes for data sharing settings (recommended)
   - Click "Next"

4. **Property Setup:**
   - Property name: `Urbanest Realty Website`
   - Reporting time zone: `(GMT+05:30) India Standard Time - Kolkata`
   - Currency: `Indian Rupee (₹)`
   - Click "Next"

5. **Business Information:**
   - Industry: `Real Estate`
   - Business size: Select appropriate size
   - How you plan to use Google Analytics: Check relevant boxes
   - Click "Create"

6. **Accept Terms of Service**
   - Read and accept the terms
   - Click "I Accept"

---

## Step 2: Set Up Data Stream

1. After creating the property, you'll see "Choose a platform"
2. Select **"Web"**
3. **Stream Setup:**
   - Website URL: `https://yourdomain.com` (your actual domain)
   - Stream name: `Urbanest Realty Main Site`
   - Enhanced measurement: **Leave all toggles ON** (recommended)
   - Click "Create stream"

4. **Copy Your Measurement ID**
   - You'll see a Measurement ID that looks like: `G-XXXXXXXXXX`
   - **Copy this ID** - you'll need it next!

---

## Step 3: Add Tracking Code to Your Website

### Option A: Using the Pre-configured Code (Easiest)

1. Open the file `/App.tsx`
2. Find line 62 (around there):
   ```typescript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Save the file

**Example:**
```typescript
const GA_MEASUREMENT_ID = 'G-ABC123DEF456'; // Your actual ID
```

### Option B: Manual Setup

If you prefer to add Google Analytics manually:

1. In Google Analytics, go to Admin → Data Streams
2. Click your stream
3. Scroll down to "Tagging Instructions"
4. Copy the Global Site Tag (gtag.js) code
5. Add it to the `<head>` section of your website

---

## Step 4: Verify Installation

1. Visit your website
2. In Google Analytics, go to **Reports → Realtime → Overview**
3. You should see yourself as an active user within 30 seconds
4. Click around your website and watch the realtime data update

**If you don't see data:**
- Wait 5 minutes and refresh
- Check that you replaced the Measurement ID correctly
- Clear your browser cache and try again
- Make sure you're not using an ad blocker

---

## Step 5: Set Up Important Events (Recommended)

Track these important actions on your website:

### A. Enquiry Form Submissions

Already configured! Your enquiry forms automatically track as events.

### B. WhatsApp Button Clicks

Add this tracking to `/components/WhatsAppFloat.tsx`:

```typescript
const handleWhatsAppClick = () => {
  // Track WhatsApp click
  if (window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'WhatsApp Float Button'
    });
  }
  
  const phoneNumber = '917090300066';
  const message = encodeURIComponent('Hi! I\'m interested in learning more about Urbanest Realty properties. Can you please share more details?');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};
```

### C. Phone Number Clicks

Add this tracking to phone links in Footer and Contact:

```typescript
onClick={() => {
  if (window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'engagement',
      event_label: 'Footer Phone Click'
    });
  }
}}
```

---

## Step 6: Create Custom Reports (Optional)

### Lead Generation Dashboard

1. In Google Analytics, go to **Explore**
2. Click **"Blank"** template
3. Add these dimensions:
   - Page title
   - Event name
   - Source/Medium
4. Add these metrics:
   - Users
   - Sessions
   - Events
   - Conversions

5. Save as "Lead Generation Overview"

---

## Important Metrics to Watch

### Daily Metrics
- **Active users:** How many people are on your site right now
- **New vs Returning:** Are you attracting new potential customers?
- **Top pages:** Which projects get the most views?

### Weekly Metrics
- **Traffic sources:** Where do your visitors come from?
  - Organic Search (Google)
  - Direct (typing URL)
  - Social (Facebook, Instagram)
  - Referral (other websites)
- **Enquiry form submissions:** Lead generation success
- **Bounce rate:** Are people staying on your site?

### Monthly Metrics
- **Month-over-month growth:** Is traffic increasing?
- **Top performing pages:** Which properties are most popular?
- **User demographics:** Who is your audience?
- **Device breakdown:** Mobile vs Desktop visitors

---

## Privacy & Compliance

### Important Considerations

1. **Cookie Consent** (Recommended)
   - Add a cookie consent banner
   - Required by GDPR and many privacy laws
   - Use services like: CookieYes, OneTrust, or Termly

2. **Privacy Policy**
   - Update your privacy policy to mention Google Analytics
   - Explain what data you collect and why
   - Link to privacy policy in footer

3. **IP Anonymization** (Already configured)
   - Google Analytics automatically anonymizes IP addresses
   - Complies with most privacy regulations

---

## Troubleshooting

### Not Seeing Any Data?

1. **Check Measurement ID:** Make sure it's correct in `/App.tsx`
2. **Clear Cache:** Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. **Ad Blockers:** Disable ad blockers when testing
4. **Wait:** Analytics data can take 24-48 hours to fully populate
5. **Verify Script:** Check browser console for JavaScript errors

### Data Looks Wrong?

1. **Filter Internal Traffic:** In Admin, add a data filter to exclude your office IP
2. **Check Time Zone:** Make sure it matches your business location
3. **Verify Events:** Test each button/form to ensure tracking works

---

## Next Steps

Once Google Analytics is working:

1. ✅ Set up **Google Search Console** for SEO insights
2. ✅ Create **Google Ads** campaigns (track conversions)
3. ✅ Set up **Facebook Pixel** for social media ads
4. ✅ Configure **conversion goals** (form submissions, calls)
5. ✅ Create **monthly reports** to track growth

---

## Resources

- [Google Analytics Help Center](https://support.google.com/analytics)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/) - Free courses
- [Analytics Debugging Tool](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) - Chrome Extension

---

## Support

Need help with analytics setup?

- **Google Support:** [support.google.com/analytics](https://support.google.com/analytics)
- **Your Team:** Contact your marketing team for campaign tracking
- **Developer:** Contact your web developer for custom event tracking

---

**Status:** ⚠️ Ready to configure (just add your Measurement ID!)

**Last Updated:** October 13, 2025
