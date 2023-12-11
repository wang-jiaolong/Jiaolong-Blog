<template>
    
    <div v-if="frontmatter.layout === 'doc'">
        <Layout />

    </div>

    <div v-else>
        <Layout>
            <template #doc-before>
                <div class="weekly-title">
                    <div class="title">
                        <div class="text">{{ page.title }}</div>
                    </div>
                    <div class="info">
                        <Badge type="tip" :text="'🗓️ ' + new Date(frontmatter.date).toLocaleDateString()" />
                    </div>
                </div>
                
            </template>
        </Layout>

    </div>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import { useData } from 'vitepress'

const { Layout } = DefaultTheme;
const { page, frontmatter } = useData()

</script>



<style scoped lang="less">
.weekly-title {


    .title {
        display: flex;
        align-items: flex-start;
        .text{
            letter-spacing: -0.02em;
        line-height: 40px;
        font-size: 32px;
        font-weight: bold;
        }
        
    }


    .info {
        margin-top: 15px;
    }

}
</style>