<template>
    <div class="my-5">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-12 col-sm-12 my-3" v-for="(member, index) in members" :key="index">
                <card class="border-0 text-center" hover shadow>
                    <span class="text-muted">{{member.year}}</span>
                    <h6 class="font-weight-bold text-uppercase mt-3">{{member.name}}</h6>
                    <p class="description mt-3">{{member.major}}</p>
                    <button class="btn btn-success mb-sm-0" @click="modals.member = true; info = member">
                        <span class="text-white">About {{member.name.split(' ')[0]}}</span>
                    </button>
                </card>
            </div>
        </div>
        <modal :show.sync="modals.member" :modalClasses="'modal-lg'">
            <template slot="header">
                <h3 class="modal-title">{{info.name}}</h3>
            </template>
            <div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-sm-12">
                        <img :src="info.img" class="img-fluid mb-3" />
                    </div>
                    <div class="col-lg-8 col-sm-12 d-flex align-items-center">
                        <span>{{info.bio}}</span>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  name: 'fellowsection',
  components: { Modal },
  props: {
    members: {
      type: [Object]
    }
  },
  data() {
    return {
      modals: { member: false },
      info: {}
    }
  }
}
</script>

<style scoped>
.propic {
    height: 20rem;
}
</style>