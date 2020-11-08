<template>
    <div class="about-page">
        <section class="section-about-cover section-shaped my-0">
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
                            <h1 class="display-3 text-white">About Duncan
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/logo/crest.jpg'" class="rounded">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">2010</span>
                                        <span class="description">Established</span>
                                    </div>
                                    <div>
                                        <span class="heading">420</span>
                                        <span class="description">Residents</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">2</span>
                                        <span class="description">Publics</span>
                                    </div>
                                    <div>
                                        <span class="heading">Gold</span>
                                        <span class="description">LEED Certification</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 pt-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>Duncan College is named after Charles William Duncan, Jr., the U.S. Secretary of Energy under Jimmy Carter and former 
                                    chairman of the Rice Board of Governors, and his wife, Anne. They have been extraordinarily generous to Rice: helping to 
                                    establish the James A. Baker III Institute of Public Policy and supporting the Shepherd School of Music. In 2007, they 
                                    donated $30 million to establishing new residential colleges to expand the student body while maintaining Rice's uniqueness. 
                                    Their passion for environmental sustainability drove Duncan College to be designed as Rice’s “green” college - we are one 
                                    of the first buildings in Houston to receive Leadership in Energy and Environmental Design Gold Certification.</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 py-5 border-top text-left">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <h4 class="pb-2"> Green Additions </h4>
                                    <ul>
                                        <li>reduced energy and water consumption (at least 25% and 30% respectively)</li>
                                        <li>monitoring system that shuts off lights when no motion is detected for ~30 minutes</li>
                                        <li>air conditioning that shuts off when windows are opened</li>
                                        <li>rooftop gardens with low-maintenance plants that cut heating/cooling costs</li>
                                        <li>runoff water collection system for reuse</li>
                                        <li>pod bathrooms, minimizing construction waste and traffic</li>
                                        <li>two flushing options to lower water consumption</li>
                                        <li>no carpet, a product that when manufactured causes heavy CO2 emission and waste</li>
                                        <li>use of green materials in construction and furnishing</li>
                                        <li>recycling containers are located in each floor’s elevator bay and down in the servery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section section-lg pt-lg-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-12">
                                <card class="border-0" hover shadow>
                                    <div class="row">
                                        <h2 class="d-block mx-auto mb-5 font-weight-bold"> College Tour </h2>
                                        <div class="col-md-12 text-center embed-responsive embed-responsive-16by9">
                                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/MR3-SFG-ZXc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
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
export default {};
</script>
<style>
</style>
