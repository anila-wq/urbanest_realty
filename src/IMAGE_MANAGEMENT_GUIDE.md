# 📸 Urbanest Realty - Image Management Guide

This guide explains how to manage all images in the Urbanest Realty website through the local `/images` folder system.

## 📂 Folder Structure

```
/images/
├── hero-background.jpg        # Main hero section background
├── eastfield-logo.png         # Eastfield project logo
├── projects/                  # Project showcase images
│   ├── eastfield.jpg
│   ├── elite.jpg
│   └── serene.jpg
├── team/                      # Team member photos
│   ├── manish.jpg
│   ├── mehaboob.jpg
│   ├── mohan.jpg
│   └── nagendra.jpg
├── awards/                    # Award ceremony photos
│   ├── award1.jpg
│   ├── award2.jpg
│   └── award3.jpg
├── about/                     # About Us section images
│   ├── vision.jpg
│   ├── mission.jpg
│   └── cityscape.jpg
├── testimonials/              # Client/testimonial photos
│   ├── client1.jpg
│   ├── client2.jpg
│   └── client3.jpg
└── location/                  # Location images
    ├── map.jpg
    └── neighborhood.jpg
```

## 🔧 How to Update Images

### Method 1: Replace Files (Easiest)
1. **Keep the same filename** and replace the file directly in the folder
2. **Example**: Replace `/images/hero-background.jpg` with your new image
3. The website automatically uses the new image

### Method 2: Change Filenames
1. **Add your new image** to the appropriate folder
2. **Update the filename** in `/components/constants/images.ts`
3. **Example**:
   ```typescript
   export const HERO_IMAGES = {
     background: '/images/my-new-hero.jpg', // Update this path
     eastfieldLogo: '/images/eastfield-logo.png',
   };
   ```

## 📋 Image Categories & Components

### 🏠 Hero Section (`/components/Hero.tsx`)
**Configuration**: `HERO_IMAGES` in `/components/constants/images.ts`
- `background` → Main hero background image
- `eastfieldLogo` → Eastfield project logo (top-right)

### 🏗️ Projects Section (`/components/Projects.tsx`)
**Configuration**: `PROJECT_IMAGES` in `/components/constants/images.ts`
- `eastfield` → Eastfield project showcase image
- `elite` → Elite-35 project showcase image  
- `serene` → Serene Exotica project showcase image

### 👥 Team Section (`/components/AboutUs.tsx`)
**Configuration**: `TEAM_IMAGES` in `/components/constants/images.ts`
- `manish` → Manish Batra's photo
- `mehaboob` → Shaik Mehaboob Basha's photo
- `mohan` → Mohan R's photo
- `nagendra` → Nagendra K's photo

### 🏆 Awards Section (`/components/Awards.tsx`)
**Configuration**: `AWARD_IMAGES` in `/components/constants/images.ts`
- `award1` → Times Business Awards ceremony photo
- `award2` → ET Business Awards ceremony photo
- `award3` → Property Awards ceremony photo

### ℹ️ About Us Section (`/components/AboutUs.tsx`)
**Configuration**: `ABOUT_IMAGES` in `/components/constants/images.ts`
- `vision` → Vision section background image
- `mission` → Mission section background image
- `cityscape` → About Us hero section image

### 💬 Testimonials Section (`/components/Testimonials.tsx`)
**Configuration**: `TESTIMONIAL_IMAGES` in `/components/constants/images.ts`
- `client1` → First client photo
- `client2` → Second client photo
- `client3` → Third client photo

### 📍 Location Section (`/components/Location.tsx`)
**Configuration**: `LOCATION_IMAGES` in `/components/constants/images.ts`
- `map` → Location map image
- `neighborhood` → Neighborhood showcase image

## 🎯 Quick Upload Process

When someone selects an image element and wants to replace it:

1. **Identify the image** you want to replace
2. **Save your new image** to the correct folder in `/images/`
3. **Either**:
   - Replace the existing file (keep same name), OR
   - Update the path in `/components/constants/images.ts`

## 📝 Image Requirements

### Recommended Specifications
- **Format**: JPG for photos, PNG for logos/graphics
- **Hero Background**: 1920x1080px or larger
- **Project Images**: 1200x800px (landscape)
- **Team Photos**: 400x400px (square)
- **Award Photos**: Original ceremony photos
- **Quality**: High resolution, under 2MB per file

### File Naming Convention
- Use **lowercase** with **hyphens** for spaces
- Examples: `hero-background.jpg`, `eastfield-logo.png`

## 🚀 Adding New Image Categories

To add new image types:

1. **Create folder** in `/images/` (e.g., `/images/gallery/`)
2. **Add images** to the folder
3. **Update** `/components/constants/images.ts`:
   ```typescript
   export const GALLERY_IMAGES = {
     image1: '/images/gallery/photo1.jpg',
     image2: '/images/gallery/photo2.jpg',
   };
   
   export const ALL_IMAGES = {
     hero: HERO_IMAGES,
     projects: PROJECT_IMAGES,
     // ... existing categories ...
     gallery: GALLERY_IMAGES, // Add new category
   };
   ```
4. **Import and use** in your component:
   ```typescript
   import { GALLERY_IMAGES } from './constants/images';
   ```

## 🔍 Troubleshooting

### Image Not Loading
- Check file path in `/components/constants/images.ts`
- Verify file exists in `/images/` folder
- Ensure filename matches exactly (case-sensitive)
- Clear browser cache

### Performance Issues
- Optimize images (compress if over 2MB)
- Use JPG for photos, PNG for graphics
- Consider WebP format for better compression

---

## ✅ Benefits of This System

- **🎯 Easy Management**: Change any image by replacing files or updating one config file
- **🗂️ Organized Structure**: All images in logical folders
- **⚡ Better Performance**: Local images load faster than external URLs
- **🔒 Reliable**: No dependency on external image services
- **🛠️ Developer Friendly**: Clear structure for easy maintenance
- **📱 Future-Proof**: Easy to extend with new image categories

---

**📞 Need Help?**
1. Check this guide first
2. Verify paths in `/components/constants/images.ts`
3. Ensure images are in the correct `/images/` subfolder