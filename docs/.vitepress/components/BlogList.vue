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

                    <img v-if="item.img" :src="item.img" />
                    <div class="item-info">
                        <div class="title">
                            {{ item.title }}
                            <Badge class="badge" v-if="item.badge" type="tip" :text="item.badge" />
                        </div>

                        <div class="description">
                            {{ item.description }}
                        </div>
                        <div class="tags">
                            <!-- <a href="#" class="tag" v-for="tag in item.tags">{{ tag }}</a> -->
                        </div>
                        <div class="bottom-line">
                            <!-- <div class="author">Jiaolong</div> -->
                            <div class="date"> {{ new Date(item.date).toLocaleDateString() }} </div>
                            <!-- <Badge class="badge-mobile" v-if="item.badge" type="tip" :text="item.badge" /> -->
                        </div>

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
    width: 85%;
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

        padding: 10px 30px;
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
            display: flex;
            border: 1px solid var(--vp-c-bg-soft);
            border-radius: 10px;
            overflow: hidden;
            height: 100%;
            background-color: var(--vp-c-bg-soft);
            transition: border-color 0.25s, background-color 0.25s;


            @media (max-width: 419px) {
                margin: 20px auto;
            }

            &:first-child {
                margin-top: 10px;
            }

            &:last-child {
                margin-bottom: 10px;
            }

            img {
                width: 230px;
                height: 150px;
                /* overflow: hidden; */
                object-fit: cover;
                transition: all 0.4s;

                @media (max-width: 419px) {
                    width: 100px;
                    height: 80px;
                }
            }

            &:hover {
                border-color: var(--vp-c-brand);
                background-color: var(--vp-c-bg-soft-up);

                img {
                    scale: 1.1;
                    transition: all 0.6s;
                    margin-right: 20px;
                }

            }


            .item-info {
                height: 150px;
                padding: 20px 20px 20px 30px;

                @media (max-width: 419px) {
                    padding: 10px 15px;
                    overflow: hidden;
                    .badge{
                        display: none;
                    }
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

                .description{
                    font-size: 12px;
                    color: var(--vp-c-text-2);
                    padding-top: 5px;
                    line-height: 20px;
                }

                .bottom-line {

                    display: flex;
                    margin-top: 10px;

                    .date {
                        line-height: 24px;
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--vp-c-text-2);
                    }

                    .tags {
                        margin-left: -3px;

                        .tag {
                            margin: 3px;
                            display: inline-block;
                            padding: 1px 6px;
                            background: var(--vp-c-bg-soft-down);
                            font-size: 14px;
                            font-weight: 500;
                            border-radius: 5px;

                        }
                    }
                }


            }
        }

    }


}
</style>