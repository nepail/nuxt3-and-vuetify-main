<template>
    <div class="container">
        <div class="card">
            <div class="card-img">
                <v-img src="https://picsum.photos/600/400?random=1"></v-img>
            </div>
            <div class="card-content">
                <div class="card-content-label">
                    <a href="">活動活動</a>
                </div>
                <h3>大海嘯</h3>
                <h4>尾小寶</h4>
                <h5>聰明蛋</h5>
                <div class="bottom">
                    <v-icon>mdi-calendar</v-icon>
                    <p>2022.09.21</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-img">
                <v-img src="https://picsum.photos/600/400?random=2"></v-img>
            </div>
            <div class="card-content">
                <div class="card-content-label">
                    <a href="">活動活動</a>
                </div>
                <h3>大海嘯</h3>
                <h4>尾小寶</h4>
                <h5>聰明蛋</h5>
                <div class="bottom">
                    <v-icon>mdi-calendar</v-icon>
                    <p>2022.09.21</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-img">
                <v-img src="https://picsum.photos/600/400?random=3"></v-img>
            </div>
            <div class="card-content">
                <div class="card-content-label">
                    <a href="">活動活動</a>
                </div>
                <h3>大海嘯</h3>
                <h4>尾小寶</h4>
                <h5>聰明蛋</h5>
                <div class="bottom">
                    <v-icon>mdi-calendar</v-icon>
                    <p>2022.09.21</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-img">
                <v-img src="https://picsum.photos/600/400?random=3"></v-img>
            </div>
            <div class="card-content">
                <div class="card-content-label">
                    <a href="">活動活動</a>
                </div>
                <h3>大海嘯</h3>
                <h4>尾小寶</h4>
                <h5>聰明蛋</h5>
                <div class="bottom">
                    <v-icon>mdi-calendar</v-icon>
                    <p>2022.09.21</p>
                </div>
            </div>
        </div>
    </div>
</template>

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
    margin:30px;
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
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                line-height: 1.4;
            }
            h4{
                font-size: 12px;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                line-height: 1.4;
            }
            h5{
                font-size: 12px;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                line-height: 1.4;
            }

        }
    }
}
</style>