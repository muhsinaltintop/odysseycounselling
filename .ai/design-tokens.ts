export const designTokens = {
  colors: {
    background: '#f3fbf7',
    surface: '#ffffff',
    surfaceSoft: '#e8f0ec',
    surfaceMuted: '#edf5f1',
    primary: '#0f172a',
    primarySoft: '#131b2e',
    text: '#161d1b',
    textSoft: '#526258',
    textMuted: '#76777d',
    accentSand: '#d6c2a8',
    accentSage: '#c7d9cc',
    border: '#dce4e0',
    borderSoft: '#eef2ef',
    success: '#7aa67d',
    error: '#ba1a1a',
  },
  spacing: {
    sectionY: 'py-24 md:py-32',
    container: 'max-w-7xl mx-auto px-6 md:px-8',
  },
  radius: {
    button: 'rounded-xl',
    card: 'rounded-2xl',
    featurePanel: 'rounded-[2rem]',
    heroBlock: 'rounded-[3rem]',
  },
  typography: {
    headingFont: 'Noto Serif',
    bodyFont: 'Inter',
    scale: {
      hero: 'text-5xl md:text-7xl',
      sectionTitle: 'text-3xl md:text-5xl',
      subheading: 'text-xl md:text-2xl',
      body: 'text-base md:text-lg',
      smallLabel: 'text-xs uppercase tracking-[0.18em]',
    },
  },
  shadows: {
    softSm: '0 2px 10px rgba(15, 23, 42, 0.04)',
    softMd: '0 10px 30px rgba(15, 23, 42, 0.06)',
    softLg: '0 20px 45px rgba(15, 23, 42, 0.08)',
  },
  motion: {
    interactive: 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
  },
} as const;

export type DesignTokens = typeof designTokens;
