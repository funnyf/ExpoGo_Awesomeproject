import { StyleSheet, Text, View } from "react-native";

export default function Test01() {
  return (
    <>
      <View style={styles.container}>
        <Text>犬 犬 犬 犬 犬 犬 犬 犬</Text>
        <Text> 猫 猫 猫 猫 猫 猫 猫</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
