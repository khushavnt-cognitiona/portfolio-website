# Khushvant Jadhao - Portfolio Website

A modern, responsive, and feature-rich portfolio website built with React, Tailwind CSS, and React Icons.

## 🌟 Features

- **Modern UI/UX Design**: Clean, professional design with smooth animations and transitions
- **Dark/Light Mode Toggle**: Seamless theme switching with localStorage persistence
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic highlights
- **Technical Skills Section**: Display skills with tech icons and progress bars
- **Project Showcase**: Interactive project cards with hover reveal
- **Contact Form**: Integrated with EmailJS for email notifications
- **CV Download**: Easy CV download button with icon
- **Error Boundary**: Graceful error handling
- **Performance Optimized**: Lazy loading, code splitting, and memoization
- **Accessibility**: ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.14.0
- **Styling**: Tailwind CSS 3.3.3
- **Icons**: React Icons 4.10.1
- **Email**: EmailJS 3.2.0
- **Build Tool**: Create React App

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Persnalwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Add your EmailJS credentials:
     ```
     REACT_APP_EMAILJS_SERVICE_ID=your_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
     REACT_APP_EMAILJS_USER_ID=your_user_id
     ```

4. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with mobile menu
│   ├── Hero.jsx            # Hero section with introduction
│   ├── Skills.jsx          # Technical skills with icons and progress bars
│   ├── Projects.jsx        # Featured projects with interactive cards
│   ├── Contact.jsx         # Contact form with EmailJS integration
│   ├── Footer.jsx          # Footer with social links
│   ├── CVDownload.jsx      # CV download button
│   ├── DarkModeToggle.jsx  # Dark/light mode toggle
│   ├── ErrorBoundary.jsx   # Error boundary component
│   ├── Layout.jsx          # Main layout wrapper
│   └── Main.jsx            # Main content component
├── assets/
│   └── css/
│       ├── main.css        # Tailwind imports and custom utilities
│       ├── components.css  # Component-specific styles
│       └── dark-theme.css  # Dark theme styles
├── App.jsx                 # Main app component with routing
└── index.js                # React entry point
public/
├── index.html              # HTML template
└── img/                    # Image assets
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#4f46e5',
      secondary: '#7c3aed',
    },
  },
}
```

### Content
Update component content in `src/components/` files to match your information.

### Images
Replace images in the `public/img/` directory with your own.

## 📧 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and User ID
5. Add them to `.env.local`

## 🚀 Build & Deployment

### Build for production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Netlify will automatically build and deploy on push

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (irreversible)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance Optimizations

- **Code Splitting**: Components are lazy-loaded with React.lazy()
- **Memoization**: Components use React.memo() where appropriate
- **Image Optimization**: Lazy loading for images
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Bundle Size**: Optimized dependencies

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Khushvant Jadhao**
- Instagram: [@engineer_khushvant](https://www.instagram.com/engineer_khushvant)
- LinkedIn: [khushvantjadhao01](https://www.linkedin.com/in/khushvantjadhao01/)
- GitHub: [khushavnt-cognitiona](https://github.com/khushavnt-cognitiona)

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

## 📞 Support

For issues or questions, please open an issue on GitHub or contact me directly.

---

**Made with ❤️ by Khushvant Jadhao**
