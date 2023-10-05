<template>
    <div class="linkList">
        <div v-for="item in items" class="linkCard">
            <a :href="item.link" target="_blank" class="box">
                <img class="img" :src="item.icon" />
                <div class="info">
                    <div class="title">
                        {{ item.title }}
                    </div>
                    <div class="desc">
                        {{ item.desc }}
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    items: Object
})

</script>

<style>
.content {
    max-width: unset !important;
}
</style>

<style scoped lang="less">
.linkList {
    display: flex;
    flex-wrap: wrap;


    a {
        text-decoration: inherit;
        outline: none;
        color: inherit;
    }

    .linkCard {
        margin: 8px;
        width: calc(100% / 4 - 16px);
        display: block;
        border: 1px solid var(--vp-c-bg-soft);
        border-radius: 8px;
        height: 100%;
        background-color: var(--vp-c-bg-soft);
        transition: border-color 0.25s, background-color 0.25s;

        @media (max-width: 860px) {
            width: calc(100% / 2 - 16px);
        }

        &:hover {
            border-color: var(--vp-c-brand);
            background-color: var(--vp-c-bg-soft-up);
        }

        .box {
            display: flex;
            // flex-direction: column;
            padding: 8px;
            height: 100%;
            align-items: center;

            @media (max-width: 419px) {
                padding: 10px;

            }

            .img {
                display: block;
                float: left;
                width: 50px;
                height: 50px;
                margin-right: 10px;
                border-radius: 5px;

                @media (max-width: 419px) {
                    width: 35px;
                    height: 35px;
                }
            }

            .info {

                overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;

                .title {
                    font-size: 16px;
                    font-weight: 500;
                    margin-bottom: -3px;

                    @media (max-width: 419px) {
                        font-size: 14px;

                    }
                }

                .desc {
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--vp-c-text-2);



                    @media (max-width: 419px) {
                        width: 40px;
                        height: 40px;
                        display: none;
                    }
                }
            }


        }


    }
}
</style>