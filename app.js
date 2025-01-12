const g=['action', 'comedy', 'drama', 'horror', 'sci-fi'];
const d=['under 90 minutes', '90-120 minutes', 'over 120 minutes'];
const m=['happy', 'relaxed', 'excited', 'adventurous'];
let movie1=['Action Short Happy', 'Action Short  Relaxed', 'Action Short Excited',  'Action Short Adventurous',];
let movie2=[ 'Action Medium Happy', 'Action Medium Relaxed', 'Action Medium Excited', 'Action Medium Adventurous'];
let movie3=['Action Long Happy','Action Long Relaxed','Action Long Excited','Action Long Adventurous'];
let movie4=['Comedy Short Happy', 'Comedy Short Relaxed', 'Comedy Short Excited', 'Comedy Short Adventurous'];
let movie5=['Comedy Medium Happy', 'Comedy Medium Relaxed', 'Comedy Medium Excited', 'Comedy Medium Adventurous'];
let movie6=['Comedy Long Happy', 'Comedy Long Relaxed', 'Comedy Long Excited', 'Comedy Long Adventurous']; 
let movie7=['Drama Short Happy', 'Drama Short Relaxed', 'Drama Short Excited', 'Drama Short Adventurous'];
let movie8=['Drama Medium Happy', 'Drama Medium Relaxed', 'Drama Medium Excited', 'Drama Medium Adventurous'];
let movie9=['Drama Long Happy', 'Drama Long Relaxed', 'Drama Long Excited', 'Drama Long Adventurous'];
let movie10=['Horror Short Happy', 'Horror Short Relaxed', 'Horror Short Excited', 'Horror Short Adventurous'];
let movie11=['Horror Medium Happy', 'Horror Medium Relaxed', 'Horror Medium Excited', 'Horror Medium Adventurous'];
let movie12=['Horror Long Happy', 'Horror Long Relaxed', 'Horror Long Excited', 'Horror Long Adventurous']; 
let movie13=['Sci-Fi Short Happy', 'Sci-Fi Short Relaxed', 'Sci-Fi Short Excited', 'Sci-Fi Short Adventurous']; 
let movie14=['Sci-Fi Medium Happy', 'Sci-Fi Medium Relaxed', 'Sci-Fi Medium Excited', 'Sci-Fi Medium Adventurous']; 
let movie15=['Sci-Fi Long Happy', 'Sci-Fi Long Relaxed', 'Sci-Fi Long Excited', 'Sci-Fi Long Adventurous'];
let m1=[' The Shawshank Redemption', 'The Godfather', 'The Dark Knight', ' The Godfather Part II'];
let m2=['12 Angry Men','The Lord of the Rings: The Return of the King',"Schindler's List", 'Pulp Fiction'];
let m3=[' The Lord of the Rings: The Fellowship of the Ring', ' The Good, the Bad and the Ugly', 'Forrest Gump', 'The Lord of the Rings: The Two Towers'];
let m4=[' Fight Club', ' Inception', 'Star Wars: Episode V - The Empire Strikes Back', 'The Matrix'];
let m5=['Goodfellas', " One Flew Over the Cuckoo's Nest", 'Interstellar', ' Se7en'];
let m6=[" It's a Wonderful Life", 'Seven Samurai', 'The Silence of the Lambs', 'Saving Private Ryan'];
let m7=['City of God', ' The Green Mile', ' Life Is Beautiful', 'Terminator 2: Judgment Day'];
let m8=['Star Wars: Episode IV - A New Hope', 'Back to the Future', 'Spirited Away', 'The Pianist'];
let m9=['Gladiator', 'Parasite', 'Psycho', ' The Lion King'];
let m10=['The Departed', 'Grave of the Fireflies', ' Whiplash', ' American History X'];
let m11=['Harakiri', ' The Prestige', 'Spider-Man: Across the Spider-Verse', ' Léon: The Professional'];
let m12=['Casablanca', 'The Usual Suspects', 'The Intouchables', ' Cinema Paradiso'];
let m13=['Modern Times', 'Alien', ' Rear Window', 'Once Upon a Time in the West'];
let m14=[' Dune: Part Two', 'Django Unchained', 'City Lights', 'Apocalypse Now'];
let m15=[' Memento', 'WALL·E', ' Raiders of the Lost Ark', ' The Lives of Others'];
function detectgenre(){
                        let r=document.getElementById('genre').value;
                       // alert('genre'+r);
                        return r;
                      }
function detectduration(){
                          let r=document.getElementById('duration').value;
                          //alert('duration'+r);
                          return r;
                         }
function detectmood(){
                      
                      let genre = detectgenre(); 
                      let duration = detectduration();//alert(duration!='0');//alert(genre!='0' );//alert('proceed'+genre+'proceed'+duration);
                      if(genre!='0' && duration!='0'){
                                                        let mood = document.getElementById('mood').value;
                                                        if(mood=='0'){
                                                                      alert('Please select mood');
                                                                      
                                                                     }else{
                                                                      if(genre==1){
                                                                                    if(duration==1){
                                                                                                    if(mood==1){getmovie(m1[0]);}
                                                                                                    if(mood==2){getmovie(m1[1]);}
                                                                                                    if(mood==3){getmovie(m1[2]);}
                                                                                                    if(mood==4){getmovie(m1[3]);}

                                                                                    }
                                                                                    if(duration==2){
                                                                                                    if(mood==1){getmovie(m2[0]);}
                                                                                                    if(mood==2){getmovie(m2[1]);}
                                                                                                    if(mood==3){getmovie(m2[2]);}
                                                                                                    if(mood==4){getmovie(m2[3]);}
                                                                                    }
                                                                                    if(duration==3){
                                                                                                    if(mood==1){getmovie(m3[0]);}
                                                                                                    if(mood==2){getmovie(m3[1]);}
                                                                                                    if(mood==3){getmovie(m3[2]);}
                                                                                                    if(mood==4){getmovie(m3[3]);}
                                                                                    }
                                                                      }
                                                                      if(genre==2){//getmovie(m4);
                                                                        if(duration==1){
                                                                                                    if(mood==1){getmovie(m4[0]);}
                                                                                                    if(mood==2){getmovie(m4[1]);}
                                                                                                    if(mood==3){getmovie(m4[2]);}
                                                                                                    if(mood==4){getmovie(m4[3]);}

                                                                                    }
                                                                                    if(duration==2){
                                                                                                    if(mood==1){getmovie(m5[0]);}
                                                                                                    if(mood==2){getmovie(m5[1]);}
                                                                                                    if(mood==3){getmovie(m5[2]);}
                                                                                                    if(mood==4){getmovie(m5[3]);}
                                                                                    }
                                                                                    if(duration==3){
                                                                                                    if(mood==1){getmovie(m6[0]);}
                                                                                                    if(mood==2){getmovie(m6[1]);}
                                                                                                    if(mood==3){getmovie(m6[2]);}
                                                                                                    if(mood==4){getmovie(m6[3]);}
                                                                                    }
                                                                      }
                                                                      if(genre==3){//getmovie(m7);
                                                                                    if(duration==1){
                                                                                                    if(mood==1){getmovie(m7[0]);}
                                                                                                    if(mood==2){getmovie(m7[1]);}
                                                                                                    if(mood==3){getmovie(m7[2]);}
                                                                                                    if(mood==4){getmovie(m7[3]);}

                                                                                    }
                                                                                    if(duration==2){
                                                                                                    if(mood==1){getmovie(m8[0]);}
                                                                                                    if(mood==2){getmovie(m8[1]);}
                                                                                                    if(mood==3){getmovie(m8[2]);}
                                                                                                    if(mood==4){getmovie(m8[3]);}
                                                                                    }
                                                                                    if(duration==3){
                                                                                                    if(mood==1){getmovie(m9[0]);}
                                                                                                    if(mood==2){getmovie(m9[1]);}
                                                                                                    if(mood==3){getmovie(m9[2]);}
                                                                                                    if(mood==4){getmovie(m9[3]);}
                                                                                    }
                                                                      }
                                                                      if(genre==4){//getmovie(m10);
                                                                                    if(duration==1){
                                                                                                    if(mood==1){getmovie(m10[0]);}
                                                                                                    if(mood==2){getmovie(m10[1]);}
                                                                                                    if(mood==3){getmovie(m10[2]);}
                                                                                                    if(mood==4){getmovie(m10[3]);}

                                                                                    }
                                                                                    if(duration==2){
                                                                                                    if(mood==1){getmovie(m11[0]);}
                                                                                                    if(mood==2){getmovie(m11[1]);}
                                                                                                    if(mood==3){getmovie(m11[2]);}
                                                                                                    if(mood==4){getmovie(m11[3]);}
                                                                                    }
                                                                                    if(duration==3){
                                                                                                    if(mood==1){getmovie(m12[0]);}
                                                                                                    if(mood==2){getmovie(m12[1]);}
                                                                                                    if(mood==3){getmovie(m12[2]);}
                                                                                                    if(mood==4){getmovie(m12[3]);}
                                                                                    }
                                                                      }
                                                                      if(genre==5){getmovie(m13);
                                                                                    if(duration==1){
                                                                                                    if(mood==1){getmovie(m13[0]);}
                                                                                                    if(mood==2){getmovie(m13[1]);}
                                                                                                    if(mood==3){getmovie(m13[2]);}
                                                                                                    if(mood==4){getmovie(m13[3]);}

                                                                                    }
                                                                                    if(duration==2){
                                                                                                    if(mood==1){getmovie(m14[0]);}
                                                                                                    if(mood==2){getmovie(m14[1]);}
                                                                                                    if(mood==3){getmovie(m14[2]);}
                                                                                                    if(mood==4){getmovie(m14[3]);}
                                                                                    }
                                                                                    if(duration==3){
                                                                                                    if(mood==1){getmovie(m15[0]);}
                                                                                                    if(mood==2){getmovie(m15[1]);}
                                                                                                    if(mood==3){getmovie(m15[2]);}
                                                                                                    if(mood==4){getmovie(m15[3]);}
                                                                                    }
                                                                      }
                                                                      function getmovie(m1_15){
                                                                                                return m1_15;
                                                                      }

                                                                      function getgenre(genre){ 
                                                                                                return g[--genre];
                                                                                            }
                                                                      function getduation(duration){ 
                                                                                                    return d[--duration];
                                                                                                   }
                                                                      function getmood(mood){ 
                                                                                                    return m[--mood];
                                                                                                   }
                                                                      foundMovie=m1[0];
                                                                      genre=getgenre(genre);
                                                                      duration=getduation(duration);
                                                                      mood=getgenre(mood);
                                                                      document.getElementById('movie').innerHTML='Generated Recommendation: "Based on your preferences, we recommend watching '+foundMovie+' a quirky '+genre+' film with a runtime of '+duration+', a perfect for a '+mood+' mood. Enjoy this '+genre+' packed feature film !" ';   
                                                                            //alert('genre'+genre+'duration'+duration+'mood'+mood);
                                                                          }
                                                        
                                                        
                                                     }else{
                                                            if(genre=='0' && duartion!='0'){alert('Please select genre');}
                                                            if(genre!='0' && duartion=='0'){alert('Please select duration');}
                                                            if(genre=='0' && duartion=='0')alert('Please select genre and duration');
                                                     }
                      }
