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

                    <div class="item-info">
                        <div class="title">{{ item.title }}</div>
                        <div class="tags">
                            <a href="#" class="tag" v-for="tag in item.tags">{{ tag }}</a>
                        </div>
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
    width: 90%;
    margin: 0 auto;

    @media (max-width: 419px) {
        width: 100%;
    }

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

        padding: 10px 10px;
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
            margin: 20px auto;
            display: block;
            border: 1px solid var(--vp-c-bg-soft);
            border-radius: 7px;
            overflow: hidden;
            height: 100%;
            background-color: var(--vp-c-bg-soft);
            transition: border-color 0.25s, background-color 0.25s;

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


            .item-info {
                padding: 30px 35px;

                @media (max-width: 419px) {
                    padding: 15px 20px;
                }

                .title {
                    line-height: 24px;
                    font-size: 18px;
                    font-weight: 500;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    
                    @media (max-width: 419px) {
                        font-size: 16px;
                    }
                }

                .date {
                    line-height: 24px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--vp-c-text-2);
                    margin-top: 10px;
                }

                .tags {
                    margin-top: 10px;
                    margin-left: -3px;

                    .tag {
                        margin: 3px;
                        padding: 0px 6px;
                        display: inline-block;
                        background: var(--vp-c-bg-soft-down);
                        font-size: 10px;
                        font-weight: 500;
                        border-radius: 5px;

                    }
                }

            }
        }

    }


}
</style>