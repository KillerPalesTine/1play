const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`KillerPalesTine`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ArabGames ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`%help || ArabGames`,"http://twitch.tv/Death Shop")
client.user.setStatus("online")
});


 
const adminprefix = "*";//Narox
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//لتغير البريفكس
  client.user.setPrefix(argresult).then
      message.channel.send(`**Prefix Changed :white_check_mark: ${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     //Narox
    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {// لعمل ريسترت للبوت
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
 
  });


giftKeys = {};
let devs = ["518816831734022154","482922319120039937"]; // تقدر تضيف ايدي ثالث نفس الفكره تسوي كذا let devs = ["ايديك","ايدي خويك او إي ادمن","ايدي خويك الثالث"];
client.on("message", msg =>{
  let args = msg.content.split(" ").slice(1)[0];
  let cmd = msg.content.split(' ')[0]
  if(cmd === `${prefix}giftR`){
  let roleW = msg.mentions.roles.first();
  if(!devs.includes(msg.author.id)){
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - انت لاتمتلك الصلاحية`);
    msg.reply(embed).then( z => z.delete(3000));
     return
  }
  if(!roleW) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - منشن الرتبة \`${prefix}giftR <@admin-role>\``);
    msg.reply(embed).then( z => z.delete(3000)); return
  };
  let role = msg.guild.roles.find(`name`, roleW.name);
  if(!role) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
  msg.reply(embed).then( msgs => msgs.delete(3000));
  return
  }
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  giftKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",giftKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
};
if( cmd === `${prefix}used`){
 
  if(!args) {  
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(giftKeys[args]){
    let hav = msg.member.roles.find(`name`, giftKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(giftKeys[args]);
    delete giftKeys[args]
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
};
});


client.on('message', DemonMsg => {
    if (DemonMsg.content.toLowerCase() === "ابو نوره") {
      var demon = [
        "ابو نوره المزعج",// هنا الرسائل حطها طبعا لو تزيد اكثر من مليار مراح تزعج زي ابو نوره
        "تبا لك يا ابو نوره",
        "ابو نوره الحقير",
        "فاليسقط ابو نوره" 
    ];//لا تغير شي انت تدري ليه :)
        function senddemon(demon, delay) {
        if (demon.length < 1) return; 
        var remain = demon.slice(1);
        var sendRemain = senddemon.bind(null, remain, delay);
        DemonMsg.channel.send(demon[1]).then(function() {
            setTimeout(sendRemain, delay);
        });
    }

    senddemon(demon, 360*1000);
    }
  });


client.on('message', async message => {//alpha codes & Mrx -Dev
        if (message.content.startsWith(prefix + 'role')) {//alpha codes & Mrx -Dev
          var args = message.content.split(' ').slice(2);
          let member = message.mentions.members.first();
          let role = message.guild.roles.find(r => r.name == args);
          if(!role) return message.channel.send(':no_entry: | I couldnmt find the role!');
          if(role.name === '@everyone') return message.channel.send(':no_entry: | I couldn,t find the role!');
            if (!args) message.reply(`Type Name Role`)
            if (!member) message.reply(`mention someone !`)
            if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**You Do not have permission** `MANAGE_ROLES`' );
            await message.channel.sendMessage(`**🎁To Give Role
    :x: To Cancel the process **`).then(e => {//alpha codes & Mrx -Dev
                e.react("🎁")//alpha codes & Mrx -Dev
                .then(()=> e.react("❌"))//alpha codes & Mrx -Dev
                .then(()=> e.react("🎁")).then(() => c.delete(12000))//alpha codes & Mrx -Dev
                let reaction1Filter = (reaction, user) => reaction.emoji.name === '🎁' && user.id === message.author.id;//alpha codes & Mrx -Dev
                let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//alpha codes & Mrx -Dev
                let reaction1 = e.createReactionCollector(reaction1Filter, { time: 12000 });//alpha codes & Mrx -Dev
                let reaction2 =e.createReactionCollector(reaction2Filter, { time: 12000 });//alpha codes & Mrx -Dev
                reaction1.on("collect", c => {//alpha codes & Mrx -Dev
                  member.addRole(role);
                  e.edit(`:white_check_mark: | <@${member.id}> Successfully give The role **${role.name}** .`).then(c => {
                     c.delete(5000).then(()=>{
                       msg.delete()
                             })
                     })
                    }
      
                        )//alpha codes & Mrx -Dev
                        reaction2.on("collect", c => {//alpha codes & Mrx -Dev
                          e.edit('**Successfully Canceled :x:**').then(c => {
                            c.delete(5000)
                            message.delete()
                            
            })
          })
        }
            )}
            
    });




 
 
 
 
 

client.login(process.env.BOT_TOKEN);
