//Intro
var readlineSync = require('readline-sync');
const chalk=require('chalk');

console.log(chalk.yellow("Welcome to Deep's quiz on Game Of Thrones ! Let's see if you know more than Jon Snow or not ;) "));

var userName=readlineSync.question(chalk.green('May I know your name please? '));

var message="Hi "+userName+" , let's take a quick look at the leaderboard :";

console.log(chalk.yellow(message));


//leaderboard with some random users

const leaderboard=[
  {
    playerName:'Deep',
    score:9
  },
  {
    playerName:'Virat',
    score:8
  },
  {
    
    playerName:'Rashmi',
    score:7
  },
  {
    
    playerName:'Shagun',
    score:7
  }
]

//List of Questions and answers

var quizList=[
  {
    question:"Who was responsible for the creation of the Night King? \n a.The Lord Of Light b.The Children of the forest c.The First men d.The Drowned God",
    answer:"b"
  },
  {
    question:"In the TV show, what was Hodor called before he got his tragic door-holding nickname? \n a.Wylis b.Myrys c.Horys d.Gladys",
    answer:"a"
  },
  {
    question:"Dany’s dragons are (or were) called Drogon, Viserion and ____? \n a.Balerion b.Varys c.Lady d.Rhaegal",
    answer:"d"
  },
  {
    question:"What is the name of the giant dragon-slaying crossbow that failed to protect King’s Landing? \n a.Millepede b.Mantis c.Scorpion d.Dragon Killer",
    answer:"c"
  },
  {
    question:"Where is the House of Black and White, the training temple of the Faceless Men? \n a.Braavos b.Qarth c.Mereen d.No One Knows",
    answer:"a"
  },
  {
    question:"Which relative did Euron Greyjoy murder to take the Salt Throne of the Iron Islands? \n a.His uncle b.His Cousin c.His Brother d.His Nephew",
    answer:"c"
  },
  {
    question:"What is the name of Arya’s sword? \n a.Ice b.Pointy c.Fang d.Needle",
    answer:"d"
  },
  {
    question:"Who had the honour of killing Petyr Baelish? \n a.Arya b.Sansa c.Red Woman d.Lady Arryn",
    answer:"a"
  },
    {
    question:"Who was Ned Stark’s predecessor as Robert Baratheon’s Hand? \n a.Tywin Lannister b.Jon Arryn c.Jorah Mormont d.Jaime Lannister",
    answer:"b"
  },
   {
    question:"What is the go-to anaesthetic for maesters across Westeros called? \n a.Shade of the evening b.Milk of happiness c.Milk of poppy d.Sourleaf",
    answer:"c"
  },
]

//Displaying LeaderBoard

function showLeaderboard(leaderboard)
{
  console.log('Top Scorers are:');
  for(let i=0;i<leaderboard.length;i++)
  {
    if(leaderboard[i].score>6)
    {
    console.log(chalk.green(leaderboard[i].playerName +" "+leaderboard[i].score));
    }
  }
}




showLeaderboard(leaderboard); //function call to display leaderboard
var score=0;
var response=readlineSync.question(chalk.yellow(userName+",Are you ready to take the quiz?"))
var expected="yes";
if(response.toUpperCase()===expected.toUpperCase())
{
  console.log("\n");
  var latestScore=gameplay(quizList);
  if(latestScore>6)
  {
    console.log(chalk.green.bold("Congrats "+userName+" ! You are throne ready . \n"))
    leaderboard.push({playerName:userName,score:latestScore});
    leaderboard.sort((a,b)=>a.score-b.score);
    leaderboard.reverse();
    
  }
  else
  {
    console.log(chalk.red.bold("You know nothing "+userName+", you couldn't make it to the leaderboard! JK, Try your luck again ."));
    console.log("\n");
   
  }

  showLeaderboard(leaderboard);
  
}
else
{
  console.log(chalk.blue.bold("Thanks For Visiting !"));
}




//gameplay function

function gameplay(quizList)
{
  for(let i=0;i<quizList.length;i++)
  {
    var userAnswer=readlineSync.question(chalk.cyanBright((i+1)+"."+quizList[i].question+"\n"));

    if(userAnswer.toUpperCase()===quizList[i].answer.toUpperCase())
    {
      score=score+1;
      console.log(chalk.green('Correct Answer ! Your Current Score : '+score));
      console.log(chalk.black.bgWhite("_____________________________________________________\n"));
    }
    else
    {
      console.log(chalk.red('Incorrect Answer ! Correct Answer is : '+quizList[i].answer+'\n'));
      console.log(chalk.green("Your Current Score : "+score));
      console.log(chalk.black.bgWhite("_____________________________________________________\n"));
    }
  }
  console.log(chalk.green("Your Final Score is :"+score));
  return score;
}
