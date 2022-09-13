const { createApp } = Vue

createApp({
  data() {
    return {
      navOpen: false,
      page: "home",
      nav: "home",
      next: 0,
      nextTable: 0,
      title: "",
    }
  },
  created(){


  },
  methods: {
    openNav() {
      if(this.navOpen === false){
        this.navOpen = true
      }
      else{
        this.navOpen = false
      }
    },
    changeTitle(){
      const mayus = this.page.split("")[0].toUpperCase()
      const minus = this.page.slice(1)
      document.title = `MDHL - ${mayus + minus}`
      console.log(title);
    }

    
  },
  computed: {
    
  },
      
      
    }).mount('#app')
