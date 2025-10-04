# My Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, and experiences as a full-stack web developer. It includes an interactive contact form, a resume section, and a gallery of my projects.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Contact](#contact)

## About the Project

This portfolio is designed to highlight my expertise in full-stack web development. It includes:

- A **Projects** section showcasing my key projects with descriptions and links.
- A **Resume** section where users can view and download my resume.
- A **Contact** form that allows visitors to send me messages directly.

## Features

- **Responsive Design**: Fully responsive and optimized for all devices.
- **Interactive Contact Form**: Users can send messages directly to my email.
- **Project Showcase**: A gallery of my projects with descriptions and links to live demos or repositories.
- **Resume Download**: Visitors can download my resume directly from the website.
- **AI Chatbot Widget**: Interactive chatbot embedded on all pages for instant visitor engagement and support.
- **AR Experience**: QR code and AR profile card feature for immersive interaction.
- **Visitor Analytics**: Real-time visitor map showing global reach of the portfolio.

## Chatbot Widget

The portfolio features an integrated AI chatbot widget that provides instant support and engagement for visitors.

### Widget Features

- **Compact Design**: 100px × 100px minimalist widget positioned at bottom-right corner
- **Transparent Background**: Seamlessly integrates with the website design
- **Cross-Page Availability**: Accessible on all pages (Home, Projects, Resume, Contact, AR)
- **High Z-Index**: Always visible above other content (z-index: 9999)
- **Responsive**: Works across all devices and screen sizes

### Technical Implementation

- **Type**: Embedded iframe widget
- **Source**: `https://chatbot-widget-opal.vercel.app`
- **Position**: Fixed positioning for persistent visibility
- **Transparency**: `allowtransparency="true"` for seamless integration

### Purpose

The chatbot serves as a 24/7 virtual assistant, helping visitors:

- Get quick answers about my projects and experience
- Navigate the portfolio more effectively
- Engage in interactive conversations about my skills
- Receive instant responses without waiting for email replies

## Technologies Used

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript

### Backend

- Node.js
- Express.js
- Nodemailer (for email functionality)

### Other Tools

- Google Drive (for hosting the resume)
- Heroku (for backend deployment)
- AI Chatbot Widget (embedded iframe for visitor engagement)
- Vercel (chatbot hosting platform)

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) installed.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/minh111104/minh111104.github.io.git
   cd minh111104.github.io
   ```

2. Navigate to the backend directory:

   ```bash
   cd contact-form-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `contact-form-backend` directory and add the following:

   ```bash
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-app-password
   ```

5. Start the backend server:

   ```bash
   node server.js
   ```

6. Open the `index.html` file in your browser to view the portfolio.

## Contact

Feel free to reach out to me for collaboration or inquiries:

- **Email**: <quangminh111104@gmail.com>
- **LinkedIn**: [minhnguyen1111](https://www.linkedin.com/in/minhnguyen1111/)
- **GitHub**: [Minh111104](https://github.com/Minh111104)

Thank you for visiting my portfolio!
