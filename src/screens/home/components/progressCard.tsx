import { Trophy } from 'lucide-react-native';
import { View, Text } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

type ProgressCardProps = {
  percentage: number;
  currentIntake: number;
  dailyGoal: number;
};
export const ProgressCard = ({
  percentage,
  currentIntake,
  dailyGoal,
}: ProgressCardProps) => {
  const {
    theme: { colors },
  } = useUnistyles();
  return (
    <View style={styles.card}>
      <View style={styles.progressHeader}>
        <Text style={styles.cardTitle}>Progresso Diário</Text>
        <View style={styles.badge}>
          <Trophy color={colors.orange} size={14} />
          <Text style={styles.badgeText}>Streak: 5 dias</Text>
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.bigNumber}>
          {currentIntake}
          <Text style={styles.unit}>ml</Text>
        </Text>
        <Text style={styles.goalText}>Meta: {dailyGoal}ml</Text>
      </View>
      <Text style={styles.percentageText}>
        {percentage.toFixed(0)}% concluído
      </Text>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  card: {
    backgroundColor: theme.colors.colorCard,
    borderRadius: 24,
    padding: 24,
    // Sombras sutis adaptadas ao tema (opcional: remover em dark mode se preferir flat)
    shadowColor: theme.colors.colorsBaseInkNormal,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 4,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    color: theme.colors.colorsBaseInkNormal,
    fontSize: 16,
    fontWeight: '600',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.colorsBaseProductLighter, // Fundo sutil
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 5,
  },
  badgeText: {
    color: theme.colors.orange,
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: theme.colors.blueClear, // Track do progresso
    borderRadius: 6,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: theme.colors.blue, // A cor "água" (Blue ou Cyan)
    borderRadius: 6,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  bigNumber: {
    color: theme.colors.blue,
    fontSize: 36,
    fontWeight: 'bold',
  },
  unit: {
    fontSize: 16,
    color: theme.colors.colorsBaseInkLight,
    marginLeft: 4,
  },
  goalText: {
    color: theme.colors.colorsBaseInkLight,
    fontSize: 14,
  },
  percentageText: {
    color: theme.colors.purple,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
}));
