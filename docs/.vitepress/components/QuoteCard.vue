<template>
    <div class="header">
        <div class="left">
            <div class="title">{{ title }}</div>
            <iconRight class="iconRight" theme="outline" size="24" fill="#333" />
        </div>
        <div class="caption">共收录<span class="number">14</span>条</div>

    </div>

    <div class="quoteList">
        <div v-for="item in items.reverse()" class="quoteCard">
            <div class="box">
                <div class="detail">{{ item[0] }}</div>
                <div v-if="item[2] == null" class="quote">{{ item[1] }}</div>
                <a v-else class="link" :href="item[2]" target="_blank">
                    <div class="text">{{ item[1] }}</div>
                    <iconLink class="icon" theme="outline" size="16" fill="var(--vp-c-text-2)" />
                </a>

            </div>

        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    title: String,
    items: Object
})

</script>


<script>

import {
    Right as iconRight,
    LinkOne as iconLink
} from '@icon-park/vue-next';


</script>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .left {
        display: flex;
        align-items: center;

        .title {
            line-height: 32px;
            font-size: 24px;
            font-weight: 600;
        }

        .iconRight{
            transform: rotate(90deg);
            transition: border-color 0.25s, background-color 0.25s;

        }
    }

}

.quoteList {
    width: 100%;
    column-gap: 0;
    column-count: 3;
    margin-bottom: 50px;

    @media (max-width: 860px) {
        column-count: 2;
    }


    @media (max-width: 419px) {
        column-count: 1;
    }


    a {
        text-decoration: inherit;
        outline: none;
        color: inherit;
    }

    .quoteCard {
        height: 100%;
        display: inline-block;
        margin: 10px;
        border: 1px solid var(--vp-c-bg-soft);
        border-radius: 12px;
        background-color: var(--vp-c-bg-soft);
        transition: border-color 0.25s, background-color 0.25s;

        @media (max-width: 419px) {
            margin: 10px 0;
        }


        @media (min-width: 419px) {
            &:hover {
                border-color: var(--vp-c-brand);
                background-color: var(--vp-c-bg-soft-up);

            }
        }




        .box {
            width: 100%;
            padding: 20px;
            height: 100%;
            align-items: center;

            @media (max-width: 419px) {
                padding: 15px 20px 10px 20px;
            }

            .detail {
                font-family: "serif";
                // font-weight: 400;

                @media (max-width: 419px) {
                    font-size: 15px;
                    // line-height: 22px;
                }
            }

            .quote {
                font-size: 14px;
                font-weight: 500;
                color: var(--vp-c-text-2);
                text-align: right;
                margin-top: 5px;

                @media (max-width: 419px) {
                    font-size: 13px;
                    // line-height: 22px;
                }
            }

            .link {
                display: flex;
                align-items: center;
                justify-content: flex-end;

                .text {
                    text-decoration: underline;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--vp-c-text-2);
                    text-align: right;
                    margin-top: 5px;
                }

                .icon {
                    // float: right;
                    margin: 5px 0 0 4px;
                }
            }


        }


    }
}
</style>