<template>
    <section class="whole-logInForm">
        <div class="container">
            <img src="@/assets/Enyata-logo-white.svg" alt="Enyata Logo" id="logo">
            <h1>Admin Log In</h1>
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
        </div>
        <img src="@/assets/adminback.svg" alt="" id="background">
    </section>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    name: "AdminLogInView",
    components: { Button }
};
</script>

<style scoped>
* {
    font-family: 'Lato';
    background: #7557D3;
    /* background-image: url(@/assets/admin-back.png); */
    background-repeat: no-repeat;
    background-position: right;
}

#background {
    /* position: absolute; */
    padding-top: 5%;
    width: 30%;
}

.whole-logInForm {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 10%;
}

.container {
    width: 26%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 2%; */
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
    color: #FFFF;
}

input {
    width: 100%;
    height: 48px;
    border: 1.5px solid #BDBDBD;
    border-radius: 4px;
    outline: 0.1px solid #7557D3;
    color: #FFFF;
}

input:focus-visible {
    background-color: #7557D3;
}

button {
    width: 100%;
    height: 48px;
    background: #FFFF;
    border-radius: 4px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #7557D3;
    margin-top: 32px;
}

button:hover {
    cursor: pointer;
}

.label-inp {
    position: relative;
}



h1 {
    margin-top: 24px;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFF;
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
