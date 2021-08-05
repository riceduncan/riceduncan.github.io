<template>
    <card class="border-0 text-center my-2" hover shadow>
        <img :src="image" class="card-img" />
        <h6 class="text-uppercase mt-3">{{name}}</h6>
    </card>
</template>

<script>
export default {
  name: 'areacard',
  props: {
    name: String,
    image: String
  }
}
</script>

<style scoped>
.smaller {
    font-size: .78rem;
}
</style>