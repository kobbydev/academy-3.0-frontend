<template>
    <section class="whole-Application">
        <img src="@/assets/Enyata-logo.svg" alt="Enyata Logo" id="logo">
        <h1>Applicantion Form</h1>
        <section class="form-container">
            <div class="files-button">
                <button class="cv-button">
                    <p>+</p>
                    <p>Upload CV</p>
                </button>
                <button class="photo-button">
                    <p>+</p>
                    <p>Upload Photo</p>
                </button>
            </div>
            <form action="#">
                <div class="left-side">
                    <div class="label-inp">
                        <label for="firstName">First Name</label>
                        <input type="text" name="name">
                    </div>
                    <div class="label-inp">
                        <label for="email">Email</label>
                        <input type="email" name="email">
                    </div>
                    <div class="label-inp">
                        <label for=" address">Address</label>
                        <input type="text" name="address">
                    </div>
                    <div class="label-inp">
                        <label for="course">Course of Study</label>
                        <input type="text" name="course">
                    </div>
                </div>
                <div class="right-side">
                    <div class="label-inp">
                        <label for="lastNAme">Last Name</label>
                        <input type="text" name="lastName">
                    </div>
                    <div class="label-inp">
                        <label for="dob">Date of Birth</label>
                        <input type="date" name="dob">
                    </div>
                    <div class="label-inp">
                        <label for="university">University</label>
                        <input type="text" name="university">
                    </div>
                    <div class="label-inp">
                        <label for="cgpa">CGPA</label>
                        <input type="number" name="cgpa">
                    </div>
                </div>
            </form>
            <Button text="Submit" class="subButton"></Button>
        </section>
    </section>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    name: "ApplicationView",
    components: { Button }
}
</script>

<style scoped>
.whole-Application {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 4%;
}

.form-container {
    width: 67%;
    /* height: 643px; */
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
    padding-top: 53px;
    padding-bottom: 39px;
}

.files-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
}

.cv-button,
.photo-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    width: 22%;
    border: 1.5px dashed #2B3C4E;
    border-radius: 2.87205px;
    height: 50px;
    background-color: #FFFFFF;
}

form {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    gap: 60px;
    margin-top: 32px;
    justify-content: center;
}

label {
    display: block;
    margin-bottom: 5px;
}

form input {
    width: 100%;
    height: 38px;
    border: 1.5px solid #2B3C4E;
    border-radius: 4px;
}

input[type="date" i] {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #CECECE;
}

.right-side,
.left-side {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 28px;
}

h1 {
    margin-top: 24px;
    margin-bottom: 40px;
    font-family: 'Lato';
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #2B3C4E;
}

.subButton {
    width: 40%;
    height: 50px;
    background: #7557D3;
    border-radius: 4px;
    border: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 43px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}

label {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #2B3C4E;
}

p {
    font-family: 'Nunito';
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #2B3C4E;
}
</style>