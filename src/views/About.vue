<template>
  <div class="about">
    <h1>About us</h1>
    <b-jumbotron>
      <h5>
        <i>The Post</i> is an international newspaper that writes articles about
        what goes on in the current world <br />
        around us. It has offices all over the world including New York City,
        Denver, Barcelona and Milan
      </h5>
      <div class="flex">
        <img id="img-office1" src="..\office1_.jpeg" />
        <img id="img-office2" src="..\office2_.jpeg" />
      </div>
    </b-jumbotron>
  </div>
</template>
<style lang="css" scoped>
[id^="img-office"] {
  width: 30rem;
  height: auto;
  margin: 30px;
}
.flex {
  margin: auto;
}
@media screen and (max-width: 550px) {
  [id^="img-office"] {
  width: 18rem;
  height: auto;
}
}
</style>
