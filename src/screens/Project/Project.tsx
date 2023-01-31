import { SafeAreaView } from 'react-native-safe-area-context';
import { Carrossel } from '../../components/Carossel/Carrossel';
import { styles } from './styles';

export function Project() {
  return (
    <SafeAreaView style={styles.container}>
      <Carrossel />
    </SafeAreaView>
  );
}