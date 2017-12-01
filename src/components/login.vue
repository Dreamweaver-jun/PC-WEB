<template>
  <div class="login-wrap">
    <div class="modal fade" id="login" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">欢迎登录罗计！</h4>
          </div>
          <div class="modal-body">
            <ul class="login-nav">
              <li class="active"><a href="#password" data-toggle="tab">密码登录</a></li>
              <li><a href="#verification" data-toggle="tab" @click="getVer()">验证码登录</a></li>
            </ul>
            <div class="login-body tab-content">
              <div class="password tab-pane active" id="password">
                <form data-vv-scope="password-user">
                  <div class="input-box">
                    <div class="phone"></div>
                    <input type="text" v-validate="{required : true , regex: /^1\d{10}$/}" name="userPhone" data-vv-delay="1000" v-model="passwordUser.phone" @focus="clearTips()" @keydown="isEnter('passwordLogin')" placeholder="请输入手机号" maxlength="11">
                    <div class="tips" v-show="errors.has('password-user.userPhone')">手机号输入错误</div>
                  </div>
                  <div class="input-box">
                    <div class="psw"></div>
                    <input type="password" v-validate="{required : true , min: 6 }" name="userPassword" data-vv-delay="1000" v-model="passwordUser.password" @focus="clearTips()" @keydown="isEnter('passwordLogin')" placeholder="请输入密码" maxlength="30" autocomplete="new-password">
                    <div class="tips" v-show="errors.has('password-user.userPassword')">密码长度不能低于6位</div>
                  </div>
                  <div class="remember-box">
                    <div class="remember" @click="toggleRemember()">
                      <div class="ico" :class="{'checked' : passwordUser.rememberPsw}"></div>
                      记住账户
                    </div>
                    <div class="forget">忘记密码？</div>
                  </div>
                  <div class="login-btn"  @click="passwordLogin('password-user')">登 录</div>
                  <div class="tips-wrap" v-text="passwordUser.tips"></div>
                </form>
              </div>
              <div class="verification tab-pane" id="verification">
                <form data-vv-scope="ver-user">
                  <div class="input-box">
                    <div class="phone"></div>
                    <input type="text" v-validate="{required : true , regex: /^1\d{10}$/}" name="verPhone" data-vv-delay="1000" v-model="verificationUser.phone" @focus="clearTips()" @keydown="isEnter('verLogin')" placeholder="请输入手机号" maxlength="11">
                    <div class="tips" v-show="errors.has('ver-user.verPhone')">手机号填写错误</div>
                  </div>
                  <div class="input-box">
                    <div class="verification"></div>
                    <input type="text" v-validate="{required : true }" name="verification" data-vv-delay="1000" v-model="verificationUser.verification" @focus="clearTips()" @keydown="isEnter('verLogin')" placeholder="请输入验证码" maxlength="8">
                    <div class="tips" v-show="errors.has('ver-user.verification')">请输入图形验证码</div>
                    <div class="get-msm"><img class="userVer" src="" @click="getVer()"></div>
                  </div>
                  <div class="input-box">
                    <div class="verification"></div>
                    <input type="text" v-validate="{required : true }" name="smsVerification" data-vv-delay="1000" v-model="verificationUser.smsVerification" @focus="clearTips()" @keydown="isEnter('verLogin')" placeholder="请输入短信验证码" maxlength="8">
                    <div class="tips" v-show="errors.has('ver-user.smsVerification')">请输入短信验证码</div>
                    <div class="get-msm" @click="getSmsVer()" :class="{'disabled' : smsDisabled}">发送验证码  <span v-text="time"></span></div>
                  </div>
                  <div class="login-btn" @click="verificationLogin('ver-user')">登 录</div>
                  <div class="tips-wrap" v-text="verificationUser.tips"></div>
                </form>
              </div>
              <div class="apply-wrap">没有账号：<span @click="apply()">申请试用</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <apply></apply>
  </div>
</template>


<script>

  import md5 from 'js-md5';
  import apply from './apply';

  export default {
    name: 'login',
    props : [],
    data () {
      return {

          passwordUser : {
            phone : '',
            password : '',
            rememberPsw : true,
            tips : ''
          },
          verificationUser : {
            phone : '',
            verification : '',
            smsVerification : '',
            tips : ''
          },
          smsDisabled : false,
          time : ''
      }
    },
    methods : {
      toggleRemember(){
          this.passwordUser.rememberPsw = !this.passwordUser.rememberPsw;
      },
      getVer(){
          this.$http.get('/tms/captcha',{
            responseType: 'arraybuffer'
          }).then((response) => {
              let blob = new Blob([response.data],{type: "image/png"});
              let objectUrl = URL.createObjectURL(blob);
              $('.userVer').attr('src',objectUrl);
          });
      },
      getSmsVer(){
        this.$http.post('/tms/login/getLoginSmsCode',{
          mobile: this.verificationUser.phone,
          verifyCode: '',
          answer: this.verificationUser.verification
        }).then((response) => {
            if(response.data.success === true)
            {
                this.smsDisabled = true;
                this.time = 60;
                this.calcTime();
            }
            else
            {
                this.verificationUser.tips = response.data.error;
            }

        });
      },
      calcTime(){
          let _this = this;
          if(_this.time > 0)
          {
              setTimeout(function(){
                  _this.time = _this.time - 1;
                  _this.calcTime();
              },1000);
          }
          else
          {
            this.smsDisabled = false;
            this.time = '';
          }
      },
      passwordLogin(scope){

        this.$validator.validateAll(scope).then((result) => {
          if(result)
          {
            this.$http.post('/tms/login',{
              account : this.passwordUser.phone,
              password : md5.hex(this.passwordUser.password)         //加密后
            }).then((response) => {

              if(response.data.success === true)
              {
                if(this.passwordUser.rememberPsw === true)
                {
                  localStorage.setItem('userPhone', this.passwordUser.phone);
                  localStorage.setItem('userPassword', this.passwordUser.password);
                }
                else
                {
                  localStorage.removeItem('userPhone');
                  localStorage.removeItem('userPassword')
                }

                let userInfo = JSON.stringify(response.data.data);
                localStorage.setItem('userInfo',userInfo);

                window.location.href = 'http://'+ window.location.host +'/index.htm';
              }
              else
              {
                this.passwordUser.tips = response.data.error;
              }
            });
          }
        });

      },
      verificationLogin(scope){

        this.$validator.validateAll(scope).then((result) => {
          if(result)
          {
            this.$http.post('/tms/loginBySms',{
              mobile: this.verificationUser.phone,
              verifyCode: this.verificationUser.smsVerification
            }).then((response) => {
              if(response.data.success === true)
              {
                let userInfo = JSON.stringify(response.data.data);
                localStorage.setItem('userInfo',userInfo);

                window.location.href = 'http://'+ window.location.host +'/index.htm';
              }
              else
              {
                this.verificationUser.tips = response.data.error;
              }

            });
          }
        });

      },
      apply(){
        $('#login').modal('hide');
        $('#apply').modal('show');
      },
      clearTips(){
          this.passwordUser.tips = '';
          this.verificationUser.tips = '';
      },
      isEnter(type){
        if(type === 'passwordLogin')
        {
          if(window.event.which === 13 || window.event.keyCode === 13)
          {
            this.passwordLogin('password-user');
          }
        }
        else if(type === 'verLogin')
        {
          if(window.event.which === 13 || window.event.keyCode === 13)
          {
            this.verificationLogin('ver-user');
          }
        }
      }
    },
    mounted(){
        let login = $('#login');
        login.on('hide.bs.modal',() => {

          this.passwordUser = {
            phone : '',
            password : '',
            rememberPsw : true,
            tips : ''
          };
          this.verificationUser = {
            phone : '',
            verification : '',
            smsVerification : '',
            tips : ''
          };
          this.smsDisabled = false;
          this.time = '';


        });

        login.on('show.bs.modal',() => {
          this.passwordUser.phone = localStorage.getItem('userPhone') || '';
          this.passwordUser.password = localStorage.getItem('userPassword') || ''
        });

    },
    components: {
      apply
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

 .login-wrap {
   .modal-dialog {
     width: 480px;
     .modal-header {
       padding: 20px;
       background: #F3F7FA;
       text-align: center;
       font-size: 20px;
       color: #FF615A;
       border-top-right-radius: 6px;
       border-top-left-radius: 6px;
     }
     .modal-body {
       .login-nav {
         display: flex;
         justify-content: space-around;
         margin: 16px 0;
         li {
           width: 50%;
           text-align: center;
           &:first-child {
             border-right: 1px solid #FF5902;
           }
           a {
             font-size: 16px;
             color: #FF5902;
           }
         }
         li.active a {
           padding: 12px;
            border-bottom: 3px solid #FF5902;
         }
       }
       .login-body {
         position: relative;
         padding: 34px 50px;
         input {
           width: 100%;
           height: 46px;
           line-height: 46px;
           border: 1px solid #9C9A9A;
           border-radius: 3px;
           padding: 0 50px;
           font-size: 14px;
           color: #000;
           outline:none;
           &:focus {
             border: 1px solid #FF5902;
           }
         }
         .input-box {
           position: relative;
           margin-bottom: 40px;
           .tips {
             position: absolute;
             font-size: 14px;
             color: #FF615A;
             padding: 4px 0;
           }
           .phone {
             position: absolute;
             width: 30px;
             height: 30px;
             left: 14px;
             top: 8px;
             background: url("../assets/images/phone-ico.png") no-repeat;
           }
           .psw {
             position: absolute;
             width: 30px;
             height: 30px;
             left: 14px;
             top: 8px;
             background: url("../assets/images/psw-ico.png") no-repeat;
           }
           .verification {
             position: absolute;
             width: 30px;
             height: 30px;
             left: 14px;
             top: 8px;
             background: url("../assets/images/verification-ico.png") no-repeat;
           }
           .userVer {
             width: 100px;
             height: 24px;
           }
           .get-msm {
             position: absolute;
             width: 120px;
             right: 20px;
             top: 14px;
             font-size: 14px;
             color: #FF5902;
             border-left: 1px solid #D3DAE3;
             padding-left: 20px;
             cursor: pointer;
           }
           .disabled {
             color: gray;
             pointer-events: none;
           }
         }
         .remember-box {
           display: flex;
           justify-content: space-between;
           font-size: 13px;
           color: #51555C;
           margin-bottom: 23px;
           .remember {
             position: relative;
             cursor: pointer;
             .ico {
               float: left;
               margin-top: 2px;
               margin-right: 10px;
               width: 14px;
               height: 14px;
               background: url("../assets/images/checkbox.png") no-repeat;
             }
             .checked {
               background: url("../assets/images/checkbox-ed.png") no-repeat;
             }
           }
           .forget {
             cursor: pointer;
           }
         }
         .login-btn {
           padding: 10px 0;
           text-align: center;
           font-size: 20px;
           color: #FFFFFF;
           border-radius: 3px;
           margin-bottom: 10px;
           cursor: pointer;
           background: #FF5902;
         }
         .apply-wrap {
           text-align: center;
           font-size: 16px;
           color: #9C9A9A;
           span {
             color: #FF615A;
             cursor: pointer;
           }
         }
         .tips-wrap {
           position: absolute;
           width: 350px;
           bottom: 0;
           text-align: center;
           color: #FF615A;
           font-size: 14px;
         }
       }
     }
   }
 }

</style>
