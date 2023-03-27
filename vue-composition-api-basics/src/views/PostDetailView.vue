<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }} here!</p>
    <div><button @click="showPostId">Show Post ID</button></div>
    <div>
      <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
// this.$route -> 컴포지션 api에서는 이렇게 사용 못함
// So in the composition API, we need to use view three's use route composable instead.
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`The ID of this post is: ${route.params.id}`);
  console.log("showPostId");
};

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    // this.$router.push('/') -> option api
    // router.push("/");
    router.push({ name: "home" });
  }, 3000);
};

const goToFirstPost = () => {
  router.push({
    name: "postDetail",
    params: {
      id: "id1",
    },
  });
};
</script>
