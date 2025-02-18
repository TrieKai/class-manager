# Class Manager

A React-based class management application built with TypeScript, Redux, and Styled Components. This application helps teachers manage their classes efficiently by providing student grouping, attendance tracking, and easy sharing functionality.

## Features

### Student Management
- Interactive student list with attendance counters
- Automatic grouping system (5 students per group)
- Student status tracking (active/guest)
- Individual student counters for attendance and participation

### Views and Navigation
- List View: Displays all students in a grid layout
- Group View: Shows students organized in groups
- Tab-based navigation between views
- Responsive design for all screen sizes

### Sharing and Access
- QR Code generation for quick class access
- One-click link copying functionality
- Student details tooltip for quick information

### Theme System
- Consistent design system with theme provider
- Customizable color schemes
- Responsive spacing and typography
- Standardized border radius and shadows

## Tech Stack

### Core Technologies
- React 18
- TypeScript
- Redux Toolkit for state management
- Styled Components for styling
- Vite for build tooling

### Key Dependencies
- QRCode.react for QR code generation
- React Redux for state management
- Styled Components for theming and styling

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/your-username/class-manager.git
   cd class-manager
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:5173`

4. Build for production
   ```bash
   npm run build
   # or
   yarn build
   ```

## Project Structure

```
src/
├── components/        # Reusable components
├── modules/           # Feature modules
├── pages/             # Page components
├── constants/         # Global constants
├── services/          # API services
├── stores/            # Redux slices
├── styles/            # Global styles and theme
├── types/             # TypeScript type definitions
├── App.tsx            # Main App component
└── main.tsx           # Application entry point
```

## Development Guidelines

### Styling
- Use the theme provider for consistent styling
- Follow the established color system in `theme.ts`
- Utilize responsive breakpoints for mobile-first design
- Maintain consistent spacing using theme spacing values

### Component Structure
- Keep components small and focused
- Use TypeScript interfaces for prop definitions
- Implement proper error handling
- Add appropriate loading states

### State Management
- Use Redux for global state
- Keep component state local when possible
- Implement proper error handling in reducers