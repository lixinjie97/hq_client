<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/dlnu.jpg" style="margin-top: 30px">
      <h1> </h1>
    </div>
    <group title="后勤处">
      <cell title="班车" value="" is-link link="/bus"></cell>
      <cell title="卫生所" value="" is-link link="/clinic"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
