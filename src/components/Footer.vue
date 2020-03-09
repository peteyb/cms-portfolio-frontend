<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="#">
                <font-awesome :icon="['fab', 'github']"/>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <font-awesome :icon="['fab', 'twitter']"/>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">Copyright &copy; Peter Bryant 2020</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
footer {
  padding: 50px 0 65px;
  .list-inline {
    margin: 0;
    padding: 0;
  }
  .copyright {
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
  }
}

</style>