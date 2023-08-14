/** @type {import('tailwindcss').Config} */
// import aboutbg from '@/assets/images/about/aboutbg.jpg'
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      gridTemplateColumns: {
        'auto-flow': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridColumnGap: {
        32: '8rem',
      },
      spacing: {
        '1/2': '0.125rem',
        '1/4': '0.0625rem',
      },
      colors: {
        thebiblesaysblack: {
          8: 'rgba(16, 16, 16, 0.08)',
          16: 'rgba(16, 16, 16, 0.16)',
          40: 'rgba(16, 16, 16, 0.4)',
          64: 'rgba(16, 16, 16, 0.64)',
          100: 'rgba(16, 16, 16, 1)',
        },
        thebiblesayswhite: {
          8: 'rgba(255, 255, 255, 0.08)',
          40: 'rgba(255, 255, 255, 0.16)',
          64: 'rgba(255, 255, 255, 0.64)',
          100: 'rgba(255, 255, 255, 1)',
        },
        thebiblesaysorange: 'rgba(220, 139, 1, 1)',
        thebiblesaysoffwhite: 'rgba(252, 246, 235, 1)',
      },
      fontFamily: {
        // lexend: ['Lexend', 'san-serif'],
        serifpro: ['var(--font-source_serif_4)'],
        sans: ['var(--font-inter)'],
        lexend: ['var(--font-lexend)'],
      },
      fontSize: {
        '0cm': '1rem',
        '1cm': '1.0625rem',
        '2cm': '1.1875rem',
        '3cm': '1.3125rem',
        '4cm': '1.4375rem',
      },
      lineHeight: {
        52: '52px',
      },
      rotate: {
        15: '12deg',
      },
      width: {
        130: '30rem',
      },
      // backgroundImage: {
      //   aboutbg: `url(${aboutbg.src})`,
      //   logobg: 'url("./src/assets/images/logo/thebiblesays.svg")',
      //   logobgd: 'url("./src/assets/images/logo/thebiblesaysdarkmode.svg")',
      // },
    },
  },
  plugins: [],
}
