import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // syntax: 'template-literal',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#0FEE0F' },
          secondary: { value: '#EE0F0F' }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
})
