<template>
    <v-navigation-drawer location="right" width="50" floating>
        <template v-slot:append>
            <!-- <div class="email">sangibruse@gmail.com</div> -->
            <a href="mailto:sangibruse@gmail.com" target="_blank" class="email">sangibruse@gmail.com</a>
            <div class="vertical"></div>
        </template>
    </v-navigation-drawer>
</template>

<style scoped>
    .email{
        text-decoration: none;
        writing-mode: vertical-lr;
        margin-left: 15px;
        margin-bottom: 20px;
        font-weight: 400;
        color: #8892B0;
    }
    a:hover{
        color: #53D3B9;
    }
    .vertical{
        border-left: 1px solid #8892B0;
        height: 200px;
        margin-left: 27px;
    }
</style>