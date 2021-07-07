<template>
    <div class="government-page">
        <section class="section section-lg pt-lg-0 mt-5">
            <div class="container">
                <base-button class="mb-3 mb-sm-0"
                             type="warning">
                    <router-link to="/oweek" class="text-white">Back to O-Week Home</router-link>
                </base-button>
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-12 my-4">
                                <card class="border-0" hover shadow>
                                    <h3>Mail & Packages</h3>
                                    <hr class="mt-0 mb-3" />
                                    <p>Your Duncan mailing address is</p>
                                    <div>
                                        [Your Name]<br/>
                                        1601 Rice Boulevard,<br/>
                                        Houston, TX 77005
                                    </div>
                                    <p></p>
                                    <p><span class="font-weight-bold">Please do not ship or mail things that would arrive prior to
                                    August 15th.</span> Our space is very limited and used by other groups
                                    this summer, so please bring all of your important items with you.
                                    There will be plenty of time to purchase and receive personal
                                    items after O-Week.</p>
                                </card>
                            </div>
                            <div class="col-lg-12 my-4">
                                <card class="border-0" hover shadow>
                                    <h3>Duncan Contacts</h3>
                                    <hr class="mt-0 mb-3" />
                                    <h5>Questions about O-Week or life at Rice?</h5>
                                    <p>Email our O-Week Coordinators:</p>
                                    Ben, Zahrah, Karen<br/>
                                    <p>duncaroos@gmail.com</p>

                                    <h5>Questions about how the Adult Team plays a role at Duncan?</h5>
                                    <p>Email our Duncan Magisters:</p>
                                    Eden King<br/>
                                    <p>eden.b.king@rice.edu</p>
                                    Winston Liaw<br/>
                                    <p>winstonrliaw@gmail.com</p>

                                    <h5>Questions about administrative policies and services?</h5>
                                    <p>Email our (Interim) Duncan Coordinator:</p>
                                    Anthony Potoczniak<br/>
                                    <p>duncan@rice.edu</p>
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
export default {
};
</script>

<style scoped>
@media only screen and (max-width: 576px) {
  .filler {
    height: 25vh;
  }
}

@media only screen and (min-width: 768px) {
  .filler {
    height: 25vh;
    margin: 1rem 2rem 1rem 0rem;
  }
}
</style>
