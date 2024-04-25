<template>
    <div :class="TopBar">
        <input type="text" placeholder="Pesquisar pessoa" />
        <a href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#36B9CC"
                    d="M11.6668 11.8767V13.6183C10.9126 13.3517 10.1054 13.2699 9.313 13.3798C8.52061 13.4898 7.76616 13.7882 7.11302 14.2502C6.45988 14.7121 5.92712 15.324 5.55946 16.0345C5.19181 16.745 5.00001 17.5334 5.00016 18.3333L3.3335 18.3325C3.33324 17.3149 3.56593 16.3108 4.01375 15.397C4.46156 14.4832 5.11261 13.6841 5.91701 13.0609C6.72141 12.4376 7.65781 12.0068 8.65446 11.8014C9.6511 11.596 10.6815 11.6223 11.6668 11.8767ZM10.0002 10.8333C7.23766 10.8333 5.00016 8.59584 5.00016 5.83334C5.00016 3.07084 7.23766 0.833344 10.0002 0.833344C12.7627 0.833344 15.0002 3.07084 15.0002 5.83334C15.0002 8.59584 12.7627 10.8333 10.0002 10.8333ZM10.0002 9.16668C11.8418 9.16668 13.3335 7.67501 13.3335 5.83334C13.3335 3.99168 11.8418 2.50001 10.0002 2.50001C8.1585 2.50001 6.66683 3.99168 6.66683 5.83334C6.66683 7.67501 8.1585 9.16668 10.0002 9.16668ZM15.0002 14.1667V11.6667H16.6668V14.1667H19.1668V15.8333H16.6668V18.3333H15.0002V15.8333H12.5002V14.1667H15.0002Z" />
            </svg>
        </a>
        <a href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#212529"
                    d="M8.33333 15H11.6667V13.3333H8.33333V15ZM2.5 5V6.66667H17.5V5H2.5ZM5 10.8333H15V9.16667H5V10.8333Z" />
            </svg>
        </a>
    </div>
    <ul :class="FilterBar">
        <div :class="wrapperTabs" class="FilterBar__wrapper">
            <li :class="item">
                <button>Todos</button>
            </li>
            <li :class="item">
                <button>RH</button>
            </li>
            <li :class="item">
                <button>TI</button>
            </li>
            <li :class="item">
                <button>Diretoria</button>
            </li>
            <li :class="item">
                <button>Financeiro</button>
            </li>
            <li :class="item">
                <button>Relacionamento</button>
            </li>

            <button class="btnLeft" @click="moveLeft()">
                <ArrowLeft :size=18 color="#212529" />
            </button>
            <button class="btnRight" @click="moveRight()">
                <ArrowRight :size=18 color="#212529" />
            </button>

        </div>
    </ul>

    <div :class="chatsWrapper">
        <Cards v-for="chat in chats" :key="chat.id" :data="chat" />
    </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import type { Card } from "../types"
import { DataChats } from '../types';
import Cards from "../Cards/Card-user.vue"
import { ArrowRight, ArrowLeft } from 'lucide-vue-next'
import { TopBar, FilterBar, item, wrapperTabs, chatsWrapper } from './styles';


const chats = ref<Card[]>([]);

async function fetchChats() {
    try {
        const response = await fetch('http://localhost:3000/chats');
        const data: Card[] = await response.json();

        const parse = DataChats.safeParse(data);

        if (!parse.success) {
            console.error(parse.error.message)
        }

        chats.value = data;
    } catch (error) {
        console.error('Error fetching chats:', error);
        throw error;
    }
}
fetchChats()

function moveLeft() {
    let container = document.querySelector('.FilterBar__wrapper');
    container?.scrollTo({
        left: container.scrollLeft + 200,
        top: 0,
        behavior: "smooth"
    });
}

function moveRight() {
    let container = document.querySelector('.FilterBar__wrapper');
    container?.scrollTo({
        left: container.scrollLeft - 200,
        top: 0,
        behavior: "smooth"
    });
}

</script>