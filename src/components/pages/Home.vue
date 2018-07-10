<template>
    <div>Welcome to the home {{user.name}}</div>
</template>
<script>
    export default{
        name:'Home',
        data(){
            return{
               user:{
                   name:'',
                   email:''
               }
            }
        },
        created(){
            const user = JSON.parse(window.localStorage.getItem('authUser'))
            this.user.name = user.name
            this.user.email = user.email

        }
    }
</script>