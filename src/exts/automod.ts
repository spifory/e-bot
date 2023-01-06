import { TextChannel } from "eris";
import { EventListener } from "yuuko";

export default new EventListener('guildMemberUpdate', (guild, member, oldMember, ctx) => {
    if (guild.id !== process.env.GUILD_ID) return;

    if (!member.roles.includes(process.env.DEFAULT_H_ROLE_ID)) {
        try {
            member.addRole(process.env.DEFAULT_H_ROLE_ID);
        } catch (error) {
            const logChannel = guild.channels.get(process.env.LOG_CHANNEL_ID);
            if (logChannel instanceof TextChannel) {
                logChannel.createMessage(`Error adding role to ${member.user.username}#${member.user.discriminator}: `, error);
            }
        }
    } else if (member.nick !== "o") {
        try {
            member.edit({ nick: "o" });
        } catch (error) {
            const logChannel = guild.channels.get(process.env.LOG_CHANNEL_ID);
            if (logChannel instanceof TextChannel) {
                logChannel.createMessage(`Error changing nickname of ${member.user.username}#${member.user.discriminator}: `, error);
            }
        }
    }
    
})