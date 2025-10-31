# 🔧 Troubleshooting Guide - Urbanest Realty

Quick solutions to common issues you might encounter.

---

## 📧 Email Forms Not Working

### Issue: "Form submits but no email received"

**Causes:**
- Web3Forms access key not added
- Wrong email address in Web3Forms
- Email in spam folder

**Solutions:**

1. **Check Access Key**
   - Open `/components/EnquiryForm.tsx`
   - Line 52: Verify access key is added
   - Should look like: `const accessKey = 'abc123def456';`
   - NOT like: `const accessKey = 'YOUR_ACCESS_KEY_HERE';`

2. **Verify Email Address**
   - Go to https://web3forms.com
   - Check which email is associated with your key
   - Should be: sales@urbanestrealty.in

3. **Check Spam Folder**
   - Check spam/junk folder in sales@urbanestrealty.in
   - Mark as "Not Spam" if found there
   - Add web3forms.com to safe senders list

4. **Test with Different Email**
   - Try submitting with a different email address
   - Check if problem persists

5. **Browser Console**
   - Right-click → Inspect → Console
   - Look for error messages
   - Share errors with developer if needed

---

## 💬 WhatsApp Button Not Working

### Issue: "WhatsApp button doesn't open chat"

**Causes:**
- Wrong phone number format
- WhatsApp not installed (desktop)
- Browser blocking popup

**Solutions:**

1. **On Mobile:**
   - Ensure WhatsApp app is installed
   - Try clicking button again
   - Check if browser is blocking popups
   - Try different browser

2. **On Desktop:**
   - WhatsApp Web will open instead
   - Make sure you're logged in to WhatsApp Web
   - Try using WhatsApp desktop app

3. **Check Phone Number Format:**
   - Open `/components/WhatsAppFloat.tsx`
   - Line 19: Should be `'917090300066'`
   - NO spaces, NO dashes, NO + symbol

4. **Test on Different Device:**
   - Sometimes device-specific issue
   - Test on another phone

---

## 🗺️ Google Maps Not Showing

### Issue: "Map shows blank or grey box"

**Causes:**
- Slow internet connection
- Google Maps temporarily down
- Incorrect embed code
- Ad blocker interference

**Solutions:**

1. **Wait and Refresh:**
   - Maps can take 5-10 seconds to load
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

2. **Check Internet:**
   - Verify you have internet connection
   - Try loading google.com to test

3. **Disable Ad Blocker:**
   - Some ad blockers block Google Maps
   - Temporarily disable and reload page

4. **Try Different Browser:**
   - Test in Chrome, Firefox, or Safari
   - Maps work best in Chrome

5. **Verify Embed Code:**
   - Open `/components/Location.tsx`
   - Check iframe src URL is complete
   - Should start with: `https://www.google.com/maps/embed`

---

## 📊 Google Analytics Not Tracking

### Issue: "No data in Google Analytics"

**Causes:**
- Measurement ID not added
- Wrong Measurement ID
- Ad blocker blocking tracking
- Need to wait 24-48 hours

**Solutions:**

1. **Verify Measurement ID:**
   - Open `/App.tsx`
   - Line 62: Check ID is correct
   - Should look like: `G-ABC123DEF456`
   - Get correct ID from Google Analytics

2. **Check Real-Time Reports:**
   - Don't use main reports (they have 24-48 hour delay)
   - Go to: Reports → Real-Time → Overview
   - Open your website in another tab
   - You should see 1 active user (yourself)

3. **Disable Ad Blockers:**
   - Ad blockers prevent analytics
   - Test with ad blocker disabled

4. **Wait 24-48 Hours:**
   - Full reports take time to populate
   - Real-time should work immediately though

5. **Clear Browser Cache:**
   - Ctrl+Shift+Delete (Windows)
   - Cmd+Shift+Delete (Mac)
   - Clear cache and reload

---

## 📱 Mobile Layout Issues

### Issue: "Website looks broken on mobile"

**Causes:**
- Browser cache
- Specific device issue
- Responsive design not loading

**Solutions:**

1. **Clear Browser Cache:**
   - On iPhone: Settings → Safari → Clear History
   - On Android: Chrome → Settings → Privacy → Clear Data

2. **Hard Refresh:**
   - Pull down to refresh on mobile
   - Or close and reopen browser

3. **Try Different Browser:**
   - Test in Chrome, Safari, Firefox
   - Compare if issue is browser-specific

4. **Check Zoom Level:**
   - Make sure page isn't zoomed in
   - Double-tap or pinch to reset zoom

5. **Update Browser:**
   - Make sure using latest browser version
   - Update if needed

---

## 🖼️ Images Not Loading

### Issue: "Images show broken icon or don't appear"

**Causes:**
- Slow internet connection
- Image files missing
- Wrong file paths
- Image file too large

**Solutions:**

1. **Check Internet Connection:**
   - Verify internet is working
   - Try loading other websites

2. **Wait for Images to Load:**
   - Images are lazy-loaded (load as you scroll)
   - Scroll to section and wait 2-3 seconds

3. **Hard Refresh:**
   - Ctrl+Shift+R (Windows)
   - Cmd+Shift+R (Mac)

4. **Check Browser Console:**
   - Right-click → Inspect → Console
   - Look for 404 errors (file not found)
   - Note which images are failing

5. **Verify Image Files:**
   - Check `/images/` folder
   - Make sure all images are present
   - Verify file names match imports

---

## 🔗 Links Not Working

### Issue: "Social media or other links don't open"

**Causes:**
- Popup blocker
- Wrong URL
- Link target page down

**Solutions:**

1. **Check Popup Blocker:**
   - Allow popups for your site
   - Links opening in new tab may be blocked

2. **Try Right-Click → Open:**
   - Right-click the link
   - Select "Open in new tab"
   - Bypasses some blockers

3. **Verify URLs:**
   - Check Footer.tsx for social links
   - Make sure URLs are complete
   - Should start with `https://`

4. **Test Link Directly:**
   - Copy link URL
   - Paste in new browser tab
   - See if destination page loads

---

## 🐌 Slow Page Loading

### Issue: "Website takes too long to load"

**Causes:**
- Large image files
- Slow internet connection
- Server issues
- Too many resources loading

**Solutions:**

1. **Check Internet Speed:**
   - Go to fast.com or speedtest.net
   - Verify you have decent connection
   - Try different network if possible

2. **Optimize Images:**
   - See OPTIMIZATION_GUIDE.md
   - Compress images before uploading
   - Use tools like TinyPNG

3. **Clear Browser Cache:**
   - Sometimes old cache slows things down
   - Clear and reload

4. **Check Hosting:**
   - If using shared hosting, might be slow
   - Consider upgrading hosting plan
   - Vercel/Netlify recommended for speed

5. **Disable Extensions:**
   - Browser extensions can slow loading
   - Test in incognito/private mode
   - Disable extensions one by one

---

## 🔴 Console Errors

### Issue: "Browser console shows errors"

**Causes:**
- Various JavaScript errors
- Missing files
- Network issues

**Solutions:**

1. **Check Error Message:**
   - Read the error carefully
   - Note the file name and line number
   - Google the error message

2. **Common Errors:**

   **"Cannot read property of undefined"**
   - Usually data loading issue
   - Might resolve after page fully loads

   **"404 Not Found"**
   - File is missing
   - Check file path in imports

   **"Failed to fetch"**
   - Network issue
   - Check internet connection

3. **Hard Refresh:**
   - Ctrl+Shift+R clears and reloads
   - Fixes many random errors

4. **Check All Files Present:**
   - Verify all imports exist
   - Check image files in /images/
   - Verify component files

---

## 📋 Form Validation Issues

### Issue: "Form won't submit" or "Validation errors"

**Causes:**
- Required fields empty
- Invalid email format
- Invalid phone number

**Solutions:**

1. **Fill All Required Fields:**
   - Look for fields marked with *
   - Make sure no field is empty
   - Enter valid data

2. **Email Format:**
   - Must include @ symbol
   - Example: name@domain.com
   - No spaces allowed

3. **Phone Number:**
   - Enter 10 digit number
   - Can include spaces or dashes
   - Example: +91 7090300066

4. **Check Checkbox:**
   - Agreement checkbox must be checked
   - Click the checkbox before submitting

---

## 🌐 Browser Compatibility

### Issue: "Website works in Chrome but not Safari/Firefox"

**Causes:**
- Browser-specific CSS issues
- JavaScript compatibility
- Old browser version

**Solutions:**

1. **Update Browser:**
   - Make sure browser is up to date
   - Old versions may not support features

2. **Clear Browser Data:**
   - Each browser has its own cache
   - Clear data in the problematic browser

3. **Disable Extensions:**
   - Extensions can cause issues
   - Test in private/incognito mode

4. **Check Console:**
   - Open developer tools
   - Look for browser-specific errors
   - Share with developer if needed

---

## 🚫 Site Not Loading At All

### Issue: "Website completely won't load"

**Causes:**
- Domain not configured
- Hosting down
- DNS issues
- Maintenance mode

**Solutions:**

1. **Check Domain:**
   - Verify domain is registered
   - Check domain hasn't expired
   - Verify DNS settings

2. **Check Hosting:**
   - Log into hosting provider
   - Verify account is active
   - Check for service status

3. **Check URL:**
   - Make sure you're using correct URL
   - Try with www and without www
   - Try http:// and https://

4. **Check on Different Network:**
   - Try different WiFi
   - Try mobile data
   - Try VPN if available

5. **Wait and Retry:**
   - DNS changes take 24-48 hours
   - Temporary hosting issues
   - Try again in an hour

---

## 🔍 SEO Issues

### Issue: "Website not showing in Google search"

**Causes:**
- Too new (not indexed yet)
- robots.txt blocking
- No sitemap submitted
- Need time for indexing

**Solutions:**

1. **Wait for Indexing:**
   - New sites take 1-4 weeks
   - Google needs to discover you
   - Be patient

2. **Submit to Google:**
   - Go to Google Search Console
   - Submit your URL
   - Submit sitemap if you have one

3. **Check robots.txt:**
   - Make sure not blocking search engines
   - Should allow indexing

4. **Create Content:**
   - More content = better SEO
   - Add blog posts
   - Update content regularly

---

## 📞 Getting More Help

### If nothing above works:

1. **Check Documentation:**
   - Review COMPLETE_SETUP_GUIDE.md
   - Review OPTIMIZATION_GUIDE.md
   - Check other guides in root folder

2. **Browser Console:**
   - Right-click → Inspect → Console
   - Screenshot any errors
   - Share with technical support

3. **Network Tab:**
   - Right-click → Inspect → Network
   - Reload page
   - Check for failed requests (red)

4. **Test in Incognito:**
   - Rules out cache/extension issues
   - Ctrl+Shift+N (Windows)
   - Cmd+Shift+N (Mac)

5. **Contact Support:**
   - **Web3Forms:** https://web3forms.com/contact
   - **Google Analytics:** https://support.google.com/analytics
   - **Your Developer:** Share specific error messages

---

## ✅ Prevention Checklist

To avoid issues:

- [ ] Keep browser updated
- [ ] Clear cache monthly
- [ ] Test on multiple devices
- [ ] Monitor email delivery
- [ ] Check Google Analytics weekly
- [ ] Test all forms monthly
- [ ] Keep documentation handy
- [ ] Backup website regularly

---

## 🎯 Quick Reference

**Most Common Issues:**
1. Forms not sending - Check Web3Forms key
2. WhatsApp not working - Test on mobile
3. Images not loading - Clear cache
4. Slow loading - Optimize images
5. Analytics not working - Check Measurement ID

**Emergency Contacts:**
- Phone: +91 7090300066
- Email: sales@urbanestrealty.in

---

**Document Version:** 1.0  
**Last Updated:** October 13, 2025  
**For Technical Issues:** Refer to documentation or contact developer
