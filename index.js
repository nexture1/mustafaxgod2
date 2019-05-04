// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
 
});

const idclient = "459017979103936523" // CLIENT MUST PUT
const name = "Builderman"




client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "admin-ping") {
    if (message.author.id !== 459017979103936523) return;
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  //TESTING






//TESTING OVER
  
  if(command === "admin-say") {
    if (message.author.id !== 459017979103936523) return;
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  //stream lol
if(command === "setgame") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    if (message.author.id !== idclient) return;
        client.user.setGame(sayMessage, 'https://www.twitch.tv/');

   
        
    
    // And we get the bot to say the thing: 
   
  }
//stream
  if(command === "setstream") {
    

    
 
        if (message.author.id !== idclient) return;
        const sayMessage2 = args.join(" ");
        client.user.setActivity(sayMessage2, { type: "STREAMING", url: "https://www.twitch.tv/builderman" })
    
    
        
    
  
       
      
}

//cmds

if(command === "cmds") {
    


    if (message.author.id !== idclient) return;
    message.channel.send({embed: {
        color: 7990068,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "BuildermanX",
      
        description: "**Beta testing access** Command list;",
        fields: [{
            name: "/setstream",
            value: "Sets your stream status"
          },
          {
            name: "/setgame",
            value: "Sets your game status!"
          },
          {
            name: "/gay",
            value: "Shows the gay percentage of you!"
          },
          {
            name: "/embed (text)",
            value: "Shows an embed of the text."
          },
          {
            name: "/embedfooter (text)",
            value: "Shows an embed of the text with a footer."
          },
          {
            name: "/uptime",
            value: "Shows the uptime"
          },
          {
            name: "/rolldice",
            value: "Rolls dice!"
          },
          
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "BuilderX"
        }
      }
    });
    


}




  if(command === "embed") {
    if (message.author.id !== idclient) return;
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessag = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send({embed: {
      color: 7990068,
      description: (sayMessag)
    }
  });
  }

  //
  if(command === "embedfooter") {
    if (message.author.id !== idclient) return;
    const sayMessag5 = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
  message.channel.send({embed: {
    color: 7990068,
  
  
    
    fields: [{
        name: name,
        value: sayMessag5,
      },
     
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: name,
    }
  }
});



}

    
 
  // badge
  if(command === "badge") {
    if (message.author.id !== '459017979103936523') return;
    const sayMessag5 = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    message.channel.sendMessage({
      "embed": {
               color: 7990068,
              title: 'Founder of BuilderX',
              
              "image": {
              "url": "https://cdn.discordapp.com/attachments/565344882126880788/574289503959777311/Untitled.png",
              }
          }
      });



}
  //


  
  
});

//gay

client.on('message', function(message){
    if(message.content == '/gay')
  {
    if (message.author.id !== idclient) return;
    
    
    message.channel.send({embed: {
      color: 7990068, // GREEN COLOR
      title: 'Gay percantage',
      description: "You are " + Math.floor(Math.random() * 100 + 1) + '% gay :thumbsup:',
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Made by Builderman#7180"
      
      }
    }}); 
  
    
  
    
     
  
    
    
    
  
  }
  
  
  });
  

//gay end



client.on('message', function(message){
  if(message.content == '/uptime')
{
  if (message.author.id !== idclient) return;
  function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const days = Math.floor((ms / (1000 * 60 * 50 * 24)) % 60).toString()
    return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
  }
  message.channel.send({embed: {
    color: 7990068,
  
  
    
    fields: [{
        name: name,
        value: `Running for: ${duration(client.uptime)}`
      },
     
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: name,
    }
  }
});
  
  
  

}

});

//end

//roldice
client.on('message', function(message){
  if(message.content == '/rolldice')
{
  
  if (message.author.id !== idclient) return;
  message.channel.send({embed: {
    color: 7990068, // GREEN COLOR
    title: 'Dice Roll',
    description: "You have rolled " + Math.floor(Math.random() * 6 + 1) + ' **hooray!**',
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: name
      
    
    }
    
  }}); 
}
});
//end

//yeet

//yeet end



client.login(config.token);