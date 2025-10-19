# Quick Start Guide

## ⚡ Get Your Portfolio Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your EmailJS credentials (optional for now):
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

### Step 3: Start Development Server
```bash
npm start
```

The app will automatically open at `http://localhost:3000`

---

## 🎨 Customize Your Portfolio

### 1. Update Your Name & Title
**File**: `src/components/Header.jsx`
```javascript
<h1 className="text-xl font-bold text-gray-900 dark:text-white">Your Name</h1>
<p className="text-sm text-gray-600 dark:text-gray-300">Your Title</p>
```

### 2. Update Hero Section
**File**: `src/components/Hero.jsx`
- Change the introduction text
- Update button links
- Replace hero image path

### 3. Add Your Skills
**File**: `src/components/Skills.jsx`
```javascript
const skills = [
  { name: 'Your Skill', icon: <IconComponent />, level: 90, category: 'Category' },
];
```

### 4. Update Projects
**File**: `src/components/Projects.jsx`
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Description',
    technologies: ['Tech1', 'Tech2'],
    image: '/img/your-image.jpg',
    github: 'https://github.com/...',
    live: 'https://demo.com',
  },
];
```

### 5. Update Contact Info
**File**: `src/components/Contact.jsx`
- Update email address
- Update phone number
- Update location

### 6. Update Social Links
**File**: `src/components/Footer.jsx`
- Update Instagram link
- Update LinkedIn link
- Update GitHub link

---

## 🚀 Deploy Your Portfolio

### Option 1: Netlify (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set environment variables in Netlify dashboard
6. Deploy!

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: GitHub Pages
```bash
npm run build
# Then push the build folder to GitHub Pages
```

---

## 🌙 Features to Explore

- **Dark Mode**: Click the moon icon in the header
- **Mobile Menu**: Responsive navigation on small screens
- **Skill Filtering**: Filter skills by category
- **Project Details**: Click on projects to see more info
- **Form Validation**: Try submitting the contact form with errors
- **Smooth Scrolling**: Navigation links scroll smoothly

---

## 📧 Set Up Email (Optional)

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for free account
3. Create an email service
4. Create an email template
5. Copy your IDs to `.env.local`
6. Update the Contact component to use EmailJS

---

## 🎯 Next Steps

1. ✅ Customize all content
2. ✅ Replace images with your own
3. ✅ Set up EmailJS for contact form
4. ✅ Test on mobile devices
5. ✅ Deploy to your hosting platform
6. ✅ Share with the world!

---

## 💡 Tips

- Use high-quality images for best results
- Keep descriptions concise and impactful
- Update your CV file for download
- Test the contact form before deploying
- Use the dark mode to check styling
- Test on different browsers and devices

---

## ❓ Need Help?

- Check `README.md` for detailed documentation
- Review `IMPLEMENTATION_SUMMARY.md` for complete feature list
- Check component files for inline comments
- Visit [React docs](https://react.dev) for React questions
- Visit [Tailwind docs](https://tailwindcss.com) for styling questions

---

**Happy building! Your portfolio is now ready to showcase your amazing work! 🎉**
