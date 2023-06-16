<template>
    <div class="container">
        <div class="timeline">

            <a :href="item.link" v-for="item in items" class="entry">
                <div class="title">
                    <h3>{{ item.date }}</h3>
                    <p>{{ item.title }}</p>
                </div>
                <div class="body">
                    <p>{{ item.abstract }}</p>
                    <!-- <ul>
                        <li>Rerum sit libero possimus amet excepturi</li>
                        <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                        <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
                    </ul> -->
                </div>
            </a>

        </div>
    </div>
</template>

<script setup>

var items = [
    {
        title: "No.01 | 就这样，从这周开始写周记",
        date: "2023-05-07",
        abstract: "因为之前交毕设时写过周报和网上诸多周报生成器的暗示下，一直默认写周报是一个痛苦且无用的事。但在无意中刷到很多开发者写的个人周报后，才发现写周报和写个人周报是两码事。定期复盘回顾自己其实是一个能提高自己的过程（哪怕是写作能力）。正值今天是周末，遂想写点什么，发现虽然每天过的都很忙碌，但仔细想想却不知道都干了什么，再次觉得写周报是有必要的，也能锻炼自己表达的能力，之前唯二写过的两篇长文都反复斟酌了好久，费劲毕生所学，哈哈哈哈。",
        link: "aaa"
    },
    {
        title: "No.01 | 就这样，从这周开始写周记",
        date: "2023-05-07",
        abstract: "因为之前交毕设时写过周报和网上诸多周报生成器的暗示下，一直默认写周报是一个痛苦且无用的事。但在无意中刷到很多开发者写的个人周报后，才发现写周报和写个人周报是两码事。定期复盘回顾自己其实是一个能提高自己的过程（哪怕是写作能力）。正值今天是周末，遂想写点什么，发现虽然每天过的都很忙碌，但仔细想想却不知道都干了什么，再次觉得写周报是有必要的，也能锻炼自己表达的能力，之前唯二写过的两篇长文都反复斟酌了好久，费劲毕生所学，哈哈哈哈。",
        link: "aaa"
    },
    {
        title: "No.01 | 就这样，从这周开始写周记",
        date: "2023-05-07",
        abstract: "因为之前交毕设时写过周报和网上诸多周报生成器的暗示下，一直默认写周报是一个痛苦且无用的事。但在无意中刷到很多开发者写的个人周报后，才发现写周报和写个人周报是两码事。定期复盘回顾自己其实是一个能提高自己的过程（哪怕是写作能力）。正值今天是周末，遂想写点什么，发现虽然每天过的都很忙碌，但仔细想想却不知道都干了什么，再次觉得写周报是有必要的，也能锻炼自己表达的能力，之前唯二写过的两篇长文都反复斟酌了好久，费劲毕生所学，哈哈哈哈。",
        link: "aaa"
    },

]

</script>


<style scoped lang="less">
.container {
    align-items: center;

    a {
        color: inherit;
    }
}

.timeline {
    width: 100%;
    position: relative;
    padding: 10px 0;

    //   box-shadow: 0.5rem 0.5rem 2rem 0 rgba(black, 0.2);
    &:before {
        content: '';
        position: absolute;
        top: 0px;
        left: calc(33% + 15px); //$gutter/2
        bottom: 0px;
        width: 4px;
        background: #ddd;
    }

    &:after {
        content: "";
        display: table;
        clear: both;
    }
}

.entry {
    display: inline-block;
    clear: both;
    text-align: left;
    position: relative;


    &:hover {
        .body {
            p {
                color: #000000;
            }
        }
    }

    .title {
        margin-bottom: .5em;
        float: left;
        width: 33%;
        padding-right: 20px;
        text-align: right;
        position: relative;


        @media (max-width: 419px) {
            font-size: 14px;
            padding-right: 10px;
        }

        &:before {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            border: 4px solid salmon;
            background-color: #fff;
            border-radius: 100%;
            top: 15%;
            right: -21px;
            z-index: 99;
        }

        h3 {
            margin: 0;
            font-size: 120%;
        }

        p {
            margin: 0;
            font-size: 100%;
        }
    }

    .body {
        margin: 0 0 3em;
        float: right;
        width: 66%;
        padding-left: 30px;
        ;

        p {
            color: #aaa;
            padding-left: 0;
            list-style-type: none;
            line-height: 1.4em;
            line-clamp: 3;
            -webkit-line-clamp: 3;
            /*只显示6行*/
            overflow: hidden;
            /*溢出隐藏*/
            text-overflow: ellipsis;
            /*省略号代替*/

            display: -webkit-box;
            /*弹性伸缩盒子*/
            -webkit-box-orient: vertical;
            /*垂直排列*/


            &:first-child {
                margin-top: 0;
                font-weight: 400;
            }

            transition: all .3s linear;



        }

        ul {
            color: #aaa;
            padding-left: 0;
            list-style-type: none;

            li:before {
                content: "–";
                margin-right: .5em;
            }
        }
    }
}</style>