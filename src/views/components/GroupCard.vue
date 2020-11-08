<template>
    <div class="my-5">
        <img :src="image" class="img-fluid mb-4" />
        <span class="text-center">{{description}}</span>
        <div class="d-flex align-items-center justify-content-center mt-3" v-if="email"><i class="ni ni-email-83" />&nbsp;{{email}}</div>
        <hr />
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-12 col-sm-12 my-3" v-for="(member, index) in members" :key="index">
                <card class="border-0 text-center" hover shadow>
                    <span class="text-muted">{{member.title}}</span>
                    <h6 class="font-weight-bold text-uppercase mt-3">{{member.name.split(' & ')[0]}}</h6>
                    <h6 class="font-weight-bold text-uppercase"
                        :class="{'text-white': !member.name.split(' & ')[1]}">
                    {{member.name.split(' & ')[1] || 'Ghost'}}</h6>
                    <p class="description smaller mt-3">{{member.email}}</p>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'groupcard',
  props: {
    name: String,
    description: String,
    image: String,
    email: String,
    members: {
      type: [Object]
    }
  }
}
</script>

<style scoped>
.group-img {
    height: 20rem;
}

.smaller {
    font-size: .78rem;
}
</style>