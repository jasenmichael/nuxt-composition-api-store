<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Home</h1>
      <div class="links">
        <a
          href="https://gist.github.com/jasenmichael/e525c07873677db6a83a72f84157102e"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Gist
        </a>
        <a
          href="https://github.com/jasenmichael/nuxt-composition-api-store"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Repo
        </a>
        <nuxt-link class="button--green" to="/about"> About </nuxt-link>
        <button class="button--grey" @click="state.count++">increment</button>
        {{ state.count }}
      </div>
    </div>
  </div>
</template>

<script>
import { state } from '../state'

export default {
  setup() {
    return { state }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
