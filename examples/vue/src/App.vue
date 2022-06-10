<template>
  <div id="app" v-for="item in list">{{ item }}</div>
</template>
<script>
import { test } from './util'
export default {
  name: 'App',
  data() {
    return {
      list: '',
    }
  },
  create() {
    console.log(111)
  },
  methods: {},
}
</script>
<style>
.text-center {
  text-align: center;
}
</style>
