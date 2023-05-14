<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <!-- <h1><slot name="title" /></h1> -->
      <h1>{{ title }}</h1>
      <slot />
      <!-- <pre>{{ $slots.title() }}</pre> -> error 뜸 ㅜ-->
      <!-- <button @click="$emit('hideModal')">Hide modal</button> -->
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
      <div>Username is : {{ userData.username }}</div>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No title specified",
  },
});

const userData = inject("userData");

/* 
  emits
 */

const emit = defineEmits(["update:modelValue"]);

// const handleButtonClick = () => {
//   emit("update:modelValue", false);
// };

// this.$emit("hideModal");

// import { useSlots } from "vue";

// const slots = useSlots();

// console.log(slots.title());
</script>

<!-- <script>
export default {
  emits: ['hideModal'],
  props: {
    title: {
      type: String,
      default: "No title specified",
    },
  },
};
</script> -->

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: black;
}
</style>
