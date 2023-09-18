

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            PORT:number;
            MongoUrl:string
        }
    }
}
export{}
