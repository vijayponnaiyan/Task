
# Hexnode Kiosk Solution

## Project Overview
This project is a recreation of the Hexnode Kiosk Solution webpage using React, Tailwind CSS, Vite, JavaScript, jQuery, React-DOM, React-Router-DOM, and React-Icons.The goal was to replicate the original page's layout, styling, responsiveness,and interactivity while adhering to web accessibility and performance optimization best practices.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Technology Stack](#technology-stack)
3. [Features Implemented](#features-implemented)
4. [Responsive Design](#responsive-design)
5. [Performance Optimization](#performance-optimization)
6. [Accessibility](#accessibility)
7. [Challenges Faced](#challenges-faced)
8. [Bonus Enhancements](#bonus-enhancements)
9. [How to Run the Project](#how-to-run-the-project)
10.[Running Tests](#unit-test)
11. [Future Improvements](#future-improvements)

## Project Setup
To recreate the Hexnode Kiosk Solution page:

- Analyzed the layout, typography, colors, and interactivity of the target page.

- Planned a component-based architecture for reusability and maintainability.

- layout close match layout

- interactive costume codes 

- Collected required assets (images, icons, etc.) from the target page.

- Ensured all code was structured for readability and scalability.

## Responsive Design
Responsive design was achieved using:
- **CSS Flexbox and Grid:** Ensured a flexible and adaptive layout.
- **Media Queries:** Adjusted styles for various breakpoints (mobile: < 360px . lates mobil: < 425  , tablet: < 768px, desktop: < 1024px).
- **Responsive Images:** Used `srcset` for images and optimized assets.
 Performance Optimization

- Minimized image sizes using compression tools.

- Implemented code-splitting to reduce initial load times (if using React).

- Minified Tailwind CSS and JavaScript files.

## Accessibility
- Followed WCAG guidelines for color contrast and font sizes.
- Used ARIA roles and labels to improve screen reader support.
- Ensured all interactive elements are keyboard-navigable.
- Included skip links for improved usability.

## Challenges Faced
1. **Recreating Complex Layouts:**
   - The target page had intricate layouts, requiring precise attention to detail.
   - Solution: Used CSS Grid for complex sections and inspected the target page using browser developer tools.
2. **Custom Interactive Features:**
   - Implementing sliders and dropdowns without third-party plugins was challenging.
   - Solution: Wrote custom JavaScript logic with efficient event handling.
3. **Responsiveness:**
   - Adjusting layouts for varying screen sizes posed difficulties.
   - Solution: Conducted extensive testing across devices and refined breakpoints.

 ## Bonus Enhancements
1. **Dark Mode:** Added a dark mode toggle for improved user experience.
2. **Enhanced Animations:** Used libraries like Framer Motion for smooth and modern animations.
3. **SEO Optimization:**
   - Added meta tags and structured data for better search engine visibility.
   - Improved semantic HTML structure.  

## Installation

Install my-project with npm
### Prerequisites
- Node.js and npm installed on your machine (if using React).
- A modern web browser for testing.
### Steps to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/vijayponnaiyan/hexnode.git
   ```
2. Navigate to the project directory:
   ```bash
   cd hexnode
   ```
3. Install dependencies (if applicable):
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit:
   ```
   http://localhost:5173/
    
## Deployment
You can view the deployed project using the following link: [Hexnode Omega](https://hexnode-omega.vercel.app/)


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Screenshots

![App Screenshot Test]![Test](https://github.com/user-attachments/assets/ba449e30-1c9f-4859-a4a5-9d10e0757d40)

![App Screenshot Test-2]![Test-2](https://github.com/user-attachments/assets/43f21742-1037-4e90-ad66-e34fe08eeeef)

![App Screenshot Test-3]![Test-3](https://github.com/user-attachments/assets/8f688d70-b48d-4f29-87cb-86d019cc84a4)

 ## Unit Testing:
Created test cases for key components to ensure functionality and reliability.
Implemented tests using React-scripts and React Testing Library.
Fixed minor bugs identified during the testing phase to improve stability.


## Future Improvements
- Implement a standardized file structure adhering to industrial best practices for better scalability, maintainability, and readability.
- Add more advanced accessibility features such as live region updates.
- Incorporate animations for user feedback (e.g., button hover states).
- Improve performance further by exploring advanced optimization techniques like server-side rendering (SSR).

## Feedback

Thank you for reviewing the project! If you have any questions or feedback, feel free to reach out.
 vijayponnaiyan93@gmail.com
