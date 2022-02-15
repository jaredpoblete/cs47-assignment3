import { StyleSheet, Text, SafeAreaView, View, Image, Pressable, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Colors from "./Themes/colors";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Song from "./song";
import millisToMinutesAndSeconds from "./utils/millisToMinuteSeconds";

// Endpoints for authorizing with Spotify
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize/",
  tokenEndpoint: "https://accounts.spotify.com/api/token"
};

export default function App() {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: REDIRECT_URI
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
  }, [response]);

  useEffect(() => {
    const fetchTracks = async () => {
      // TODO: Comment out which one you don't want to use
      // myTopTracks or albumTracks

      const res = await myTopTracks(token);
      // const res = await albumTracks(ALBUM_ID, token);
      setTracks(res);
    };

    if (token){
      // Authenticated, make API request
      fetchTracks();
      console.log(tracks);
    }
  }, [token]);

 

  const SpotifyAuthButton = () => {
    return (
    <Pressable
          onPress={() => promptAsync()}>
          <View style={styles.spotifyButton}>
            <View style={styles.spotifyChild}>
              <Image source={require('./assets/spotify-logo.png')} style={styles.spotifyIcon}/>
            </View> 
            <View style={styles.spotifyChild}>
              <Text style={styles.spotifyText}>
                CONNECT WITH SPOTIFY
              </Text> 
            </View>   
          </View>
        </Pressable>
    );    
  }

  const renderItem = (item, index) => (
    <Song
      //item={item}
      id={index+1}
      cover={item.album.images[0].url}
      title={item.name}
      artist={item.artists[0].name}
      album={item.album.name}
      length={millisToMinutesAndSeconds(item.duration_ms)}
    />
  );  

  let directionalLockEnabled= true;
  
  const SongList = (item, index) => {
    return (
    <View style={styles.container}>  
      <View style={styles.tracksTitle}>
        <Image source={require('./assets/spotify-logo.png')} style={styles.spotifyIcon}/>
        <View style={styles.tracksSpace}/>
        <Text style={styles.largeText}>
          My Top Tracks
        </Text>
      </View> 
      <FlatList
          data={DATA}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item) => `${item.id}`}
      />
    </View>
    
    );  
  }

  const DATA = (tracks);

  let contentDisplayed = null;

if (token && tracks.length !== 0) {
  //console.log(tracks)
  //contentDisplayed = <View style={styles.Test}/>
  contentDisplayed = <SongList/>
} else {
  contentDisplayed = <SpotifyAuthButton/>
}

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },

  spotifyButton: {
    backgroundColor: Colors.spotify,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 300,
    height: 60,
    borderRadius: 99999,
  },
  spotifyChild:{  
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 11,
  },
  spotifyIcon: {
    height: 35,
    width: 35,
  },  
  spotifyText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    
    
  },
  largeText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    
    
  },
  tracksTitle: {
    display: "flex",
    backgroundColor: Colors.background,
    flexDirection: "row",  
    justifyContent: "center",
    height: 50,
    width: 500,
    padding: 2,
    margin: 2,
  },
  tracksSpace: {
    backgroundColor: Colors.background,
    height: 50,
    width: 10,
  },
  Test: {
    backgroundColor: 'red',
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 300,
    height: 60,
    borderRadius: 99999,
  },

});
