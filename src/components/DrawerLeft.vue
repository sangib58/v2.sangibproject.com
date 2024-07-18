<template>
    <v-navigation-drawer location="left" width="60" floating>
        <!-- <template v-slot:append>
            <div>
                <v-list-item><v-btn variant="text" icon="mdi-linkedin" href="https://www.linkedin.com/in/sangib-kumar-saha-663914a1/" target="_blank"></v-btn></v-list-item>
                <v-list-item><v-btn variant="text" icon="mdi-github" href="https://github.com/sangib58" target="_blank"></v-btn></v-list-item>
                <v-list-item><v-btn variant="text" icon="mdi-facebook" href="https://www.facebook.com/shuvo58" target="_blank"></v-btn></v-list-item>
                <v-list-item><v-btn variant="text" icon="mdi-instagram" href="https://www.instagram.com/shuvo58/" target="_blank"></v-btn></v-list-item>
            </div>
        </template> -->
        <template v-slot:append>          
            <v-list nav>
                <v-list-item v-for="icon in icons" :variant="icon.variant" :prepend-icon="icon.img" :key="icon.route" :href="icon.route" target="_blank"></v-list-item>
            </v-list>
            <div class="vertical"></div>
        </template>        
    </v-navigation-drawer>
</template>

<script>
export default {
    name:'Drawer Left',
    data(){
        return{
            icons: [
                {img:'mdi-linkedin',route:'https://www.linkedin.com/in/sangib-kumar-saha-663914a1/',variant:'elevated'},
                {img:'mdi-github',route:'https://github.com/sangib58',variant:'elevated'},
                {img:'mdi-facebook',route:'https://www.facebook.com/shuvo58',variant:'elevated'},
                {img:'mdi-instagram',route:'https://www.instagram.com/shuvo58/',variant:'elevated'}   
            ]
        }
        
    }
}
</script>
<style scoped>
.vertical {
        border-left: 1px solid #8892B0;
        height: 200px;
        margin-left: 27px;
        text-orientation: mixed;
        writing-mode: vertical-lr;
    }
</style>