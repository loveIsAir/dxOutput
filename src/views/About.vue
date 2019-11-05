<template>
  <div class="about">
    <p>sss</p>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      label-width="120px">
      <el-form-item label="销方名称">
        <el-select v-model="formInline.xhfMc" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <!--<el-form-item label="发票类型">-->
        <!--<dictionary-select-->
          <!--class="common-select-width"-->
          <!--type="invoiceType"-->
          <!--enableWholeOption="true"-->
          <!--ref="invoiceType"-->
          <!--@emitCallback="invoiceTypeCallback"></dictionary-select>-->
        <!--&lt;!&ndash;<el-select&ndash;&gt;-->
          <!--&lt;!&ndash;v-model="formInline.fplx"&ndash;&gt;-->
          <!--&lt;!&ndash;multiple&ndash;&gt;-->
          <!--&lt;!&ndash;collapse-tags&ndash;&gt;-->
          <!--&lt;!&ndash;placeholder="请选择">&ndash;&gt;-->
          <!--&lt;!&ndash;<el-option&ndash;&gt;-->
            <!--&lt;!&ndash;v-for="item in options2"&ndash;&gt;-->
            <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
            <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
            <!--&lt;!&ndash;:value="item.value">&ndash;&gt;-->
          <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
      <!--</el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        formInline: {
          xhfMc: [],
          fplx: [],
          fpzlDm:''
        },
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          }, {
            value: '选项2',
            label: '双皮奶',
          }, {
            value: '选项3',
            label: '蚵仔煎',
          }, {
            value: '选项4',
            label: '龙须面',
          }, {
            value: '选项5',
            label: '北京烤鸭',
          }],
        options2: [
          {
            value: '选项1',
            label: '黄金糕',
          }, {
            value: '选项2',
            label: '双皮奶',
          }, {
            value: '选项3',
            label: '蚵仔煎',
          }, {
            value: '选项4',
            label: '龙须面',
          }, {
            value: '选项5',
            label: '北京烤鸭',
          }],
        value1: [],
        value2: [],
      };
    },
    methods: {
      onSubmit() {
      },
      invoiceTypeCallback (val) {
        this.formInline.fpzlDm = val
      },
    },
  };
</script>
<style>

  .about .demo-form-inline, .el-form-item__label {
    display: inline-block;
  }

</style>
<style lang="less" scoped>
  .about {
    padding: 10px 20px 0;
    .margin {
      padding: 30px
    }
    .demo-form-inline, .el-form-item__label {
      display: inline-block;
    }
  }

</style>
