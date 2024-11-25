
const { addDynamicIconSelectors } = require("@iconify/tailwind")
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    './node_modules/flyonui/dist/js/*.js',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  flyonui: {
    vendors: true // Enable vendor-specific CSS generation
  },
  theme: {
    extend: {
      typography: {
        editor: {
          css: {
            h1: {
              fontSize: '1.875rem', // text-2xl
              fontWeight: '700',    // font-bold
            },
            h2: {
              fontSize: '1.5rem',   // text-xl
              fontWeight: '600',    // font-semibold
            },
            h3: {
              fontSize: '1.25rem',  // text-lg
              fontWeight: '600',    // font-semibold
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("flyonui"),
    require("flyonui/plugin"), // Require only if you want to use FlyonUI JS component
    addDynamicIconSelectors()
  ]
}

