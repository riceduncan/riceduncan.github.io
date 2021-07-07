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
                                    <h3>About O-Week</h3>
                                    <hr class="mt-0 mb-3" />
                                    <img :src="require('../../../../public/img/oweek/filler1.jpeg')" class="filler" align="left" />
                                    <p>O-Week is a week-long welcome to all things Rice University and Duncan College. It is 
                                    meant to give you a social and academic foundation for not only your first year but also 
                                    the rest of your time at Rice. While it may seem excessive to have an entire week dedicated 
                                    towards just academic and social integration into college, we’ve planned a bunch of events 
                                    and activities to help you smoothly transition into Rice!</p>
                                    <p>One of the things that has made planning this O-Week so meaningful for us, is the amazing 
                                    group of people we have been able to work with. From your very own Advisors to our 
                                    college’s Adult Team, each person has brought unique spirit and encouragement to our 
                                    process, and we are so excited for you to get to experience this same energy. At the 
                                    beginning of the week, you will meet and get to know your Advisors and the other New 
                                    Students in your O-Week group. Soon after, you’ll also be introduced to Duncan’s Adult 
                                    Team (the Duncsquad), as well as other Duncan-affiliated professors and faculty. These 
                                    will form a foundation of connections, resources, and (most importantly) lasting 
                                    relationships that you can build upon as you transition into Rice and Duncan.</p>
                                    <p>About half the week is dedicated to helping you plan your academics.You will learn 
                                    directly from an expert team of Peer Academic Advisors, garner the advice of professors 
                                    around campus, and be able to grow and support your own academic plans through the 
                                    perspectives of many different Rice students. The remainder of the week is meant to 
                                    immerse you in the unique cultures and traditions that Duncan and Rice have built over 
                                    the years.</p>
                                    <p>By the end of the week, you will not only be familiar with the plethora of resources 
                                    Rice and Duncan have to offer, but also the values upon which these resources are based.
                                    One of Duncan’s mottos is “Somos Equipo, Somos Familia” (SESF), which means “We are a team, 
                                    we are a family;” this summarizes the interactions you will have with people within Duncan. 
                                    We live together, learn together, laugh together, and most of all support each other 
                                    unconditionally in our efforts both as students and as people. It has been almost eleven 
                                    years since Duncan was founded, and while there are a lot of fun traditions and events that 
                                    have already been built, our college truly thrives through the unique impact of each incoming 
                                    class. Ultimately, this week is about setting you up to make an impact at Duncan and Rice. 
                                    We cannot wait to see all you do!</p>
                                </card>
                            </div>
                            <div class="col-lg-12 my-4">
                                <card class="border-0" hover shadow>
                                    <h3>About the Theme</h3>
                                    <hr class="mt-0 mb-3" />
                                    <img :src="require('../../../../public/img/oweek/all2.jpg')" class="filler" align="left" />
                                    <p>Throughout MetrO-Week, we aim to foster connection, inclusivity, and enthusiasm among 
                                    New Students in regards to their places at Duncan and Rice as a whole. As we embark on 
                                    this journey together, we hope to develop a strong sense of community and support where 
                                    every New Student understands they always have a home in Duncan. We welcome passengers 
                                    from all walks of life and will create an environment that empowers New Students to 
                                    realize how every facet of their own identity contributes something unique and valuable 
                                    to Duncan. With doors wide open, fellow Duncaroos will commit to inviting in New Students 
                                    and celebrating the diversity in their backgrounds and perspectives. Just like an engine 
                                    overheating, we understand New Students should not be pushed to their limits, so we will 
                                    always prioritize their mental, physical, and emotional wellbeing by enabling them to 
                                    dictate their own speed. Ultimately, our goal for MetrO-Week is to gear New Students up 
                                    for a positive start to their time at Rice, no matter their final destination. So all 
                                    aboard! Our adventure is only just beginning.</p>
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
    height: 40vh;
  }
}

@media only screen and (min-width: 768px) {
  .filler {
    height: 40vh;
    margin: 1rem 2rem 1rem 0rem;
  }
}
</style>
