import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import ShareDrawer from "../components/ShareDrawer";

export default function HomeScreen() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => setDrawerVisible(true)}>
        <Text style={styles.btnText}>Invite friends</Text>
      </Pressable>

      <ShareDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#000",
  },
  btnText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
  },
});
