import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export function SplashScreen ()  {
    const navigation = useNavigation();
    const [loop, setLoop] = useState(true);

    useEffect(
        () => {
          let timer = setTimeout(() => setLoop(false), 2000);
          return () => {
            clearTimeout(timer);
          };
        },[]);


  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#F8FAFC'}}>
      <LottieView 
        source={require('../../assets/spash.json')}
        autoPlay
        loop={loop}
        onAnimationFinish={() => navigation.navigate('SignIn')}
      />
    </View>
  )
}


