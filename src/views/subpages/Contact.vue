<template>
    <div class="contact-page">
        <section class="section-contact-cover section-shaped my-0">
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
                            <h1 class="display-3 text-white">Duncan Contact Information
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
                        <div class="row row-grid justify-content-center">
                            <div class="col-lg-6 mb-3">
                                <card class="border-0 tradition" hover shadow body-classes="py-5">
                                    <icon name="ni ni-box-2" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-uppercase font-weight-bold">Mailing Address</h6>
                                    <p class="description mt-3">Duncan College<br/>1601 Rice Boulevard<br/>Houston, TX 77005</p>
                                </card>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <card class="border-0 tradition" hover shadow body-classes="py-5">
                                    <icon name="ni ni-send" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-uppercase font-weight-bold">Email Address</h6>
                                    <p class="description mt-3">Our beautiful secretaries are the primary contacts for the college:<br/>
                                      <a href="mailto:duncancollegesecretaries@gmail.com">duncancollegesecretaries@gmail.com</a></p>
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
import faq from '../../data/faq.data';

export default {
  data() {
    return {
      questions: []
    }
  },
  created() {
    this.questions = faq
  }
}
</script>

<style scoped>
</style>
