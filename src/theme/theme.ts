export const theme = {
  colors: {
    primary: '#B378E7',
    secondary: '#5856D6',
    background: '#06060A',
    surface: '#171717',
    text: {
      primary: '#F3F4F3',
      secondary: '#A871DA',
      light: '#ABABAB',
      surface: '#504F4F'
    },
    status: {
      pending: '#FFC107',
      in_progress: '#17A2B8',
      completed: '#28A745',
      canceled: '#DC3545'
    },
    error: '#DC3545',
    border: '#E9ECEF',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  typography: {
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
    },
    weights: {
      regular: '400',
      medium: '500',
      bold: '700',
    }
  }
} as const;

export type Theme = typeof theme;