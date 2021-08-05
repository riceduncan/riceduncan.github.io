<template>
    <card class="card border-0 text-center my-2" hover shadow>
        <h6 class="text-uppercase">{{text}}</h6>
    </card>
</template>

<script>
export default {
  name: 'areacard',
  props: {
    text: String
  }
}
</script>

<style scoped>
.card {
    min-height: 6rem;
}
</style>