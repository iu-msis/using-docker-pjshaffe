var userApp = new Vue({
  el: '#randomUser',
  data: {
    user: {
      name:"",
      nat:"",
      dob: "",
      age: "",
      email: "",
      picture: ""
    }
  },
  methods: {
    fetchProfile() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {userApp.user = user.results[0]});
    }
  },
  created() {
    this.fetchProfile()
  }

});
