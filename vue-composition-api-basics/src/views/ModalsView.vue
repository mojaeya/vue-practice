<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        show dark modals?
        <input v-model="showDarkModals" type="checkbox" />
      </label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component
      v-model="showModal"
      :is="showDarkModals ? ModalDark : Modal"
      title="My modal title (via prop)"
    >
      <!-- <Modal v-model="showModal" title="My modal title (via prop)"> -->
      <!-- v-slot:title === #title -->
      <!-- <template #title> My new title </template> -->
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        deserunt voluptatibus repellendus cupiditate fugit cum saepe harum nihil
        facere, eveniet ex possimus nostrum quae quisquam repudiandae. Aut
        consectetur sed ducimus.
      </p>
    </component>
    <!-- </Modal> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";

const showModal = ref(false);
const showDarkModals = ref(false);
</script>

<!-- <script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
};
</script> -->
