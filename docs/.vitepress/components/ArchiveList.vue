<template>
    <div class="PostList">

        <div class="yearList">

            <div class="header">
                <button @click="folder" class="left">
                    <div class="title">2023</div>
                    <iconRight class="iconRight" :class="{ rotated: isShow }" theme="outline" size="30" fill="#333" />
                </button>
                <div class="caption">共<span class="number"> {{ items.length }} </span>篇</div>
            </div>

            <div class="postList">

                <a :href="item.link" class="item-box" v-for="item in items">

                    <img :src="item.img == null ? ' /posts/default.jpg' : item.img" />

                    <div class="item-info">
                        <div class="title">{{ item.title }}</div>
                        <div class="date"> {{ item.date }} </div>
                    </div>

                </a>

            </div>



        </div>


    </div>
</template>


<script setup>

import {
    Right as iconRight,
    LinkOne as iconLink
} from '@icon-park/vue-next';

import { ref } from 'vue';


var isShow = ref(true)

function folder() {
    isShow.value = !isShow.value
}

const props = defineProps({
    items: Object
})

</script>


<style scoped lang="less">
.yearList {


    width: 100%;
    margin: 0 auto;


    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .left {
            cursor: pointer;
            display: flex;
            align-items: center;

            .title {
                line-height: 32px;
                font-size: 24px;
                font-weight: 600;
            }

            .iconRight {
                transform: rotate(0deg);
                transition: transform 0.25s;
                margin-left: 5px;

                &.rotated {
                    transform: rotate(90deg);
                }
            }
        }

    }


    .postList {

        padding: 10px 0;
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 419px) {
            display: unset;
        }

        a {
            text-decoration: inherit;
            outline: none;
            color: inherit;
        }


        .item-box {
            margin: 10px 10px;
            width: calc(33% - 20px);
            display: block;
            border: 1px solid var(--vp-c-bg-soft);
            border-radius: 10px;
            overflow: hidden;
            height: 100%;
            background-color: var(--vp-c-bg-soft);
            transition: border-color 0.25s, background-color 0.25s;


            @media (max-width: 419px) {
                width: unset;
                margin: 20px 5px;

            }

            // &:first-child{
            //     margin-left: 0px;
            // }

            // &:last-child{
            //     margin-right: 0px;
            // }


            &:hover {
                border-color: var(--vp-c-brand);
                background-color: var(--vp-c-bg-soft-up);
            }

            img {
                overflow: hidden;
                object-fit: cover;
                width: 100%;
                height: 180px;
                transition: all 0.3s;

                @media (max-width: 419px) {
                    // display: none;
                }
            }
            .item-info {
                padding: 10px 15px;

                .title {
                    line-height: 24px;
                    font-size: 16px;
                    font-weight: 600;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .date {
                    line-height: 24px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--vp-c-text-2);
                }

            }
        }

    }


}
</style>