<template>
  <v-app theme="mycustomTheme">  
    <AppBar/>   
    <v-main>
      <v-container>
        <DrawerLeft/>
        <DrawerRight/>
        <Introduction/>
        <About/>
        <Work/>
        <Featured/>
        <Others/>
        <Contact/>
      </v-container>   
    </v-main>
  </v-app>
</template>

<script>
import DrawerLeft from '@/components/DrawerLeft.vue'
import DrawerRight from '@/components/DrawerRight.vue'
import AppBar from '@/components/AppBar.vue'
import Introduction from '@/views/Introduction.vue'
import About from '@/views/About.vue'
import Work from '@/views/Work.vue'
import Featured from '@/views/Featured.vue'
import Others from '@/views/Others.vue'
import Contact from '@/views/Contact.vue'

export default {
  name:'App',
  components:{
    DrawerLeft,
    DrawerRight,
    AppBar,
    Introduction,
    About,
    Work,
    Featured,
    Others,
    Contact
  },
}
</script>

<style>
 body{
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #bec4c4;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
