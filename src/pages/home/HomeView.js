/*! HomeView.js */

export default class HomeView {

    renderAugos() {
        return `<img src="http://i.imgur.com/TgfdCoM.jpg" />`;
    }

    render() {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css">
                <style type="text/css">
                    html {
                        background-image: url(http://i.imgur.com/Nt1OhoQ.jpg);
                    }
                    h1 {
                        margin: 0;
                        padding: 0;
                    }
                    .augo-container {
                        color: #FFFFFF;
                        font-size: 36px;
                        position: fixed;
                        top: 50%;
                        right: 50%;
                        transform: translate(50%, -50%);
                        background-color: red;
                        opacity: .5;
                    }
                </style>
            </head>
            <body>
                <main>
                    <div class="augo-container">
                        <h1>AUGO REACTS</h1>
                    </div>
                </main>
            </body>
            </html>
        `;
    }
}
