<script setup lang="ts">
import Chatlist from "./components/Chatlist/Chat-list.vue";
import ChatMessages from "./components/ChatMessages/Chat-Messages.vue";
import { containerChatlist, containerChatmessages, container } from './App-style'
</script>

<template>
  <div :class="container">
    <div :class="containerChatlist">
      <Chatlist />
    </div>

    <div :class="containerChatmessages">
      <ChatMessages />
    </div>
  </div>
</template>


