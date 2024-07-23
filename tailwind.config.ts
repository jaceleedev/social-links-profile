import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          700: '#333333',
          800: '#1F1F1F',
          900: '#141414',
        },
        green: '#C4F82A',
        white: '#FFFFFF',
      },
      screens: {
        tablet: { max: '768px' },
        mobile: { max: '375px' },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      spacing: {
        50: '4px',
        100: '8px',
        150: '12px',
        200: '16px',
        300: '24px',
        500: '40px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const typographyComponents = {
        '.text-preset-1': {
          fontFamily: 'var(--font-inter)',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '150%',
        },
        '.text-preset-2': {
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '150%',
        },
        '.text-preset-2-bold': {
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '150%',
        },
      };

      const buttonComponents = {
        '.button': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          width: '100%',
          maxWidth: '304px',
          padding: '12px',
          borderRadius: '8px',
          backgroundColor: '#333333',
          '&:hover': {
            backgroundColor: '#C4F82A',
          },
        },
      };

      addComponents({ ...typographyComponents, ...buttonComponents });
    }),
  ],
};
export default config;
