# Environment Setup Guide

## Contact Form Configuration

The contact form uses **Web3Forms** to handle form submissions. You need to configure the Web3Forms access key for the form to work.

### Local Development Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Get your Web3Forms access key:
   - Go to [https://web3forms.com](https://web3forms.com)
   - Log in to your account
   - Find your form or create a new one
   - Copy the **Access Key**

3. Add the access key to `.env.local`:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

4. Restart your development server:
```bash
npm run dev
```

### Production Deployment (Vercel)

If you're deploying to Vercel:

1. Go to your project dashboard on [Vercel](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name:** `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value:** Your Web3Forms access key
   - **Environments:** Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your site for the changes to take effect

### Changing the Recipient Email

To change where form submissions are sent:

1. Log in to your [Web3Forms dashboard](https://web3forms.com/forms)
2. Find your form
3. Update the **Email Address** in the form settings
4. Save changes

No code changes are required! The email is managed entirely through Web3Forms.

### Troubleshooting

**Form shows error message:**
- Check that `NEXT_PUBLIC_WEB3FORMS_KEY` is set correctly
- Verify the access key is valid in your Web3Forms dashboard
- Check browser console for detailed error messages
- Restart your dev server after adding environment variables

**Form submits but no email received:**
- Verify the email address in your Web3Forms dashboard
- Check your spam folder
- Ensure the form in Web3Forms is active

**Need help?**
- Contact Web3Forms support at [https://web3forms.com/support](https://web3forms.com/support)

