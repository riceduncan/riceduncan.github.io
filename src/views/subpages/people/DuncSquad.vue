<template>
    <div class="squad-page">
        <section class="section-people-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-default alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container shape-container d-flex py-5">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-6">
                            <h1 class="display-3 text-white">The DuncSquad
                            </h1>
                            <p class="lead text-white">The best and brightest adults on campus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-4 mt-5">
            <div class="container justify-content-center text-center">
                <div class="row justify-content-center">
                    <tabs fill class="flex-column flex-md-row">
                        <tab-pane v-for="(elem, index) in squad" :key="index">
                            <span slot="title">
                                {{elem.name}}
                            </span>
                            <div class="my-5">
                                <p class="text-dark">{{elem.bio}}</p>
                                <hr />
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-lg-4 col-md-12 col-sm-12 my-3" v-for="(member, index) in elem.members" :key="index">
                                        <card class="border-0 text-center" :class="{'bg-success': hasEmail(member)}" hover shadow>
                                            <h6 class="font-weight-bold text-uppercase mt-3" :class="{'text-white': hasEmail(member)}">{{member.split('|')[0]}}</h6>
                                            <p class="description smaller text-white">{{member.split('|')[1]}}</p>
                                        </card>
                                    </div>
                                </div>
                                <hr />
                                <img :src="elem.image" class="img-fluid mb-4" />
                            </div>
                        </tab-pane>
                    </tabs>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs';
import TabPane from '@/components/Tabs/TabPane';

import squad from '@/data/squad.data';

export default {
  components: { Tabs, TabPane },
  data() {
    return {
      squad: []
    }
  },
  created() {
    this.squad = squad
  },
  methods: {
      hasEmail(str) {
          return str.split('|')[1] != null
      }
  }
}
</script>