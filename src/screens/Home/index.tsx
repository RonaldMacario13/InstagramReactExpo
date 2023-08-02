import { StyleSheet, Text, View } from 'react-native';

import Logo from "../../assets/logo.svg"
import Stroke from "../../assets/stroke.svg"
import Message from "../../assets/message.svg"

export function Home() {
  return (
    <View style={styles.container}>
        <view style={styles.header}>
        <Logo />
        <View>
            <Stroke />
            <Message />
        </View>
        </view>
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
  }
});
