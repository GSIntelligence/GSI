# Embedding Your React Site in Squarespace via iframe

Your site is live at: **https://GSIntelligence.github.io/GSI/**

## Method 1: Using Code Block (Recommended)

### Step 1: Add a Code Block
1. Log into your Squarespace site editor
2. Navigate to the page where you want to embed the site
3. Click **"Edit"** on the page
4. Click the **"+"** button to add a new block
5. Select **"Code"** from the block options

### Step 2: Paste the Secure iframe Code
Copy and paste this code into the code block:

```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 150%; overflow: hidden;">
  <iframe 
    src="https://GSIntelligence.github.io/GSI/" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    title="GSI Software - Custom Software Solutions"
    allow="fullscreen"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox">
  </iframe>
</div>
```

### Step 3: Save and Publish
1. Click **"Apply"** or **"Save"** in the code block
2. Click **"Save"** on the page
3. Click **"Publish"** to make it live

---

## Method 2: Using Embed Block

### Step 1: Add an Embed Block
1. Click **"+"** to add a new block
2. Select **"Embed"** from the block options

### Step 2: Enter the URL
1. In the embed block, enter: `https://GSIntelligence.github.io/GSI/`
2. Squarespace will automatically create an iframe

### Step 3: Adjust Settings
- You may need to adjust the height/width in the embed block settings
- Recommended height: **2000px** (to show the full site)

---

## Method 3: Custom Code Injection (Full Page)

If you want the iframe to take up the entire page:

### Step 1: Go to Settings
1. Go to **Settings** → **Advanced** → **Code Injection**

### Step 2: Add to Page Header (for specific page)
Add this code to the page header code injection:

```html
<style>
  .Main-content {
    padding: 0 !important;
  }
  #siteWrapper {
    padding: 0 !important;
  }
</style>
<div style="width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: 9999;">
  <iframe 
    src="https://GSIntelligence.github.io/GSI/" 
    style="width: 100%; height: 100%; border: none;"
    title="GSI Software"
    allow="fullscreen">
  </iframe>
</div>
```

---

## Recommended: Responsive iframe Code

For the best mobile experience, use this code in a Code block:

```html
<div style="position: relative; width: 100%; padding-bottom: 150%; height: 0; overflow: hidden; background: #f9fafb;">
  <iframe 
    src="https://GSIntelligence.github.io/GSI/" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; min-height: 2000px;"
    title="GSI Software - Custom Software Solutions"
    allow="fullscreen"
    scrolling="yes"
    loading="lazy">
  </iframe>
</div>
```

**Note:** Adjust `padding-bottom: 150%` to change the iframe height:
- `100%` = Square (1:1 ratio)
- `150%` = Taller (good for long pages)
- `200%` = Very tall (for very long content)

---

## Mobile Optimization Tips

1. **Test on Mobile**: Always preview your Squarespace site on mobile devices
2. **Adjust Height**: You may need to increase the height for mobile viewing
3. **Consider a Separate Mobile Page**: You could create a mobile-optimized version

---

## Troubleshooting

### Issue: iframe shows blank/white screen
**Solution**: 
- Make sure the URL is correct: `https://GSIntelligence.github.io/GSI/`
- Check that your GitHub Pages site is accessible in a regular browser
- Clear your browser cache

### Issue: iframe is too small/large
**Solution**: 
- Adjust the `padding-bottom` percentage in the code
- Or set a fixed height: `height: 2000px;` instead of `padding-bottom`

### Issue: Content is cut off
**Solution**: 
- Increase the `padding-bottom` percentage
- Or change `overflow: hidden` to `overflow: auto`

### Issue: iframe doesn't scroll
**Solution**: 
- Add `scrolling="yes"` to the iframe tag
- Or increase the container height

---

## Best Practices

1. **Use Code Block**: Most reliable method for custom iframes
2. **Set Appropriate Height**: Make sure the iframe is tall enough to show all content
3. **Test Responsively**: Check how it looks on desktop, tablet, and mobile
4. **Consider Performance**: The `loading="lazy"` attribute helps with page load speed

---

## Quick Copy-Paste Code (Recommended - Secure Version)

Use this in a **Code Block**:

```html
<div style="position: relative; width: 100%; padding-bottom: 150%; height: 0; overflow: hidden;">
  <iframe 
    src="https://GSIntelligence.github.io/GSI/" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; min-height: 2000px;"
    title="GSI Software - Custom Software Solutions"
    allow="fullscreen"
    scrolling="yes"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox">
  </iframe>
</div>
```

This code is:
- ✅ Fully responsive
- ✅ Mobile-friendly
- ✅ Scrollable
- ✅ Optimized for performance

