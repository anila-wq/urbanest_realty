# 📸 Image Upload & Management Guide for Urbanest Realty

## 🚫 Important: Physical File Upload Limitation

**In Figma Make, you CANNOT directly upload physical image files to folders.** The images you see in your `/images/` and `/components/constants/images/` folders are NOT actually working. Here's how image management actually works:

## ✅ Method 1: Figma Asset Import (RECOMMENDED - What You Just Did!)

When you attach an image to a message, Figma Make automatically creates a Figma asset that you can import:

```javascript
// Your Times Business Award image is now available as:
award1: 'figma:asset/af4ae3fabe9ee4219ef0a512eeb0af1bbc517f15.png'
```

**This is the BEST method for your own images!**

## ✅ Method 2: External Hosting (Alternative)

Host your images on external services and use direct URLs:
- **Cloudinary** (cloudinary.com) 
- **ImageKit** (imagekit.io)
- **Imgur** (imgur.com)
- **Direct website URLs** (like your current hero background: https://www.urbanestrealty.in/eastfield/img/g2.png)

## ✅ Method 3: Unsplash Tool (For Stock Photos)

For professional stock photos, I can use the built-in Unsplash tool.

## 🔧 How to Upload YOUR Images:

### Step 1: Attach Image to Message
- Simply attach/paste your image in a message to me
- I'll get the figma asset path automatically

### Step 2: I Update the Constants
- I'll update `/components/constants/images.ts` with the new figma asset path
- The image will immediately work throughout your site

### Step 3: Clean File Structure
- Ignore the `/images/` folders - they don't actually work
- All real images are handled through the constants file

## 🎯 Current Status: FIXED!

✅ **Your Times Business Award image is now working!**
- Used your uploaded image: `figma:asset/af4ae3fabe9ee4219ef0a512eeb0af1bbc517f15.png`
- Award1 will now display your actual award ceremony photo
- Other awards still use the previous figma assets

## 📋 To Upload More Images:

1. **Attach the image** in a message to me
2. **Tell me which image** you want to replace (e.g., "Replace award2", "Replace Eastfield project image")
3. **I'll update** the constants file immediately
4. **Image works instantly** across your entire site

## ⚠️ Common Mistakes to Avoid:

❌ **Don't try to upload files to folders** - It won't work
❌ **Don't use relative paths** like `./images/photo.jpg` - They don't exist
❌ **Don't manually edit image folders** - Use the constants file instead

## 💡 Pro Tips:

- **Quality**: Upload high-resolution images for best results
- **Format**: PNG with transparency for logos, JPG for photos
- **Size**: Optimize images before uploading (under 2MB recommended)
- **Batch Upload**: Send multiple images in one message for faster processing

**Remember: The `/images/` folders you see are just placeholders and don't actually work in Figma Make!**