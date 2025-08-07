# Logo Integration Instructions

## Current Setup
Your `logo.psd` file has been copied to `public/assets/logo.psd` and is ready for use.

## How to Use Your Logo

### Option 1: Export from Photoshop (Recommended)
1. Open `public/assets/logo.psd` in Adobe Photoshop
2. Export the logo in one of these formats:
   - **PNG** (for photos/images): `File > Export > Export As...` → PNG
   - **SVG** (for vector graphics): `File > Export > Export As...` → SVG
   - **WebP** (modern format): `File > Export > Export As...` → WebP

3. Save the exported file as `logo.png` (or `logo.svg`/`logo.webp`) in `public/assets/`

4. Update the Logo component in `src/components/Logo.jsx`:
   ```jsx
   // Uncomment these lines and comment out the placeholder
   <img 
     src="/assets/logo.png" 
     alt="Still Here: Preserving Our Legacy" 
     className="logo-image"
   />
   ```

### Option 2: Use Online Converters
If you don't have Photoshop:
1. Upload your `logo.psd` to an online converter like:
   - [Convertio](https://convertio.co/psd-png/)
   - [CloudConvert](https://cloudconvert.com/psd-to-png)
2. Download the converted PNG/SVG file
3. Place it in `public/assets/` as `logo.png`

### Option 3: Current Placeholder
The logo component currently shows a styled text placeholder that matches your styleguide typography. This will work until you export the actual logo.

## Logo Styling
The logo component includes:
- Responsive sizing for different screen sizes
- Hover effects and animations
- Multiple size variants (hero, header, footer)
- Proper typography following your styleguide

## File Structure
```
public/
  assets/
    logo.psd          # Your original PSD file
    logo.png          # Export this from PSD (recommended)
    logo.svg          # Alternative vector format
```

## Next Steps
1. Export your logo from the PSD file
2. Place the exported file in `public/assets/`
3. Update the Logo component to use the image
4. Test the logo across different screen sizes

The logo will automatically be responsive and follow your established design system! 