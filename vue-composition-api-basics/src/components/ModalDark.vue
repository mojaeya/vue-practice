<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal-dark">
      <!-- <h1><slot name="title" /></h1> -->
      <h1>{{ title }}</h1>
      <slot />
      <!-- <pre>{{ $slots.title() }}</pre> -> error 뜸 ㅜ-->
      <!-- <button @click="$emit('hideModal')">Hide modal</button> -->
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
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

/* 
  emits
 */

const emit = defineEmits(["update:modelValue"]);
</script>

<style>
.modal-dark {
  background: #333;
  color: white;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
