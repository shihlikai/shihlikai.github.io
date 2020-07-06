<template>
  <div style="display: flex;">
    <div style="padding-top: 10px;">
      <div style="font-size: 20px; font-weight: 900;">{{ $route.meta.name }}</div>
    </div>
    <div style="font-size: 12px; position: absolute; right: 0px;padding: 10px;">
      <span>Admin</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>
