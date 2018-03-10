const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const chalk = require('chalk');
const prefix = "b!"
const client = new Discord.Client()
//const TOKEN = "MzEwODM1MjIwNjYyMzIxMTUy.DYU7gw.Kd3e765h6dNH9sSjolTFjsdqnUY"
const TOKEN = "MzEwODM1MjIwNjYyMzIxMTUy.DYU7gw.Kd3e765h6dNH9sSjolTFjsdqnUY"


bot.on("guildMemberAdd", member => {
	let guild = member.guild
	guild.defaultChannel.sendMessage("**Bine ai venit, ce mai faci?\** " + member.user);
});


const meme = [
  'http://socialweb.ro/wp-content/uploads/2015/11/12039532_954098484644760_4217613661321119967_n.jpg',
  'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13534318_260010554369600_1044485682_n.jpg?ig_cache_key=MTI4NjM0NzAzOTgyMjk5MDEyNA%3D%3D.2.jpg',
  'http://scontent.cdninstagram.com/t51.2885-15/e35/13267302_1703975136524928_1399889669_n.jpg?ig_cache_key=MTI2MzkxNDU0ODQ0NTk0Mjg0Nw%3D%3D.2.jpg',
  'https://d.wattpad.com/story_parts/97/images/142c7811bb7e37f4.jpg',
  'https://akphoto1.ask.fm/570/988/514/-149996982-1tkq9pf-1b8ja55kcg5640p/original/file.jpg',
  'https://d.wattpad.com/story_parts/42/images/141dc33989de921f.jpg',
  'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c105.0.489.489/13714251_142491769524579_2103009492_n.jpg?ig_cache_key=MTMxNjQ4NTA4ODQ1NjIwMzE5OQ%3D%3D.2.c.jpg',
  'http://i66.tinypic.com/2k1wxz.png',
  'https://d.wattpad.com/story_parts/52/images/1421284e438775b6.jpg',
  'http://greatnews.ro/wp-content/uploads/2016/06/cele-mai-bune-glume-despre-esecul-romaniei-euro-2016-junimea.jpg',
  "http://imgur.com/zW5OIdy.jpg",
  "http://imgur.com/p9BUG4y.jpg",
  "http://imgur.com/a/vMgoD",
  "https://www.paginademedia.ro/wp-content/uploads/2016/11/14971247_1156608111061752_1515254085_n_tb1000.jpg",
  "http://imagini3.bestmusic.ro/image/1/640/0/60271561/Mihai-Traistariu-meme.jpg",
  "https://img.memesuper.com/cefaca03cf0d2ed2e498e6df78b63dea_memeuri-tata-ies-in-oras-meme-uri_415-450.jpeg",
  "https://streetland.files.wordpress.com/2013/01/10473_297621947004065_508382777_n.jpg?w=665",
  "https://img.memesuper.com/057af8f528c552524a4576973eddd1e2_poze-haioase-din-viata-reala-peteavaro-poze-cu-meme-uri-amuzante_509-500.jpeg",
  "https://img.memesuper.com/30eaf2614ce16a1689febe38e88192ac_poze-haioase-din-viata-reala-peteavaro-poze-cu-meme-uri-amuzante_668-462.png",
  "http://doardebine.ro/_ph/2/2/666772549.jpg?1495028178",
  "http://doardebine.ro/_ph/2/280177830.jpg?1495028328",
  "http://doardebine.ro/_ph/2/2/923461578.jpg?1495028429",
  "http://doardebine.ro/_ph/2/2/285640907.jpg?1495028525",
  "http://doardebine.ro/_ph/2/2/323122632.jpg?1495028622",
  "http://doardebine.ro/_ph/2/325308077.jpg?1495028717",
  "http://doardebine.ro/_ph/2/931669397.jpg?1495028833",
  "http://doardebine.ro/_ph/2/2/127629804.jpg?1495028907",
  "http://doardebine.ro/_ph/2/504346981.jpg?1495028994",
  "http://doardebine.ro/_ph/2/2/517313219.jpg?1495029177",
  "https://scontent.fotp3-1.fna.fbcdn.net/v/t1.0-9/10710800_376533445834267_4379016893637326690_n.jpg?oh=5dab4f35c6ac307e366c475147d314ca&oe=5975B9B6",
  'http://3.bp.blogspot.com/-rsK4SozX2lk/T9jhbSg2MuI/AAAAAAAAK4o/vAdXxc1h79Y/s640/022_525788_342201245850458_199542363_n.jpg',
  'https://s-media-cache-ak0.pinimg.com/236x/a1/04/1a/a1041a2f20bc6bacd514ec7ae059b868.jpg',
  'http://comics.femina.ro/images/stories/somnifer.jpg',
  'http://www.super-bancuri.ro/images/upload/avatare/avatar-19870-1391779429.jpg',
  'http://banculmeu.ro/_pu/2/64748486.jpg',
  'http://ragete.com/wp-content/uploads/2012/11/ragecomic50.png',
  'http://4.bp.blogspot.com/-XHVOxgntDEo/UAGDQ2uWALI/AAAAAAAAAFA/uJ0Cb-G77XM/s1600/bula.jpg',
];


bot.on("ready", () => {
  console.log('Acest bot a fost creat si configurat de catre Zumbiro#2305\nTe rugam sa pastrezi drepturile de author');
  console.log(chalk.bgBlue.black('M-am logat ca si ' + bot.user.username));
  console.log(chalk.bgBlue.black('Pentru a primi lista de comenzi scrie b!help'));
	bot.user.setStatus("dnd");
})

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  var argresult = args.join(" ")

  if (command === "help"){
        message.edit('**[SelfBot]** ``Verifica consola !``')
        console.log('Comenzile tale :\n[b!]help\n[b!]info\n[b!]serverinfo\n[b!]meme\n[b!]perm\n[b!]roll\n[b!]say\n[b!]ban\n[b!]kick\n[b!]mute')
};


   if (command === "say"){
    if (message.author.id !== "305799388297691146") return;
       message.delete()
       const embed = new Discord.RichEmbed()
       .setDescription(args.join(" "))
       .setColor(0xFF0F00)
       message.channel.sendEmbed(embed);
       console.log(bot.user.username + ': b!say ' + args.join(" "))
       console.log('Mesaj trimis cu succes !');
   }

   //if (message.author.id !== "305799388297691146") return;

      if (command === "dev"){
    if (message.author.id !== "305799388297691146") return;
       const embed = new Discord.RichEmbed()
       .setDescription(args.join(" "))
       .setColor(0xFF0F00)
       message.channel.sendEmbed(embed);
       console.log(bot.user.username + ': b!say ' + args.join(" "))
       console.log('Mesaj trimis cu succes !');
   }

   if (command === "serverinfo"){
       const embed = new Discord.RichEmbed()
       .addField('>>Channels<<', message.guild.channels.size, true)
       .addField('>>Membrii<<', message.guild.memberCount, true)
       .setColor(0xFF0F00)
       .setThumbnail(message.guild.iconURL)
       .addField('>>Channels Overall<<', bot.channels.size, true)
       .addField('>>Guilds Overall<<', bot.guilds.size, true)
       .setAuthor(message.guild.name, message.guild.iconURL)
       .addField('>>Owner<<', message.guild.owner, true)
       .addField('>>Regiune<<', message.guild.region, true)
       .setTimestamp()
       .addField('>>Server Icon<<', '[click aici](' + message.guild.iconURL + ')', true)
       .addField('>>Securitate<<', message.guild.verificationLevel, true)
       .addField('>>Emoji<<', '``' + message.guild.emojis.map(r => r.name).join(', ') + '``')
       .addField('>>Roles<<', '``' + message.guild.roles.map(r => r.name).join(', ') + '``')
       message.channel.sendEmbed(embed);
       console.log(bot.user.username + ': b!serverinfo')
       console.log('Mesaj trimis cu succes !');
   }

   //if(message.content.startsWith(' 1') {
//stuff
//}

if (command === "help"){
	 const embed = new Discord.RichEmbed()
	 .setAuthor('đź¤– BABoom-Bot đź¤–', '')
	 .setDescription('Salut eu sunt un BoomBot !\nAm fost creat de catre : BABoom#7330 \nAm fost facut special pentru : BABoom\nMai jos vezi comenzile valabile')
	 .addField('Default :information_source:', '[b!]serverinfo\n[b!]perm\n[b!]server\n[b!]invite\n[b!]steam\n[b!]YouTube\n[b!]announce\n[b!]icons\n[b!]owner\n[b!]support\n[b!]userinfo', true)
	 .addField('Admin :hammer:', '[b!]help\n[b!]say\n[b!]ban\n[b!]kick\n[b!]mute\n', true)
 .addField('Fun :rofl:', '[b!]dick\n[b!]roll\n[b!]meme\n[b!]afk\n[b!]love\n[b!]slap\n[b!]xd\n[b!]search', true)
	 .setFooter('BABoom : Multumesc ca ai ales servicile mele, sper sa iti placa !')
 .setTimestamp()
	 .setColor(0x8C39E6)
	 message.author.sendEmbed(embed);
 console.log(message.author.username +  args.join(" ") +'  Mesaj trimis cu succes !');
		}

  if (command === "meme"){
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0F00)
    .setImage(meme[Math.floor(Math.random() * meme.length)])
    message.channel.sendEmbed(embed);
     }

     if (command === "roll") {
    var roll1 = Math.floor(Math.random() * 6) +1;
    var roll2 = Math.floor(Math.random() * 6) +1;
    var roll3 = Math.floor(Math.random() * 6) +1;
    var roll4 = Math.floor(Math.random() * 6) +1;
    if (message.mentions.users.size < 1) return message.reply('**[SelfBot]** ``Trebuie sa mentionezi pe cineva..``').catch(console.error);
    const embed = new Discord.RichEmbed()
  .setAuthor('Dai cu zarurile', 'https://i0.wp.com/txcss.net/wp-content/uploads/2015/05/2000px-Two_red_dice_01.svg_.png')
  .setDescription('**You**\n:game_die: ' + roll1 + ' :game_die: ' + roll2 + '\n\n    웃 √丂 웃\n\n**' + args.join(" ") +'**\n:game_die: ' + roll3 + ' :game_die: ' + roll4)
  .setColor(0xFF0F00)
  .setTimestamp();
   return message.channel.sendEmbed(embed);
   console.log('Cineva a dat cu zarurile !')
     }

     if (command === "kick"){
  if (message.author.id !== "305799388297691146") return;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Trebuie sa pui si un motiv.');
  if (message.mentions.users.size < 1) return message.reply('Trebuie sa mentionezi pe cineva..').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Nu pot sa ii dau kick acestei persoane !');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0xFF0F00)
    .setTimestamp()
    .addField('Action:', 'kick')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return message.channel.sendEmbed(embed);
};

 if (command === "ban"){
   if (message.author.id !== "305799388297691146") return;
   let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Trebuie sa mentionezi pe cineva.');
  if (message.mentions.users.size < 1) return message.reply('Tu trebuie sa mentionezi pe cineva.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('Nu pot da ban acestui membru');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0xFF0F00)
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return message.channel.sendEmbed(embed);
     }

 if (command === "mute"){
   if (message.author.id !== "305799388297691146") return;
   let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply('Nu pot gasi un role numit ``Muted``').catch(console.error);
  if (reason.length < 1) return message.reply('Trebui sa pui si un motiv.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Trebuie sa mentionezi o persoana.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0xFF0F00)
    .setTimestamp()
    .addField('Action:', 'Mute')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Nu ai permisiunea la aceasta comanda.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      message.channel.sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }
     }

 if (command === "warn"){
   if (message.author.id !== "305799388297691146") return;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Trebuie sa pui si un motiv.');
  if (message.mentions.users.size < 1) return message.reply('Trebuie sa mentionezi o persoana.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0F00)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  return message.channel.sendEmbed(embed);
     }

   if (command === "steam"){
if (message.author.id !== "254217798534955008") return;
    const embed = new Discord.RichEmbed()
    .setAuthor('BABoom')
    .setDescription('Asi vrea sa iti prezint profilul meu de steam.')
    .addField('BABoom', 'Aici este profilul meu http://steamcommunity.com/id/BABoomq', true)
    .setFooter('BABoom : Sper ca iti place profilul meu =] !')
    .setTimestamp()
    .setColor(0xFF0F00)
     }

      if (command === "youtube"){
if (message.author.id !== "254217798534955008") return;
    const embed = new Discord.RichEmbed()
    .setAuthor('BABoom')
    .setDescription('Asi vrea sa iti prezint contul meu de YouTube.')
    .addField('BABoom', 'Aici este https://m.youtube.com/channel/UC7ou-MrBJol5--OOYY4AwcQ', true)
    .setFooter('BABoom : Sper ca iti place canalul meu =] !')
    .setTimestamp()
    .setColor(0xFF0F00)
    message.channel.sendEmbed(embed);
     }

 if (command === "perm"){
         message.channel.sendMessage('*\*Permisiunile tale sunt:\*\*`\`\`http\n' +
        JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4)+'\n`\`\`');
				message.author.send('Permisiunile tale au fost trimise cu succes!')
     }

		 if (command === "userinfo"){
		     const embed = new Discord.RichEmbed()
		 		.setImage(message.author.displayAvatarURL)
		 	    .addField('```Nume ```', message.author.username, true)
		 		.addField('```ID ```', message.author.id, true)
		 		.addField('```Avatar ```')
		 		.setTimestamp()
		     .setColor(0xFF0F00)
		     message.channel.sendEmbed(embed);
		 }

		 if (command === "invite"){
		  const embed = new Discord.RichEmbed()
		  .setAuthor('BABoom-bot')
		  .setDescription('Asi vrea sa iti prezint invite-ul meu.')
		  .addField('BABoom-bot', 'https://discordapp.com/oauth2/authorize?client_id=310835220662321152&scope=bot&permissions=66186303', true)
		  .setFooter('BABoom : Sper ca o sa te distrezi cu mn	!')
		  .setTimestamp()
		  .setColor(0xFF0F00)
		  message.channel.sendEmbed(embed);
		 }

		 const dick = [ "8==================D",
 	"8=======================D",
 	"8==============D",
 	"8========================D",
 	"8===================================D",
 	"8==================================================D",
 	"8=========D",
 	];

      if (command === "dick"){
     const embed = new Discord.RichEmbed()
 	.setTitle (' Dickul tau !!')
     .addField(dick[Math.floor(Math.random() * dick.length)])
     .setTimestamp()
     .setColor(0xFF0F00)
     message.channel.sendEmbed(embed)
 	}

	if (command === "afk"){
	const embed = new Discord.RichEmbed()
    .addField('**Tia-i setat afk-ul !!!!**',true)
	.setTimestamp()
    .setColor(0xFF0F00)
    message.channel.sendEmbed(embed)
}

if (command === "announce"){
		message.delete()
		const embed = new Discord.RichEmbed()
		.setDescription(args.join(" "))
		.setColor(0xFF0F00)
		message.channel.sendEmbed(embed);
		console.log(bot.user.username + ': b!say ' + args.join(" "))
		console.log('Mesaj trimis cu succes !');
}

if (command === "love") {
	if (message.mentions.users.size < 1) return message.reply('**[BABoom-Bot]** ``Trebuie sa mentionezi pe cineva..``').catch(console.error);
	 const embed = new Discord.RichEmbed()
		.setDescription( message.author.username + ' Love :heart:' + args.join(" ") + ':wave:' )
			.setColor(0xFF0F00)
		.setTimestamp();
		 return message.channel.sendEmbed(embed);
	 console.log(':two_hearts: :two_hearts: :two_hearts: :two_hearts: :two_hearts: :two_hearts: ')
	 }

	 if (command === "slap"){
		 if (message.mentions.users.size < 1) return message.reply('**[BABoom-Bot]** ``Trebuie sa mentionezi pe cineva..``').catch(console.error);
	const embed = new Discord.RichEmbed()
	.setTitle(message.author.username +  ' Slapped :wave:')
	.setImage ('https://images-ext-1.discordapp.net/external/06veC--pH7dQbfuVIcoVAuLw6DH_cwZa_3h23fqx8cg/http/i.imgur.com/dzefPFL.gif')
	.setTimestamp()
    .setColor(0xFF0F00)
    message.channel.sendEmbed(embed)
	}

	if (command === "xd"){
	 const embed = new Discord.RichEmbed()
	 .setTitle(message.author.username)
	 .setImage('https://images-ext-1.discordapp.net/external/x6bfnbNZ8hewcxSUPoTSalpx1nGEr8PX8ZOTMldiXMM/http/i1.kym-cdn.com/entries/icons/original/000/017/436/XD_Face.png?width=250&height=250', true)
	 .setTimestamp()
	 .setColor(0xFF0F00)
	 message.channel.sendEmbed(embed);
 }

 if (command === "icons"){
 		const embed = new Discord.RichEmbed()
 	.setTitle(message.author.username)
 		.setImage(message.guild.iconURL, true)
 		.setTimestamp()
 		.setColor(0xFF0F00)
 		message.channel.sendEmbed(embed);
 	}

	if (command === "owner"){
		const embed = new Discord.RichEmbed()
	.setTitle(message.author.username + ' Ownerul este ', true)
		.addField('```Mention ```', message.guild.owner, true)
		.setTimestamp()
		.setColor(0xFF0F00)
		message.channel.sendEmbed(embed);
	}

	if (command === "support"){
		const embed = new Discord.RichEmbed()
	.setTitle('Ownerul meu este BABoom#7330', true)
		.setDescription('Serverul  meu de suport este https://discord.gg/kqA3TJ9 ', true)
		.setTimestamp()
		.setColor(0xFF0F00)
		message.author.sendEmbed(embed);
	console.log(message.author.username +  args.join(" ") +'  Mesaj trimis cu succes !');
	}

	if (command === "search"){
		const embed = new Discord.RichEmbed()
	.setTitle( ' Rezultate--->>>>', true)
		.addField('https://www.google.ro/'+ args.join(" "))
		.setTimestamp()
		.setColor(0xFF0F00)
		message.channel.sendEmbed(embed);
	}

	if (command === "listemoji"){
		const embed = new Discord.RichEmbed()
	.setTitle( ' Rezultate--->>>>', true)
		.setImage('https://cdn.discordapp.com/emojis/305818615712579584.png')
		.setTimestamp()
		.setColor(0xFF0F00)
		message.channel.sendEmbed(embed);
}


});

bot.login(TOKEN);
