<template>
  <app-main />
</template>
<script>
export default {
  components: {
    AppMain: () => import('@/layouts/components/AppMain')
  }
}
</script>
