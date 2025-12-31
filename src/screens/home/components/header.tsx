import { Settings } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

export const Header = () => {
  const {
    theme: { colors },
  } = useUnistyles();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerUserSaudationContainer}>
        <View style={styles.headerUserSaudationContent}>
          <Text style={styles.headerUserSaudationText}>Olá, Felipe 👋</Text>
        </View>
        <TouchableOpacity>
          <Settings color={colors.colorsBaseProductNormal} />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerSubtitle}>Mantenha-se hidratado!</Text>
    </View>
  );
};

const styles = StyleSheet.create(theme => {
  return {
    headerContainer: {
      width: '100%',
      flexDirection: 'column',
      gap: theme.gap(0.5),
    },
    headerUserSaudationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerUserSaudationContent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.gap(1),
    },
    headerUserSaudationText: {
      color: theme.colors.colorsBaseInkNormal,
      fontSize: theme.gap(3),
    },
    headerSubtitle: {
      color: theme.colors.colorsBaseProductNormal,
      fontSize: theme.gap(2),
    },
  };
});
