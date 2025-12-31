import { Droplets } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

type HistoryItemProps = {
  time: string;
  amount: number;
};
const HistoryItem = ({ time, amount }: HistoryItemProps) => {
  const {
    theme: { colors },
  } = useUnistyles();
  return (
    <View style={styles.historyItem}>
      <View style={styles.historyLeft}>
        <Droplets color={colors.purple} size={18} />
        <Text style={styles.historyTime}>{time}</Text>
      </View>
      <Text style={styles.historyAmount}>+{amount}ml</Text>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.colorCard,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'transparent', // Mantém layout consistente
  },
  historyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  historyTime: {
    color: theme.colors.colorsBaseInkNormal,
    fontSize: 16,
  },
  historyAmount: {
    color: theme.colors.blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
}));

export { HistoryItem };
