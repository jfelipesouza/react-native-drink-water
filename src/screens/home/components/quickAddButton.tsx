import { GlassWater, Plus } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

const QuickAddButton = ({ amount, onPress }: any) => {
  const {
    theme: { colors },
  } = useUnistyles();
  return (
    <TouchableOpacity style={styles.quickAddBtn} onPress={onPress}>
      <View style={styles.quickAddIconBg}>
        <GlassWater color={colors.blue} size={24} />
      </View>
      <Text style={styles.quickAddText}>{amount}ml</Text>
      <View style={styles.plusIcon}>
        <Plus color={colors.white} size={14} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(theme => ({
  quickAddBtn: {
    backgroundColor: theme.colors.colorCard,
    width: '30%',
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: theme.colors.colorBorderCard,
  },
  quickAddIconBg: {
    marginBottom: 8,
  },
  quickAddText: {
    color: theme.colors.colorsBaseInkNormal,
    fontWeight: '600',
  },
  plusIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: theme.colors.green,
    borderRadius: 10,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export { QuickAddButton };
