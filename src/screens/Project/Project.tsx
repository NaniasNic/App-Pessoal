import { SafeAreaView } from 'react-native-safe-area-context';
import { Carrossel } from '../../components/Carossel/Carrossel';
import { styles } from './styles';

export function Project() {
  const data = [
    {
      image: require('../../assets/html5.webp'),
      name: "Html5"
    },
    {
      image: require('../../assets/css.webp'),
      name: "Css3"
    },
    {
      image: require('../../assets/js.webp'),
      name: "JavaScript"
    },
    {
      image: require('../../assets/react.webp'),
      name: "React"
    },
    {
      image: require('../../assets/ts.webp'),
      name: "TypeScript"
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Carrossel 
        data={data}
      />
    </SafeAreaView>
  );
}