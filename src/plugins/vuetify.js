/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
//import { md1 } from 'vuetify/blueprints'

// Composables
import { createVuetify } from 'vuetify'

const mycustomTheme={
  dark:true,
  colors: {
    background: '#0A192F',
    surface: '#0A192F',
    something:'#00ff00',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  //blueprint:md1,
  theme:{
    defaultTheme:'light',
    themes:{
      mycustomTheme
    }
  }
})
