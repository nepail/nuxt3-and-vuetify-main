<template>
    <div>
        <div class="category">
            <p class="category-chip">電競新聞</p>
            <div class="category-calendar">
                <v-icon>mdi-calendar</v-icon>
                <p>September 05,2022</p>
            </div>

        </div>

        <div class="mainContent-title">
            <p class="title">{{ title }}</p>
            <p class="subTitle">4支隊伍攜手出征2022LOL全球總決賽 賽程曝光</p>
        </div>
        <div class="mainContent-cover">
            <img src="https://picsum.photos/1200/400?random=1" alt="">
        </div>

        <div class="mainContent-container">
            <div class="mainContent-content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                    veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                    maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
            </div>

            <div class="mainContent-content-chidTitle">
                <p>JDG、TES、EDG、RNG 攜手出征2022全球總決賽</p>
            </div>

            <div class="mainContent-content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                    veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                    maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                    veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                    maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                    veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                    maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
            </div>

            <div class="mainContent-content-chidTitle">
                <p>英雄聯盟2022全球總決賽程曝光</p>
            </div>
            <div class="mainContent-content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                    veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                    maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                    veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                    maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                    veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                    maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                    veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                    maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
            </div>
        </div>


    </div>

</template>

<script setup>

const props = defineProps({
    title: String
})

const { title } = toRefs(props)

</script>

<style lang="scss" scoped>
.category {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    &-chip {
        color: #fff;
        background-color: rgba(190, 14, 14, 0.971);
        padding: 4px 8px;
        border-radius: 35px;
    }
    &-calendar{
        display: flex;
        color: rgba(255, 42, 0, 0.753);
        font-size: 12px;
        margin-left: .5rem;
    }
}

.mainContent {
    &-title {
        font-size: 22px;
        font-weight: bolder;
        margin-bottom: 1.2rem;
        border-bottom: 1px solid rgba(250, 246, 246, 0.956);

        .subTitle {
            font-size: 1rem;
            padding: 1rem 0 1.5rem 0;
        }
    }

    &-cover {
        padding: 1.5rem 0;
        overflow: hidden;

        img {
            border-radius: 20px;
        }
    }

    &-contentImg {
        overflow: hidden;
        padding: 1rem 0;
    }

    &-content {
        line-height: 1.9;
        font-weight: bolder;
        margin-bottom: 2rem;

        p {
            line-height: 1.9;
            margin-bottom: 1.5rem;
        }

        &-chidTitle {
            border-top: 1px solid rgb(212, 212, 212);
            border-bottom: 1px solid rgb(212, 212, 212);
            color: rgba(253, 70, 3, 0.837);
            font-size: 18px;
            font-weight: 600;
            padding: 1rem 0;
            margin: 1.3rem 0;
        }
    }
}
</style>