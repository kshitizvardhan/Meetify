"use server"
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const secret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();
    if(!user) throw new Error("User not logged in");
    if(!apiKey) throw new Error("No api key");
    if(!secret) throw new Error("No api secret");

    const streamClient = new StreamClient(apiKey, secret);

    const userId = user.id;

    const exp = Math.round( new Date().getTime() / 1000) + 60*60;

    const validity = 60 * 60;
    // validity is optional (by default the token is valid for an hour)

    const issued = Math.floor( Date.now() / 1000) - 60;
    
    const token = streamClient.generateUserToken({user_id: userId, validity_in_seconds: validity});

    return token;
}