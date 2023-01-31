import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

import html from "../../assets/html5.webp";
import css from "../../assets/css.webp";
import js from "../../assets/js.webp";
import react from "../../assets/react.webp";
import ts from "../../assets/ts.webp";

export function Project() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <Image 
          source={html}
          style={styles.foto}
        />

        <Text style={styles.name}>
          HTML5
        </Text>
      </View>
      
      <View style={styles.div}>
        <Image 
          source={css}
          style={styles.foto}
        />

        <Text style={styles.name}>
          CSS3
        </Text>
      </View>
      
      <View style={styles.div}>
        <Image 
          source={js}
          style={styles.foto}
        />

        <Text style={styles.name}>
          JavaScript
        </Text>
      </View>
      
      <View style={styles.div}>
        <Image 
          source={react}
          style={styles.foto}
        />

        <Text style={styles.name}>
          React Js
        </Text>
      </View>
      
      <View style={styles.div}>
        <Image 
          source={ts}
          style={styles.foto}
        />

        <Text style={styles.name}>
          TypeScript
        </Text>
      </View>
    </SafeAreaView>
  );
}