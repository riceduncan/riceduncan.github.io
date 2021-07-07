<template>
    <div class="my-5">
        <p class="text-dark">{{bio}}</p>
        <hr />
        <div class="row justify-content-center align-items-center">
            <div class="col-lg-4 col-md-12 col-sm-12 my-3" v-for="(member, index) in members" :key="index">
                <card class="border-0 text-center" :class="{'bg-success': index <= 1}" hover shadow>
                    <h6 class="font-weight-bold text-uppercase mt-3" :class="{'text-white': index <= 1}">{{member.split('|')[0]}}</h6>
                    <p class="description smaller text-white">{{member.split('|')[1]}}</p>
                </card>
            </div>
        </div>
        <hr />
        <img :src="image" class="img-fluid mb-4" />
    </div>
</template>

<script>
export default {
  name: 'squadcard',
  props: {
    image: String,
    bio: String,
    members: {
      type: [String]
    }
  }
}
</script>
<style>
</style>