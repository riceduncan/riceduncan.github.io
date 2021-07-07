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
                                    <h3>Coordinator Welcome</h3>
                                    <hr class="mt-0 mb-3" />
                                    <img :src="require('../../../../public/img/oweek/all.png')" class="all" align="right" />
                                    <p>You’ll likely be hearing this dozens of times in the coming months, but it’s always
                                    worth saying:</p>
                                    <p>Welcome to Rice, welcome to Duncan, and welcome home! We are your
                                    Orientation Week (O-Week) Coordinators: Ben Thomas, Zahrah Butler, and Karen
                                    Murambadoro (BZK). As Coordinators, our goal is to give you the best possible
                                    transition into Rice University and the Duncan College family. Since last January,
                                    we have had the honor of bringing our vision for Duncan O-Week 2021 to fruition,
                                    and we cannot wait to embark on the MetrO-Week journey with you.</p>
                                    <p>We understand that you may be feeling a strange mix of excitement and un-
                                    certainty about your life at Rice. When
                                    you move into Duncan on August 15th, O-Week will help you learn about the
                                    resources at Rice, welcome you into our community, and create a variety of safety
                                    nets so you never have to face the challenges that lie ahead of you alone.
                                    Just as every passenger on the Metro is on their own journey, each of you will
                                    have a unique O-Week experience. And although you begin your time at Rice
                                    together, you will ultimately carve your own path. We are so excited to see the
                                    experiences, perspectives, and changes you bring to Duncan. So pack your bags,
                                    because the wait is almost over!</p>
                                    <p>DuncLove,</p>
                                    <p>Ben, Zahrah, Karen (BZK)</p>
                                </card>
                            </div>
                            <div class="col-sm-12 col-md-4 my-4">
                                <card class="border-0 text-center" hover shadow>
                                    <img :src="require('../../../../public/img/oweek/ben.png')" class="img-fluid d-block mx-auto" />
                                    <hr class="mt-4 mb-2" />
                                    <h4 class="name">Ben Thomas</h4>
                                    <hr class="my-0 mb-4" />
                                    <div class="stats">
                                        <h5 class="font-weight-bold"><i class="fa fa-graduation-cap"></i> 2023</h5>
                                        <h5 class="font-weight-bold"><i class="fa fa-book"></i> COMP </h5>
                                        <h5 class="font-weight-bold"><i class="fa fa-home"></i> Houston, TX</h5>
                                    </div>
                                </card>
                            </div>
                            <div class="col-sm-12 col-md-4 my-4">
                                <card class="border-0 text-center" hover shadow>
                                    <img :src="require('../../../../public/img/oweek/zahrah.png')" class="img-fluid d-block mx-auto" />
                                    <hr class="mt-4 mb-2" />
                                    <h4 class="name">Zahrah Butler</h4>
                                    <hr class="my-0 mb-4" />
                                    <div class="stats">
                                        <h5 class="font-weight-bold"><i class="fa fa-graduation-cap"></i> 2023</h5>
                                        <h5 class="font-weight-bold"><i class="fa fa-book"></i> NEURO, RELI </h5>
                                        <h5 class="font-weight-bold"><i class="fa fa-home"></i> Missouri City, TX</h5>
                                    </div>
                                </card>
                            </div>
                            <div class="col-sm-12 col-md-4 my-4">
                                <card class="border-0 text-center" hover shadow>
                                    <img :src="require('../../../../public/img/oweek/karen.png')" class="img-fluid d-block mx-auto" />
                                    <hr class="mt-4 mb-2" />
                                    <h4 class="name">Karen Murambadoro</h4>
                                    <hr class="my-0 mb-4" />
                                    <div class="stats">
                                        <h5 class="font-weight-bold"><i class="fa fa-graduation-cap"></i> 2023</h5>
                                        <h5 class="font-weight-bold"><i class="fa fa-book"></i> NEURO</h5>
                                        <h5 class="font-weight-bold"><i class="fa fa-home"></i> Overland Park, KS</h5>
                                    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@600&display=swap');

@media only screen and (max-width: 576px) {
  .all {
    height: 40vh;
  }
}

@media only screen and (min-width: 768px) {
  .all {
    height: 40vh;
    margin: 1rem 0rem .5rem 2rem;
  }
}

.name {
  font-family: 'Exo', sans-serif;
}
</style>
