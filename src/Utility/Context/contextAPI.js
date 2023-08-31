import React, { useState, createContext } from "react";

export const AppData = createContext();
function Store(props) {
  const [data, setdata] = useState([
    
    
    {id:1, 
      ide: 1,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:'Spider-Man 4 release date speculation, cast, plot, and more news',
     
      img: "https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/01/spider-man-4-release-date-23-550x309.jpg", 
      date:'2025',
      
      title:"Spider-Man 4 release date speculation", 
      description: "When is the Spider-Man 4 release date? We’ve now seen Spidey (Tom Holland) face the perils of the infinite multiverse and battle a collection of deadly enemies. Inevitably, though, insatiable fans have already started wondering when we’ll get a new Spider-Man movie set in the MCU.To be fair, fans and journalists were unsure if No Way Home would be the final outing for Tom Holland’s Spider-Man before the movie was released. That said, recent comments from the Spider-Man cast and crew, suggest that while Spidey may be bloodied and bruised, he’s not done with the Marvel Cinematic Universe yet.Sony has been laying the groundwork for new Spider-Man movies, and Disney naturally wants more action movies featuring Tom Holland as the Friendly Neighbourhood Spider-Man. So we’ve scoured the web (pun not intended) to bring you everything we know about the Spider-Man 4 release date, cast, and more."
    
  }, 
  {id:2, 
    ide: 2,
      cat: "Hollywood",
      sp: "home-banner",
      for: "ArticleList",
      date:'  May 25, 2023',
      title:"Priyanka Chopra Shares Evidence Of The Blood, Sweat And Tears That Went Into Her Citadel Role",
      img2: "https://c.ndtvimg.com/2023-05/6hh6ep2o_priyanka-_120x90_25_May_23.jpg",
      img: "https://c.ndtvimg.com/2023-05/6hh6ep2o_priyanka-_120x90_25_May_23.jpg",
      Overview: 'Citadel has Priyanka Chopra performing some dangerous stunts, and many of the moves even left the star with cuts and bruises',
      description: "Priyanka Chopra Shares Evidence Of The 'Blood, Sweat And Tears' That Went Into Her Citadel Role Priyanka Chopra posted this image. (courtesy: priyankachopra)Priyanka Chopra is currently basking in all the compliments and praise coming her way for her lead role in the spy drama Citadel.The action-packed show has Priyanka Chopra performing some dangerous stunts, and many of the moves even left the star with cuts and bruises. We know this because Priyanka Chopra has shared some behind-the-scenes glimpses from the sets of Citadel on Instagram. The clip begins with her saying, “Tell me your job is glamorous, without telling me that your job is glamorous.” This is then followed by several visuals of her bruised face and body, and some clips of the actor getting medical aid. In the caption, Priyanka Chopra wrote, “Blood, sweat, and tears, literally. So grateful for the brilliant stunt coordinators on Citadel, @don_thai , @jyou10 and @nikkipowell114 you made doing my own stunts feel like a cakewalk. Wait, what, kidding! There was nothing easy about that but having you and your excellent team around made me feel so safe. Thank you.”"
      
  },  
  {id:3, 
    ide: 3,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 03/03/2023',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg',
      title:'Creed III',
      Overview: 'After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. ',
      description: "This reminded me quite a lot of 'Rocky IV' (1985) only instead of a Russian auto-box doing the challenging, it's 'Damian' (Jonathan Majors). Former champion 'Adonis' (Michael B. Jordan) is living the life of a retired sportsman, wealthy and happy with his family whilst managing the gym with 'Duke' (Wood Harris). Leaving, one afternoon, he discovers a guy sitting on his car and after a quick chat realizes that it's his long-lost childhood pal who has been incarcerated for the last eighteen years. He ('Damian') is now determined to succeed in the ring and so his friend tries to sort it all out - only to discover that this lean, mean, fighting machine has an altogether different agenda and that is going to force the former champ to prove whether or not he still has what it takes. The story is a hybrid of too many others and plays out as predictably as the sun coming up. Add to the mix a degree of familial discord and melodrama and we are left with something largely forgettable that I found to be a pretty poor relation of the previous, much more charismatic and grittier efforts in this franchise. The actual boxing scenes are impressively photographed but there's just no jeopardy - and I'd largely given up. Pretty to look at, yes - but not a great watch."

  },
  {id:4, 
    ide: 4,
      cat: "Hollywood",
      for: "ArticleList",
      date:' May 23, 2023',
      img: 'https://www.xtrafondos.com/wallpapers/tony-stark-como-iron-man-9224.jpg',
      title:'‘Iron Man’: Kevin Feige and Jon Favreau Discuss the Movie’s 15th Anniversary',
      Overview: 'The duo touch on casting, Robert Downey Jr. in the titular role, Easter Eggs here and there for future installments, and more.',
      description: "15 years ago, Tony Stark looked into a crowd of reporters and uttered, “I am Iron Man,” and nothing has been the same since.With Iron Man celebrating its 15th anniversary this year, Marvel Studios' president Kevin Feige and Iron Man director Jon Favreau recently sat down together to discuss the armored avenger and creating the blueprint for what would eventually become the Marvel Cinematic Universe, now 32 films and counting. And no, way back when neither one of them could have ever dreamed dozens of films later they would still be exploring the larger Marvel Universe together.“I remember saying something to you like, John, we're going to be together, you know, every day for the next two years,” Feige recalls. “And you said, no, if this works, we're going to be together for the next ten years. And you were wrong because it's now been 15 years.”"
    },
    {id:5,
      ide: 5, 
      cat: "Hollywood",
      for: "ArticleList",
      date:'04/18/2023 ',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/liLN69YgoovHVgmlHJ876PKi5Yi.jpg',
      title:'Ghosted',
      Overview: 'Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.',
      description: "The direction and visuals were all fairly good. The visuals looked fine for the majority of the film with no complaints whatsoever, including Ana de Armas’ wig. The direction was good, with some decent action choreography that was filmed pretty well, although there were a few scenes that suffered from too many jump cuts. I thought the intimate scene towards the beginning of the film was very stylistic and done really well. It was not just your standard grunts and moans that you see in so many films today.\n\nThe story was very oddly paced. The beginning section was really rushed, and the romantic build-up did not feel genuine in the slightest. Due to a poor script, their chemistry was non-existent in some sections, as the dialogue was atrocious. While there are some laughs to be had for sure, the majority of the comedy did not work for me. There was heavy use of modern songs throughout the entirety of the film. While some sections were complimented by the tracks, many others felt really out of place.\n\nThe performances were decent, but I think were hindered by the poor script. Ana de Armas was fine, although I never really liked her in anything since Knives Out as her performances always seem a little dull. Chris Evans played a character he's played many times before, which was entertaining, but he could not alone save the terrible dialogue he was given. "
  },
  {id:6,
    ide: 6, 
      cat: "Hollywood",
      for: "ArticleList",
      sp: "home-latestBig",
      date:'26 May, 2023 ',
      img2: 'https://www.heavenofhorror.com/wp-content/uploads/2021/12/beau-is-afraid-2023-aster.jpg',
      img: "https://m.media-amazon.com/images/M/MV5BYTNhNWRmMDctYzE4OS00MzczLWJkODgtNzYxZTQxM2Y1YmM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      title:'Beau Is Afraid Movie Review',
      Overview: 'Downing anxiety pills, petrified of his shady neighbourhood and the world at large, Beau (Joaquin Phoenix) a middle-aged lonely man lives off his mother’s credit card. On his way to meet his mommy, he finds himself trapped in a series of freak events.',
      description: "Unable to tell facts from fiction and dreams from reality, Beau is plagued with dreadful, suspicious, and strange occurrences with mysterious motives. Can he endure these countless attacks and suffering? Is someone doing that to him or is he doing that to himself? Is the man a victim or simply likes to play one? The film leaves you with many questions and possibilities. Oscillating between an overbearing mother, penis monster, suicidal nutcases, decaying corpses, nude escapes, crackheads and criminals, the film borders on insanity and absurd. However, if it’s not outrageously crazy, confounding and shockingly bizarre, serving you ample ‘what the f***’ moments, it’s not Ari Aster. "
  },
  {id:7, 
    ide: 7,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 03/17/2023 ',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
      title:'Shazam! Fury of the Gods',
      Overview: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      description: "Shazam! Fury of the Gods is a run-of-the mill superhero sequel that doesn’t progress the genre forward, but delivers two hours of pure entertainment. \n\n This film does not do any one thing great, but it was still a pretty decent watch. The plot is average—nothing we have not seen on the big screen before. Our villains have no development; their motivations are sound, but there is nothing further that develops them into something greater. \n\n This movie starts off incredibly strong, with a fantastic first act that had me laughing hysterically. The comedy hits more often than not, which was a surprise for me. There is a bridge rescue scene that is electric. The combination of I Need a Hero mixed with all of the heroes showcasing their abilities was amazing. I think superhero films have dropped the ball by not showing heroes rescuing everyday people. The stakes have gotten so high outside of the everyday troubles that this art is lost. I really enjoyed that aspect of the film, but unfortunately, after the first act, this story becomes inflated to a point where it is indistinguishable from many other superhero blockbusters.\n\n The final act is overly long and bloated with a plethora of CGI monsters for our heroes to defeat. I think the CGI actually looked pretty good, but it just was not an engaging conclusion for me. The stakes were high, but not built up properly for me to be genuinely interested. The action is pretty decent, but I couldn’t care less. The finale did have emotional beats in terms of the family connection, which worked surprisingly well. That is when this franchise works best. When the focus is on family and not on god's attempts to destroy Earth, \n\n The performances overall were pretty good. Zachary Levi is fantastic as Shazam; he has mastered the art of playing a child in a man's body. Jack Dylan Grazer is hilarious; his comedic timing is brilliant. Grace Caroline Currey is a queen. Rachel Zegler is a standout, and her chemistry with Grazer is top notch. The rest of the Shazamly do a great job as well. I think Helen Mirren and Lucy Liu are fine as antagonists but were wasted with a lack of screen time and development. \n\n Overall, this might not be good, but it is entertaining. That is a lot more than can be said for some of the recently released superhero films (Black Adam and Ant-Man and the Wasp: Quantumania). "
    },
    {id:8,
      ide: 8, 
      cat: "Hollywood",
      for: "TopList",
      date:' 04/21/2023',
      img: 'https://www.themoviedb.org/t/p/w220_and_h330_face/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg',
      title:'Evil Dead Rise',
      Overview: 'Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
      description: "This is certainly a triumph for the visual and audio effects folks. Otherwise, I found it all a bit derivative and frankly a rather classless rehash of the much more entertaining original. It's tough to just keep on re-inventing these themes - they do tire, and as I reckon with the recent updates of the Halloween franchise, they maybe just rely too heavily on a current generation who were not around to see the originals in the cinema first time round, and who maybe just don't appreciate that the acting and the writing - though never exactly crucial to these plots - did have more of a role than just relying on well made-up (virtual) demons spinning around the ceiling emitting threatening shrieks. It's not terrible - it moves along quickly for ninety minutes and might just put you off a bath anytime shortly afterwards, but there just isn't any real sense of menace or jeopardy and to be honest I wasn't entirely sure that the family weren't nightmarish enough - before their visitor arrived. "
    },
    {id:9, 
      ide: 9,
      cat: "Hollywood",
      for: "TopList",
      date:' 04/21/2023  ',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg',
      title:"TGuy Ritchie's The Covenant",
      Overview: 'During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.',
      description: "Director Guy Ritchie is no stranger to crafting exciting action films, but his latest project is quite different than his previous work. The narrative is linear, there aren’t any montages, and the story isn’t about criminals, gangsters, or Brits. Fans of Ritchie will absolutely still recognize his visual style (hello, overhead shots) and testosterone-fueled themes, but 'The Covenant' is a more dramatic, mature, and restrained work from the legendary director.\n\nSet during the war in Afghanistan in 2018, the film tells the story of U.S. Army sergeant John Kinley (Jake Gyllenhaal) and his local Afghan interpreter, Ahmed (Dar Salim). Called a traitor by his people for helping the Americans, Ahmed has volunteered to seek revenge against the Taliban that killed his son. He has also been promised visas for his service so his family can flee to safety in America. After a lethal ambush in the desert, Kinley is gravely injured by enemy fire. With his platoon gone, Ahmed refuses to leave a fellow soldier behind to die, so he drags Kinley through the mountainous terrain in order to get him back to the base for medical help.\n\nThe film tells the story of their 100 mile journey, but then pivots to Kinley’s return to the United States. It’s months after he gets home that Kinley learns Ahmed and his family were not given safe passage as promised and, as a way to repay the debt he owes his friend, he returns to Afghanistan to retrieve them. It won’t be easy, because Ahmed has been placed at the top of the Taliban’s most wanted hit list.\n\nIt’s a meaningful story of honor and brotherhood wrapped up in an intense wartime thriller. The story is told in three major acts, from the early days Ahmed and Kinley spent chasing IEDs, to their dangerous journey, to the red tape of getting a man what he’s owed. There are plenty of thrilling acting sequences throughout, and they will keep you on the edge of your seat.\n\nRitchie has an extraordinary sense of timing and instincts for shooting action scenes, and the brutal, graphic wartime violence puts you in the be-or-be-killed survival mind of a front line soldier."
},
    {id:10, 
      ide: 10,
      cat: "Hollywood",
      for: "TheTopList",
      date:' 26 May, 2023 ',
      img: 'https://images.alphacoders.com/131/1310935.jpeg',
      title:'The Little Mermaid Movie Review',
      Overview: 'The live-action remake of the 1989 Disney animated classic features the young mermaid Ariel (Halle Bailey), whose fascination with humans changes her life.',
      description: "  King Triton (Javier Bardem) rules over the seven seas with his daughters, but one of them has other interests. Ariel has her head above water; she collects trinkets and artefacts from land-dwellers, and her curiosity often gets her in trouble. She falls in love with Prince Eric (Jonah Hauer-King) after rescuing him when he’s thrown overboard during a storm, much to her father’s dismay. The one rule he has enforced is that the human world is forbidden to the merpeople, and, in his fury, Triton destroys Ariel’s treasured collection. The distraught mermaid makes a pact with the evil Ursula (Melissa McCarthy), who promises to give Ariel human legs in exchange for her enchanting voice to go ashore. But it comes with a dire clause – if Ariel doesn’t get true love’s kiss in three days, the sea witch will trap her forever."
    },
    {id:11,
      ide: 11, 
      cat: "Hollywood",
      for: "TopList",
      date:' 05/04/2023',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
      title:'The Mother ',
      Overview: 'A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.',
      description: "Ironically, these tale about a mother and daughter, fails because the male characters have no depth. The villain is evil sure, but also extremely stupid and escaping from her first attempt to kill him in a very unbelievable and unexplained way.\n\nThe romantic tension between Cruise and the mother also doesn't work and the age old friendship with Jons is also not given any backstory. I'm enclined to blame the casting here. Well, the story was lacking and oddly edited as well, but it may be because there wasn't much to work with. Either way, it's clear this is supposed to be about a mother/daughter relationship, but also be an action move and the director / writers / actors couldn't make it work. 3/10, 2 points cause I've seen worse, not because I can find something positive in it. "
    },
    {id:12, 
      ide: 1,
      cat: "Bollywood",
      for: "ArticleList",
      date:' 26 May, 2023 ',
      img: 'https://www.filmibeat.com/img/2023/05/jsra-1685075673.jpg',
      title:'Jogira Sara Ra Ra Movie Review ',
      Overview: 'A wedding planner, who is staunchly against getting married finds himself in a soup after a fiery young girl lures him into getting her out of an arranged marriage.',
      description: " A small town, an independent and brash girl and a family full of quirky characters. ‘Jogira Sara Ra Ra’ has all the elements stuffed in to create a situational comedy from everyday life. And it all begins when Jogi (Nawazuddin Siddiqui) - a street smart marriage planner meets a feisty and brattish Dimple (Neha Sharma). She has just gate-crashed a wedding party organised by Jogi and after a few pegs, she takes to the mic to give a very critical yet honest review of the pathetic catering at the wedding. Of course, it culminates in a big song and dance, but unlike a regular Bollywood film, there’s no love at first sight here. In fact, director Kushan Nandy and writer Ghalib Asad Bhopali ensure there’s nothing conventional about the lead pair, as they are both flawed yet real characters. They use this to create conflict, confusion and chaos that works really well throughout the first half. Add to that Jogi’s eccentric and outspoken family for whom nothing he does or gets is good enough. From his mother (Zarina Wahab) to his younger sisters - they’re all a bunch of ungrateful pricks but you can tell there’s an underlying thread of love that basically binds them as family. Their love-hate equation makes for an entertaining watch.  "
    },  
    {id:13, 
      ide:2,
      cat: "Bollywood",
      for: "ArticleList",
      sp:"home-latestArt",
      date:'12 May, 2023 ',
      img: 'https://i.ytimg.com/vi/G2yolV179tE/maxresdefault.jpg',
      title:'Ab Dilli Dur Nahin Movie Review',
      Overview: "Inspired by Delhi-based IAS officer Govind Jaiswal’s life, the story chronicles the journey of a small-town youngster who aspires to be an IAS officer to provide a better life for his parents.",
      description: " Many people from rural areas travel to big cities to take UPSC exams with the hopes of becoming IAS or IPS officers. ‘Ab Dilli Dur Nahin’ is one such inspiring story of Abhay Shukla, who came from a small hamlet in Bihar. After clearing the prelims, he arrives in Delhi to prepare for the main UPSC examinations. He falls in love with Niyati (Shruti Sodhi), the landlord’s daughter studying medicine, to attend medical school in London on a scholarship. The film is about whether or not Abhay can stay focused and put in all of his hard work to achieve his dream."
    },{
      id: 14,
      ide:3,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 06 September, 2019 ",
      img: "https://stat4.bollywoodhungama.in/wp-content/uploads/2018/05/Chhichhore-2-306x393.jpg",
      title: "Chhichhore ",
      Overview:"CHHICHHORE is the story of loser friends trying to become winners and learning some important lessons on the way. Annirudh Pathak aka Anni (Sushant Singh Rajput) is a middle-aged man residing in Mumbai with his son Raghav (Mohammad Samad) after divorcing his wife Maya (Shraddha Kapoor).",
      description: " CHHICHHORE is the story of ‘loser’ friends trying to become winners and learning some important lessons on the way. Annirudh Pathak aka Anni (Sushant Singh Rajput) is a middle-aged man residing in Mumbai with his son Raghav (Mohammad Samad) after divorcing his wife Maya (Shraddha Kapoor). Raghav is under immense pressure as he has just given the entrance exams for engineering. Both his parents were rankers when they gave the entrance examination. As a result, Raghav is feeling the pressure tremendously. Anni however is confident that he’ll make it. Finally, the result is out and sadly, Raghav fails to make the cut. Scared that he’ll be labelled a loser all his life, he attempts to commit suicide by jumping from a high rise. He survives but the doctor treating him, Dr Kasbekar (Shishir Sharma) makes it clear that the chances of him recovering are slim. Anni is obviously heartbroken and with no option in hand, he decides to adopt a novel method to ensure that Raghav gets the will to live. He starts narrating him his story as an engineering student in Mumbai’s National College of Technology. He’s allotted a room in Hostel no 4 aka H4, considered to be the residence of the ‘Losers’. At first, Anni is flabbergasted with the kind of characters in H4. But slowly, he becomes good friends with some of them like Gurmeet Singh Dhillon aka Sexa (Varun Sharma), Acid (Navin Polishetty), Sundar aka Mummy (Tushar Pandey), Bevda (Saharsh Kumar Shukla) and Derek (Tahir Raj Bhasin). The number of girls in engineering is negligible and the most popular among them is Maya (Shraddha Kapoor). Anni manages to woo her and they soon start dating. However, Anni and others are still called ‘Losers’ and there’s a reason for it. The General Championship aka GC is a sports tournament that takes place annually in the college. The students of H4 always lose miserably and are the last among the ten hostels. Hence, the ‘Loser’ tag."
    },
    {
      id: 15,
      ide:4,
      cat: "Bollywood",
      for: "ArticleList",
      img:"https://stat4.bollywoodhungama.in/wp-content/uploads/2018/09/Uri-306x393.jpg ",
      title: "Uri – The Surgical Strike",
      date: "11 January, 2019",
      Overview:"URI: THE SURGICAL STRIKE is based on the true events of the surgical strike carried out by the Indian armed forces following the September 2016 Uri attacks, which was termed as one of the deadliest attacks on the Indian forces. The film opens depicting Indian soldiers being ambushed in Manipur,...",
      description: "URI: THE SURGICAL STRIKE is based on the true events of the surgical strike carried out by the Indian armed forces following the September 2016 Uri attacks, which was termed as one of the deadliest attacks on the Indian forces. The film opens depicting Indian soldiers being ambushed in Manipur, followed by retaliation by the forces on terror bases across the India - Myanmar border in the North East. From there, the story follows Major Vihaan Shergill (Vicky Kaushal), who seeks retirement owing to his mother's ill health as she suffers from Alzheimer’s disease. In the meantime, Pakistani terrorist outfits carry out an attack at Uri Army Base camp in Kashmir. Vihaan’s childhood friend and brother-in-law Captain Karan Kashyap (Mohit Raina) along with some other fellow army mates are martyred in this attack. Following this, Vihaan is forced back by emotions to extract revenge by leading the strike force. Vihaan puts together a team to conduct the surgical strike under the guidance of PMO bigwig Govind Bhardwaj (Paresh Rawal) with special orders from PM (Rajit Kapur) himself. Special Agent Pallavi (Yami Gautam) helps Vihaan to detect the location of the launch pads and details of the target. And what follows is the execution of the surgical strikes across PoK. "
    },
    {
      id: 16,
      ide:5,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 19 December, 2014",
      img: "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/89649841-306x393.jpg",
      title: "PK",
      Overview:"UTV Motions Pictures, Vidhu Vinod Chopra Films and Rajkumar Hirani Films ' PK stars Aamir Khan along with Anushka Sharma, Sanjay Dutt, Sushant Singh Rajput. The film is about a childlike innocent character who in search of his 'property', comes face to face with the reality of human race",
      description: "UTV Motions Pictures, Vidhu Vinod Chopra Films and Rajkumar Hirani Films ' PK stars Aamir Khan along with Anushka Sharma, Sanjay Dutt, Sushant Singh Rajput. The film is about a childlike innocent character who in search of his 'property', comes face to face with the reality of human race and their selfish motives.\n\nThe story starts when PK (Aamir Khan) loses his 'property', without which he is left homeless on an unknown desert. Devastated with this incident, he goes in search of the man responsible for this, without even knowing any details of him. While people advice him to take the help of God, PK too sets out in search of 'God'. Gradually, he realizes that God isn't a 'single person' as there are different Gods and to reach him there are his 'messengers' (read 'Godmen'). That's when he comes across Tapasvi (Saurabh Shukla), who fools people stating that he has the proof of God's existence. "
    },
    {
      id: 17,
      ide:6,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 22 December, 2017",
      img: "https://media5.bollywoodhungama.in/wp-content/uploads/2016/09/Tiger-Zinda-Hai-6-1-306x393.jpg",
      title: "Tiger Zinda Hai",
      Overview:"Tiger (Salman Khan) and Zoya (Katrina Kaif) escape from the clutches of ISI and RAW and then they start living an idyllic life somewhere in the snow-covered ranges of Europe. Meanwhile in Ikrit, Iraq, Abu Usman (Sajjad Delafrooz) emerges as the head of ISC which turns into the world’s richest...",
      description: " Tiger (Salman Khan) and Zoya (Katrina Kaif) escape from the clutches of ISI and RAW and then they start living an idyllic life somewhere in the snow-covered ranges of Europe. Meanwhile in Ikrit, Iraq, Abu Usman (Sajjad Delafrooz) emerges as the head of ISC which turns into the world’s richest and the most dangerous terrorist organization. The Americans are angry and they launch an attack on Abu and his convoy, and it injures Abu. At the same time, a group of 40 nurses – 25 Indian and 15 Pakistani – are heading to the hospital where they work. Abu’s men force the nurses to take an injured Abu with them for immediate treatment. They also take over the hospital and keep the nurses as hostage. The Americans then decide to launch an airstrike on the hospital within 7 days. Hence, the Indians have just a week to rescue the nurses. Infiltrating into the high security ISC region is next to impossible. The senior officer of RAW, Shenoy (Girish Karnad) suggests that Tiger should be called in as he’s the only one who can successfully complete this mission. Tiger is found and he takes up the job. How Tiger manages to infiltrate the ISC area and rescue the nurses forms the rest of the film"
    },
    {
      id: 18,
      ide:7,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 31 May, 2013",
      img: "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/74637319.jpg",
      title: "Yeh Jawaani Hai Deewani",
      Overview:"It is a story of the exhilarating and terrifying journey of four characters as they navigate through their youth; from their carefree laughter as they set off on a holiday together in their colleges days, until their bittersweet tears as they watch the first of their bunch get married.",
      description: "Opposites attract! He's charismatic, gregarious and passionate with an indomitable spirit to explore places. She's the archetypical seedhi-saadhi girl, Plain Jane actually, an academician who's focused on attaining what she's zeroed for herself as a career. Add two more characters who cross their paths in this beautiful journey called life. Now place these four straight-out-of-life characters in a bottle, shake with a swizzle stick and presto, a love story is ready to be served.\n\nCome to think of it, Ayan Mukerjis second outing YEH JAWAANI HAI DEEWANI is akin to his accomplished directorial debut WAKE UP SID. Yet diverse! The characters in both, WAKE UP SID and YEH JAWAANI HAI DEEWANI, undergo a metamorphosis and transform into mature individuals with the passage of time. Life is a great teacher after all. At the same time, YEH JAWAANI HAI DEEWANI is dissimilar from films of its ilk -- and conventional love stories too -- because Ayans characters never embark upon the run of the mill, mundane route to express feelings towards each other.\n\nLike all rom-coms, YEH JAWAANI HAI DEEWANI sparkles with romance, merriment and heartache, is brightly glossy and boasts of crackling chemistry between its lead actors, but Ayan makes sure the heady concoction never waters down. The best part is, he never borrows from romantic cliches that most love stories depend upon and that, in my opinion, is this films biggest strength. Expect no unwanted melodrama, no unwelcome characters, no earsplitting background music to accentuate the proceedings... the best thing about YEH JAWAANI HAI DEEWANI is that its refreshingly unique within the conventional Hindi film format. "
    },
    {
      id: 19,
      ide:8,
      sp: "home-ban",
      cat: "Bollywood",
      for: "TopList",
      date:" ",
      img2: "https://st1.bollywoodlife.com/wp-content/uploads/2023/05/Asur-3.png?impolicy=Medium_Widthonly&w=1280&h=900",
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/05/Asur-3.png?impolicy=Medium_Widthonly&w=1280&h=900",
      title: "Asur 2 trailer out:",
      Overview:"Asur 2 trailer is out now. Starring Arshad Warsi, Barun Sobti, Ridhi Dogra and others - the trailer of part 2 is as interesting and edgy as it can get.",
      description:" Crime thrillers will never go out of fashion. Fans love the suspense, the drama, and the thrill that comes along. The genre has been a favourite of entertainment seekers for years and with the boom on OTT content, crime-thrillers have just become more interesting. One of the best crime thrillers made so far is Asur. Starring Arshad Warsi and Barun Sobti, Asur was loved by all. And now, it's time for all to brace up for Asur 2. The trailer of Asur 2 is out and as expected, it is as interesting and thrilling as it can get."
    },
    {
      id: 20,
      ide:9,
      cat: "Bollywood",
      for: "TheTopList",
      sp: "home-Toplist",
      date:" 12 May, 2023",
      img: "https://timesofindia.indiatimes.com/photo/99035292.cms",
      title: "Chatrapathi Movie Review ",
      Overview:"Shiva is separated from his mother and stepbrother as they flee a communal attack in Pakistan. When he reaches India with his neighbours, they are forced to work as bonded labourers for a local goon. Twelve years pass by, as he relentlessly searches for his mother while taking on the oppressors. But soon, his evil stepbrother comes into the picture to wreak havoc. Will Shiva reunite with his mother?",
      description: "A reboot of the 2005 Telugu Prabhas-starrer by the same name, Chatrapathi begins with Savitri Bhatia (Bhagyashree) bringing up her stepson Shiva and biological son Ashok in Pakistan. As the trio is driven out by hostile locals, a jealous Ashok lies to his mother that Shiva is trapped in their burning house, whereas the older brother is safely whisked away on a boat by their family friend (Rajendra Gupta). What follows throughout the movie is a series of cliched tracks centring around Shiva’s (Bellamkonda Sreenivas) life and search for his family in India. "
    },
    {
      id: 21,
      ide:10,
      cat: "Bollywood",
      for: "TopList",
      date:" 25 December, 2009 ",
      img: " https://stat5.bollywoodhungama.in/wp-content/uploads/2016/05/439543855-306x393.jpg",
      title: "3 Idiots",
      Overview:"Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
      description: " 3 IDIOTS belongs to everyone. But, yes, there's no denying that Aamir makes you forget all his past achievements as you watch the amazing actor play Rancho. To state that this ranks amongst his finest works would be an understatement. Madhavan is incredible, especially in the sequence when he explains his point of view to his father [Pareekshit Sahani]. Sharman is outstanding from start to end. This was a difficult role to portray and only an actor of calibre could've pulled it off. Boman is superb as the vicious head of the institute. The scenes between Aamir and Boman are extra-ordinary and it's a treat to watch these two powerful actors clash on the big screen, without getting overdramatic. Boman's appearance, mannerisms and dialogue delivery are exemplary.\n\nThe length of Kareena's role may not be as much as Aamir, Madhavan and Sharman, but she registers a strong impact nonetheless. Omi is excellent and the viewers are sure to love his acidic tongue and gestures in the movie. Mona Singh doesn't get much scope. Jaaved Jaffery is competent. Pareekshit Sahani is decent.\n\nOn the whole, 3 IDIOTS easily ranks amongst Aamir, Rajkumar Hirani and Vidhu Vinod Chopra's finest films. Do yourself and your family a favour: Watch 3 IDIOTS. It's emotional, it's entertaining, it's enlightening. The film has tremendous youth appeal and feel-good factor to work in a big way."
    },
    {
      id: 22,
      ide:11,
      cat: "Bollywood",
      for: "TopList", 
       date:"12 July, 2019 ",
      img: "https://stat5.bollywoodhungama.in/wp-content/uploads/2017/06/Super-30-1-306x393.jpg ",
      title: "Super 30",
      Overview:"SUPER 30 is the story of a selfless man fighting for the cause of education-for-all. The year is 1996. Anand Kumar (Hrithik Roshan) has completed his graduation and is passionate about mathematics. He’s so good in the subject that he is felicitated at the hands of the education minister (Pankaj...",
      description: "UPER 30 is the story of a selfless man fighting for the cause of education-for-all. The year is 1996. Anand Kumar (Hrithik Roshan) has completed his graduation and is passionate about mathematics. He’s so good in the subject that he is felicitated at the hands of the education minister (Pankaj Tripathi). Anand manages to solve a complex mathematical problem, which has baffled scholars all around the world. His feat lands him a seat in the prestigious Cambridge University. His father Eshwar Kumar (Virendra Saxena) is a postman who takes out his PF to fund Anand’s foreign education. When the money falls short, he and Anand knock at the doors of the education minister, who had promised him help. But the minister refuses to help. Meanwhile, Eshwar passes away one day suddenly. He was the only earning member of the family and hence, Anand sheds his ambition and begins selling papad to survive. One day, he bumps into Lallan Singh (Aditya Srivastava) who runs Excellence Coaching Centre, an institute for those giving the IIT-JEE exams. He is aware of Anand’s brilliance in mathematics since he was in the college when Anand was felicitated. He gets Anand enrolled in his coaching institute as a premium teacher. Since Anand’s teaching methods guarantee success, he becomes quite sought after. Excellence Coaching Centre management even promote themselves by using Anand’s picture on their banners. Anand’s financial condition also improves as he’s even made one of the signatories. However, he soon realizes that some brilliant students aren’t getting a fair chance to excel in life because of their underprivileged background. Overnight, Anand quits Excellence Coaching Centre. He starts his own centre, where he decides to teach 30 students for IIT entrance exams for free. Not just that, he even arranges for their accommodation and food. Lallan obviously is livid and he tries his best to persuade Anand. When nothing works, he tries to demotivate Anand, saying that all his students who fail will go back to their impoverished lives. It’s important that each and every student of Anand manages to crack the IIT exam. What happens next forms the rest of the film. "
    },
    {
      id: 23,
      ide:1,
      cat: "Food",
      for: "ArticleList", 
       date:" May 26, 2023 ",
      img: "https://c.ndtvimg.com/2023-05/5lns05l_gulab-jamun_625x300_26_May_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
      title: "Gulab Jamun With Dahi!",
      Overview:"The recent food item to join the list of bizzare food combinations is gulab jamun and dahi (curd). Read on to know how internet reacted to it.",
      description: "Weird food combinations have often left the internet disappointed. There are various recipes on the internet, which have given an out-of-the-box spin to traditional preparations. Be it biryani with mayonnaise, instant noodles with chocolate spread, strawberry pizza, or chips with dal chawal - there is no dearth instances to check out on social media. If you thought you have seen enough of these food combinations, then let us tell you, it's not done yet. We recently came across another such food combination that has taken the social media by storm. It's gulab jamun with dahi and people have already termed it as the “worst combination ever made.” "

    },
    {
      id: 24,
      ide:2,
      cat: "Food",
      for: "ArticleList", 
       date:"MAY 8, 2023 ",
       sp: "home-latest",
      img: "https://c4.wallpaperflare.com/wallpaper/1016/528/45/cuisine-food-india-indian-wallpaper-preview.jpg",
      title: "Chili Garlic Pappardelle with Smashed Broccoli and Soft Eggs",
      Overview:"Slippery, spicy, bossy noodles with a minimal-ingredient sauce, topped with a pile of roasty smashed broccoli and a perfectly messy soft egg. Yes, please.",
      description: "Oh man, these slippery, spicy noodles are a TREAT. Silky, rich, full of deep flavor and a flash of heat! \n\n I would say this recipe belongs less in the “normal family dinner” category and more in the “hangry / hardcore craving / last minute meal” category.\n\nThe big flavors end up being a bit much for my kids, so I make this for a need-it-right-now hungry mom moment that calls for something ultra-satisfying, silky, and spicy. I often end up eating it right over the stove in a moment of pure and absolute joy. \n\nAnd luckily, the components can work for everybody (buttered noodles is always a kid win, plus eggs and broccoli!), so it can be easily worked into something family-friendly or meal-prep friendly if you batch some extra broccoli and eggs to throw into other meals throughout the week. SOS at its finest. \n\n The miso just does something magical to this whole thing – if you don’t have it I think you’ll still end up just fine. But if you have it (hopefully I already convinced you to buy some with the Miso Crunch Salad!) it will elevate the flavor and add a depth that’s just really amazing for such a fast and easy recipe."
    },

    {
      id: 25,
      ide:3,
      cat: "Food",
      for: "ArticleList", 
       date:" MAY 1, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/Stephs-Chickpea-Curry-Square-960x960.png",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:"Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description: "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment." 
       
    },

    {
      id: 26,
      ide:4,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 25, 2023 ",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      title: "Join Us for Three Weeks of Meal Plans",
      Overview:"Three weeks, three meal plans, everything you need to make getting dinner on the table each night easy, doable, and delicious. Join us!",
      description: "Ahhhhh, summer. We love to love it and also how are there this many end-of-school projects and assemblies and how am I supposed to rush to one more dance class and why do I feel like I want to do anything else besides cook when it’s this nice out. "
    },

    {
      id: 27,
      ide:5,
      cat: "Food",
      sp:"home-latestArt",
      for: "ArticleList", 
       date:" APRIL 24, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/Miso-Crunch-Salad-Square-960x960.png",
      title: "Miso Crunch Salad",
   
      Overview:"Shredded cabbage and kale, shrimp, avocado, cilantro and chili-flavored peanuts, and the perfect sweet miso dressing.",
      description: "Cabbage, kale, shrimp, cilantro, peanuts, and creamy sweet miso dressing… I could eat this every day for lunch and be happy with my life. (And by could, I mean I currently am.) \n\n We were actually planning to publish this later in the SOS Series, but I could not wait to get this into your hands because I’m so obsessed with it. So here she is, making an early entrance! This salad is so perfect for these early days of spring / summer when it’s starting to warm up and the grass is turning green again and the body is just feeling aggressively ready for salads. \n\n So many of these salad ingredients are easy to buy pre-made / pre-ready to eat (I get a lot of them at Trader Joe’s):  "
    },

    {
      id: 28,
      ide:6,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 17, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Red-Chile-Tostadas-with-Eggs-Square-960x960.png",
      title: "Red Chile Tostadas with Eggs",
      Overview:"We’re making Red Chile Tostadas with Eggs! We’re talking creamy, crunchy, drippy, and tangy – the absolute perfect flavor combination.",
      description: " The combination of flavors and textures is unmatched, plus so many of these things can be made ahead or store-bought (the enchilada sauce, the refried beans, the tostada if you want). It is my perfect food combination: something creamy, something crunchy, something tangy, and something drippy and messy to really make you feel alive. \n\n I have eaten (slash, continue to eat) these for ANY meal of the day, which is another reason why I love them. They are breakfast, brunch, lunch, and dinner all in one cute, crunchy little package. \n\n I hope you love these as much as I do – and if you do, these cauliflower tostadas with queso are your next stop! "
    },

    {
      id: 29,
      ide:7,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 10, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Cilantro-Orange-Chicken-61-Square-960x960.jpg",
      title: "Cilantro Orange Chicken with Rice and Beans",
      Overview:"This golden Cilantro Orange Chicken is so flavorful, crisped to golden brown perfection, and just very finger-licking good! Served with rice, beans, and a quick homemade pineapple salsa.",
      description: "This is a brand new recipe that’s part of our Spring 2023 SOS Series – in other words, EASY recipes! View our full collection of SOS recipes here.\n\n This post contains referral links for products we love. Pinch of Yum earns a small commission on these links at no cost to you, and the links will always be marked with an asterisk. We ♡ honesty! "
    },

    {
      id: 30,
      ide:8,
      cat: "Food",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:" May 26, 2023 ",
      img: "https://c.ndtvimg.com/2023-05/993laao8_bread-lampshade_625x300_26_May_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      title: "Is It A Bread Or A Lamp?",
      Overview:"Japanese artist Yukiko Morita has turned real bread into a range of lamps and lampshades, and is now going viral for this.",
      description: "One of the staples of any cuisine, bread is something you simply can't do without. Pair it with cheese or dip it in gravies - there are so many ways of including bread in your meals. When it comes to bread, we are undoubtedly and unabashedly obsessed. However, can you imagine if bread its way to your bedside table as well? Believe it or not, this has been made possible thanks to a new creation by a Japanese artist. Yukiko Morita has turned real bread into a range of lamps and lampshades, and is now going viral for this."
    },

    {
      id: 31,
      ide:9,
      cat: "Food",
      for: "TopList", 
       date:"MARCH 27, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Coffee-Cake-1-1200x1200.jpg",
      title: "Carrot Cake Coffee Cake",
      Overview:"Carrot Cake Coffee Cake! A super easy batter loaded with shredded carrots, topped with a thick crumbly cinnamony streusel, and finished with a melty sweet honey butter.",
      description: "This recipe is a fan favorite for spring and was originally published in 2021. It is also part of this year’s Spring Bucket List! Find out more about the bucket list here.\n\n I know it might be confusing – carrot cake, which is like vegetables meets cake, but also still cake, combined with coffee cake, which is also cake but the kind you can eat for breakfast and it will still be totally appropriate and, obviously, cakey? \n\n But no need to be confused. \n\n If you like a carrot cake that tastes just slightly cinnamony and teeters perfectly between springy and dense… \n\n And you like a coffee cake that is loaded with a mega amount of streusel topping… \n\n And you like cakes that look beautiful and taste even more beautiful with a proper shmear of honey butter… \n nI HELLO! Meet your one true match. This one is for you. "
    },

    {
      id: 32,
      ide:10,
      cat: "Food",
      for: "TopList", 
       date:" MARCH 13, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/Favorite-Browned-Butter-Chocolate-Chip-Cookies-1-3-800x800.jpg",
      title: "Favorite Browned Butter Chocolate Chip Cookies",
      Overview:"Browned butter and brown sugar caramelly goodness, crispy edges, barely thick and soft centers, and melty little puddles of chocolate chips.",
      description: "Browned butter and brown sugar caramelly goodness, crispy edges, barely thick and soft centers, melty little puddles of chocolate chips and sprinkles of just enough salt to cut the sweetness and make you feel like you could probably eat 5 of them.\n\n My first favorite thing about these browned butter chocolate chip cookies is that they combine the best of both the thin-cookie and thick-cookie worlds with that satisfying little crunch around the edge AND underbaked centers that are thick enough to really sink your teeth into. Best. Of. Both. Worlds. \n\n My second favorite thing about these cookies is that they also just shine, and I mean really shine, with rich, deep, caramelly flavor thanks to a whole lot of browned butter. "
    },

    {
      id: 33,
      ide:11,
      cat: "Food",
      for: "TopList", 
       date:"MARCH 6, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/salmon-burgers-on-a-plate-800x800.jpg",
      title: "Yummy Salmon Burgers with Slaw",
      Overview:"These salmon burgers are THE YUMMIEST! and made with just five ingredients. The best for a quick + easy high protein lunch or dinner.",
      description: "These salmon burgers. They are just so extremely good. \n\n  We’re talking crispy outsides, flaky insides, and a perfect golden color, not to mention lots of nutrition, THANK YOU SALMON. \n\n They are also easy to make and require (usually) minimal, if not zero, grocery shopping, assuming you keep a decently stocked pantry. I love, love, love these crispy pan-fried little guys. \n\n And as if the salmon burgers weren’t good enough already to eat on their own (which, um, they are), I need you to make this slaw to serve your salmon burgers in/on/around. It is nothing fancy – just a shredded cabbage, yogurt, herbs, garlic, and vinegar situation, but paired with the salmon burgers? The crispy-salty-tangy combo is an ON-POINT combo. "
    },

    {
      id: 34,
      ide:1,
      cat: "Fitness",
      for: "ArticleList", 
       date:"May 25, 2023 ",
      img: "https://images.indianexpress.com/2023/05/malavika_3.jpg?resize=450,250",
      title: "Watch: Malavika Mohanan is busy ‘amping up fitness levels to the peak’ ",
      Overview:"In another Instagram post, the actor also revealed her fondness for planks, calling herself a plank baby for life.",
      description: "It would not be erroneous to say that the current crop of actors is extremely dedicated and particular about their fitness routine. It is no different for Malavika Mohanan, who is making sure to amp up her fitness levels by challenging herself and trying out new exercises.As such, Malavika shared some snippets of herself flaunting her toned abs. "
    },
    {
      id: 35,
      ide:2,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://assets.precisionnutrition.com/2023/02/motivational-interviewing-fb-768x403.jpg",
      title: "Motivational Interviewing:",
      Overview:"Motivational Interviewing: The proven coaching method that helps people change—even when they’re feeling stuck",
      description: "Coaches who use Motivational Interviewing function kind of like tour guides for someone exploring a new country.\n (In this case, that country is the Land of Fitness and Nutrition.) \n\n Like a personal tour guide, you have expertise, insider’s knowledge, and ideas on the best things to do, but you don’t have a programmed route that you’ll force clients to stick to. \n\n You might share some of your insights, but ultimately, your clients will decide where to go. \n\n  A good Motivational Interviewing coach will also be genuinely curious, respectful, and non-judgemental about a client’s preferences.\n\n(“Oh, you’d rather spend the day picnicking on the Seine instead of visiting the Eiffel Tower? I totally get that.”) \n\n You respect your client’s autonomy, and interact with them as an equal partner. \n\n You often say, “What would you like to do next? I have some ideas, but I’d love to hear what you’re thinking first.” \n\n  As a result, even when they’re in foreign territory, clients end up feeling supported, but also free. "
    },

    {
      id: 36,
      ide:3,
      cat: "Fitness",
      sp: "home-latest",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://media.istockphoto.com/id/1462659268/photo/portrait-of-man-breathing-in-nature-and-with-open-arms.webp?b=1&s=170667a&w=0&k=20&c=Ys5qMk23I56iYVrbnd940QN9kwDlUqm2HmeX8AYDMZ4=",
      title: "The Deep Health Assessment:",
      Overview:"Good health isn’t just about your cholesterol levels, body composition, and fitness level. Here’s a deeper look.",
      description: " When most people hear that question, they immediately think about their blood work or maybe a nagging problem, like back pain or heartburn or migraines. \n\n Others might focus on a fitness achievement: “Just completed my third marathon this year. Never been healthier!” \n\nMany people simply consider their weight or overall appearance: \n\n [pinches stomach] “I’m still using the same belt hole I used in my twenties, so I must be healthy, right?”"
    },
    {
      id: 37,
      ide:4,
      cat: "Fitness",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://c8.alamy.com/comp/2E1NCAA/six-characteristics-of-quality-care-2E1NCAA.jpg",
      title: "Deep Health -secret that transforms short-term fitness",
      Overview:"Losing 10 pounds. Running a half marathon. Getting six-pack abs. How do you turn short-term client goals into something meaningful, sustainable, and inspiring?",
   
      description: "superficial physical goals into substantive life gold? \n\n After working with over 100,000 clients, we believe you can get more ambitious—and be more effective and fulfilled—with an approach that goes far beyond the superficial. \n\n It’s called coaching for Deep Health.\n\n This is when all dimensions of health are in sync, instead of just the physical.\n\nIt’s not only about how your clients look or perform.\n\nIt’s also about how they think, respond, solve problems, and deal with the world around them.\n\n“Wait,” you might say. “I’m all for Deep Health, but my 4pm is here and they want to lose 20 pounds.” \n\n Coaching for Deep Health will help you get them there faster and more easily than ever before—in a way that fits their life and is sustainable. " },
    {
      id: 38,
      ide:5,
      cat: "Fitness",
      for: "ArticleList", 
      sp:"home-latestArt",
       date:"25/05/23  ",
      img: "https://media.istockphoto.com/id/500874808/photo/lose-weight-concept-with-person-on-a-scale-measuring-kilograms.webp?b=1&s=170667a&w=0&k=20&c=HE_kBCOHR24_IicaEsutI2cZvTIxo7yMTRzFFw4w7RY=",
      title: "Body Fat Calculator & Body Fat Percentage Calculator",
      Overview:"Find out your body percentage and how it affects your health.",
      description: "Want to know your body fat percentage? This free body fat calculator estimates it instantly, using three scientifically validated formulas.\n\n But that’s just for starters: Our body fat calculator does way more than spit out numbers.\n\n In addition to getting your body fat percentage estimate, you’ll also receive a FREE report that’ll help you understand what your results REALLY mean—and what you should do next to reach your health and fitness goals. "
    },
    {
      id: 39,
      ide:6,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://assets.precisionnutrition.com/2023/01/blood-sugar-chart-1200-630-1-768x403.jpg",
      title: "Use continuous glucose monitors (CGMs)",
      Overview:"Just because you can track your blood sugar levels doesn’t mean you…",
      description: "Continuous glucose monitors were developed for people with type 1 and type 2 diabetes. The devices typically attach to the upper arm via skin-piercing filaments. They’re kept in place with an adhesive that makes them look like a nicotine patch. \n\n Continuous glucose monitors help people with diabetes identify swings in blood sugar before they cause problems. For those who depend on insulin, the CGM device can help their doctor modify the dose. \n\n It was only a matter of time until people without diabetes began exploring the potential of CGMs to help them meet their goals. \n\n An endurance athlete, for example, might want to know if continuous glucose monitors could help them maintain steady fuel levels. "
    },
    {
      id: 40,
      ide:7,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Fresh Start Effect",
      Overview:"Give your clients a jumpstart on their goals, any time of the year.",
      description: "Suppose you set a New Year’s resolution to start running. \n\n In your mind, your “old self” (the one glued to the couch) expires December 31. Your new self (the one who runs!) begins January 1.\n\n Because your brain distinguishes between these two selves, it’s much easier to believe that your “new self” will succeed.\n\n That might sound silly: After all, you won’t actually magically transform the moment the ball drops on New Year’s Eve or a new calendar day dawns.\n\n  But human psychology is a funny thing, and this separation of self enables us to release ourselves from our past “failures,” and believe that a different way forward is possible.\n\n That belief is critical for behavior change.\n\n “When we believe we can get better at something, we develop self-efficacy,” says Dr. Nordin. “Self-efficacy leads to increased motivation, enabling us to tackle the challenges in front of us, which ultimately leads to behavior change.” "
     
    },
    {
      id: 41,
      ide:8,
      cat: "Fitness",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:" April 24, 2023",
      img: "https://images.indianexpress.com/2023/04/sachin-sehwag_1200_express-archives.jpg?w=640",
      title: "Virender Sehwag wishes Sachin Tendulkar",
      Overview:"Tagging Tendulkar, Sehwag wrote, Paaji, aap jiyo hazaaron saal, Saal ke din ho ek crore.",
      description: " Trust Virender Sehwag to always add a unique twist to anything and everything. And, in keeping with his charismatic spirit, the ‘Nawab of Najafgarh’ posted a video of himself doing Sirsasana (or headstand) to wish Sachin Tendulkar his 50th birthday today.Sehwag, who has teamed up with Tendulkar as an opening batsman in numerous matches, wrote for his dearest ‘paaji’, “Maidaan par jo aapne kaha, uska ulta hi kiya, toh aaj aapke iconic 50th birthday par toh aapko Shirshasana karke wish karna hi tha. (I have always done the exact opposite of whatever you have told me on the field. So I had to do this headstand to wish you on your birthday). Wish you a very happy birthday.”"
    },
    {
      id: 42,
      ide:9,
      cat: "Fitness",
      for: "TopList", 
       date:" ",
      img: "https://assets.precisionnutrition.com/2022/11/sleep-problems-fb-768x403.jpg",
      title: "Science-based solutions to the most vexing sleep",
      Overview:"if BILLIONS of people are wondering why they can’t sleep, why they keep waking up at night, what they can do to fall asleep faster, and how long they should be sleeping, your clients are wondering, too.",
      description: "Google hears about everyone’s sleep problems, at all hours of the night. \n\n And chances are, if BILLIONS of people are wondering why they can’t sleep, why they keep waking up at night, what they can do to fall asleep faster, and how long they should be sleeping, your clients are wondering, too.\n\n In this article, we’re going to cover everything you need to know about the sleep problems your clients are likely to struggle with the most, along with science-supported practices that can help.\n\n In this article, we’ll try to give you some resources to do that.  "
    },
    {
      id: 43,
      ide:10,
      cat: "Fitness",
      for: "TopList", 
       date:"25/05/23  ",
      img: "https://assets.precisionnutrition.com/2022/10/what-is-a-wellness-coach-fb-768x403.jpg",
      title: "Wellness coaching",
      Overview:"Make time for sweating, meditating, time in nature—whatever helps you feel recharged and strong.",
      description: "When you think of your health, you might consider your blood pressure, cholesterol levels, and other physical markers that your primary care doc would examine at a regular check up. You might also think of the quality of your sleep, diet, or exercise.\n\n While “wellness” includes physical health, it’s more of a holistic concept that also captures mental, emotional, and spiritual / existential well-being. ",
      
    },
    {
      id: 44,
      ide:11,
      cat: "Fitness",
      for: "TopList", 
       date:"25/05/23 ",
      img: "https://assets.precisionnutrition.com/2022/07/TWITTER-lose-weight-id1325862997-768x384.jpg",
      title: "Lose 50, 75, 100+ pounds ",
      Overview:"Use these mindset strategies to get through the grind—and finally meet your best-feeling body.",
      description: "Rather, it’s about three people who kept going—overcoming the nearly universal setbacks and challenges during major body transformations.\n\n Not only did all three eventually lose 80-plus pounds apiece, but they also changed in other ways: Dom, Stephen, and Katey have all become certified health and nutrition coaches who now help others eat, move, and live better. \n\n In this story, you’ll discover their top mindset strategies for persevering when fat loss feels impossible (or at least just very frustrating). "
    },
    {
      id: 45,
      ide:1,
      sp: "home-ban",
      cat: "Technology",
      for: "ArticleList", 
       date:"BY SCOTT STEIN ",
      img2: "https://i.gadgets360cdn.com/large/twitter_bloomberg_1681447482746.jpg?downsize=950:*",
      img: "https://i.gadgets360cdn.com/large/twitter_bloomberg_1681447482746.jpg?downsize=950:*",
      title: "Twitter Exits Voluntary EU Disinformation Code but Obligations Remain,",
      Overview:"The EU's disinformation code includes signatories like Facebook parent Meta, Google, Microsoft, and TikTok.",
      description: "Twitter has decided to leave the EU's disinformation code, a voluntary pact that groups together the major social platforms, but its obligations remain, EU Industry Commissioner Thierry Breton tweeted Saturday.Launched in 2018, the EU's code of practice on disinformation counts nearly three dozen signatories including the giants in the sector such as Meta, Google, Twitter, Microsoft and TikTok.",
    },
    {
      id: 46,
      ide:2,
      cat: "Technology",
      sp: "home-latest",
      for: "ArticleList", 
       date:"BY SCOTT STEIN ",
      img: "https://www.cnet.com/a/img/resize/dc11b6c1d23354ae419e97c505a979c2f4753693/hub/2022/10/19/6cea4c49-d6cd-4e16-96c0-e44db2a7f29a/oculus-quest-2-vr-virtual-reality-1102.jpg?auto=webp&fit=crop&height=228&width=416",
      title: "Meta Quest 3: What to Expect in 2023",
      Overview:"Meta's next headset should be a lot less expensive than Apple's, and is arriving this year. Could it have an edge?",
      description: "This has been a big year for new VR headsets: the PlayStation VR 2 and Vive XR Elite are already here, and Apple's mixed reality headset should be announced in a matter of weeks. The biggest product of all of them, however, could be the Meta Quest 3.\n\n Meta's sequel to the most popular VR headset in the world right now will be a 2023 product, and Meta's Mark Zuckerberg has already confirmed it will be priced similarly to the Quest 2. That should mean it'll be a far more affordable headset than what Apple is readying. "
    },
    {
      id: 47,
      ide:3,
      cat: "Technology",
      for: "ArticleList", 
      sp:"home-latestArt",
       date:"BY LISA ",
      img: "https://media.gettyimages.com/id/1182014860/photo/secure-network-concept.jpg?s=2048x2048&w=gi&k=20&c=0Qnso4fCj4VQJBMymNfWuyvsUcQt4sN7yKUYx3GZ7D8=",
      title: "Best VPN Deals: Get Top VPNs Starting at Less Than $2 a Month",
      Overview:"With these discounts, you can get a top VPN like ExpressVPN, Surfshark or NordVPN at a great rate.",
      description: "With cybercrime rates on the rise, it's more important than ever to protect yourself online. You should always exercise caution when opening links and visiting unvetted websites, but for true security, you'll want to use a VPN, or virtual private network. A VPN creates an encrypted connection between your devices and the internet, which allows you to browse securely and keep your sensitive data away from prying eyes. We've tested out and rounded up some of the the best VPNs available in 2023, and now we've short-listed some of the best offers you can get right now to help you sign up with a VPN service at a low price. \n\n There are many good reasons to use a virtual private network. For example, did you know your internet service provider amasses as much data as possible on your digital activity? A 2021 Federal Trade Commission report noted that the leading ISPs have gathered user data on topics as personal as race, sexual orientation and real-time location. They've combined it, cross-referenced it and shared it with third-party partners. Yikes."
    },
    {
      id: 48,
      ide:4,
      cat: "Technology",
      for: "ArticleList", 
       date:"BY LISA ",
      img: "https://www.cnet.com/a/img/resize/667b3a76dd0865b1a63a5fb2efdc3eff4bb2b04c/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&fit=crop&height=108&width=196",
      title: "The Pixel 7A Raises the Bar for the Pixel 8",
      Overview:"Commentary: The Pixel 7A proves that Google needs to do more to separate its main Pixel phone from its more budget-friendly option.",
      description: "The Pixel 8 didn't make an appearance at Google's I/O conference, but the company did launch the Pixel 7A -- its budget-minded alternative to the Pixel 7. That's a win for Pixel fans, since the 7A offers many of the same benefits as the Pixel 7 -- including a great camera and the new Tensor G2 processor -- for $100 less. \n\n  But it also makes me wonder whether Google's A-series phones are beginning to overshadow its flagship Pixels. \n\n   Now that Google has narrowed the gap between the Pixel 7 and 7A, it should think more carefully about its target audience for the Pixel 8. If the Pixel 7A is for those who want a basic Pixel experience without compromising on performance and camera quality, and the Pixel 7 Pro is for photography enthusiasts, then who's the Pixel 7 for? That's the question I'm hoping Google answers with the Pixel 8, along with some other routine improvements to software support and battery life.  \n\n  Google typically releases new Pixel phones in the fall, so we're expecting to learn more about the Pixel 8 in a few months. "
    },
    {
      id: 49,
      ide:5,
      cat: "Technology",
      for: "ArticleList", 
       date:" BY SCOTT ",
      img: "https://www.cnet.com/a/img/resize/abf6551eab5adc5cee46eb4102842de09f2d596f/hub/2023/05/17/5c9f2a28-c920-49fe-b508-98337d5033ed/spacetop-ar-laptop.jpg?auto=webp&fit=crop&height=228&width=416",
      title: "I Tried an AR Laptop. It's Way Ahead of Its Time",
      Overview:"The Spacetop is like a Chromebook for AR headsets. With Apple's hardware looming, it also feels like a reminder of how computers could change.",
      description: "A small keyboard and trackpad lies in my lap. But there's no screen. Not that you can see, anyway. To me, I have a curved wraparound workspace with dozens of windows open. I'm seeing it on a pair of AR glasses (with prescription inserts) perched on my nose. \n\n I first tried the Spacetop in Las Vegas back in January, but the company that developed it, Sightful, is finally announcing the early-access product experiment now. I've seen tons of AR and VR headsets, but very few unique peripherals designed to work together with these future goggles and glasses. Instead of gaming or social experiences, Spacetop's main pitch is to turn laptops into AR-assisted devices with endless virtual displays. \n\n If that sounds like a weird pitch, consider that I've already lived it. I've paired Meta's Quest Pro to my laptop to extend its virtual monitors around my head, and plenty of solutions like this already exist using available apps. The interfaces can be clunky, and the hardware isn't totally made to be mobile. Spacetop's keyboard base, with its own Qualcomm processor inside, acts as a spatially tracked anchor that the AR glasses can follow and track the floating displays to. The tracking can work while in motion in a car or plane, and a button on the keyboard can make the floating displays vanish for an in-room conversation with someone, toggling the virtual screens on and off.  "
    },
  
    {
      id: 50,
      ide:6,
      cat: "Technology",
      for: "ArticleList", 
       date:" BY DANIEL",
      img: "https://www.cnet.com/a/img/resize/c6941fa2c5f29c26656aae025e3c60e8658e7135/hub/2023/05/17/73ccdc7b-7256-477c-bb15-34a7482d37b9/gettyimages-1225396175.jpg?auto=webp&fit=crop&height=108&width=196",
      title: "Hearing Loss Is on the Rise. A New Wave of Tech Might Help",
      Overview:"Hearing aids are getting cheaper and more accessible.",
      description: " Between pounding jackhammers and screeching machinery, the cacophony of a construction site is unpleasant to most. Not to Christine, an 18-year-old from Alabama. After getting her first pair of hearing aids, Christine found the noises profound.\n\n 'It was surprising to stop and hear what things actually sound like to other people,' she said. 'I sat down beside a construction site just to hear the different noises. I like to listen to the machines running. My favorite is the 18-wheelers driving around the site'. \n\n  'The rumble sounds better than before.'\n\n  Christine struggled to hear out of her left ear for her whole life. In March, she was prescribed her first pair of hearing aids. In addition to dramatically improving her hearing, they also notably improved her balance. \n\n Christine is one of the 38 million Americans who have some degree of hearing loss. Hers was genetic, but many more are put at risk by exposure to loud noises. The World Health Organization estimates that over a billion young adults are at risk of hearing loss 'due to unsafe listening practices.' "
    },
    {
      id: 51,
      ide:7,
      cat: "Technology",
      for: "ArticleList", 
       date:"BY MEARA ",
      img: "https://www.cnet.com/a/img/resize/5b903e6df9dca4123983af81d6f86d5039e1ba22/hub/2023/05/18/e1f84082-50e8-47b1-8e9d-d7df6492dd56/untitled-design.png?auto=webp&fit=crop&height=228&width=416",
      title: "ChatGPT Comes to Your iPhone With OpenAI's New iOS App",
      Overview:"OpenAI says an Android app is coming 'soon.'",
      description: "OpenAI continues to develop ChatGPT -- the company began rolling out plugins for the AI chatbot last month -- but has denied it's working on GPT-5 yet following an open letter signed by Elon Musk, Steve Wozniak and others at the end of March. The letter urged labs to take at least a six-month pause in artificial intelligence development due to the 'profound risks' to society.\n\n In February, Microsoft entered the AI chatbot realm with Bing AI search, which makes use of ChatGPT, and for which Microsoft earlier this week launched widgets on Android and iOS. Rival Google followed with AI Bard in March. The waitlist to try Bard has now been removed, with the service publicly available as of this week. \n\n Chinese giant Alibaba also unveiled a ChatGPT rival, with both Chinese and English capabilities, while Tesla and Twitter CEO Elon Musk has created an artificial intelligence company called X.AI. \n\n CNET has broken down the performance of ChatGPT, Bing and Google Bard to work out which AI chatbot is the most helpful. "
    },
    {
      id: 52,
      ide:8,
      cat: "Technology",
      for: "TopList", 
       date:" BY LINDSAY ",
      img: "https://www.cnet.com/a/img/resize/8a3e82c2ee427cd4c9e6d850c7361d8be08b8fea/hub/2023/03/06/aa40eda8-8fed-429d-a9d9-96f1e9ed464c/red-coupon-1.png?auto=webp&fit=crop&height=173&width=308",
      title: "CNET's Free Shopping Extension Saves You Time and Money. Give It a Try Today",
      Overview:"No one likes to pay full price -- and that's what the CNET Shopping extension is here to help prevent.",
      description: " Spring has sprung, and the weather is warming up across most of the country. Now's a perfect time to upgrade your outdoor gear with a new grill, maybe some patio furniture. Or maybe you just want to stay inside and splurge for a new TV. Regardless of what you're looking for, the one thing you need to be worried about is the price, and ensuring you find the best one available -- and that's where CNET Shopping comes in.\n\n  This free-to-use browser extension (which was previously known as PriceBlink) works in the background and helps find you the best price as you browse products of interest -- whether it be a coupon code or a discount at another retailer."
    },
    {
      id: 53,
      ide:9,
      cat: "Technology",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:" 27 May 2023 ",
      img: "https://i.gadgets360cdn.com/large/bgmi_krafton_facebook_1640840843181.jpg?downsize=950:*",
      title: "BGMI Available to Download via Google Play Store, Will Be Playable Starting May 29:",
      Overview:"iOS users will have to wait until May 29 to download Battlegrounds Mobile India.",
      description: "BGMI — or Battlegrounds Mobile India — is now available to download via the Google Play store in India. The game, which was banned by the government of India last year, can be preloaded on Android smartphones before it is re-launched in India next week. Developer Krafton has confirmed that the game will be playable in India starting on May 29. The popular battle royale game has been granted a three-month trial approval in India, MoS IT Rajeev Chandrasekhar said earlier this month.Krafton announced on Saturday that Battlegrounds Mobile India was available to preload via the Google Play store. While the game can be download — or updated, if it was previously installed — it won't playable until May 29, when the game is re--launched. Meanwhile, iOS users do not currently have the option to preload the game on their smartphones. Gadgets 360 was able to confirm that the game was available to download via the Play Store. "
    },
    {
      id: 54,
      ide:10,
      cat: "Technology",
      for: "TopList", 
       date:" BY JAMES ",
      img: "https://www.cnet.com/a/img/resize/7042b185e1526331c69c00332cd47d6aa456356a/hub/2023/05/11/65526df6-f863-45fa-95a0-4d05465a799e/google-io-2023-051023-66.jpg?auto=webp&fit=crop&height=362&width=644",
      title: "Google's AI Search Could Mean Radical Changes for Your Internet Experience",
      Overview:"At Google I/O, the company unveiled an experimental version of Search that integrates AI-generated responses. Will it break the balance of the internet?.",
      description: "The future of Google Search is a big green box. \n\n That's exactly what Google showed off this month at Google I/O, the company's yearly developer conference. The theme for 2023 was AI, a term mentioned more than 140 times during the two-hour keynote presentation. Google unveiled AI products that will actually be released to the public, an about-face for the apprehensive internet giant in response to growing competition. \n\n  Late last year, OpenAI launched ChatGPT to near-universal adulation. Suddenly, everybody had access to a generative AI engine that could seemingly answer any question with a novel response. It's powered by a large language model, or LLM, that essentially lets it act as 'autocomplete on steroids,' using massive amounts of text data to figure out what the next best word should be.  \n\n  The power and ease of ChatGPT helped it become the fastest growing consumer web platform ever. It prompted Microsoft to up its investment into OpenAI and integrate ChatGPT's tech directly into Bing search earlier this year, a move that helped the company see a 16% increase in traffic. The day before Microsoft unveiled Bing AI, Google announced its own generative AI engine, Bard, although it flubbed the launch and lost $100 billion in stock market value in the process. The stock has since rebounded to its highest level so far this year. \n\n  In many ways, Google I/O was a referendum on the company's wonky entrance into consumer AI and a clear message to skeptics (and investors) that it's willing to take radical steps to stay at the forefront of internet search, even if that means upending its core product. Google Search has long been the engine for how we all look for product information, find the latest news and otherwise interact with the internet, and for how many businesses make money. "
    },
    {
      id: 55,
      ide:11,
      cat: "Technology",
      for: "TopList", 
       date:"BY SCOTT ",
      img: "https://www.cnet.com/a/img/resize/08bdf2e50a92a72d0c091f914b295afb3e91809d/hub/2022/06/07/ef7b8ffd-9c0a-4afa-afef-2cea54ba4ace/apple-security-privacy-blue.jpg?auto=webp&fit=crop&height=362&width=644",
      title: "Download iOS 16.5 Right Now",
      Overview:"The update fixes a few security issues that might be actively exploited.",
      description: "The latest iPhone update patches almost 40 issues and bugs, Apple said in its patch notes, including three security issues that might be actively exploited. These three security issues relate to WebKit, the internet browser engine used in Safari and developed by Apple. \n\n One of these issues could disclose sensitive information to a third party, and another could allow a third party to execute commands on your device without your knowledge. Fixes for these issues are in 16.5 for anyone who missed the release of the first iPhone Rapid Security Response, iOS 16.4.1 (a). The third issue could allow a third party access to more information across your device than is allowed.\n\n The iOS update also patches an issue where someone could access your contacts from your lock screen. While Apple has provided ways to customize your lock screen, some people have run into issues where the lock screen can allow others to access some iPhone features, like replying to messages and even your Wallet."
    },



  ]);

  return (
    <AppData.Provider value={[data, setdata]}>
      {props.children}
    </AppData.Provider>
  );
}

export default Store;