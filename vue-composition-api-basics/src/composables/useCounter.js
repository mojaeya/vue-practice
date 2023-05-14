import { reactive, computed, watch, nextTick, onMounted } from "vue";

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

export function useCounter() {
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

  const increaseCounter = async (amount, e) => {
    // counter.value++;
    // counterData.count++;
    console.log(e);
    counterData.count += amount;

    // option api
    // this.$nextTick(() => {
    //   // do something after the dom has updated
    // })
    await nextTick(() => {
      console.log("do something when counter has updated in the dom");
    });
  };

  const decreaseCoutner = (amount) => {
    // counter.value--;
    // counterData.count--;
    counterData.count -= amount;
  };

  onMounted(() => {
    console.log("Do stuff related to Counter");
  });

  return {
    counterData,
    increaseCounter,
    decreaseCoutner,
    oddOrEven,
  };
}
