const express = require("express");
const router = express.Router();

const axios = require("axios");
const { json } = require("express");

const api_key = "1e1812e68efb5ee050d27b75411686a3"

router.get('/currentPlayingMovies',function(req,res){

    let url = "https://api.themoviedb.org/3/movie/now_playing?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;
        
        let finalList = [];
        let count = 0;
        for(let i=0;i<reData.length;i++){
            if(reData[i].backdrop_path){
                finalList.push(reData[i]);
                count++;
            }
            if(count>5){
                break;
            }
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/popularMovies',function(req,res){

    let url = "https://api.themoviedb.org/3/movie/popular?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){

            if(reData[i].poster_path){

                finalList.push(reData[i]);
                
            }
        
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/topMovies',function(req,res){

    let url = "https://api.themoviedb.org/3/movie/top_rated?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){

            if(reData[i].poster_path){

                finalList.push(reData[i]);
                
            }
        
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/trendingMovies',function(req,res){

    let url = "https://api.themoviedb.org/3/trending/movie/day?api_key="+api_key;
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){

            if(reData[i].poster_path){

                finalList.push(reData[i]);
                
            }
        
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/popularTVs',function(req,res){

    let url = "https://api.themoviedb.org/3/tv/popular?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){

            if(reData[i].poster_path){

                finalList.push(reData[i]);
                
            }
        
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/topTVs',function(req,res){

    let url = "https://api.themoviedb.org/3/tv/top_rated?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){

            if(reData[i].poster_path){

                finalList.push(reData[i]);
                
            }
        
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/trendingTVs',function(req,res){

    let url = "https://api.themoviedb.org/3/trending/tv/day?api_key="+api_key;
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){

            if(reData[i].poster_path){

                finalList.push(reData[i]);
                
            }
        
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/movieDetail',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data;
        
        res.json(reData);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/tvDetail',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/tv/"+id+"?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data;
        
        res.json(reData);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/movieVideo',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/movie/"+id+"/videos?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;
        
        res.json(reData);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/tvVideo',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/tv/"+id+"/videos?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;
        
        res.json(reData);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/movieCast',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/movie/"+id+"/credits?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.cast;

        let finalList = [];
        for(let i=0;i<reData.length;i++){

            if(reData[i].profile_path){

                finalList.push(reData[i]);
                
            }
        
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/tvCast',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/tv/"+id+"/credits?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.cast;

        let finalList = [];
        for(let i=0;i<reData.length;i++){

            if(reData[i].profile_path){

                finalList.push(reData[i]);
                
            }
        
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/movieReviews',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/movie/"+id+"/reviews?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        let count = 0;
        for(let i=0;i<reData.length;i++){
            
            finalList.push(reData[i]);
            count++;
            
            if(count>10){
                break;
            }
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/tvReviews',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/tv/"+id+"/reviews?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        let count = 0;
        for(let i=0;i<reData.length;i++){
            
            finalList.push(reData[i]);
            count++;
            
            if(count>10){
                break;
            }
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/movieRec',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/movie/"+id+"/recommendations?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){
            
            if(reData[i].poster_path)
            {
                finalList.push(reData[i]);
            }
            
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/tvRec',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/tv/"+id+"/recommendations?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){
            
            if(reData[i].poster_path)
            {
                finalList.push(reData[i]);
            }
            
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/movieSimilar',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/movie/"+id+"/similar?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){
            
            if(reData[i].poster_path)
            {
                finalList.push(reData[i]);
            }
            
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/tvSimilar',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/tv/"+id+"/similar?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        for(let i=0;i<reData.length;i++){
            
            if(reData[i].poster_path)
            {
                finalList.push(reData[i]);
            }
            
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});


router.get('/castDetail',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/person/"+id+"?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data;
        
        res.json(reData);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/castExternal',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/person/"+id+"/external_ids?api_key="+api_key+"&language=en-US&page=1";
    axios.get(url).then(posts => {
        reData = posts.data;
        
        res.json(reData);

    }).catch(err => {
        res.send(err);
    });

});

router.get('/multiSearch',function(req,res){

    let id = req.query.id;

    let url = "https://api.themoviedb.org/3/search/multi?api_key="+api_key+"&language=en-US&query="+id;
    axios.get(url).then(posts => {
        reData = posts.data.results;

        let finalList = [];
        count = 0;
        for(let i=0;i<reData.length;i++){

            if(reData[i].media_type==="tv" || reData[i].media_type==="movie")
            {
                if(reData[i].backdrop_path)
                {
                    finalList.push(reData[i]);
                    count++;
                }
            }
            if(count>20)
            {
                break;
            }
            
        }
        
        res.json(finalList);

    }).catch(err => {
        res.send(err);
    });

});


module.exports = router;
