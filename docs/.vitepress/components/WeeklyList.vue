<template>
    <div class="list">
        <div class="page" v-for="page in items">

            <div class="date">
                {{ formatDateTime(page.date) }}
            </div>
            <a :href="page.link" class="title">
                {{ page.title }}
            </a>
        </div>
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
    .page {
        display: flex;
        align-items: center;
        padding: 7px 0;
        transition: all 0.4s;

        .date {
            font-size: 12px;
            font-weight: 500;
            padding: 1px 5px;
            color: var(--vp-c-text-2);
            background: var(--vp-c-bg-soft);
            width: 45px;
            text-align: center;
            border-radius: 5px;
        }

        .title {
            margin-left: 12px;
            text-decoration-color: none;

        }

        a {
            color: inherit;
        }

        &:hover {
            background: var(--vp-c-bg-soft);
            padding: 7px 5px;
            border-radius: 5px;
            transition: all 0.4s;
        }

    }
}
</style>