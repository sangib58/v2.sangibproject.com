<template>
    <section id="about">
        <v-sheet class="ml-md-4" style="margin-top: 150px">
            <div class="d-flex">
                <div>
                    <span class="numberStyle">01.</span> <span class="headerStyle text-md-h4 text-h4">About me</span>
                </div>
                <div class="horizontal w-25 mt-6 ml-2"></div>
            </div>      
            <v-container class="px-0">
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="textStyle mt-3">I am a seasoned software engineer with over a decade of experience in the industry, having embarked on my journey back in 2013. My technical expertise spans a diverse array of technologies and frameworks, reflecting my passion for continuous learning and adaptation in the ever-evolving field of software development.</div>
                        <div class="textStyle mt-3">I have successfully delivered numerous projects across various domains, demonstrating a strong ability to solve complex problems and create robust, scalable applications. My journey has equipped me with a deep understanding of software design principles, agile methodologies, and the latest industry trends.</div>
                        <div class="textStyle mt-3">I thrive in collaborative environments, leveraging my skills to drive innovation and efficiency. Whether working independently or as part of a team, my goal is to contribute to the development of high-quality software that meets user needs and exceeds expectations.</div>
                        <div class="textStyle mt-3">Here are a few technologies I’ve been working with recently:</div>
                        <div class="mt-5">
                            <v-row>
                                <v-col>
                                    <v-list>
                                        <v-list-item v-for="language in languagesListOne" :key="language.name">
                                            <template v-slot:prepend>
                                                <v-icon :icon="language.icon" size="x-small" color="#53D3B9"></v-icon>
                                            </template>
                                            <v-list-item class="textStyleList">{{ language.name }}</v-list-item>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                                <v-col>
                                    <v-list>
                                        <v-list-item v-for="language in languagesListTwo" :key="language.name">
                                            <template v-slot:prepend>
                                                <v-icon :icon="language.icon" size="x-small" color="#53D3B9"></v-icon>
                                            </template>
                                            <v-list-item class="textStyleList">{{ language.name }}</v-list-item>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <!-- <v-col cols="12" md="6">
                        <v-img
                        src="/home-img.jpg"
                        height="242"
                        width="300"
                        rounded
                        >                      
                        </v-img>
                    </v-col> -->
                    <v-col cols="12" md="6">
                        <v-img
                        src="/home-img.jpg"
                        class="mt-md-4 mx-md-16"
                        cover
                        rounded
                        >                      
                        </v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </section>
</template>

<script>
export default {
    data(){
        return{
            languagesListOne:[
                {name:'Ethereum',icon:'mdi-arrow-right-top'},
                {name:'Solidity',icon:'mdi-arrow-right-top'},
                {name:'BlockChain',icon:'mdi-arrow-right-top'},
                {name:'Node.js',icon:'mdi-arrow-right-top'},
                {name:'Vue.Js',icon:'mdi-arrow-right-top'},
            ],
            languagesListTwo:[
                {name:'Vuetify',icon:'mdi-arrow-right-top'},
                {name:'Nuxt.Js',icon:'mdi-arrow-right-top'},
                {name:'.NET Core',icon:'mdi-arrow-right-top'},
                {name:'React',icon:'mdi-arrow-right-top'},
                {name:'Tailwind Css',icon:'mdi-arrow-right-top'},
            ]
        }
    }
}
</script>

<style scoped>
/* .aboutSpacing{
    margin-top: 90px;
    margin-left: 120px;
    margin-bottom: 0px;
} */
.numberStyle{
    color: #64FFDA;
    font-size: 25px;
    font-weight: 500;
    padding-right: 8px;
}
.headerStyle{
    /* font-size: 30px;
    margin-bottom: 20px; */
    font-weight: 600;
    color: #CCD6F6;  
}
.horizontal{
    border-top: 1px solid #8892B0;
    /* width:335px;
    margin-top: 23px;
    margin-left: 10px;
    margin-bottom: 0px; */
    
}
.textStyle{
    font-weight: 400;
    font-size: 17px;
    color: #8892B0;
    /* margin-top: 15px; */
}
.textStyleList{
    font-weight: 400;
    font-size: 17px;
    color: #8892B0;
}

</style>