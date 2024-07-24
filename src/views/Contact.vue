<template>
    <section id="contact">
        <v-sheet class="d-flex justify-center text-center mt-16">
            <div>
                <div class="textColor"><span class="numberStyle">04.</span> What's Next?</div>
                <div class="touchStyle text-md-h2 text-h3 mt-6">Get In Touch</div>
                <div class="boxSize w-100 mt-8">My inbox is always open. 
                    Whether you have a question or a project idea or may be looking for a 
                    experienced developer or just want to say hi, I’ll try my best to get back to you!
                    Let's connect and build some thing worth.
                </div>
                <v-btn variant="outlined" href="mailto:sangibruse@gmail.com" target="_blank" class="text-capitalize my-16" color="#53D3B9" width="150" height="50">Say Hello</v-btn>
                <div class="footerStyle mt-16 text-subtitle-2">
                    <div>Design & Built by Sangib Kumar Saha</div>
                    <div>Built with <span style="color: #64FFDA">Vue 3 & Vuetify 3</span></div>
                </div>
            </div>     
        </v-sheet>
    </section>
</template>

<style scoped>
    .numberStyle{
        color: #64FFDA;
        padding-right: 5px;
    }
    .textColor{
        color: #64FFDA;
    }
    .touchStyle{
        color: #CCD6F6;
        font-weight: 600;
    }
    .boxSize{
        font-weight: 400;
        font-size: 15px;
        color: #8892B0;
    }
    .footerStyle{   
        font-weight: 400;
        color: #8892B0;
    }
</style>