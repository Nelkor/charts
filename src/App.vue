<template>
  <div id="app">
    <AppHeader/>
    <AppMain/>
  </div>
</template>

<script>
import AppHeader from '@layout/components/AppHeader'
import AppMain from '@layout/components/AppMain'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
}
</script>

<style lang="scss" scoped>
</style>
