

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            PORT:number;
            MongoUrl:string;
            JWT_SECREAT_KEY:string
        }
    }
}
export{}
