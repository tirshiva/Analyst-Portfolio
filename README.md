# Data Analyst Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS to showcase data analysis projects.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated sections using Framer Motion
- Project showcase with filterable categories
- Contact form
- Easy to customize project data

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customizing Content

### Projects

To add or modify projects, edit the `src/data/projects.js` file. Each project should follow this format:

```javascript
{
  id: 1,
  title: "Project Title",
  description: "Project description",
  techStack: ["Technology 1", "Technology 2"],
  githubLink: "https://github.com/...",
  demoLink: "https://demo-link.com",
  image: "/path-to-image.jpg" // Optional
}
```

### Personal Information

Update your personal information in the following files:
- `src/components/Hero.jsx` - Update name, title, and introduction
- `src/data/projects.js` - Update social media links

### Profile Image

Replace the profile image placeholder in `src/components/Hero.jsx` with your actual image:

```jsx
<img
  src="/path-to-your-image.jpg"
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

## Technologies Used

- React
- Tailwind CSS
- Framer Motion
- React Scroll
- React Icons

## Contributing

Feel free to fork this repository and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request. 