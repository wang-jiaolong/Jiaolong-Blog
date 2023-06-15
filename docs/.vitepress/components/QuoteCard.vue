<template>
    <div class="quoteList">
        <div v-for="item in items.reverse()" class="quoteCard">
            <div class="box">
                <div class="detail">{{ item[0] }}</div>
                <div v-if="item[2] == null" class="quote">{{ item[1] }}</div>
                <a v-else class="link" :href="item[2]" target="_blank">
                    <div class="text">{{ item[1] }}</div>
                    <iconLink class="icon" theme="outline" size="16" fill="var(--vp-c-text-2)" />
                    <!-- <iconLink theme="outline" size="24" fill="#333"/> -->
                </a>

            </div>

        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    items: Object
})

</script>


<script>

import {
    Share as iconShare,
    LinkOne as iconLink
} from '@icon-park/vue-next';

export default {
    components: {
        iconShare,
        iconLink
    }
}

</script>

<style scoped lang="less">
.quoteList {

    column-count: 3;

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
        width: 100%;
        height: 100%;
        display: inline-block;
        margin: 10px;
        // display: block;
        border: 1px solid var(--vp-c-bg-soft);
        border-radius: 12px;
        background-color: var(--vp-c-bg-soft);
        transition: border-color 0.25s, background-color 0.25s;



        &:hover {
            border-color: var(--vp-c-brand);
            background-color: var(--vp-c-bg-soft-up);
        }

        .box {
            width: 100%;
            padding: 20px;
            height: 100%;
            align-items: center;

            @media (max-width: 419px) {
                padding: 15px;
            }

            .detail {
                font-family: "serif";
                font-weight: 100;

            }

            .quote {
                font-size: 14px;
                font-weight: 500;
                color: var(--vp-c-text-2);
                text-align: right;
                margin-top: 5px;
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