/*! HomeView.js */

export default class HomeView {

    renderAugos() {
        return `<img src="http://i.imgur.com/TgfdCoM.jpg" />`;
    }

    render() {
        const augoPhotoBooth = "http://i.imgur.com/Nt1OhoQ.jpg";
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta property="og:url" content="http://www.augoreacts.nyc" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Augo Reacts" />
                <meta property="og:description" content="When Augo Reacts to everyday life" />
                <meta property="og:image" content="${ augoPhotoBooth }" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css">
                <style type="text/css">
                    html {
                        background-image: url(${ augoPhotoBooth });
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
