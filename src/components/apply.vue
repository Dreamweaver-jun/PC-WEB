<template>
  <div class="apply-wrap">
    <div class="modal fade" id="apply" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">申请试用</h4>
          </div>
          <div class="modal-body">
            <div class="apply-body">
              <form data-vv-scope="apply">
                <div class="input-box">
                  <input type="text" v-validate="{ required: true, regex: /^1\d{10}$/ }" name="userPhone" data-vv-delay="1000" v-model="applyInfo.phone" @focus="clearTips()" @keydown="isEnter()" placeholder="请输入常用手机号" minlength="11" maxlength="11">
                  <div class="tips" v-show="errors.has('apply.userPhone')">手机号输入错误</div>
                </div>
                <div class="input-box">
                  <input type="text" v-validate="{ required: true}" name="userName" data-vv-delay="1000" v-model="applyInfo.name" @focus="clearTips()" @keydown="isEnter()" placeholder="请输入姓名" minlength="1" maxlength="10">
                  <div class="tips" v-show="errors.has('apply.userName')">姓名输入错误</div>
                </div>
                <div class="input-box">
                  <input type="text" v-validate="{ required: true}" name="userCompany" data-vv-delay="1000" v-model="applyInfo.company" @focus="clearTips()" @keydown="isEnter()" placeholder="请输入公司名称" minlength="2" maxlength="20">
                  <div class="tips" v-show="errors.has('apply.userCompany')">公司名称输入错误</div>
                </div>
                <div class="apply-btn" @click="toApply('apply')">申 请 试 用</div>
              </form>
            </div>
            <div class="tips-wrap" v-text="applyInfo.tips"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'apply',
    props: ['applyPhone'],
    data () {
      return {
          applyInfo : {
              phone : '',
              name : '',
              company : '',
              tips : ''
          }
      }
    },
    watch: {
      applyPhone : function(str){
        this.applyInfo.phone = str;
      }
    },
    methods : {
      toApply(scope){

        //验证输入是否正确
        this.$validator.validateAll(scope).then((result) => {
            if(result)
            {
                this.$http.post('/tms/inner/register',{
                  applyMobileNo : this.applyInfo.phone,
                  legalPerson : this.applyInfo.name,
                  compName : this.applyInfo.company
                }).then((response) => {
                  if(response.data.success === true)
                  {
                    let _this = this;
                    this.applyInfo.tips = response.data.data;
                    setTimeout(function(){
                      _this.closeModal();
                    },1500);
                  }
                  else
                  {
                    this.applyInfo.tips = response.data.error;
                  }
                })
            }
        });

      },
      closeModal(){
          $('#apply').modal('hide');
      },
      clearTips(){
        this.applyInfo.tips = '';
      },
      isEnter(){
        if(window.event.which === 13 || window.event.keyCode === 13)
        {
          this.toApply('apply');
        }
      }
    },
    mounted(){
      let apply = $('#apply');
      apply.on('hide.bs.modal',() => {
        this.applyInfo = {
            phone : this.applyPhone,
            name : '',
            company : '',
            tips : ''
        }
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

 .apply-wrap {
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
       .apply-body {
         position: relative;
         padding: 34px 50px;
         input {
           width: 100%;
           height: 46px;
           line-height: 46px;
           border: 1px solid #9C9A9A;
           border-radius: 3px;
           padding: 0 10px;
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
         }
         .apply-btn {
           padding: 10px 0;
           text-align: center;
           font-size: 20px;
           color: #FFFFFF;
           border-radius: 3px;
           margin-bottom: 10px;

           background: #FF5902;
           pointer-events: auto;
           cursor: pointer;
         }
         .disabled {

           background: #999;
           pointer-events: none;
         }
       }
       .tips-wrap {
         position: absolute;
         width: 450px;
         bottom: 20px;
         text-align: center;
         color: #FF615A;
         font-size: 14px;
       }
     }
   }
 }

</style>
