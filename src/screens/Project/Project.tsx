import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Carrossel } from '../../components/Carossel/Carrossel';
import { Projetos } from '../../components/Projetos/Projetos';
import { styles } from './styles';

export function Project() {
  const data = [
    {
      "image": require('../../assets/html5.webp'),
      "name": "Html5"
    },
    {
      "image": require('../../assets/css.webp'),
      "name": "Css3"
    },
    {
      "image": require('../../assets/js.webp'),
      "name": "JavaScript"
    },
    {
      "image": require('../../assets/react.png'),
      "name": "React"
    },
    {
      "image": require('../../assets/ts.webp'),
      "name": "TypeScript"
    },
    {
      "image": require('../../assets/node.png'),
      "name": "NodeJs"
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <Carrossel 
          data={data}
        />
      </View>
      
      <View style={styles.div}>
        <Projetos />
      </View>
    </SafeAreaView>
  );
}