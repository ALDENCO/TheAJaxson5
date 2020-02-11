var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function() {
        return {
            tagValue: [],
            cap: [],
            errorMessage: null,
            loading: true,
            imgSrc: "https://api.giphy.com/v1/gifs/random?api_key=n2KJgt6XJN0Z9Fj6D8924vDw8vOAp5Tt&tag=${tag}&q=${searchQuery}"
            //"https://78.media.tumblr.com/11b6c5922eefc306417b6993753c3e19/tumblr_o3f1npiGpD1r7eta3o1_500.gif",
            ///   imgSrc: "https://api.giphy.com/v1/gifs/search?api_key=n2KJgt6XJN0Z9Fj6D8924vDw8vOAp5Tt&tag=${tag}",


        };
    },

    computed: {
        captchaCorrect: function() {
            if (this.captchaInput === "5" || this.captchaInput === "five")
            { alert("legit");
        }
                else (this.captchaInput !== "5" || this.captchaInput !== "five")
                { alert("how many jacksons?");
            }
        },
    },

    methods: {
        fetchGif: function(searchQuery) {
                // get the user's input text from the DOM
                var searchQuery = this.tagValue; // TODO should be e.g. "dance"

                // configure a few parameters to attach to our request
                var api_key = "n2KJgt6XJN0Z9Fj6D8924vDw8vOAp5Tt";
                var tag = "jackson + 5"; // TODO should be e.g. "jackson 5 dance"


                // TODO what do we want this URL to be?
                fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&tag=${tag}&q=${searchQuery}`)
                    .then(response => response.ok ? response.json() : Promise.reject(response))
                    .then(results => {
                        // if the response comes back successfully, the code in here will execute.

                        console.log(tag);
                        console.log('searching giphy api for', searchQuery);
                        //console.log(searchQuery);
                        // this.imgSrc=this.imgSrc(results.data[0]);
                        this.imgSrc = results.data[0].images.original.url;



                        // TODO
                        // 1. set the imgSrc value in our data to the GIF's image_url inside results
                        // 2. clear the error message and loading state (since our request just succeede)
                    })
                    .catch(err => {
                        // if something went wrong, the code in here will execute instead of the success function

                        this.loading = false;
                        this.errorMessage = 'Sorry, could not load GIF. Try again!';
                    })
                }
            }
        })
    


                        
            
        
        
            

        
    

        
                // TODO We've just made a request, so this is a good time to
               // set "loading = true"
