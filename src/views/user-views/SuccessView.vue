<template lang="">
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

                <div class="assess">
                    <img src="@/assets/Assessment.svg" alt="">
                    <p>{{Assessment}}</p>
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

            <div class="timer">
                <h3>Timer</h3>
            <div class="second_timer">
                <h1>23<span>min</span>043<span>sec</span></h1>
            </div>

            <div class="counter">
                <img src="@/assets/Success.png" alt="">
                <p>We have received your assessment test, we will get back to you soon.<br>Best of luck</p>
                <button>{{button}}</button>
            </div>
            </div>

        </div>
  </div>
   
</template>
<script>
export default {
  data(){
    return{
        Assessment: 'Assessment',
        Logout: 'Logout',
        title_h1: 'Take Assessment',
        title_p: 'Thank you!',
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
.assess p{
    position: absolute;
    width: 85px;
    height: 20px;
    left: 76px;
    top: 37.5%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #2B3C4E;
}
.assess img{
    position: absolute;
    left: 15.99%;
    right: 96.18%;
    top: 39%;
    bottom: 64.47%;
    background: #2B3C4E;
}
.logout p{
    position: absolute;
    width: 56px;
    height: 20px;
    left: 75px;
    top: 46%;
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
    top: 47.91%;
    bottom: 55.78%;
    transform: rotate(-180deg);
}
.question_box{
    background: #E5E5E5;
}
.title h1{
    position: absolute;
    width: 303px;
    height: 53px;
    left: 339px;
    top: 107px;
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
    width: 510px;
    height: 20px;
    left: 339px;
    top: 174px;
    font-family: 'Lato';
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
}
.timer h3{
    position: absolute;
    width: 37px;
    height: 17px;
    left: 1444px;
    top: 114px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #4F4F4F;
}
.second_timer{
    display: flex;
}
.second_timer h1{
    position: absolute;
    width: 56px;
    height: 58px;
    left: 1444px;
    top: 114px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #2B3C4E;
}
span{

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #4F4F4F;
}
.counter img{
    position: absolute;
    left: 50.33%;
    right: 8.33%;
    top: 35%;
    bottom: 0%;
}
.counter p{
    position: absolute;
    width: 545.91px;
    height: 46px;
    left: 705px;
    top: 500px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #4F4F4F;
}
button{
    position: absolute;
    background: #7557D3;
    border-radius: 4px;
    border: none;
    position: absolute;
    left: 875px;
    top: 600px;
    width: 200px;
    height: 50px;
    font-family: 'Lato';
    font-style: normal;
    font-size: 16px;
    color: #FFFFFF;
}
</style>
