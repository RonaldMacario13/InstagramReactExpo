import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import Logo from "../../assets/logo.svg"
import Stroke from "../../assets/stroke.svg"
import Message from "../../assets/message.svg"
import foto from "../../assets/foto.png"
import foto2 from "../../assets/foto2.png"
import foto3 from "../../assets/foto3.png"
import foto4 from "../../assets/foto4.png"

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
  },
]

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
          <View style={styles.headerOptions}>
              <Stroke />
              <Message />
          </View>
      </View>

      <View style={styles.stories}>
        <FlatList
          horizontal={true}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={item => (
            <View style={styles.storiesCard} key={item.item.id}>
              <Image style={styles.storiesCardImage} source={item.item.photoURL} />
            </View>
          )}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  header: {
    marginTop: 40,
    paddingHorizontal: 10,
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },

  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },

  stories: {
    width: "100%",
    paddingLeft: 10,
    paddingVertical: 10,
    alignContent: "center",
  },

  storiesCard: {
    borderWidth: 2,
    borderColor: "#F7B55A",
    borderRadius: 50,
    marginRight: 10,
    padding: 2,
  },
  }
});
