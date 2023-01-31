import { Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import perfil from "../../assets/perfil.jpg";

export function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={perfil}
        style={styles.logo}
      />

      <Text style={styles.name}>
        Ananias Nicolau
      </Text>

      <Text style={styles.sub}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequuntur dolores rerum sequi hic voluptatibus enim, quae voluptates repellendus, necessitatibus corporis minus nam itaque! Doloribus quae in id autem officiis.
      </Text>
    </SafeAreaView>
  );
}