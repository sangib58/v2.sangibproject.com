<template>
    <section id="experience">
        <v-sheet class="d-flex my-16"> 
            <div class="my-16">  
                <v-row>
                    <v-col cols="12">
                        <div class="d-flex justify-center mb-14">
                            <div>
                                <span class="numberStyle">02.</span> <span class="headerStyle text-md-h4 text-h4">Where I’ve Worked</span>
                            </div>
                            <div class="horizontal w-25 mt-6 ml-2"></div>
                        </div>
                        <div class="mx-0 mx-md-16" :style="$vuetify.display.mdAndUp?{display:'flex',flexDirection:'row'}:''">
                            <v-tabs
                                v-model="tab" 
                                direction="vertical"                                          
                            >
                                <v-tab value="one" class="text-capitalize textStyle" color="#64FFDA">Open University</v-tab>
                                <v-tab value="two" class="text-capitalize textStyle" color="#64FFDA">Aamra Companies</v-tab>
                                <v-tab value="three" class="text-capitalize textStyle" color="#64FFDA">Edison Group</v-tab>
                                <v-tab value="four" class="text-capitalize textStyle" color="#64FFDA">BdJobs.com Ltd</v-tab>
                            </v-tabs>
                            
                            <v-tabs-window v-model="tab" class="mt-10 mt-md-0">
                                <v-tabs-window-item value="one">
                                    <!-- <v-sheet> -->
                                        <v-card>
                                            <v-card-text>
                                                <div class="ml-4 textStyleJobtitle">Programmer <a class="hrefStyle" href="https://bou.ac.bd/" target="_blank">@ Bangladesh Open University</a></div>
                                                <div class="ml-4 textStyle">Oct 2018 - Present</div>
                                                <v-list>
                                                    <v-list-item v-for="(item,i) in bouDescription" :key="i">
                                                        <template v-slot:prepend>
                                                            <v-icon :icon="item.icon" size="x-small" color="#53D3B9"></v-icon>
                                                        </template>
                                                        <v-list-item class="textStyle">{{ item.detail }}</v-list-item>                                  
                                                    </v-list-item>
                                                </v-list>
                                            </v-card-text>
                                        </v-card>
                                    <!-- </v-sheet> -->
                                </v-tabs-window-item>

                                <v-tabs-window-item value="two">
                                    <v-sheet>
                                        <div class="ml-4 textStyleJobtitle">Assistant Manager(IT) <a class="hrefStyle" href="https://www.aamra.com.bd/" target="_blank">@ Aamra Companies</a></div>
                                        <div class="ml-4 textStyle">Jan 2017 - Oct 2018</div>
                                        <v-list>
                                            <v-list-item v-for="(item,i) in aamraDescription" :key="i">
                                                <template v-slot:prepend>
                                                    <v-icon :icon="item.icon" size="x-small" color="#53D3B9"></v-icon>
                                                </template>
                                                <v-list-item class="textStyle">{{ item.detail }}</v-list-item>
                                            </v-list-item>
                                        </v-list>
                                    </v-sheet>
                                </v-tabs-window-item>

                                <v-tabs-window-item value="three">
                                    <v-sheet>
                                        <div class="ml-4 textStyleJobtitle">Executive(IT) <a class="hrefStyle" href="https://edison-bd.com/" target="_blank">@ Edison Group</a></div>
                                        <div class="ml-4 textStyle">May 2015 - Jan 2018</div>
                                        <v-list>
                                            <v-list-item v-for="(item,i) in edisonDescription" :key="i">
                                                <template v-slot:prepend>
                                                    <v-icon :icon="item.icon" size="x-small" color="#53D3B9"></v-icon>
                                                </template>
                                                <v-list-item class="textStyle">{{ item.detail }}</v-list-item>
                                            </v-list-item>
                                        </v-list>
                                    </v-sheet>
                                </v-tabs-window-item>
                                <v-tabs-window-item value="four">
                                    <v-sheet>
                                        <div class="ml-4 textStyleJobtitle">Jr. Software Engineer <a class="hrefStyle" href="https://www.bdjobs.com/" target="_blank">@ BdJobs.com Ltd</a></div>
                                        <div class="ml-4 textStyle">Sep 2014 - May 2015</div>
                                        <v-list>
                                            <v-list-item v-for="(item,i) in bdJobsDescription" :key="i">
                                                <template v-slot:prepend>
                                                    <v-icon :icon="item.icon" size="x-small" color="#53D3B9"></v-icon>
                                                </template>
                                                <v-list-item class="textStyle">{{ item.detail }}</v-list-item>
                                            </v-list-item>
                                        </v-list>
                                    </v-sheet>
                                </v-tabs-window-item>
                            </v-tabs-window>
                        </div>
                    </v-col>
                </v-row>             
            </div>
        </v-sheet>
    </section>
    
</template>

<script>
export default {
    data(){
        return {
            tab:null,
            bouDescription:[
                {icon:'mdi-arrow-right-top',detail:'Developed a Blockchain based certificate verification system using Ethereum, Solidity, Node.Js, Express.Js, Vue.Js, Vuetify, Vuex & Vue Router.'},
                {icon:'mdi-arrow-right-top',detail:'Conduct software training to regional offices on developed softwares like Billing Management, Examiners Management, Accounting System etc.'},
                {icon:'mdi-arrow-right-top',detail:'Developed an integrated accounts software for entire organization using .NET core 3.1 , EF Core, Bootstrap 4, Jquery, Ajax & Sql Server 2017.'},
                {icon:'mdi-arrow-right-top',detail:'Contributed a software to manage teachers profile, script distribution, billing, student complain resolve developed by php, Bootstrap 4, Ajax, Jquery & Mysql.'},
            ],
            aamraDescription:[
                {icon:'mdi-arrow-right-top',detail:'Technical instructor of a supply chain software, typically offers a variety of features designed to streamline and optimize the different aspects of supply chain operations.'},
                {icon:'mdi-arrow-right-top',detail:'Developed a Tertiary sales capture web app as well as backend Api of mobile app using Asp.Net Mvc, Entity Framework & Sql Server.'},
                {icon:'mdi-arrow-right-top',detail:'Collaborated to a service review mobile app for customers of WE Phone using Java & Android.'},
                {icon:'mdi-arrow-right-top',detail:'Backend developer of a Point of sales mobile app.'},
            ],
            edisonDescription:[
                {icon:'mdi-arrow-right-top',detail:'Developed a human resource management software for entire group employee using Asp.Net web form, Jquery, Ajax & Sql server.'},
                {icon:'mdi-arrow-right-top',detail:'Developed a web based attendance system for the remote placed employee of Edison group.'},
                {icon:'mdi-arrow-right-top',detail:'Core Developer of Edison service ERP, a software to automate the process from production to distribution of Symphony mobile.'},
                {icon:'mdi-arrow-right-top',detail:'Contributed an internal LMS software for Edison group to excel the learning process of employes also to access them periodically.'},
            ],
            bdJobsDescription:[
                {icon:'mdi-arrow-right-top',detail:'Developed a vehicle management software for the employees of BD jobs.com Ltd.'},
                {icon:'mdi-arrow-right-top',detail:'Developed customer review section of bdjobs.com website.'},
                {icon:'mdi-arrow-right-top',detail:'Developed an meeting management software to manage internal meeting.'},
                {icon:'mdi-arrow-right-top',detail:'Provide technical supports of bdjobs website.'},
            ],
        }
    }
}
</script>

<style scoped>
/* .workSpacing{
    margin-top: 200px;
    margin-bottom: 100px;
} */
.numberStyle{
    color: #64FFDA;
    font-size: 25px;
    font-weight: 500;
    padding-right: 8px;
    margin-top: 6px;
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
/* .experienceStyle{
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 40px;
} */
.hrefStyle{
    color: #64FFDA;
    padding-right: 5px;
    text-decoration: none;
    font-weight: 600;
    font-size: 22px;
}
.textStyle{
    font-weight: 400;
    font-size: 16px;
    color: #8892B0;
}
.textStyleJobtitle{
    font-size: 20px;
    font-weight: 400;
    color: #CCD6F6;
}
</style>