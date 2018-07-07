<template>
    <div class="col-lg-12 col-md-12 col-xs-12">
        <div class="row page-body">
            <div class="col-lg-4 col-md-4 col-sm-8 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="text-center">Log In</h3>
                    </div>

                    <div class="panel-body">
                        <form role="form" @submit.prevent="loginUser">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" name="email" v-model="login.username">
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" name="password" v-model="login.password">
                            </div>

                            <div class="form-group">
                                <div class="col-md-4 col-md-offset-8">
                                    <button type="submit" @click.prevent="handleLoginSubmit" class="btn btn-primary">Log In</button>
                                </div>
                            </div>
                        </form>

                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { clientId,clientSecret} from  '../../env.js'
import {loginUrl, userUrl,getHeader} from '../../config.js'
    export default{
        data(){
            return {
                login:{
                    'username': "geogh202@gmail.com",
                    'password': "Chef17051996"
                }
            }
        },
        methods:{
            handleLoginSubmit(){
                 const postData = {
                 grant_type: 'password',
                 client_id: clientId,
                 client_secret: clientSecret,
                 username:this.login.username,
                 password:this.login.password,
                 scope:''
                  }
                  const authUser = {}
                  this.$http.post(loginUrl,postData).then(response =>{
                      if(response.status == 200){
                          console.log(response)
                          authUser.access_token = response.data.access_token
                          authUser.refresh_token = response.data.refresh_token
                          window.localStorage.setItem('authUser',JSON.stringify(authUser))
                          this.$http.get(userUrl,{headers: getHeader()}).then(response =>{
                               authUser.email = response.body.email
                               authUser.name = response.body.name
                               window.localStorage.setItem('authUser',JSON.stringify(authUser))
                               this.$router.push({name:'Home'})
                               //console.log(8)
                          })
                      }
                  })
            }
        },
        created(){
           
        }
    }
</script>
<style scoped>

</style>


