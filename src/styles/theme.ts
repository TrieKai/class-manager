export const theme = {
  colors: {
    primary: "rgb(11, 140, 240)",
    secondary: "#5f6368",
    background: "#ffffff",
    text: {
      primary: "#202124",
      secondary: "#666666",
      disabled: "rgb(195, 199, 200)",
    },
    error: "rgb(240, 73, 106)",
    success: "rgb(123, 204, 58)",
    border: "#dddddd",
    surface: {
      primary: "#ffffff",
      secondary: "#f5f5f5",
      tertiary: "#f0f0f0",
      disabled: "#dddddd",
    },
    shadow: {
      light: "rgba(0, 0, 0, 0.1)",
      medium: "rgba(0, 0, 0, 0.2)",
    },
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
