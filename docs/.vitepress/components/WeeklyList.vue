<template>

    <div class="page" v-for="page in items">
        
        <div class="date">
            {{ page.date.slice(5) }}
        </div>
        <a :href="page.link" class="title">
            {{ page.title }}
        </a>
    </div>




</template>


<script setup>

const props = defineProps({
    items: Object
})

</script>

<style scoped lang="less">

.page{
    display: flex;
    align-items: center;
    padding: 5px 0;
    .date{
        font-size: 10px;
        font-weight: 500;
        padding: 1px 5px;
        color: var(--vp-c-text-2);
        background: var(--vp-c-bg-soft);
        width:40px;
        text-align: center;
        border-radius: 5px;
    }
    .title{
        margin-left: 10px;
        text-decoration-color: none;

    }
    a { color: inherit; } 

}

</style>