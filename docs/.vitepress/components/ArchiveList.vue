<template>
    <div class="list">
        <a :href="page.link" class="page" v-for="(page, index) in items">

            <div class="date">
                {{ formatDateTime(page.date) }}
            </div>
            <div class="title">
                {{ page.title }}
            </div>
        </a>
    </div>
</template>


<script setup>

const props = defineProps({
    items: Object
})

function formatDateTime(date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    const hour = new Date(date).getHours();
    const minute = new Date(date).getMinutes();
    const second = new Date(date).getSeconds();
    return `${fix(month, 2)}/${fix(day, 2)}`;
}

function fix(num, length) {
    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}

</script>

<style scoped lang="less">
.list {
    padding: 10px 0;
    .page {
        display: flex;
        align-items: center;
        padding: 6px 0;
        transition: all 0.4s;

        .date {
            font-size: 14px;
            font-weight: 500;
            padding: px 5px;
            color: var(--vp-c-text-2);
            background: var(--vp-c-bg-soft);
            width: 60px;
            text-align: center;
            border-radius: 5px;
            @media (max-width: 419px) {
                font-size: 13px;
            }
        }

        .title {
            margin-left: 12px;
            text-decoration-color: none;
            font-size: 16px;


            @media (max-width: 419px) {
                font-size: 16px;
            }
        }
        


        &:hover {
            background: var(--vp-c-bg-soft);
            padding-left: 5px;
            border-radius: 5px;
            transition: all 0.4s;
        }

    }
    a {
            color: inherit;
            text-decoration: none;
        }
}
</style>