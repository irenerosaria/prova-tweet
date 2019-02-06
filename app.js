var app = new Vue({
    el: '#app',
    data: {
        id:null,
        author:"",
        message:"",
        tweets: [],
        forAuthor:[],
        forWord:[],
        forId:[],
        Author:"",
        word:"",
        Id:null

    },
    created: function(){
        this.loadTweets();
        // this.deleteById();
        // this.findTweetByAuthor();
        // this.findTweetByWord();
        // this.findTweetById();
        //this.addTweet();
    },
    methods: {
        loadTweets() {
            fetch('http://localhost:3001/tweets')
                .then((response) => {return response.json()})
                .then((response) => {
                    this.tweets = response;
                    // for (var tweet of this.tweets) {
                    //     tweet.visible = true;
                    // }
                })
                .catch(function(err){
                    console.log("err:", err);
                })
            
        },
         deleteById(){
            //this.id = id; no deleteById(id)
             var url = 'http://localhost:3001/tweets/'+this.id;
                this.$http.delete(url).then(response => {
                    this.tweets=response.body;
                    console.log("eliminato!");
                })
                .catch(function(err){
                    console.log("err:", err);
                })
             },
        findTweetByAuthor(){
            //this.Author = Author; findTweetByAuthor(Author)
            var url = 'http://localhost:3001/tweets?author='+this.Author;
            this.$http.get(url)
            .then(response => {
                this.forAuthor = response.body;
                console.log(response.body);
            })
            .catch(function(err){
                    console.log("err:", err);
                })
        },

       
           findTweetByWord() {
            //this.word = word;
            var url = 'http://localhost:3001/tweets/word='+this.word;
             this.$http.get(url)
            .then(response => {
                this.forWord = response.body;
                console.log(response.body);
            })
            .catch(function(err){
                    console.log("err:", err);
                })
        },

        findTweetById() {
            var url = 'http://localhost:3001/tweets/'+ this.Id;
            this.$http.get(url).then(response => {
                this.forId=response.body
            })
            .catch(function(err){
                    console.log("err:", err);
                })
        },

        addTweet() {
            var url ='http://localhost:3001/tweets/';
            this.$http.post(url,{
                author:this.author,
                message:this.message,
                })
            .then(response => { 
                this.tweets= response.body;
                console.log(response);
            })
            .catch(function(err){
                    console.log("err:", err);
                    })
        }  
    }
    

})
