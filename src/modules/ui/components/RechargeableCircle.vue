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
        v-for="segment in segments"
        :key="segment.angle"
        stroke-width=".5"
        x1="34"
        y1="0"
        x2="40"
        y2="0"
        stroke="white"
        :transform="`rotate(${segment.angle})`"
        :opacity="segment.charge > +chargeLevel ? 1 : 0"
      />
    </g>

    <g filter="url(#shine-charged)">
      <line
        v-for="segment in segments"
        :key="segment.angle"
        stroke-width=".5"
        x1="34"
        y1="0"
        x2="40"
        y2="0"
        stroke="yellow"
        :transform="`rotate(${segment.angle})`"
        :opacity="segment.charge > +chargeLevel ? 0 : 1"
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
      type: [Number, String],
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
  },
}
</script>

<style lang="scss" scoped>
.rechargeable-circle {
  width: 100%;
  height: 100%;
}
</style>
