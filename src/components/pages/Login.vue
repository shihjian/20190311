<template>
  <div>
      <section>
        <div class="container">
            <div class="login-form">
                <h1>管理登入</h1>
                <form @submit.prevent="signin">
                    <input type="text" class="account" placeholder="E-mail" v-model="user.username">
                    <input type="password" class="password" placeholder="Password" v-model="user.password">
                    <input type="submit" class="send" value="送出">
                </form>
                <div class="verifiedInfoID"></div>
                <p class="mt-4 text-muted text-center">&copy; 2019 YJ</p>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:{
          username:'',
          password:'',
      },
    };
  },

  methods:{
    signin(){    
        const api = `${process.env.APIPATH}admin/signin`;
        const vm = this;
        this.$http.post(api,vm.user).then((response) => {
        console.log(response.data);
        if(response.data.success){
            vm.$router.push('/admin/products'); //如果登入成功進入這
        }else{
        alert('帳號或密碼輸入錯誤')
        };
        });
    },
  },
};
</script>




