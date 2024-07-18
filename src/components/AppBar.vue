<template>
    <v-app-bar flat>
        <template v-slot:prepend>
            <v-app-bar-nav-icon>
                <v-avatar>
                    <v-img
                        alt="logo"
                        :src="logoSrc"
                    ></v-img>
                </v-avatar>
            </v-app-bar-nav-icon>
        </template>      
        <template v-slot:append>
            <div class="mr-8" v-if="$vuetify.display.mdAndUp">
                <v-btn variant="text" class="text-capitalize" :href="this.aboutUrl"><span class="numberStyle">01.</span> <span class="textStyle">About</span></v-btn>
                <v-btn variant="text" class="text-capitalize" :href="this.experienceUrl"><span class="numberStyle">02.</span> <span class="textStyle">Experience</span></v-btn>
                <v-btn variant="text" class="text-capitalize" :href="this.workUrl"><span class="numberStyle">03.</span> <span class="textStyle">Work</span></v-btn>
                <v-btn variant="text" class="text-capitalize" :href="this.contactUrl"><span class="numberStyle">04.</span> <span class="textStyle">Contact</span></v-btn>
                <v-btn variant="outlined" class="text-capitalize" color="#53D3B9">Resume</v-btn>
            </div>  
            <div v-else>
                <v-app-bar-nav-icon color="#64FFDA" variant="text" @click.stop="drawer = !drawer">
                </v-app-bar-nav-icon>
            </div>        
        </template>       
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
      <div class="d-flex flex-column justify-center">
        <div class="d-flex flex-column text-center my-4">
            <div class="numberStyle my-0 py-0">01.</div>
            <v-btn variant="text" class="text-capitalize my-0 py-0" :href="this.aboutUrl"><span class="textStyle">About</span></v-btn>
        </div> 
        <div class="d-flex flex-column text-center my-4">
            <div class="numberStyle my-0 py-0">02.</div>
            <v-btn variant="text" class="text-capitalize my-0 py-0" :href="this.experienceUrl"><span class="textStyle">Experience</span></v-btn>
        </div>
        <div class="d-flex flex-column text-center my-4">
            <div class="numberStyle my-0 py-0">03.</div>
            <v-btn variant="text" class="text-capitalize my-0 py-0" :href="this.workUrl"><span class="textStyle">Work</span></v-btn>
        </div>  
        <div class="d-flex flex-column text-center my-4">
            <div class="numberStyle my-0 py-0">04.</div>
            <v-btn variant="text" class="text-capitalize my-0 py-0" :href="this.contactUrl"><span class="textStyle">Contact</span></v-btn>
        </div>
        <div class="my-4">
            <div class="d-flex justify-center">
                <v-btn variant="outlined" class="text-capitalize" color="#53D3B9">Resume</v-btn>
            </div>      
        </div>
        <div class="d-flex justify-center">
            <v-btn
            v-for="icon in icons"
            :key="icon.route"
            :icon="icon.img"
            :href="icon.route"
            size="x-large"
            variant="text"
            target="_blank"
            >
            </v-btn>
        </div>         
      </div>
        
    </v-navigation-drawer>
</template>

<script>
export default {
    name:'App Bar',
    data(){
        return{
            drawer: false,
            group: null,
            icons: [
                {img:'mdi-linkedin',route:'https://www.linkedin.com/in/sangib-kumar-saha-663914a1/',variant:'elevated'},
                {img:'mdi-github',route:'https://github.com/sangib58',variant:'elevated'},
                {img:'mdi-facebook',route:'https://www.facebook.com/shuvo58',variant:'elevated'},
                {img:'mdi-instagram',route:'https://www.instagram.com/shuvo58/',variant:'elevated'}   
            ],
            aboutUrl:window.location.origin+'/#about',
            workUrl:window.location.origin+'/#work',
            experienceUrl:window.location.origin+'/#experience',
            contactUrl:window.location.origin+'/#contact',
        }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
    computed:{
        logoSrc(){
            return '/logo-no-background.png'
        }
    }
}
</script>
<style scoped>
.numberStyle{
    color: #53D3B9;
    font-weight: 500;
    padding-right: 6px;
}
.textStyle{
    color:#CCD6F6;
    font-weight: 500;
    font-size: 14px;
}
</style>