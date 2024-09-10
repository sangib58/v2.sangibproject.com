<template>
    <v-sheet class="mt-12 mb-16 my-md-16 ml-md-4">
        <v-row>
            <v-col cols="12">
                <v-sheet class="d-flex ml-md-0 mt-0">
                    <div class="my-md-10">
                        <div class="nameStyle">Hi, my name is</div>
                        <div class="devNameStyle text-h4 text-sm-h3 text-md-h2 mt-4">Sangib Kumar Saha.</div>
                        <div class="devTitleStyle text-h4 text-sm-h3 text-md-h2 mt-4">I build things for the web.</div>
                        <div class="boxWidth mt-8 mt-md-4 w-auto">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on MERN (Mongo db, Express, React & Node) based solutions.</div>
                        <v-btn variant="outlined" class="text-capitalize mt-14" height="50" width="280" color="#53D3B9" href="https://codecanyon.net/user/sangib_123saha/portfolio" target="_blank">Check out my envato profile !</v-btn>
                    </div>    
                </v-sheet>
            </v-col>
        </v-row>
    </v-sheet>
    
</template>

<style scoped>
.nameStyle{
    font-family:'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 16px;
    color: #53D3B9;
}
.devNameStyle{
    /* font-size: 60px; */
    font-weight: 500;
    color: #CCD6F6;
}
.devTitleStyle{
    /* font-size: 70px; */
    font-weight: 500;
    color: #8892B0;
}
.boxWidth{
    /* width: 400px;
    margin-top: 10px;
    font-size: 17px; */
    font-size: 17px;
    font-weight: 400;
    color: #8892B0;
}
</style>