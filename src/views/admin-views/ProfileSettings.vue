<template lang="en">
  <div>
    <div class="main_assessment">
        <div class="assessment">
            <div class="logo">
                <img src="@/assets/Ellipse.png" alt="">
                <h2>Jane Doe</h2>
                <p>doe@enyata.com</p>
            </div>
            
                <div class="dash">
                    <img src="@/assets/Group.svg" alt="">
                    <p>Dashboard</p>
                </div>

                <div class="create_application">
                    <img src="@/assets/create_application.png" alt="">
                    <p>{{create}}</p>
                </div>

                <div class="entries">
                    <img src="@/assets/entries.png" alt="">
                    <p>Application Entries</p>
                </div>

                <div class="compose">
                    <img src="@/assets/compose.png" alt="">
                    <p>Compose Assessment</p>
                </div>

                <div class="history">
                    <img src="@/assets/history.png" alt="">
                    <p>Assessment History</p>
                </div>

                <div class="result">
                    <img src="@/assets/result.png" alt="">
                    <p>Results</p>
                </div>

                <div class="setting">
                    <img src="@/assets/setting.png" alt="">
                    <p>Settings</p>
                </div>

                <div class="logout">
                    <img src="@/assets/Logout.svg" alt="">
                    <p>{{Logout}}</p>
                </div>
            </div>
        </div>


        <div class="question_box">
            <div class="title">
                <h1>{{title_h1}}</h1>
                <p>{{title_p}}</p>
        </div>

        <div class="admin_profile">
            <p>Admin Profile</p>
            <button>Timer Settings</button>
            
        </div>

        <div class="profile_settings">
            <p>Timer setting</p>
        </div>

        <div class="user_account">
            <p>Set Timer</p>   
        </div>
        
        <div class="min">
            <h1>00</h1>
            <p>min</p>
            <img src="@/assets/polygon.png">
        </div>

        <div class="sec">
            <h1>000</h1>
            <p>sec</p>
            <img src="@/assets/polygon.png">
        </div>

            <button class="save">Save</button>


        
        </div>
  </div>
   
</template>
<script>
export default {
  data(){
    return{
        create: 'Create Application',
        Logout: 'Logout',
        title_h1: 'Profiles and Settings',
        title_p: 'Helps you set admin profile and give other users permissions',
        button: 'Home',
    }
  }
}
</script>
<style>
.main_assessment{
    display: flex;
}
.assessment{
    position: absolute;
    width: 292px;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
}
.logo{
    position: absolute;
    width: 292px;
    height: 255px;
    left: 0px;
    top: 0px;
    background: #7557D3;
}
  .logo img{
    position: absolute;
    width: 80px;
    height: 80px;
    left: 97px;
    top: 75px;

  }
.logo h2{
    position: absolute;
    width: 80px;
    height: 24px;
    left: 97px;
    top: 168px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
}
.logo p{
    position: absolute;
    width: 110px;
    height: 20px;
    left: 82px;
    top: 197px;
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
}
.dash img{
    position: absolute;
    left: 15.99%;
    right: 96.01%;
    top: 33.98%;
    bottom: 69.4%;
}
.dash p{
    position: absolute;
    width: 78px;
    height: 20px;
    left: 74px;
    top: 32%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #2B3C4E;
}
.create_application p{
    position: absolute;
    width: 225px;
    height: 20px;
    left: 30px;
    top: 37.5%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #2B3C4E;
}
.create_application img{
    position: absolute;
    left: 15.99%;
    right: 96.18%;
    top: 39%;
    bottom: 64.47%;
}
.entries p{
    position: absolute;
    width: 225px;
    height: 20px;
    left: 32px;
    top: 42.5%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #2B3C4E;
}
.entries img{
    position: absolute;
    left: 15.99%;
    right: 96.18%;
    top: 44%;
    bottom: 64.47%;
}
.compose p{
    position: absolute;
    width: 225px;
    height: 20px;
    left: 40px;
    top: 47.5%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #2B3C4E;
}
.compose img{
    position: absolute;
    left: 15.99%;
    right: 96.18%;
    top: 49%;
    bottom: 64.47%;
}
.history p{
    position: absolute;
    width: 225px;
    height: 20px;
    left: 38px;
    top: 52.5%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #2B3C4E;
}
.history img{
    position: absolute;
    left: 15.99%;
    right: 96.18%;
    top: 54%;
    bottom: 64.47%;
}
.result p{
    position: absolute;
    width: 225px;
    height: 20px;
    left: 0px;
    top: 57.5%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #2B3C4E;
}
.result img{
    position: absolute;
    left: 15.99%;
    right: 96.18%;
    top: 59%;
    bottom: 64.47%;
}
.setting p{
    position: absolute;
    width: 225px;
    height: 20px;
    left: 0px;
    top: 62.5%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #2B3C4E;
}
.setting img{
    position: absolute;
    left: 15.99%;
    right: 96.18%;
    top: 64%;
    bottom: 64.47%;
}
.logout p{
    position: absolute;
    width: 56px;
    height: 20px;
    left: 75px;
    top: 76%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #2B3C4E;
}
.logout img{
    position: absolute;
    left: 15.99%;
    right: 95.19%;
    top: 77.91%;
    bottom: 55.78%;
    transform: rotate(-180deg);
}

.title h1{
    position: absolute;
    width: 365px;
    height: 52px;
    left: 334px;
    top: 101px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2B3C4E;

}
.title p{
    position: absolute;
    width: 393px;
    height: 21px;
    left: 334px;
    top: 168px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #202F44;
    mix-blend-mode: normal;
    opacity: 0.5;
}
.admin_profile button{
    position: absolute;
    width: 188px;
    height: 64px;   
    left: 674px;
    top: 299px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    background: rgba(117, 87, 211, 0.1);
    color: #333758;
    mix-blend-mode: normal;
    border: none;
}

.admin_profile p{
    position: absolute;
    width: 88px;
    height: 17px;
    left: 380px;
    top: 299px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #333758;
    mix-blend-mode: normal;
}
.profile_settings{
    position: absolute;
    left: 380px;
    top: 397px;
    width: 67.07%;
    border-bottom: 1px solid #F2F2F2;
    display: flex;

}
.profile_settings p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: -0.4px;
    color: #4A4A4A;
}
.user_account{
    position: absolute;
    left: 380px;
    top: 489px;
    display: flex;
}
.user_account p{
    width: 120px;
    height: 18px;
    top: 507px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.117188px;
    color: #333758;
}
.save{
    position: absolute;
    height: 18px;
    left: 380px;
    right: 50.07%;
    top: 707px;
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    background: #7557D3;
    border-radius: 3px;
    width: 138px;
    height: 44px; 
    border: none;
}
.min h1{
    position: absolute;
    left: 380px;
    top: 557px;
    font-family: 'Lato';
    font-style: normal;
    font-size: 48px;
    font-weight: 300;
    line-height: 58px;
    text-align: center;
    color: #2B3C4E;
    display: flex;
}
.min p{
    position: absolute;
    left: 450px;
    top: 607px;
    width: 20px;
    height: 15px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #4F4F4F;
}
.min img{
    position: absolute;
    width: 12px;
    height: 12px;
    left: 470px;
    top: 610px;

}
.sec h1{
    position: absolute;
    left: 560px;
    top: 557px;
    font-family: 'Lato';
    font-style: normal;
    font-size: 48px;
    font-weight: 300;
    line-height: 58px;
    text-align: center;
    color: #2B3C4E;
    display: flex;
}
.sec p{
    position: absolute;
    left: 650px;
    top: 607px;
    width: 20px;
    height: 15px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #4F4F4F;
}
.sec img{
    position: absolute;
    width: 12px;
    height: 12px;
    left: 670px;
    top: 610px;

}
</style>
