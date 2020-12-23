<template>
  <svg
      class="rechargeable-circle"
      xmlns="http://www.w3.org/2000/svg"
      :width="$options.side"
      :height="$options.side"
      :viewBox="`${-center} ${-center} ${$options.side} ${$options.side}`"
  >
    <defs>
      <filter id="shine-uncharged">
        <feDropShadow
            dx="0"
            dy="0"
            stdDeviation=".4"
            flood-color="cyan"
        />
      </filter>

      <filter id="shine-charged">
        <feDropShadow
            in="source"
            result="with-shadow"
            dx="0"
            dy="0"
            stdDeviation=".8"
            flood-color="orange"
        />

        <feGaussianBlur
            in="with-shadow"
            stdDeviation=".2"
        />
      </filter>
    </defs>

    <g filter="url(#shine-uncharged)">
      <line
        v-for="angle in unchargedAngles"
        :key="angle"
        stroke-width=".5"
        x1="30"
        y1="0"
        x2="40"
        y2="0"
        stroke="white"
        :transform="`rotate(${angle})`"
      />
    </g>

    <g filter="url(#shine-charged)">
      <line
        v-for="angle in chargedAngles"
        :key="angle"
        stroke-width=".5"
        x1="30"
        y1="0"
        x2="40"
        y2="0"
        stroke="yellow"
        :transform="`rotate(${angle})`"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'RechargeableCircle',
  side: 100,
  props: {
    chargeLevel: {
      type: Number,
      default: 0,
      validator: value => value >= 0 && value <= 1,
    },
    segmentsCount: {
      type: Number,
      default: 200,
      validator: value => value > 1
        && value < 400
        && Math.round(value) == value,
    },
  },
  computed: {
    center() {
      return this.$options.side * .5
    },
    segments() {
      const angle = 360 / this.segmentsCount
      const maxIndex = this.segmentsCount - 1

      const createSegment = (_, index) => ({
        charge: index / maxIndex,
        angle: angle * index,
      })

      return Array.from({ length: this.segmentsCount })
        .map(createSegment)
    },
    chargedAngles() {
      return this.segments
        .filter(segment => segment.charge <= this.chargeLevel)
        .map(segment => segment.angle.toFixed(3))
    },
    unchargedAngles() {
      return this.segments
        .filter(segment => segment.charge >= this.chargeLevel)
        .map(segment => segment.angle.toFixed(3))
    },
  },
}
</script>

<style lang="scss" scoped>
.rechargeable-circle {
  width: 100%;
  height: 100%;
}
</style>
