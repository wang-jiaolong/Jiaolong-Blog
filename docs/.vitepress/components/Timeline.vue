<template>
    <div class="timeline">

        <div v-for="item in items" class="timeline-item">
            <div class="timeline-photo">
                <img
                    src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1987&q=80" />
                <button class="timeline-cta">READ MORE</button>
            </div>
            <div class="timeline-headline">
                <p class="timeline-subtitle">{{ item.date }}</p>
                <h2 class="timeline-title">{{ item.title }}</h2>
                <!-- <p class="timeline-excerpt">{{ item.abstract }}</p> -->
            </div>

        </div>
    </div>
    <div class="timeline-overlay"></div>
</template>

<script setup>

var items = [
    {
        title: "就这样，从这周开始写周记",
        date: "2023-05-07",
        abstract: "因为之前交毕设时写过周报和网上诸多周报生成器的暗示下，一直默认写周报是一个痛苦且无用的事。但在无意中刷到很多开发者写的个人周报后，才发现写周报和写个人周报是两码事。定期复盘回顾自己其实是一个能提高自己的过程（哪怕是写作能力）。正值今天是周末，遂想写点什么，发现虽然每天过的都很忙碌，但仔细想想却不知道都干了什么，再次觉得写周报是有必要的，也能锻炼自己表达的能力，之前唯二写过的两篇长文都反复斟酌了好久，费劲毕生所学，哈哈哈哈。",
        link: "aaa"
    },
    {
        title: "就这样，从这周开始写周记",
        date: "2023-05-07",
        abstract: "因为之前交毕设时写过周报和网上诸多周报生成器的暗示下，一直默认写周报是一个痛苦且无用的事。但在无意中刷到很多开发者写的个人周报后，才发现写周报和写个人周报是两码事。定期复盘回顾自己其实是一个能提高自己的过程（哪怕是写作能力）。正值今天是周末，遂想写点什么，发现虽然每天过的都很忙碌，但仔细想想却不知道都干了什么，再次觉得写周报是有必要的，也能锻炼自己表达的能力，之前唯二写过的两篇长文都反复斟酌了好久，费劲毕生所学，哈哈哈哈。",
        link: "aaa"
    },
    {
        title: "就这样，从这周开始写周记",
        date: "2023-05-07",
        abstract: "因为之前交毕设时写过周报和网上诸多周报生成器的暗示下，一直默认写周报是一个痛苦且无用的事。但在无意中刷到很多开发者写的个人周报后，才发现写周报和写个人周报是两码事。定期复盘回顾自己其实是一个能提高自己的过程（哪怕是写作能力）。正值今天是周末，遂想写点什么，发现虽然每天过的都很忙碌，但仔细想想却不知道都干了什么，再次觉得写周报是有必要的，也能锻炼自己表达的能力，之前唯二写过的两篇长文都反复斟酌了好久，费劲毕生所学，哈哈哈哈。",
        link: "aaa"
    },

]

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Jura:400,500,600');
@import url('https://fonts.googleapis.com/css?family=K2D:400,500,600');


* {
    box-sizing: border-box;
}

html,
body {
    height: 100%;
}

body {
    background-color: #3a3a3a;
    font-family: 'K2D', sans-serif;
}

.timeline {
    width: 100%;
    margin: auto;
    max-width: 760px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-bottom: 100px;
    position: relative;

    &:before {
        position: absolute;
        left: 50%;
        height: 100%;
        width: 2px;
        background-color: var(--vp-c-text-2);
        opacity: 0.2;
        transition: .3s 0.3s;
        content: "";
    }

    &-overlay {
        width: 100%;
        background-color: darken(#3a3a3a, 5%);
        height: 0;
        position: fixed;
        top: 0;
        z-index: 5;
        left: 0;
    }

    &-headline {
        color: #fff;
        position: absolute;
        display: flex;
        letter-spacing: .4px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        left: 0;
        width: 100%;
        top: 100%;
        font-size: calc(.2vw + 10px);
        padding: 20px 0 0 0;
    }

    &-content {
        display: none;
        position: relative;
        color: #929292;
        padding: 4% 10%;
        font-size: calc(12px + .4vw);
        width: 100%;
        margin: auto;
        line-height: 1.5;
        background-color: darken(#3a3a3a, 5%);
    }

    &-title {
        font-family: 'Jura', serif;
        margin: 0;
        font-weight: normal;
        font-size: 1.5em;
        color: var(--vp-c-text-1);
        white-space: nowrap;
        padding-top: 10px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &-excerpt {
        font-size: 1.1em;
        padding: 0 10px;
        line-height: 1.4;
        font-weight: normal;
        margin-top: 8px;
        font-family: 'K2D';
        color: #929292;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    &-item {
        // height: 30vh;
        width: 45%;
        position: relative;
        margin: 5px 0;

        &:nth-child(even) {
            align-self: flex-end;
        }
    }

    &-photo {
        width: 100%;
        // height: 100%;
        overflow: hidden;
        border-radius: 5px;
        position: relative;
        box-shadow: 0 10px 30px rgba(0, 0, 0, .2);
    }

    &-cta {
        position: absolute;
        bottom: 10%;
        left: 50%;
        border: 0;
        pointer-events: none;
        transform: translateX(-50%);
        background: none;
        font-family: 'K2D', sans-serif;
        padding: 6px 10px;
        outline: none;
        cursor: pointer;
        font-size: 12px;
        letter-spacing: 1px;
        opacity: 0;
        color: #fff;
        background-color: rgba(#3a3a3a, .6);
        border-radius: 4px;
    }

    &-photo>img {
        overflow: hidden;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }


    &-subtitle {
        margin: 0 0 6px 0;
        font-family: 'Jura', sans-serif;
        font-weight: normal;
        font-size: 1em;
        letter-spacing: 2px;
        color: var(--vp-c-text-2);
    }

    &-back {
        position: fixed;
        right: 20px;
        top: 10px;
        opacity: 0;
        visibility: hidden;
        z-index: 4;
        padding: 5px 10px;
        border: 1px solid rgba(255, 255, 255, .2);
        background-color: rgba(#3a3a3a, .4);
        border-radius: 4px;
        outline: none;
        display: flex;
        cursor: pointer;
        transition: .4s;


        &:hover {
            background-color: rgba(#3a3a3a, .8);
        }

        &>svg {
            width: 28px;
            stroke: #fff;
        }
    }
}</style>