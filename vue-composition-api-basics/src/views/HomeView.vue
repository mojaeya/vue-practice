<template>
  <div class="home">
    <h2>{{ appTilte }}</h2>
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
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { reactive, computed, watch } from "vue";

const appTilte = "My Amazing Counter App";

// const counter = ref(0),
//   counterTitle = ref("My Counter");

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

watch(
  () => counterData.count,
  (newCount) => {
    if (newCount === 20) {
      alert("way to go! You made it to 20!!");
    }
  }
);

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return "even";
  return "odd";
});

const increaseCounter = (amount, e) => {
  // counter.value++;
  // counterData.count++;
  console.log(e);
  counterData.count += amount;
};

const decreaseCoutner = (amount) => {
  // counter.value--;
  // counterData.count--;
  counterData.count -= amount;
};
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
