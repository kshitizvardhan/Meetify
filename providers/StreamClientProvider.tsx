import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
 
 const StreamVideoProvider = ({children} : {children: ReactNode}) => {
    // We will create the stream user directly from the currently logged in Clerk User
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const {user, isLoaded} = useUser();

    useEffect(() => {
        // if user is not logged in or signup then exit the function
        if(!isLoaded || !user) return;
        // If we dont have api, then also return
        if(!apiKey) throw new Error("Stream API Key is Missing");

        // Now only if the user is here and api is here, we can create the new video client
        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            tokenProvider,
        })

        setVideoClient(client);
    },[ user, isLoaded]);

    if(!videoClient) return <Loader/>

    return (
      <StreamVideo client={videoClient}>
       {children}
      </StreamVideo>
    );
  };

export default StreamVideoProvider;

//   Create an instance of StreamVideoClient that will establish WebSocket connection by connecting a user.
// Next, you create a call object and join the call. We’ll specify create: true to create the call if it doesn’t exist.