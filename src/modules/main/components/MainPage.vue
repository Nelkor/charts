<template>
  <div class="main-page">
    <DonutChart
      class="chart"
      :items="donutData"
    />

    <div class="circle-wrapper">
      <RechargeableCircle
        :charge-level="chargeLevel"
        :segments-count="80"
      />
    </div>

    <input
      type="range"
      min="0"
      max="1"
      step="0.001"
      v-model="chargeLevel"
    >
  </div>
</template>

<script>
import DonutChart from '@ui/components/DonutChart'
import RechargeableCircle from '@ui/components/RechargeableCircle'

export default {
  name: 'MainPage',
  components: {
    DonutChart,
    RechargeableCircle,
  },
  data() {
    return {
      chargeLevel: .4,
      donutData: [
        {
          name: 'Центральный',
          value: 63886,
        },
        {
          name: 'Северо-западный',
          value: 39503,
        },
        {
          name: 'Южный',
          value: 34914,
        },
        {
          name: 'Северо-Кавказский',
          value: 27688,
        },
        {
          name: 'Приволжский',
          value: 19863,
        },
        {
          name: 'Уральский',
          value: 19278,
        },
        {
          name: 'Сибирский',
          value: 10022,
        },
        {
          name: 'Дальневосточный',
          value: 9456,
        },
        {
          name: 'Округ не указан',
          value: 3105,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-page {
  padding: 100px;
}

.chart {
  width: 500px;
  height: 500px;
}

.circle-wrapper {
  width: 500px;
  height: 500px;
}
</style>
