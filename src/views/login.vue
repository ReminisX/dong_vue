<template>
  <div>
    <el-input type="text" v-model="username" class="content"/>
    <el-input type="text" v-model="password" class="content"/>
    <el-button class="content" @click="login1()">登陆</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: null,
      password: null,
      
      id: ''
    }
  },
  methods: {
    login1() {
      const params = {
        username: this.username,
        password: this.password
      }
      axios.post(`/login`, params).then( res => {
        console.log('接口正常返回时', res)
      }).then( err => {
        console.log('接口异常返回', err)
      })
    },


    login2() {
      const params = {
        username: this.username,
        password: this.password
      }
      axios.post(`/login/${this.id}`, params).then( res => {
        console.log('接口正常返回时', res)
      }).then( err => {
        console.log('接口异常返回', err)
      })
    },
  }
}
</script>

<style scoped>
.content {
  display: block;
  margin-bottom: 10px;
}
</style>