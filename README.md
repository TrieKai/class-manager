# Class Manager

A React-based class management application built with TypeScript, Redux, and Styled Components.

## Features

- Student list view with interactive counters
- Group view (5 students per group)
- QR Code generation for class link
- Copy link functionality
- Responsive design
- Tab switching between views
- Student details tooltip

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- Styled Components
- Vite
- QRCode.react

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
  ├── components/      # React components
  ├── features/        # Feature-specific components
  ├── store/          # Redux store and slices
  ├── types/          # TypeScript type definitions
  ├── utils/          # Utility functions and API
  ├── App.tsx         # Main App component
  └── main.tsx        # Application entry point
