import mongoose from "mongoose";

export const connect=()=>{
    let conn={};
    if(!conn.isConnected){
        mongoose.connect(process.env.DATABASE_CONNECTION_STRING!).then(()=>{
            console.log('connect')
            conn.isConnected=true;
        }).catch((e:any)=>{
        console.error(e)
    })
    }
    console.log('Already Connected')
}