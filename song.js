import { StyleSheet, Text, Image, View, SafeAreaView,} from 'react-native';
import millisToMinutesAndSeconds from "./utils/millisToMinuteSeconds"
import Colors from "./Themes/colors";



export default function Song(props) {
    return (
        <SafeAreaView style={styles.tracksTitle}>
            <View style={styles.item}>
                <View style={styles.indexFlex}>
                    <Text style={styles.smallText}>
                        {props.id}
                    </Text>
                </View>
                <View style={styles.coverFlex}>
                    <Image style={styles.albumCover} source={{uri: props.cover}}/>
                </View>
                <View style={styles.infoParent}>
                    <View style={styles.infoTop}>
                        <Text style={styles.boldText} numberOfLines={1}>
                            {props.title}
                        </Text>
                    </View> 
                    <View style={styles.infoBot}>
                        <Text style={styles.smallText} numberOfLines={1}>
                            {props.artist}
                        </Text>
                    </View>     
                </View>
                <View style={styles.albumFlex}>
                    <Text style={styles.smallText} numberOfLines={1}>
                        {props.album}
                    </Text>
                </View>
                <View style={styles.lengthFlex}>
                    <Text style={styles.smallText}>
                    {props.length}
                    </Text>
                </View>    
            </View>    
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
  item: {
    display: "flex",
    backgroundColor: Colors.background,
    flexDirection: "row",  
    justifyContent: "flex-start",
    height: 100,
    width: 420,
    margin: 5,
  },
  indexFlex: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  coverFlex: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: 100,
    marginRight: 5, 
  },  
  infoParent: {
    backgroundColor: Colors.background,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: 100,
    width: 130,
    marginRight: 5,
  },
  infoTop: {
    backgroundColor: Colors.background,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: 130,
    padding: 5,
  },
  infoBot: {
    backgroundColor: Colors.background,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: 130,
    padding: 5,
  },
  albumFlex: {
    backgroundColor: Colors.background,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: 100,
    marginRight: 5,
    padding: 5,

  },
  lengthFlex: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: 30,
  },      
  smallText: {
    fontSize: 12,
    color: '#B3B3B3',
  },
  boldText: {
    fontSize: 12,
    color: '#B3B3B3',
    fontWeight: 'bold',
  },
  albumCover: {
    height: 100,
    width: 100,    
  },

  largeText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    
    
  },
  tracksTitle: {
    display: "flex",
    backgroundColor: Colors.background,
    flexDirection: "row",  
    justifyContent: "flex-start",
    height: 100,
    width: 420,
    margin: 5,
    },  
});