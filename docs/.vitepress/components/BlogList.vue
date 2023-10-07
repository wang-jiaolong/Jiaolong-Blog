<template>
    <div class="PostList">


        <div class="yearList">
            <div class="tag-list">
                <div @click="selectTag('')" class="tag-btn" :class="{active: selectedTag === '' }">
                    全部 {{ items.length }}
                </div>
                <div @click="selectTag(tag)" v-for="tag in sortedTags" class="tag-btn" :class="{active: selectedTag === tag}">
                    #{{ tag }} {{ tags[tag] }}
                </div>
            </div>


            <!-- <div class="header">
                <button @click="folder" class="left">
                    <div class="title">2023</div>
                    <iconRight class="iconRight" :class="{ rotated: isShow }" theme="outline" size="30" fill="#333" />
                </button>
                <div class="caption">共<span class="number"> {{ items.length }} </span>篇</div>
            </div> -->

            <div class="postList">

                <a :href="item.link" class="item-box" v-for="item in posts">

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
                            <div class="tags">
                                <div class="tag" v-for="tag in item.tags">#{{ tag }}</div>
                            </div>
                            <div class="date"> {{ new Date(item.date).toLocaleDateString() }} </div>

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

var selectedTag = ref("")

var posts = ref(props.items)


function folder() {
    isShow.value = !isShow.value
}

const props = defineProps({
    tags: {},
    items: Object
})

var sortedTags = ref(Object.keys(props.tags).sort(function(a,b){return props.tags[b]-props.tags[a]}))

function selectTag(tag) {
    if (selectedTag.value != tag) {
        selectedTag.value = tag
    } else {
        selectedTag.value = ""
    }



    if (tag != "") {
        posts.value = JSON.parse(JSON.stringify(props.items)).filter(item => {
            if (item.tags) {
                return JSON.parse(JSON.stringify(item.tags)).indexOf(tag) != -1
            } else {
                return false
            }
        })
    } else {
         posts.value = props.items
    }
}

</script>


<style scoped lang="less">
.yearList {
    padding: 10px 30px;
    width: 85%;
    margin: 0 auto;

    @media (max-width: 419px) {
        width: 100%;
        padding: 10px 0px;

    }

    .tag-list {
        display: flex;
        padding: 10px 0px 30px 0;
        flex-wrap: wrap;

        @media (max-width: 419px) {
            padding: 10px 0px 10px 0;
        }

        .tag-btn {
            cursor: pointer;
            color:var(--vp-c-text-2);
            padding: 5px 10px;
            margin: 3px 5px;
            background: var(--vp-c-bg-soft);
            font-size: 14px;
            font-weight: 500;
            border-radius: 7px;
            transition: all 0.4s;

            &:hover, &.active {
                background: var(--vp-c-brand);
                transition: all 0.4s;
                color:white;
            }
        }
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
                    height: 90px;
                }
            }

            &:hover {
                border-color: var(--vp-c-brand);
                background-color: var(--vp-c-bg-soft-up);

                img {
                    scale: 1.05;
                    transition: all 0.6s;
                    margin-right: 5px;
                }

                .item-info {
                    padding-right: 15px;
                    transition: all 0.6s;
                }

            }

            .item-info {
                width: 100%;
                height: 150px;
                padding: 15px 20px 10px 30px;
                transition: all 0.6s;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                @media (max-width: 419px) {
                    height: 90px;
                    padding: 8px 8px 8px 15px;
                    overflow: hidden;

                    .badge {
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
                        font-size: 15px;
                    }
                }

                .description {
                    font-size: 14px;
                    font-weight: normal;
                    color: var(--vp-c-text-2);
                    padding-top: 5px;
                    line-height: 20px;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;

                    @media (max-width: 419px) {
                        -webkit-line-clamp: 1;
                        padding-top: 0px;
                    }
                }

                .bottom-line {
                    justify-content: space-between;
                    display: flex;
                    margin-top: 5px;
                    align-items: center;

                    @media (max-width: 419px) {
                        margin-top: 0px;
                    }

                    .date {
                        line-height: 24px;
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--vp-c-text-2);

                        @media (max-width: 419px) {
                            font-size: 12px;
                        }
                    }

                    .tags {
                        margin-left: -3px;

                        .tag {
                            margin: 3px;
                            display: inline-block;
                            padding: 1px 6px;
                            font-size: 14px;
                            font-weight: 500;
                            border-radius: 5px;
                            color: var(--vp-badge-tip-text);

                            @media (max-width: 419px) {
                                padding: 0px 0px;
                                background: unset;
                                margin: 0px 2px;

                            }
                        }
                    }
                }


            }
        }

    }


}
</style>