<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTilte }}</h2>
    <!-- <h3>{{ counterTitle }}:</h3> -->
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCoutner(2)" class="btn">--</button>
      <button @click="decreaseCoutner(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter id {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import {
  reactive,
  computed,
  watch,
  ref,
  nextTick,
  // onUpdated,
  // onBeforeMount,
  onMounted,
  // onBeforeUnmount,
  // onUnmounted,
  // onActivated,
  // onDeactivated,
} from "vue";
import { useCounter } from "@/composables/useCounter";
import { vAutofocus } from "@/directives/vAutofocus";

const appTilte = "My Amazing Counter App";

// this.$refs.appTilteRef -> option api
const appTitleRef = ref(null);

// const counter = ref(0),
//   counterTitle = ref("My Counter");

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
});

const { counterData, increaseCounter, oddOrEven, decreaseCoutner } =
  useCounter();
</script>

<!-- <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    myComputedProperty() {
      // perform logic based on a data property
      return "my result";
    },
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount == 20) alert("asdasd");
    },
  },
  mounted() {
    // 옵션 api 사용하면 각 유형에 하나의 후크만 추가 가능
  },
  unmounted() {},
};
</script> -->

<!-- <script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    const increaseCounter = () => {
      counter.value++;
    };

    const decreaseCoutner = () => {
      counter.value--;
    };

    return {
      counter,
      increaseCounter,
      decreaseCoutner,
    };
  },
};
</script> -->

<!-- 
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCoutner() {
      this.counter--;
    },
  },
};
</script> -->

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
