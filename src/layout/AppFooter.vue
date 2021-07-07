<template>
    <footer class="footer text-white bg-secondary py-3">
        <div class="container text-dark">
            <div class="row align-items-center">
                <div class="col-md-1 text-center">
                    <router-link to="/">
                        <img src="/img/logo/crest.png" class="img-fluid" />
                    </router-link>
                </div>
                <div class="col-md-3 text-left my-1">
                    <p class="copyright">
                        &copy; {{year}}
                        Duncan College
                    </p>
                    <p>
                    </p>
                </div>
                <div class="col-md-8 text-right my-1">
                    <div class="self-promotion">
                        <span>&lt;/&gt; with &lt;3 by Andy Wang</span><br/>
                        <a href="https://github.com/riceduncan/duncan-website/issues" class="text-dark" target="_blank" rel="noopener">Report an Issue</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>

<style>
.crest {
    height: 5rem;
}
</style>
