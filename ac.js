//Anti Crash

client.on("error", (err) => {
    const ChannelID = "1112156467974373396";
    const Embed = new EmbedBuilder()
      .setColor("Blue")
      .setTimestamp()
      .setFooter({ text: "Anti Crash system" })
      .setTitle("Error Encountered");
    const Channel = client.channels.cache.get(ChannelID);
    if (!Channel) return;
    Channel.send({
      embeds: [
        Embed.setDescription(
          "**Discord API Error/Catch:\n\n** ```" + err + "```"
        ),
      ],
    });
  });
  
  process.on("unhandledRejection", (reason, p) => {
    const ChannelID = "1112156467974373396";
    console.log("Unhandled promise rejection:", reason, p);
    const Embed = new EmbedBuilder()
      .setColor("Blue")
      .setTimestamp()
      .setFooter({ text: "Anti Crash system" })
      .setTitle("Error Encountered");
    const Channel = client.channels.cache.get(ChannelID);
    if (!Channel) return;
    Channel.send({
      embeds: [
        Embed.setDescription(
          "**Unhandled Rejection/Catch:\n\n** ```" + reason + "```"
        ),
      ],
    });
  });
  
  process.on("uncaughtException", (err, origin) => {
    const ChannelID = "1112156467974373396";
    const Embed = new EmbedBuilder()
      .setColor("Blue")
      .setTimestamp()
      .setFooter({ text: "Anti Crash system" })
      .setTitle("Error Encountered");
    const Channel = client.channels.cache.get(ChannelID);
    if (!Channel) return;
    Channel.send({
      embeds: [
        Embed.setDescription(
          "**Uncought Exception/Catch:\n\n** ```" + err + "```"
        ),
      ],
    });
  });
  
  process.on("uncaughtExceptionMonitor", (err, origin) => {
    const ChannelID = "1112156467974373396";
    const Embed = new EmbedBuilder()
      .setColor("Blue")
      .setTimestamp()
      .setFooter({ text: "Anti Crash system" })
      .setTitle("Error Encountered");
    const Channel = client.channels.cache.get(ChannelID);
    if (!Channel) return;
    Channel.send({
      embeds: [
        Embed.setDescription(
          "**Uncaught Exception Monitor/Catch:\n\n** ```" + err + "```"
        ),
      ],
    });
  });
  
  process.on("warning", (warn) => {
    const ChannelID = "1112156467974373396";
    const Embed = new EmbedBuilder()
      .setColor("Blue")
      .setTimestamp()
      .setFooter({ text: "Anti Crash system" })
      .setTitle("Error Encountered");
    const Channel = client.channels.cache.get(ChannelID);
    if (!Channel) return;
    Channel.send({
      embeds: [
        Embed.setDescription(
          "**Warning/Catch:\n\n** ```" + warn + "```"
        ),
      ],
    });
  });
