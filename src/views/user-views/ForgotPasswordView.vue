<template lang="">
    <div>
        <h1>{{header}}</h1>
        <p>{{header_paragraph}}</p>
        <div class="reset">
            <div class="mail">
                <img src="@/assets/Mail.png" alt="">
            </div>

            <div class="reset_info">
                <h2>{{reset_header}}</h2>
                <p>{{reset_paragraph}}</p>
            </div>

            <form action="">
                <input type="radio">
            </form>
        </div>



        <div class="reset_sms">
            <div class="phone">
                <img src="@/assets/Calling.png" alt="">
            </div>

            <div class="reset_via_sms">
                <h2>{{reset_sms}}</h2>
                <p>{{reset_sms_paragraph}}</p>
            </div>

            <form action="">
                <input type="radio">
            </form>
        </div>

        <button v-on:click="send()">{{button}}</button>

        <p>Didn’t receive link? <a href="#">Resend</a></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
           header: 'Forgot Password', 
           header_paragraph: 'Please select option to send link to reset password',
           reset_header: 'Reset via Email',
           reset_paragraph: 'Reset password link will be send to your registered email address.',
           reset_sms: 'Reset via Sms',
           reset_sms_paragraph: 'Reset password link will be send to your registered phone number.',
           button: 'Send Link',
        }
    },
    methods: {
        send(){
            
        }
    },
}
</script>
<style scoped>
h1{
    text-align: center;
    margin-top: 134.42px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: #2B3C4E;

}
p{  
    text-align: center;
    top: 290px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #7D7D7D;
}
.reset{
    display: flex;
    margin-left: 32.71%;
    margin-right: 32.71%;
    bottom: 52.34%;
    background: #FFFFFF;
    background: #FFFFFF;
    box-shadow: 0px 8px 30px 10px rgba(117, 87, 211, 0.05);
    border-radius: 4px;
    padding: 1%;
}
.reset:hover{
    border: 1px solid #7557D3;
}
.mail{
    width: 48px;
    height: 48px;
    background: rgba(117, 87, 211, 0.1);
    border-radius: 40px;
    justify-content: center;
    margin-top: 4%;
    margin-left: 2%;
}
.mail img{
    margin-left: 30%;
    margin-top: 30%;
}
.reset_info h2{
    width: 119px;
    height: 22px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #7557D3;
    padding-left: 20%;
}

.reset_info p{
    width: 245px;
    height: 42px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #B1B1B1;
    text-align: left;
    padding-left: 20%;

}
form{
    padding-left: 40%;
    padding-top: 35px;
}
input{
    width: 20px;
    height: 20px;
}
.reset_sms{
    display: flex;
    margin-left: 32.71%;
    margin-right: 32.71%;
    margin-top: 3%;
    bottom: 52.34%;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0px 8px 30px 10px rgba(117, 87, 211, 0.05);
    border-radius: 4px;
    padding: 1%;
}
.reset_sms:hover{
    border: 1px solid #7557D3;
}
.phone{
    width: 48px;
    height: 48px;
    background: rgba(117, 87, 211, 0.1);
    border-radius: 40px;
    justify-content: center;
    margin-top: 4%;
    margin-left: 2%;
}
.phone img{
    margin-left: 30%;
    margin-top: 30%;
}
.reset_via_sms h2{
    width: 119px;
    height: 22px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    padding-left: 20%;
}
.reset_via_sms p{
    width: 245px;
    height: 42px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #B1B1B1;
    text-align: left;
    padding-left: 20%;
}
button{
    margin-top: 2%;
    margin-left: 37%;
    width: 500px;
    height: 50px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    background: #7557D3;
    border: none;
    border-radius: 4px;
}
a{
    text-decoration: none;
}
</style>