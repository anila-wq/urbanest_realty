# 🏢 Urbanest Realty - Complete Setup Guide

Welcome! This guide will help you configure all the features of your real estate landing page.

---

## 📋 Table of Contents

1. [Email Setup](#1-email-setup)
2. [WhatsApp Integration](#2-whatsapp-integration)
3. [Google Maps](#3-google-maps)
4. [Google Analytics](#4-google-analytics)
5. [Social Media Links](#5-social-media-links)
6. [Contact Information](#6-contact-information)
7. [Image Management](#7-image-management)
8. [Performance Optimization](#8-performance-optimization)

---

## 1. 📧 Email Setup

All enquiry forms send to: **sales@urbanestrealty.in**

### Quick Setup with Web3Forms (2 minutes)

1. Go to: **https://web3forms.com**
2. Enter: **sales@urbanestrealty.in**
3. Click "Get Access Key"
4. Check email and verify
5. Open `/components/EnquiryForm.tsx`
6. Find line 52: `const accessKey = 'YOUR_ACCESS_KEY_HERE';`
7. Replace with your actual key

**Status:** ✅ Configured (needs access key)

---

## 2. 💬 WhatsApp Integration

### Current Configuration
- **Phone Number:** +91 7090300066
- **Pre-filled Message:** "Hi! I'm interested in learning more about Urbanest Realty properties..."
- **Button Location:** Bottom left (floating)

### To Change Phone Number
1. Open `/components/WhatsAppFloat.tsx`
2. Find line 19: `const phoneNumber = '917090300066';`
3. Replace with your WhatsApp number (without + or spaces)

**Status:** ✅ Fully Configured

---

## 3. 🗺️ Google Maps

### Current Setup
- Embedded Google Map in Location section
- Shows office location with "Get Directions" link

### To Update Map Location
1. Go to [Google Maps](https://www.google.com/maps)
2. Find your office location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Open `/components/Location.tsx`
6. Replace the iframe around line 158

**Current Address:**
```
1st Floor, No. 2, Shrusti Layout, Phase I,
Basavanapura Main Road, KR Puram,
Bengaluru, Karnataka, 560036
```

**Status:** ✅ Configured (may need exact coordinates)

---

## 4. 📊 Google Analytics

### Setup Instructions

1. **Create Google Analytics Account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Click "Start measuring"
   - Create a property for your website

2. **Get Measurement ID**
   - After creating property, you'll get an ID like `G-XXXXXXXXXX`
   - Copy this ID

3. **Add to Your Website**
   - Open `/App.tsx`
   - Find line 62: `const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';`
   - Replace with your actual Measurement ID

4. **Verify Installation**
   - Visit your website
   - Check Google Analytics Real-Time reports
   - You should see yourself as an active user

**Status:** ⚠️ Needs Configuration

---

## 5. 🔗 Social Media Links

### Currently Configured

| Platform | URL | Status |
|----------|-----|--------|
| Facebook | https://www.facebook.com/people/Urbanest-Realty/... | ✅ Active |
| Instagram | https://www.instagram.com/urbanest_realty/... | ✅ Active |
| LinkedIn | https://www.linkedin.com/in/urbanest-realty-669997303/ | ✅ Active |

### To Update Links
1. Open `/components/Footer.tsx`
2. Find lines 37-41 (socialLinks array)
3. Update the `href` values

**Status:** ✅ Fully Configured

---

## 6. 📞 Contact Information

### Current Details

**Phone:** +91 7090300066
- Used in: Footer, Contact section, WhatsApp button

**Email:** sales@urbanestrealty.in
- Used in: Footer, Contact section, Enquiry forms

**Office Address:**
```
1st Floor, No. 2, Shrusti Layout, Phase I,
Basavanapura Main Road, KR Puram,
Bengaluru, Karnataka, 560036
```

### Files to Update if Changing Contact Info
- `/components/Footer.tsx` (lines 75-105)
- `/components/Contact.tsx` (lines 85, 97, 109)
- `/components/WhatsAppFloat.tsx` (line 19)

**Status:** ✅ Fully Configured

---

## 7. 🖼️ Image Management

### Current Image Structure

```
/images/
├── projects/
│   ├── eastfield.jpg (Project card)
│   ├── elite.jpg (Project card)
│   └── serene.jpg (Project card)
├── team/
│   ├── mohan.jpg (Managing Partner)
│   ├── mehaboob.jpg (Partner)
│   ├── manish.jpg (Strategy Partner)
│   └── nagendra.jpg (Sales Director)
├── awards/
│   ├── award1.jpg (Certificate images)
│   ├── award2.jpg
│   └── award3.jpg
├── about/
│   ├── vision.jpg
│   ├── mission.jpg
│   └── cityscape.jpg
└── testimonials/
    ├── client1.jpg
    ├── client2.jpg
    └── client3.jpg
```

### To Replace Images

1. **Add your images** to the appropriate folder in `/images/`
2. **Use same filename** OR
3. **Update import path** in the component file

### Image Guidelines
- **Format:** JPG, PNG (WebP for best performance)
- **Size:** 
  - Project images: 1200x800px
  - Team photos: 400x400px
  - Awards: 800x600px
- **File size:** Under 500KB per image

**Status:** ✅ Structure Ready (add your images)

---

## 8. ⚡ Performance Optimization

### Current Optimizations

✅ **Lazy Loading** - Images load as you scroll
✅ **Suspense Boundaries** - Sections load independently
✅ **Error Boundaries** - Graceful error handling
✅ **Performance Monitor** - Tracks page performance

### Additional Recommendations

1. **Image Optimization**
   - Use WebP format when possible
   - Compress images before upload
   - Tools: [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app)

2. **Caching**
   - Already configured for static assets
   - Browser caching enabled

3. **Loading Speed**
   - Current: Good (monitored by PerformanceMonitor)
   - Target: < 3 seconds for full page load

**Status:** ✅ Optimized

---

## 🚀 Quick Start Checklist

Use this checklist to get everything up and running:

- [ ] Configure Web3Forms email (5 min)
- [ ] Verify WhatsApp number works
- [ ] Test Google Maps location
- [ ] Set up Google Analytics
- [ ] Verify all social media links
- [ ] Replace placeholder images with actual photos
- [ ] Test contact forms
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify business hours are correct

---

## 📞 Support

If you need help with any of these configurations:

1. Check individual guide files in the root directory
2. Contact your development team
3. Refer to official documentation for each service

---

## 🎉 You're All Set!

Once you complete the checklist above, your Urbanest Realty website will be fully functional and ready to generate leads!

**Last Updated:** October 13, 2025
