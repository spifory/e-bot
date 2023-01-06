declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string;
            GUILD_ID: string;
            DEFAULT_H_ROLE_ID: string;
            LOG_CHANNEL_ID: string;
        }
    }
}

export {};
