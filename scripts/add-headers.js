import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

const distDir = join(process.cwd(), 'dist');
const headersFile = join(distDir, '_headers');

// Headers content
const headersContent = `/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self' https://*.squarespace.com https://*.sqspcdn.com; base-uri 'self'; form-action 'self';
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
`;

// Also create .htaccess for Apache servers (if using custom domain)
const htaccessContent = `<IfModule mod_headers.c>
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self' https://*.squarespace.com https://*.sqspcdn.com; base-uri 'self'; form-action 'self';"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
`;

try {
  if (existsSync(distDir)) {
    // Write _headers file (for Netlify/Cloudflare Pages)
    writeFileSync(headersFile, headersContent);
    console.log('✅ Created _headers file');
    
    // Write .htaccess file (for Apache servers with custom domain)
    const htaccessFile = join(distDir, '.htaccess');
    writeFileSync(htaccessFile, htaccessContent);
    console.log('✅ Created .htaccess file');
  } else {
    console.error('❌ dist directory not found');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error creating headers files:', error);
  process.exit(1);
}

