module.exports = ({ name, email, phone, message }) => {
    return `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta name="x-apple-disable-message-reformatting">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style type="text/css">
        p {
            margin: 0;
            padding: 0;
        }

        h1 {
            margin: 0;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: #F7F9FC;
        }
    </style>
</head>

<body>
    <div style="width: 100%;">
        <div style="max-width: 640px!important; min-width: 640px; width:640px!important;" width="640px">
            <div style="padding: 40px; padding-bottom: 0;">
                <img style="width: 80px; height: 28px;" src=" https://wiex.io/img/templates/logo.png" alt="logo">
                <div
                    style="border: 2px solid #E9EEFA; bgcolor:#fff; color: #191847; border-radius: 8px; margin-top:34px; padding: 40px;">
                    <h1 style="margin-bottom: 24px; font-weight: 600; font-size: 32px; line-height: 32px;">
                        Deposit Successful</h1>
                    <p style="margin-bottom:24px;font-size: 18px; line-height: 26px;">Hi {name},</p>
                    <p style="margin-bottom:24px;font-size: 18px; line-height: 26px;">Your deposit is now available in your
                        account.</p>
                    <div style="border-radius: 12px; bgcolor: #F7F9FC; padding: 24px;">
                        <div style="margin-bottom: 18px;">
                            <p style="color:#6978A0; font-weight: 500;">Amount</p>
                            <p style="color: #081131; font-weight: 700; font-size: 24px; line-height: 34px;">
                                {amount}</p>
                        </div>
                        <div>
                            <p style="font-size: 14px; line-height: 18px; color:#6978A0; font-weight: 500;">Transfer
                                Method</p>
                            <p
                                style="margin-top:6px; font-size: 14px; line-height: 18px; color: #081131; font-weight: 700; font-size: 24px; line-height: 34px;">
                                {currency}</p>
                        </div>
                    </div>
                    <a
                        style="display: block; text-align: center; margin-top: 18px; max-width: 100%; color: #FFFFFF; font-weight: 500; font-size: 16px; line-height: 50px; bgcolor: #0057FF; border-radius: 10px; cursor: pointer; min-height: 52px;">Check
                        Your Wallet</a>
                </div>
            </div>
            <div style="padding:64px;">
                <div style="padding-bottom: 58px; border-bottom: 1px solid #CCD7E1; width:100%;">
                    <div style="display: inline-block; margin-right: 46%;">
                        <img style="width: 80px; height: 28px;" src="https://wiex.io/img/templates/logo.png" alt="logo">
                    </div>
                    <div style="display: inline-block;">
                        <a style="vertical-align: bottom; margin-right: 14px;" href="https://www.instagram.com/wiex_io/" target="_blank"><img
                                style="width: 24px; height: 24px;" src="https://wiex.io/img/templates/instagram.png" alt="instagram-icon"></a>
                        <a style="vertical-align: bottom; margin-right: 14px;" href="https://www.facebook.com/people/Wiexio/100091785102090/"
                            target="_blank"> <img style="width: 24px; height: 24px;" src="https://wiex.io/img/templates/facebook.png"
                                alt="facebook-icon"></a>
                        <a style="vertical-align: bottom; margin-right: 14px;" href="https://www.linkedin.com/company/wiex-io"><img
                                style="width: 24px; height: 24px;" src="https://wiex.io/img/templates/linkedin.png" alt="linkedin-icon"></a>
                        <a style="vertical-align: bottom; margin-right: 14px;" href="https://www.reddit.com/r/wiex_io/" target="_blank"><img
                                style="width: 24px; height: 24px;" src="https://wiex.io/img/templates/reddit.png" alt="reddit-icon"></a>
                        <a style="vertical-align: bottom;" href="https://t.me/wiex_news" target="_blank"><img style="width: 24px; height: 24px;"
                                src="https://wiex.io/img/templates/telegram.png" alt="telegram-icon"></a>
                    </div>
                </div>
                <div style="margin-top:64px;">
                    <p style="font-size: 14px; line-height: 20px; color: #ABABAB; font-weight: 500;">This message was
                        sent to name@doamin.com. If you don't
                        want to receive these emails from Wiex.io
                        in the future, you can <a href="">unsubscribe.</a> </p>
                </div>
                <div style="margin-top:64px;font-size: 14px; line-height: 20px; color: #ABABAB; font-weight: 500;">
                    <p style="margin-bottom: 14px;">The content of this email is confidential and intended
                        for the recipient specified in message
                        only. It is strictly forbidden to share any part of this email message with any third party,
                        without a written consent of the sender. </p>
                    <p style="margin-bottom: 14px;">If you received this message by mistake, please inform
                        the sender and follow with its deletion.
                        This e-mail was produced by WIEX – UAB Worldwide independent exchange. We have taken measures to
                        ensure that Your data is secure. </p>
                    <p style="margin-bottom: 14px;">To learn more about how we comply with GDPR please
                        visit our privacy policy, which is available
                        on our <a href="https://wiex.io/account/login/" target="_blank">website.</a></p>
                    <p>To ensure the continuity of services and in certain
                        cases, with reasonable suspicion and to
                        ensure the protection of confidential data of UAB Worldwide independent exchange, integrity of
                        information systems, continuous operation and protection against breaches, data theft and
                        malicious software, UAB Worldwide independent exchange has the right to access the content of
                        this electronic communication.</p>
                </div>
            </div>
        </div>
    </div>
</body>`
};
