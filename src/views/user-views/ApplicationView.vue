<template>
    <section class="whole-Application">
        <img src="@/assets/Enyata-logo.svg" alt="Enyata Logo" id="logo">
        <h1>Applicantion Form</h1>
        <section class="form-container">
            <form class="upload-form" enctype="multipart/form-data">
                <input type="file" class="cv-inp" id="cv" ref="cv" @change="selectFile">
                <label for="cv" class="cv-lab">+ Upload CV</label>
                <input type="file" class="photo-inp" id="photo" ref="image" @change="selectFileIm">
                <label for="photo" class="photo-lab">+ Upload Photo</label>
            </form>
            <form action="#" class="main-form">
                <div class="left-side">
                    <div class="label-inp">
                        <label for="firstName">First Name</label>
                        <input type="text" name="name" id="firstName" v-model="app.firstName">
                    </div>
                    <div class="label-inp">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" v-model="app.emailAddress">
                    </div>
                    <div class="label-inp">
                        <label for=" address">Address</label>
                        <input type="text" name="address" id="address" v-model="app.address">
                    </div>
                    <div class="label-inp">
                        <label for="course">Course of Study</label>
                        <input type="text" name="course" id="course" v-model="app.courseOfStudy">
                    </div>
                </div>
                <div class="right-side">
                    <div class="label-inp">
                        <label for="lastNAme">Last Name</label>
                        <input type="text" name="lastName" id="lastName" v-model="app.lastName">
                    </div>
                    <div class="label-inp">
                        <label for="dob">Date of Birth</label>
                        <input type="text" name="dob" id="dob" v-model="app.dateOfBirth">
                    </div>
                    <div class="label-inp">
                        <label for="university">University</label>
                        <input type="text" name="university" id="university" v-model="app.university">
                    </div>
                    <div class="label-inp">
                        <label for="cgpa">CGPA</label>
                        <input type="number" name="cgpa" id="cgpa" v-model="app.cgpa">
                    </div>
                </div>
            </form>
            <Button text="Submit" class="subButton" @click.prevent="apply"></Button>
        </section>
    </section>
</template>

<script>
import Button from '@/components/Button.vue';
import axios from 'axios';
export default {
    name: "ApplicationView",
    components: { Button },
    data() {
        return {
            app: {

                firstName: "",
                lastName: "",
                emailAddress: "",
                address: "",
                courseOfStudy: "",
                dateOfBirth: "",
                university: "",
                cgpa: "",
                image: "",
                cv: ""
            }

        }
    },
    methods: {
         async apply() {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('firstName', this.app.firstName)
            formData.append('lastName', this.app.lastName)
            formData.append('emailAddress', this.app.emailAddress)
            formData.append('address', this.app.address)
            formData.append('courseOfStudy', this.app.courseOfStudy)
            formData.append('dateOfBirth', this.app.dateOfBirth)
            formData.append('university', this.app.university)
            formData.append('cgpa', this.app.cgpa)
            formData.append('image', this.app.image)
            formData.append('cv', this.app.cv)

            try {
                const response = await axios.post('http://localhost:8082/api/v1/application', formData,
                    {
                        headers: { token: token },
                    })
                console.log(response)
            } catch (e) {
                console.log(e)
            }
        },

        selectFile() {
            this.app.cv = this.$refs.cv.files[0]
        },
        selectFileIm() {
            this.app.image = this.$refs.image.files[0]
            console.log(this.app.image.name)
        }

        
    }
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

.upload-form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
}

.main-form {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    gap: 60px;
    margin-top: 32px;
    justify-content: center;
}

.main-form label {
    display: block;
    margin-bottom: 5px;
}

.main-form input {
    font-family: 'Lato';
    font-weight: 400;
    width: 100%;
    height: 48px;
    border: 1.5px solid #2B3C4E;
    border-radius: 4px;
    padding-left: 5px;
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

.main-form label {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #2B3C4E;
}

p {

    display: flex;
    align-items: center;
    color: #2B3C4E;
}

.upload-form input {
    display: none;
} 

.upload-form label {
    font-family: 'Nunito';
    font-size: 16px;
    line-height: 22px;
    width: 211px;
    height: 50px;
    border: 1.5px dashed #2b3c4e;
    border-radius: 2.87205px;
    text-align: center;
    padding: 14px;
}
</style>