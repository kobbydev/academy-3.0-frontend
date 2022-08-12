<template>
    <section class="whole-logInForm">
        <div class="container">
            <img src="@/assets/Enyata-logo.svg" alt="Enyata Logo" id="logo">
            <h1>Applicant Log In</h1>
            <form action="#">
                <div class="label-inp">
                    <label for="email">Email Address</label>
                    <input type="email" name="email">
                </div>
                <div class="label-inp">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="pass"><span><img src="@/assets/see-icon.svg"
                            alt="visibility icon"></span>
                </div>
            </form>
            <Button text="Sign In"></Button>
            <div class="word">
                <h3>Don’t have an account yet? <a href="/signup">Sign Up</a> </h3>
                <a href="/forgot-password" id="forgot">Forgot Password?</a>
            </div>
        </div>
    </section>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    name: "LogInView",
    components: { Button }
};
</script>

<style scoped>
* {
    font-family: 'Lato';
}

.whole-logInForm {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container {
    width: 26%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
    /* justify-content: center; */
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin-top: 68px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
}

input {
    width: 100%;
    height: 48px;
    border: 1.5px solid #BDBDBD;
    border-radius: 4px;
    outline: 0.01px solid #7557D3;
}

button {
    width: 100%;
    height: 48px;
    background: #7557D3;
    border-radius: 4px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-top: 32px;
}

button:hover {
    cursor: pointer;
}

.word {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* gap: 71px; */
    justify-content: space-between;
    padding-top: 12px;
}

h3 {
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
}

.label-inp {
    position: relative;
}

h3 a {
    color: #1A2C56;
}

#forgot {
    height: 17px;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
    text-decoration: none;
}

h1 {
    margin-top: 24px;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #2B3C4E;
}

#pass {
    padding-right: 35px;
}

span img {
    position: absolute;
    left: 92%;
    top: 40px;
}
</style>
