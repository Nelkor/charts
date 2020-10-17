<template>
  <div class="donut-chart">
    <svg
      :width="$options.side"
      :height="$options.side"
      :viewBox="`0 0 ${center} ${center}`"
    >
      <g
        :class="['arc-group', { highlighted }]"
      ></g>
    </svg>
  </div>
</template>

<script>
import { isCorrectItems } from '@ui/helpers/validator'

export default {
  name: 'DonutChart',
  side: 100,
  props: {
    items: {
      type: Array,
      validator: isCorrectItems,
    },
    highlight: {
      type: Number,
      default: null,
    },
  },
  computed: {
    center() {
      return this.$options.side / 2
    },
    highlighted() {
      return Number.isFinite(this.highlight)
    },

  },
}
</script>

<style lang="scss" scoped>
</style>
