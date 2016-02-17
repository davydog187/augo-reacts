/*! HomeView.js */

export default class UploadPageView {

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
                    * {
                        box-sizing: border-box;
                    }

                    h1 {
                        text-align: center;
                        margin: 0;
                        padding: 10px;
                    }
                    .augo-container {
                        color: #FFFFFF;
                        position: fixed;
                        top: 50%;
                        right: 50%;
                        transform: translate(50%, -50%);
                    }

                    .upload-input {
                        width: 500px;
                        background-color: red;
                        opacity: .8;
                    }

                    .image-upload-result {
                        max-width: 500px;
                        width: 100%;
                    }

                    .image-upload-result > img {
                        background-color: rgba(0, 0, 0, 0.5);
                        padding: 20px;
                        width: 100%;
                    }
                </style>
            </head>
            <body>
                <main>
                    <div class="augo-container">
                        <input is="image-upload" type="file" class="upload-input" id="upload-input">
                        </input>
                        <div class="image-upload-result"></div>
                    </div>
                </main>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.20/CustomElements.min.js" type="text/javascript"></script>
                <script src="public/Upload.js" type="text/javascript"></script>
            </body>
            </html>
        `;
    }
}
