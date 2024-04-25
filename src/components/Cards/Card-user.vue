<template>
    <ul :class="Chats">
        <li class="item">
            <img :src="data.avatar || 'https://via.placeholder.com/150'" :alt="'Foto de ' + data.name" class="avatar">
            <div class="info">
                <h3>{{ data.name }}</h3>
                <p>{{ data.lastMessage }}</p>
            </div>
            <div class="time">
                <p>{{ formatDate(data.lastMessageDate) }}</p>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.801 6.87995L6.507 7.58595L10.7397 3.35315L11.4469 4.06026L6.507 9.00015L3.325 5.81815L4.0321 5.11105L5.0945 6.17345L5.801 6.87995ZM5.80185 5.4661L8.27815 2.98975L8.9833 3.69489L6.507 6.1712L5.80185 5.4661ZM4.38849 8.29365L3.68198 9.00015L0.5 5.81815L1.20711 5.11105L1.91361 5.8176L1.91302 5.81815L4.38849 8.29365Z"
                        fill="#18B07A" />
                </svg>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { Card } from "../types"
import { Chats } from "./styles"

defineProps<{
    data: Card;
}>();

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric' });
}


</script>