<template>
    <div class="container scrollbar">
        <div class="card" v-for="(item, i) in cardList" :key="i">
            <div class="card-img">
                <v-img :src="item.src"></v-img>
            </div>
            <div class="card-content">
                <div class="card-content-label">
                    <a href="">活動活動</a>
                </div>
                <h3>{{item.title}}</h3>
                <h4>{{item.description}}</h4>
                <h5>{{item.src}}</h5>
                <div class="bottom">
                    <v-icon>mdi-calendar</v-icon>
                    <p>{{item.time}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const cardList = [
    { time:'2022.09.01', title:'大買家', description: '快來大買家，好禮送不完', src: 'https://picsum.photos/600/400?random=1' },
    { time:'2022.09.02', title:'台中經船', description: '台中驚傳有經船的驚傳，嚇死寶寶', src: 'https://picsum.photos/600/400?random=2' },
    { time:'2022.09.03', title:'寶寶不要哭',description: '寶寶不哭，哭不哭大寶寶，寶寶哭', src: 'https://picsum.photos/600/400?random=3' },
    { time:'2022.09.04', title:'體育賠率',description: '體育的賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率體育賠率，體育賠率，', src: 'https://picsum.photos/600/400?random=4' },
    { time:'2022.09.05', title:'明天星期六',description: '明天是星期六，後天是星期日', src: 'https://picsum.photos/600/400?random=5' },
    { time:'2022.09.06', title:'非洲',description: '在非洲每過60秒，就有一分鐘過去', src: 'https://picsum.photos/600/400?random=6' },
]

</script>

<style lang="scss">

$medium: 768px;
$big: 992px;

.container {
    margin: 0 auto;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    display: grid;
    // grid-template-columns: repeat(1, 1fr);
    grid-auto-flow:column;  
    grid-gap:10px; 
    overflow:auto;
    // grid-auto-flow: column;
    overflow: auto;
    padding-top: 1.75rem;
    column-gap: 24px;
    @media(min-width: $medium){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: $big){
        grid-template-columns: repeat(4, 1fr);
    }
    .card{
        margin: 0;
        margin-bottom: 2.5rem;
        cursor: pointer;
        &-img{
            overflow: hidden;
            border-radius: 12px;
        }
        &-content{
            display: flex;
            flex-direction: column;
            align-items: baseline;
            margin-top: 10px;
            padding: 0 0.25rem;
            .bottom{
                margin-top: 10px;
                display: flex;
                border-top: 1px dotted black;
                font-size: 10px;
                padding-top: 10px;
                color: red;
                width: 100%;
            }
            &-label{
                background: gray;
                border-radius: 17px;
                padding: 0.3rem 0.6rem;
                color: #fff;
                font-size: 10px;

            }
            h3{
                padding-top: .25rem;
                color: red;
                font-size: 16px;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                line-height: 1.4;
            }
            h4{
                font-size: 12px;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                line-height: 1.4;
            }
            h5{
                font-size: 12px;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                line-height: 1.4;
            }

        }
    }
}
</style>