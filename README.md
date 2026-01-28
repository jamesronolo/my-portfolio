# James Ronolo's Portfolio Website

A modern, professional personal portfolio website for a Computer Science student showcasing projects, skills, and experience.

## 🎯 Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Me**: Personal background, education, and values
- **Skills & Tech Stack**: Visual showcase of technical skills with icons
- **Education Timeline**: Academic journey at Bohol Island State University
- **Projects Section**: Portfolio of projects (coming soon)
- **Contact Form**: Easy way for visitors to get in touch
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Responsive Design**: Mobile-first approach for all devices
- **Smooth Animations**: Subtle animations and transitions
- **Resume Download**: Quick access to resume PDF

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Icons**: Font Awesome 6.4.0
- **Responsive**: Mobile-first, fully responsive layout
- **Dark Mode**: CSS variables for theme switching

## 📁 Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Documentation
└── assets/
    └── resume.pdf      # Resume (placeholder)
```

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (optional, for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jamesronolo/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # or with Node.js
   npx http-server
   ```

3. **View in browser**
   - Open `http://localhost:8000` (or the specified port)

## 🎨 Customization

### Update Personal Information

Edit `index.html` to update:
- Name and title
- About section content
- Contact information
- Social media links
- Email address

### Add Projects

In the Projects section, replace placeholder content with:
```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/image.jpg" alt="Project name">
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p class="project-description">Project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
</div>
```

### Change Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #007bff;      /* Main brand color */
    --secondary-color: #6c757d;    /* Accent color */
    --success-color: #28a745;      /* Success messages */
    --danger-color: #dc3545;       /* Error messages */
    /* ... more variables ... */
}
```

### Add Resume

1. Save your resume as PDF: `assets/resume.pdf`
2. The download button will work automatically

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and up
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## ✨ Features Explained

### Dark/Light Mode
- Click the moon/sun icon in the navbar to toggle themes
- User preference is saved to browser's localStorage
- Smooth transition between themes

### Mobile Menu
- Hamburger menu appears on screens below 768px
- Click to toggle menu visibility
- Auto-closes when a link is clicked

### Smooth Scrolling
- All navigation links use smooth scroll behavior
- Intersection Observer for scroll animations

### Form Validation
- Email validation before submission
- Required field checking
- Success/error notifications
- Prevents actual submission (for demo)

## 🔗 Social Links

- Facebook: https://www.facebook.com/profile.php?id=61576367427172
- GitHub: https://github.com/jamesronolo
- LinkedIn: https://linkedin.com/in/jamesronolo
- Twitter: https://twitter.com/jamesronolo

## 📧 Contact

For inquiries or opportunities:
- **Email**: jamesronolo@email.com
- **Phone**: +63 (Your Number)
- **Location**: Anibonga, Duero, Bohol, Philippines

## 📄 License

This portfolio website is open source and available under the MIT License.

## 🙏 Credits

- **Design**: Modern, minimalist portfolio design
- **Icons**: Font Awesome
- **Inspiration**: Professional portfolio best practices

## 📝 Notes

- Update contact information with actual email and phone
- Add project details as they're completed
- Update education status (change "Present" when graduated)
- Customize colors and fonts to match your personal brand
- Replace placeholder images with actual project screenshots

---

**Made with ❤️ by James Ronolo** | Computer Science Student | Bohol Island State University