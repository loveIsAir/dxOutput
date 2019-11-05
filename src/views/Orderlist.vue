<template>
  <div class="orderlist">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    这是我第一个github项目
    <br>
    <br>
    <br>
    <p>
      当前用户是{{$route.params.id}}
    </p>
    <!--<p> 通过props解耦: {{id}}</p>-->
    <router-link to="/Orderlist/:id/profile">profile</router-link>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <!--<router-link to="/Orderlist/:id/profile">userhome</router-link>-->
    <p>hshsh</p>
    <br>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    name: 'orderList',
    // props:{newsletterPopup},
    components: {
      HelloWorld,
    },
    data() {
      return {
        num: 1,
      };
    },
    methods: {
      forward() {
        this.$router.go(1);
      },
      back() {
        this.$router.back(-1);
      },
      fetchData() {
        this.num++;
        console.log('this.num');
        console.log(this.num);
      },
    },
    watch: {
      //从当前路由到目的地路由是相同路由，参数发生变化，1 用beforeRouteUpdate监听参数变化 2 用watch监听$route
      // '$route'(to, from) {
      //   console.log(`watch $route`);
      //   console.log(`to:`);
      //   console.log(to);
      //   console.log(`from:`);
      //   console.log(from);
      // },
      '$route': 'fetchData',
    },
    beforeRouteUpdate(to, from, next) {
      // react to route changes...
      // don't forget to call next()
      console.log(`beforeRouteUpdate`);
      console.log(from);
      console.log(to);
      next();
    },
    created() {
      console.log(`created`);
      console.log(`this.$route.params.id::${this.$route.params.id}`);
    },
  };
</script>
