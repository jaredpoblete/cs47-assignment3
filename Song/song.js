import { StyleSheet, Text, Image, View, StatusBar, Platform, SafeAreaView, ImageBackground } from 'react-native';
import Colors from "./Themes/colors"

export default function Song(){
return (
    <SafeAreaView style={styles.container}>
        <View style={styles.item}>
            <View style={styles.indexFlex}>
            </View>
            <View style={styles.coverFlex}>
            </View>
            <View style={styles.infoParent}>
                <View style={styles.infoChild}>
                </View> 
                <View style={styles.infoChild}>
                </View>     
            </View>
            <View style={styles.albumFlex}>
            </View>
            <View style={styles.lengthFlex}>
            </View>    
        </View>    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: "center-start",
    alignItems: "center",
    flex: 1
  },
  item: {
    display: "flex",
    flexDirection: "row",  
    backgroundColor: Colors.background,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  indexFlex: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  coverFlex: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },  
  infoParent: {
    backgroundColor: Colors.background,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  infoChild: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  albumFlex: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  lengthFlex: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },      
  smallText: {
    fontSize: 8,
    color: 'white',
  },
});