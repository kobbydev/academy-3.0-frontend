<template>
    <div class="whole-section">
        <section class="container">
            <h1>Forgot Password</h1>
            <h2>Please select option to send link to reset password</h2>
            <button class="email-but">
                <img src="@/assets/Email-icon-black.svg" alt="">
                <div class="message">
                    <h3>Reset via Email</h3>
                    <h4>Reset password link will be send to your
                        registered email address.</h4>
                </div>
                <img src="@/assets/check-image.svg" alt="">
            </button>
            <button class="sms-but">
                <img src="@/assets/Sms-icon-black.svg" alt="">
                <div class="message">
                    <h3>Reset via Sms</h3>
                    <h4>Reset password link will be send to your
                        registered phone number.</h4>
                </div>
                <img src="@/assets/check-image.svg" alt="">
            </button>
            <Submit text="Send Link" class="send-but"></Submit>
            <p>Didn’t receive link? <a href="#">Resend</a> </p>
        </section>
    </div>
</template>

<script>
import Submit from '@/components/Button.vue';

export default {
    name: 'ForgotPasswordView',
    components: { Submit }

}
</script>

<style scoped>
/* template {
    display: flex;
    justify-content: center;
} */

.whole-section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.container {
    width: 43%;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 34px;
    padding-bottom: 50px;
}

.email-but,
.sms-but {
    width: 81%;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    padding-right: 32px;
    padding-left: 28px;
    padding-top: 27px;
    padding-bottom: 23px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.sms-but {
    margin-top: 24px;
    margin-bottom: 32px;
}

.message {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    margin-left: 28px;
}

h1 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: #2B3C4E;
    margin-bottom: 17px;
}

h2 {
    width: 80%;
    text-align: center;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #7D7D7D;
    margin-bottom: 48px;
}

h3 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #211F26;
}

h4 {
    width: 80%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #B1B1B1;
    text-align: left;
}

.send-but {
    width: 62%;
    height: 50px;
    background: #7557D3;
    border-radius: 4px;
    border: none;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}

p {
    margin-top: 28px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #B1B1B1;
}

p a {
    color: #7557D3;
    text-decoration: none;
}
/* img{
    width: 10%;
} */
</style>