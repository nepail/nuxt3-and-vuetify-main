<template>
    <div id="footer" class="footer">
        <div class="container">
            <div class="info-container">
                <div class="social-container">
                    <div class="footer-nav-bar">
                        <div class="footer-nav-item">
                            <a>關於esball+</a>
                        </div>
                        <div class="footer-nav-item">
                            <a>代理制度</a>
                        </div>
                        <div class="footer-nav-item">
                            <a>存款幫助</a>
                        </div>
                        <div class="footer-nav-item">
                            <a>取款幫助</a>
                        </div>
                        <div class="footer-nav-item">
                            <a>常見問題</a>
                        </div>
                        <div class="footer-nav-item">
                            <a>聯絡我們</a>
                        </div>

                    </div>
                    <a href="" target="_blank"></a>
                </div>
            </div>
        </div>
        <div class="bottom-container">
            <div class="copy-right">COPYRIGHT E世博 RESERVED.</div>
        </div>
    </div>

</template>

<style lang="scss">

.footer-nav-bar{
    display: flex;
    .footer-nav-item{
        a{
            font-size: 12px;
        }
    }
}


@media (min-width: 992px) {
    .footer-nav-bar{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        flex-direction: row !important;
        .footer-nav-item{
            background:
            linear-gradient(white,white) right center/1px calc(100% - 10px);
            background-repeat: no-repeat;
            display:flex;
            
                a{
                font-size: 14px;
                margin-right: 90px;
            }
        }
    }
}


@media(max-width: 1450px){
    .footer-nav-bar{

        .footer-nav-item{
            background: none;
            a{
        
            }
        }
    }
}


.footer {
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #f6f6f6;
    z-index: 3;
        .container {
        display: flex;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        flex-direction: column;
    }
}

@media (min-width: 992px) {
    .footer .container {
        align-items: start;
        box-sizing: border-box;
        flex-direction: row
    }

    .footer .container>* {
        width: unset
    }
}

.footer .container>* {
    width: 100%
}

.footer .contact-container {
    display: flex;
    align-items: center;
    flex-direction: column
}

@media (min-width: 992px) {
    .footer .contact-container {
        justify-content: flex-start;
        width: 11.2%
    }
}






.footer .info-container .social-container {
    display: flex;
    justify-content: center;
    font-size: 2.2rem;
    color: #404040;
}

@media (min-width: 992px) {
    .footer .info-container .social-container {
        font-size: 1.75rem;
        color: #000;
        // letter-spacing: .8rem
    }
}

.footer .info-container .social-container>* {
    cursor: pointer;
    display: flex;
    flex-direction: column;
}


.footer .bottom-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    padding: 1.1rem 0 0;
    height: 6rem;
    color: #737373;
}

@media (min-width: 992px) {
    .footer .bottom-container {
        max-width: 1200px
    }
}


.footer {
    position: relative;
    padding-bottom: var(--nav-bottom-height);
    background-color: #404040
}

.footer.no-position {
    position: unset
}

.footer .info-container {
    display: flex;
    flex-direction: column
}



.footer .info-container .social-container {
    padding-bottom: 2rem;
    order: -1;
    color: #fff
}



.footer .bottom-container {
    padding: 0;
    padding-bottom: 2rem;
    height: auto;
    color: #fff;
    flex-wrap: wrap;
    row-gap: .5rem
}



@media (min-width: 992px) {
    .footer {
        padding-bottom: 0
    }

    .footer .container .nav-container {
        display: flex
    }

    .footer .info-container {
        justify-content: flex-start
    }


    .footer .info-container .social-container {
        padding-top: 2rem;
        order: unset;
        padding-bottom: 0
    }

    .footer .bottom-container {
        padding: 2.1rem 0 0;
        height: 5rem
    }
}
</style>