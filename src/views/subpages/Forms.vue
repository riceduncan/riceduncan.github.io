<template>
    <div class="traditions-page">
        <section class="section-traditions-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-default shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container shape-container d-flex">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-6">
                            <h1 class="display-3 text-white">Forms
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 mb-3" v-for="(form, index) in forms" :key="index">
                                <card class="border-0 form-card text-center" hover shadow>
                                    <icon :name="form.icon" type="warning" rounded class="mb-4"></icon>
                                    <h6 class="text-warning text-uppercase">{{ form.name }}</h6>
                                    <p class="description mt-3">{{ form.description }}</p>
                                    <base-button type="warning" class="mt-4">
                                        <a :href="form.href"
                                           class="text-white">Access Form</a>
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import forms from '../../data/forms.data';

export default {
  data() {
    return {
      forms: []
    }
  },
  created() {
    this.forms = forms
  }
}
</script>

<style scoped>
.form-card {
    min-height: 26rem;
}
</style>