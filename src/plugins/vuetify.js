import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  theme: {
    themes: {
      light: {
        primary: '#0032e6',
        secondary: '#8957ad',
        accent: '#0962ff',
        error: '#ff425a',
        warning: '#ffd272',
        info: '#b48cc8',
        success: '#00d481'
      }
    },
  }
});