import { Image, Text, View } from "react-native";
import doctors from "../../assets/doctors.png";

export function Header() {
  return (
    <View style={{ marginTop: 50, alignItems: "center", marginHorizontal: 20 }}>
      <Text style={{ color: "#38bdf8", fontSize: 24, fontWeight: "500" }}>
        Bem vindo ao Vacine Já
      </Text>
      <Image style={{ resizeMode: "contain" }} source={doctors} />
    </View>
  );
}
