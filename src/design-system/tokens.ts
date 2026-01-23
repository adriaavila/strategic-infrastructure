/**
 * Design System Tokens
 * 
 * Sistema de tokens de diseño centralizado para mantener
 * consistencia visual en toda la aplicación.
 */

export const designTokens = {
  // ============================================
  // COLOR SYSTEM
  // ============================================
  colors: {
    // Base Colors - Greyscale Warmth
    base: {
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      grey: {
        50: 'hsl(0, 0%, 99%)',   // #FCFCFC - Background
        100: 'hsl(0, 0%, 96%)',   // #F5F5F5 - Secondary
        200: 'hsl(0, 0%, 90%)',   // #E5E5E5
        300: 'hsl(0, 0%, 80%)',   // #CCCCCC
        400: 'hsl(0, 0%, 60%)',   // #999999 - Muted
        500: 'hsl(0, 0%, 40%)',   // #666666
        600: 'hsl(0, 0%, 30%)',   // #4D4D4D
        700: 'hsl(0, 0%, 20%)',   // #333333
        800: 'hsl(0, 0%, 10%)',   // #1A1A1A - Foreground
        900: 'hsl(0, 0%, 8%)',    // #141414 - Primary
      },
    },

    // Semantic Colors
    semantic: {
      primary: {
        DEFAULT: 'hsl(0, 0%, 8%)',
        foreground: 'hsl(0, 0%, 100%)',
        hover: 'hsl(0, 0%, 6%)',
        light: 'hsl(0, 0%, 96%)',
      },
      secondary: {
        DEFAULT: 'hsl(0, 0%, 96%)',
        foreground: 'hsl(0, 0%, 10%)',
        hover: 'hsl(0, 0%, 94%)',
      },
      accent: {
        DEFAULT: 'hsl(0, 0%, 96%)',
        foreground: 'hsl(0, 0%, 10%)',
      },
      muted: {
        DEFAULT: 'hsl(0, 0%, 96%)',
        foreground: 'hsl(0, 0%, 40%)',
      },
      destructive: {
        DEFAULT: 'hsl(0, 84%, 60%)',
        foreground: 'hsl(0, 0%, 100%)',
        hover: 'hsl(0, 84%, 55%)',
      },
      success: {
        DEFAULT: 'hsl(142, 71%, 45%)',
        foreground: 'hsl(0, 0%, 100%)',
      },
      warning: {
        DEFAULT: 'hsl(38, 92%, 50%)',
        foreground: 'hsl(0, 0%, 10%)',
      },
      info: {
        DEFAULT: 'hsl(217, 91%, 60%)',
        foreground: 'hsl(0, 0%, 100%)',
      },
    },

    // Surface Colors
    surface: {
      background: 'hsl(0, 0%, 99%)',
      foreground: 'hsl(0, 0%, 10%)',
      card: 'hsl(0, 0%, 100%)',
      'card-foreground': 'hsl(0, 0%, 10%)',
      popover: 'hsl(0, 0%, 100%)',
      'popover-foreground': 'hsl(0, 0%, 10%)',
    },

    // Border Colors
    border: {
      DEFAULT: 'hsl(0, 0%, 0% / 0.08)',
      subtle: 'hsl(0, 0%, 0% / 0.05)',
      medium: 'hsl(0, 0%, 0% / 0.12)',
      strong: 'hsl(0, 0%, 0% / 0.2)',
      input: 'hsl(0, 0%, 0% / 0.08)',
      ring: 'hsl(0, 0%, 0% / 0.1)',
    },
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  typography: {
    // Font Families
    fonts: {
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
    },

    // Font Sizes
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],      // 12px
      sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],     // 14px
      base: ['1rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],       // 16px
      lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.02em' }],     // 18px
      xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],      // 20px
      '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],    // 24px
      '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],   // 30px
      '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],   // 36px
      '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],       // 48px
      '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],   // 60px
      '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],     // 72px
    },

    // Font Weights
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },

    // Letter Spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.02em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
    },

    // Line Heights
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.6',
      loose: '2',
    },
  },

  // ============================================
  // SPACING SYSTEM
  // ============================================
  spacing: {
    // Base unit: 4px
    unit: '4px',
    xs: '4px',      // 0.25rem
    sm: '8px',      // 0.5rem
    md: '16px',     // 1rem
    lg: '24px',     // 1.5rem
    xl: '32px',     // 2rem
    '2xl': '48px',  // 3rem
    '3xl': '64px',  // 4rem
    '4xl': '96px',  // 6rem
    '5xl': '128px', // 8rem
    section: '128px', // Section spacing
  },

  // ============================================
  // BORDER RADIUS
  // ============================================
  borderRadius: {
    none: '0',
    sm: '4px',      // 0.25rem
    md: '8px',      // 0.5rem
    DEFAULT: '12px', // 0.75rem
    lg: '16px',     // 1rem
    xl: '24px',     // 1.5rem
    '2xl': '32px',  // 2rem
    full: '9999px',
  },

  // ============================================
  // SHADOWS
  // ============================================
  shadows: {
    none: 'none',
    xs: '0 1px 2px rgba(0, 0, 0, 0.02)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.02)',
    md: '0 4px 6px rgba(0, 0, 0, 0.03)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.04)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.05)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.06)',
    glow: '0 0 60px rgba(0, 0, 0, 0.04)',
    'glow-lg': '0 0 100px rgba(0, 0, 0, 0.06)',
    card: '0 1px 3px rgba(0, 0, 0, 0.02)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.02)',
  },

  // ============================================
  // TRANSITIONS & ANIMATIONS
  // ============================================
  transitions: {
    duration: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },

  // ============================================
  // Z-INDEX SCALE
  // ============================================
  zIndex: {
    base: '0',
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modalBackdrop: '1040',
    modal: '1050',
    popover: '1060',
    tooltip: '1070',
    toast: '1080',
    noise: '9999',
  },

  // ============================================
  // BREAKPOINTS
  // ============================================
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ============================================
  // LAYOUT
  // ============================================
  layout: {
    container: {
      padding: '2rem',
      maxWidth: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    section: {
      paddingY: '128px',
      paddingYMobile: '64px',
    },
  },
} as const;

// Type exports for TypeScript
export type DesignTokens = typeof designTokens;
