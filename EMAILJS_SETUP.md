# EmailJS Setup Guide

If the contact form is showing "Sending..." indefinitely, it means EmailJS is not configured. Follow these steps:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (e.g., `service_xxxxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. **IMPORTANT**: Use these exact variable names in your template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{reply_to}}

Message:
{{message}}
```

**Template Variable Names (MUST match exactly):**

- `{{from_name}}` - Name of the sender
- `{{reply_to}}` - Email address of the sender
- `{{message}}` - The message content

**To Email**: Set this to your email address (e.g., `hailugs19742009@gmail.com`)

4. Click **Save** and copy your **Template ID** (e.g., `template_xxxxxxxxx`)

**⚠️ CRITICAL**: The form field names in Contact.jsx MUST match the template variables:

- Form input `name="from_name"` → Template variable `{{from_name}}`
- Form input `name="reply_to"` → Template variable `{{reply_to}}`
- Form textarea `name="message"` → Template variable `{{message}}`

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxxxxxxx`)

## Step 5: Create Environment File

1. Create a file named `.env` in the `frontend` folder
2. Add these variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**

```env
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_abc456
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnopqrstuvwxyz
```

## Step 6: Restart Your Dev Server

After creating the `.env` file:

1. Stop your development server (Ctrl+C)
2. Start it again: `npm run dev`

## Step 7: Test the Form

1. Fill out the contact form
2. Click "Send Message"
3. Check your email inbox for the message

## Troubleshooting

### Error 400 (Bad Request)

This means EmailJS received your request but rejected it. Common causes:

1. **Template variables don't match form fields**

   - Form uses: `from_name`, `reply_to`, `message`
   - Template MUST use: `{{from_name}}`, `{{reply_to}}`, `{{message}}`
   - Check EmailJS template settings and ensure variable names match exactly

2. **Missing "To Email" in template**

   - Go to Email Templates → Edit your template
   - Set "To Email" field to your email address

3. **Form validation failed**
   - Make sure all fields are filled before submitting
   - Check browser console for validation errors

### Other Issues

- **Still showing "Sending..."**: Check browser console (F12) for errors
- **Environment variables not loading**: Make sure the file is named exactly `.env` (not `.env.txt`)
- **Variables undefined**: Restart the dev server after creating `.env`
- **Error 401**: Invalid Public Key - check your EmailJS account settings
- **Error 404**: Service or Template ID incorrect
- **Email not received**: Check EmailJS dashboard → Logs for delivery status

## Alternative: Use Direct Email Link

If EmailJS setup is complex, you can modify the form to use `mailto:` links instead. Let me know if you need help with that!
