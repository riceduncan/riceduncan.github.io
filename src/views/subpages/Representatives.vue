<template>
    <div class="representative-page">
        <section class="section-government-cover section-shaped my-0">
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
                            <h1 class="display-3 text-white">Duncan Representatives
                            </h1>
                            <p class="lead text-white">Representatives are students who are chosen to represent 
                            our college (or a section of our college) to various organizations at Rice or Duncan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-4 mt-5">
            <div class="container justify-content-center text-center">
                <div class="row justify-content-center">
                    <tabs fill class="flex-column flex-md-row">
                        <tab-pane v-for="(reps, index) in representatives" :key="index">
                            <span slot="title">
                                {{reps.name}}
                            </span>
                            <GroupCard :description="reps.description" 
                                       :image="reps.image"
                                       :email="reps.email"
                                       :members="reps.members" />
                        </tab-pane>
                    </tabs>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from '../../components/Tabs/Tabs';
import TabPane from '../../components/Tabs/TabPane';
import GroupCard from '../components/Cards/GroupCard';

import representatives from '../../data/representatives.data';

export default {
  components: { Tabs, TabPane, GroupCard },
  data() {
    return {
      representatives: []
    }
  },
  created() {
    this.representatives = representatives
  }
}
</script>