import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { router } from 'expo-router';

import { styles } from '@/src/styles';

export default function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/(tabs)/LoginCadastro');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
        <Image source={require('@/assets/logo.jpeg')} style={styles.logo} />
        <Text style={styles.logoText}>SaveIt</Text>
      </View>

      {/* Ondas sobrepostas */}
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Svg height="200" width="100%" viewBox="0 0 1440 320">
          <Path
            fill="#C8FAD1"
            d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320..."
          />
          <Path
            fill="#A7DE9D"
            d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,186.7C840,192,960,160,1080,149.3..."
          />
        </Svg>
      </View>
    </View>
  );
}

