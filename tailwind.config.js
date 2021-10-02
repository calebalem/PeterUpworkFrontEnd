const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: production, 
  },
  darkMode: false, 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};