import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import doctors from "../../assets/doctors.png";

export function SignIn() {
  const navigation = useNavigation();
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedSenha, setIsFocusedSenha] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  return (
      <ScrollView style={{flex:1, backgroundColor:'#F8FAFC'}}>
        <View style={{ marginTop: 50, alignItems: "center", marginHorizontal:20 }}>
          <Text style={{color: "#38bdf8", fontSize:24, fontWeight:'500'}}>Bem vindo ao Vacine Já</Text>
          <Image
            style={{resizeMode:'contain'}}
            source={doctors}
          />
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <TextInput
            style={{
              borderWidth: 1,
              paddingLeft: 10,
              borderRadius: 12,
              paddingVertical: 15,
              borderColor: isFocusedEmail ? "#38BDF8" : "gray",
            }}
            placeholder="Email"
            placeholderTextColor='black'
            onFocus={() => setIsFocusedEmail(true)}
            onBlur={() => setIsFocusedEmail(false)}
            accessibilityLabel="Enter your email"
          />

          <TextInput
            style={{
              borderWidth: 1,
              paddingLeft: 10,
              borderRadius: 12,
              paddingVertical: 15,
              marginTop: 20,
              borderColor: isFocusedSenha ? "#38BDF8" : "gray",
            }}
            keyboardType="decimal-pad"
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor='black'
            onFocus={() => setIsFocusedSenha(true)}
            onBlur={() => setIsFocusedSenha(false)}
            accessibilityLabel="Enter your password"
          />

          <TouchableOpacity
            style={{
              marginTop: 30,
              backgroundColor: "#38BDF8",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              borderRadius: 12,
            }}
            accessibilityLabel="Sign In"
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Entrar
            </Text>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Não tem acesso? </Text>
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={{ color: "#38bdf8" }}
            >
              Clique aqui
            </Text>
          </View>
        </View>
      </ScrollView>
  );
}
