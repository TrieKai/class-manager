export const theme = {
  colors: {
    primary: "#1a73e8",
    secondary: "#5f6368",
    background: "#ffffff",
    text: "#202124",
    error: "#d93025",
    success: "#1e8e3e",
    border: "#dadce0",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: {
      sm: "12px",
      md: "14px",
      lg: "16px",
      xl: "20px",
    },
  },
} as const;

export type Theme = typeof theme;
