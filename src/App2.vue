<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link :to="about">About</router-link>
      |
      <router-link to="/orderList/user1">orderList-user1</router-link>
      |
      <router-link to="/Orderlist/user2">orderList-user2</router-link>
      |
      <!--<router-link to="*">dynamic</router-link>-->
      <button @click="testrouterPart">测试局部通配符路由</button>
      |
      <!--
        replace:不添加历史记录的
        它不会像history添加新的记录，而是替换掉当前的历史记录

      -->
      <router-link to="/no-exsiting" replace>不添加历史记录路由</router-link>
      |
      <router-link to="/Orderlist">路由 name方式</router-link>

    </div>
    <hr>
    <router-view class="view one"/>
    <router-view class="view two" name="head"></router-view>
    <router-view class="view three" name="slidebar"></router-view>
  </div>
</template>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .one {
    width: 100%;
    height: 800px;
    background: red;
    position: absolute;
    left: 100px;
    top: 100px;
  }

  .two {
    width: 100%;
    height: 100px;
    background: greenyellow;
    position: absolute;
    left: 0;
    top: 100px;
  }

  .three {
    width: 200px;
    height: 900px;
    background: pink;
    position: absolute;
    left: 0;
    top: 100px;
  }

</style>
<script>
  // method: 'post',
  //   url: '/order-api/sso/getUserInfo'
  export default {
    data() {
      return {
        about: '/about',
      };
    },
    methods: {
      testrouterPart() {
        this.$router.push('/Dynamic-admin');
        this.$router.replace('/Dynamic-admin');
      },
    },
    created() {

    },

  };
</script>
