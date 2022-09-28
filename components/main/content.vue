<template>
    <div>
        <div class="mainContent-title">
            <p>{{ title }}</p>
        </div>
        <div class="mainContent-cover">
            <img src="https://picsum.photos/1200/400?random=1" alt="">
        </div>

        <div class="mainContent-content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
        </div>

        <div class="mainContent-contentImg">
            <img src="https://picsum.photos/1200/800?random=1" alt="">
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

</template>

<script setup>

const props = defineProps({
    title: String
})

const { title } = toRefs(props)

</script>

<style lang="scss" scoped>
.mainContent {
    &-title {
        font-size: 22px;
        font-weight: bolder;
    }

    &-cover {
        padding-top: 1rem;
        overflow: hidden;
    }

    &-contentImg {
        overflow: hidden;
        padding: 1rem 0;
    }

    &-content {
        padding: 1rem .8rem;
        line-height: 1.9;
        font-weight: bolder;
    }
}
</style>