# Security Guide for GSI Website

## Security Measures Implemented

### 1. HTTPS Enforcement ✅
- GitHub Pages automatically serves your site over HTTPS
- All connections are encrypted

### 2. Content Security Policy (CSP)
We'll add CSP headers to prevent XSS attacks and control resource loading.

### 3. X-Frame-Options / Frame-Ancestors
Control which sites can embed your site in an iframe.

### 4. Secure iframe Attributes
Add security attributes to the iframe code in Squarespace.

---

## Implementation Steps

### Step 1: Add Security Meta Tags to index.html

Add these security headers to your HTML file.

### Step 2: Configure Frame-Ancestors

Since you want to embed in Squarespace, we need to allow your Squarespace domain.

### Step 3: Update iframe Code with Security Attributes

Add sandbox and other security attributes to the iframe.

---

## What Each Security Measure Does

1. **Content Security Policy (CSP)**: Prevents XSS attacks by controlling what scripts/styles can load
2. **X-Frame-Options / Frame-Ancestors**: Controls which sites can embed your site (prevents clickjacking)
3. **HTTPS**: Encrypts all data in transit
4. **iframe sandbox**: Restricts what the iframe can do
5. **Referrer Policy**: Controls what referrer information is sent

---

## Important Notes

- **Frame-Ancestors**: You'll need to know your Squarespace domain to allow it
- **CSP**: May need adjustment if you add external resources later
- **Testing**: Always test after adding security headers to ensure nothing breaks

