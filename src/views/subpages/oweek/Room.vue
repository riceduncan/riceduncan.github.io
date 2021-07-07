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
                                    <h3>Video Tour of Duncan</h3>
                                    <hr class="mt-0 mb-3" />
                                    <div class="row">
                                        <div class="col-md-12 text-center embed-responsive embed-responsive-16by9">
                                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/MR3-SFG-ZXc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-12 my-4">
                                <card class="border-0" hover shadow>
                                    <h3>Your Room</h3>
                                    <hr class="mt-0 mb-3" />
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6">
                                            <img :src="require('../../../../public/img/oweek/room.png')" class="img-fluid d-block mx-auto" />
                                        </div>
                                        <div class="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                                            <div>
                                            <h5 class="font-weight-bold">Furniture Provided</h5>
                                                <ul>
                                                    <li>Twin XL Bedframe</li>
                                                    <li>Twin XL Mattress</li>
                                                    <li>Desk</li>
                                                    <li>Desk Chair</li>
                                                    <li>Large Dresser</li>
                                                    <li>Small Dresser</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="mt-4">Almost every New Student will live in a
                                    Duncan double. The Duncan doubles are
                                    some of the nicest and most spacious rooms
                                    at Rice. You and your roommate will share
                                    your own private bathroom (including
                                    shower, toilet, and sink), two large closets,
                                    a spacious living area, and five large win-
                                    dows. Each room also has its own thermo-
                                    stat.</p>
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
