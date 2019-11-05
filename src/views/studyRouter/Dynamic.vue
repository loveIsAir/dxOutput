<template>
  <div class="dynamic-router">
    <p>this is dynamic</p>
    <p>当前页面是:</p>
    {{$route.fullPath}}
  </div>
</template>
<script>
  export default {
    name: 'dynamicRouter',
    data() {
      return {
        pathMatch: '',
      };
    },
    methods: {},
    created() {
      this.pathMatch = this.$route.params.pathMatch;
      console.log('this.$route.pathMatch');
      console.log(this.$route.params.pathMatch);
    },
  };
</script>
<style lang="less">

</style>
