new Vue({
    el:"#vue-app",
    data:{
        name:"Sirawit Uppakan",
        job:"",
        age: 24,
        count:0,
        website:'https://www.google.com',
        foods:[],
        genders: "",

    },
    methods:{
        getname:function(){
            return this.name1;
        },
        setname:function(setName){
            return this.name = setName;
        },
        addAge:function(){
            this.age++ ;
            console.log(this.age);
        },
        subtractAge:function(){
            this.age-- ;
            console.log(this.age);
        },
        addCount:function(){
            this.count++ ;
            console.log(this.count);
        }
    }
})
