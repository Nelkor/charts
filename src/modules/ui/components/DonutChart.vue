<template>
  <div class="donut-chart">
    <svg
      :width="$options.side"
      :height="$options.side"
      :viewBox="`${-center} ${-center} ${$options.side} ${$options.side}`"
    >
      <g
        :class="['arc-group', { highlighted }]"
      >
        <circle
          class="arc"
          v-for="(item, index) in calculatedItems"
          :key="'arc-' + item.name"
          :r="radius"
          cx="0"
          cy="0"
          :stroke="item.color"
          :stroke-width="strokeWidth"
          :stroke-dasharray="item.dasharray"
          :stroke-dashoffset="item.dashoffset"
          :data-name="item.name"
          :data-value="item.value"
          :stroke-opacity="highlightByIndex(index)"
        />

        <line
          class="separator"
          v-for="item in calculatedItems"
          :key="'separator-' + item.name"
          x1="0"
          y1="0"
          :x2="$options.side"
          y2="0"
          :style="{ transform: `rotate(${item.startAngle}rad)` }"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { isCorrectItems } from '@ui/helpers/validator'
import { format } from '@global-helpers/numbers'
import { colorByIndex } from '@ui/helpers/colors'

export default {
  name: 'DonutChart',
  side: 120,
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
      return this.$options.side * .5
    },
    radius() {
      return this.$options.side * .4
    },
    strokeWidth() {
      return this.$options.side * .2
    },
    highlighted() {
      return Number.isFinite(this.highlight)
    },
    circumference() {
      return this.radius * 2 * Math.PI
    },
    calculatedItems() {
      const sum = this.items.reduce((acc, cur) => acc + cur.value, 0)

      let offset = this.circumference / 4
      let angle = Math.PI / -2

      const toArc = (item, index) => {
        const part = item.value / sum
        const hatch = this.circumference * part
        const space = this.circumference - hatch
        const dashoffset = offset.toFixed(4)
        const startAngle = angle.toFixed(4)

        offset -= hatch
        angle += part * Math.PI * 2

        return {
          name: item.name,
          value: `${format(item.value)} (${Math.round(part * 100)}%)`,
          dasharray: [hatch, space].map(v => v.toFixed(4)).join(' '),
          dashoffset,
          startAngle,
          color: colorByIndex(index),
        }
      }

      return this.items.map(toArc)
    },
  },
  methods: {
    highlightByIndex(index) {
      return this.highlight === index ? 1 : ''
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: 100%;
  transition: .2s;
}

.arc-group {
  transition: inherit;
}

.arc {
  fill: none;
  transition: inherit;

  &:hover {
    stroke-opacity: .4;
  }
}

.separator {
  transition: inherit;
  stroke: white;
  pointer-events: none;
}
</style>
