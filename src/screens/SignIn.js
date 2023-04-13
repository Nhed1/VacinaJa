import { useEffect } from "react";
import {
  BackHandler,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { Input } from "../components/TextInput";
import { Header } from "../components/Header";
import { SubmitButton } from "../components/SubmitButton";
import { SignUpButton } from "../components/SignUpButton";

export function SignIn() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#F8FAFC" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: "#F8FAFC", marginBottom: 20 }}
      >
        <Header />

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Input accessibilityLabel="Enter your email" placeholder="Email" />

          <Input accessibilityLabel="Enter your password" placeholder="Senha" />

          <SubmitButton />

          <SignUpButton />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
