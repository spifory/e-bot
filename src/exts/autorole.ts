import { Role, TextChannel } from 'eris';
import { EventListener } from 'yuuko';

export default new EventListener('guildMemberAdd', async (guild, member, _ctx) => {
    if (guild.id !== process.env.GUILD_ID) return;

    let role: Role | undefined;
    try {
        role = guild.roles.get(process.env.DEFAULT_H_ROLE_ID);
    } catch (error) {
        const logChannel = guild.channels.get(process.env.LOG_CHANNEL_ID);
        if (logChannel instanceof TextChannel) {
            logChannel.createMessage('Error getting role: ', error);
        }
    }

    // check if `role` in member.roles
    if (!member.roles.includes(role?.id)) {
        try {
            await member.addRole(role?.id);
        } catch (error) {
            const logChannel = guild.channels.get(process.env.LOG_CHANNEL_ID);
            if (logChannel instanceof TextChannel) {
                await logChannel.createMessage(
                    `Error adding role to ${member.user.username}#${member.user.discriminator}: `,
                    error,
                );
            }
        }
    }
});
