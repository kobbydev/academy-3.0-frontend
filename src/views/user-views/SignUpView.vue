<template>
    <div class="whole-form">
        <div class="whole-form-container">
            <img src="@/assets/Enyata-logo.svg" alt="Enyata Logo" id="logo">
            <h1>Applicant Sign Up</h1>
            <form action="#">
                <div class="left-side">
                    <div class="label-inp">
                        <label for="firstName">First Name</label>
                        <input type="text" name="firstName" v-model="firstName">
                    </div>
                    <div class="label-inp">
                        <label for="emailAddress">Email Address</label>
                        <input type="email" name="emailAddress" v-model="emailAddress">
                    </div>
                    <div class="label-inp">
                        <label for="password">Password</label>
                        <input :type="[passToggle ? password : text]" name="password" id="pass" v-model="password"><span
                            @click="change"><img src="@/assets/see-icon.svg" :class="[passToggle ? see1 : '']"
                                alt="visibility icon">
                            <img src="@/assets/unsee-icon.svg" alt="" :class="[passToggle ? '' : unsee1]"></span>
                    </div>
                </div>
                <div class="left-side">
                    <div class="label-inp">
                        <label for="lastName">Last Name</label>
                        <input type="text" name="lastName" v-model="lastName">
                    </div>
                    <div class="label-inp">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="tel" name="phoneNumber" v-model="phoneNumber">
                    </div>
                    <div class="label-inp">
                        <label for="confirmPassword">Confirm Password</label>
                        <input :type="[conPassToggle ? password : text]" name="confirmPassword" id="conpass"><span
                            @click="change2"><img src="@/assets/see-icon.svg" alt="visibility icon"
                                :class="[conPassToggle ? see2 : '']">
                            <img src="@/assets/unsee-icon.svg" alt="" :class="[conPassToggle ? '' : unsee2]"></span>
                    </div>
                </div>
            </form>
            <Button text="Sign Up"></Button>
            <h2>Already have an account? <a href="/login">Sign In</a></h2>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
    name: "SignUpView",
    components: { Button },
    data() {
        return {
            passToggle: true,
            see1: 'see1',
            unsee1: 'unsee1',
            conPassToggle: true,
            see2: 'see1',
            unsee2: 'unsee1',
            password: 'password',
            text: 'text'
        }
    },
    methods: {
        change() {
            this.passToggle = !this.passToggle
        },
        change2() {
            this.conPassToggle = !this.conPassToggle
        }
    }
};
</script>

<style scoped>
* {
    font-family: 'Lato';
}

h1 {
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    width: 179px;
    height: 29px;
    color: #2B3C4E;
}

.whole-form {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.whole-form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#logo {
    margin-bottom: 24px;
}

form {
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 70px;
    margin: 68px 0 40px 0;
}

label {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
}

form input {
    width: 105%;
    height: 48px;
    border: 1.5px solid #BDBDBD;
    border-radius: 4px;
    padding-left: 5px;
}

.left-side,
.right-side {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 27px;
}

.label-inp {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

h2 {
    height: 17px;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
    margin-top: 10px;
}

Button {
    width: 40%;
    height: 50px;
    background: #7557D3;
    border-radius: 4px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}

button:hover {
    cursor: pointer;
}

#pass,
#conpass {
    padding-right: 40px;
}

a {
    color: #1A2C56;
}

span img {
    position: absolute;
    left: 96%;
    top: 40px;
    display: none;
}

.see1 {
    display: block;
}

.unsee1 {
    display: block;
}
</style>
