import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Settings, Trophy } from 'lucide-react-native';
import { HistoryItem } from './components/historyItem';
import { QuickAddButton } from './components/quickAddButton';

type HomeScreenProps = {};

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [dailyGoal] = useState(2500);
  const [currentIntake, setCurrentIntake] = useState(0);

  const percentage = Math.min((currentIntake / dailyGoal) * 100, 100);

  const handleAddWater = (amount: number) => {
    setCurrentIntake(prev => prev + amount);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/*header*/}
        <View style={styles.headerContainer}>
          <View style={styles.headerUserSaudationContainer}>
            <View style={styles.headerUserSaudationContent}>
              <Text style={styles.headerUserSaudationText}>Olá, Felipe 👋</Text>
            </View>
            <TouchableOpacity>
              <Settings color={'#fff'} />
            </TouchableOpacity>
          </View>

          <Text style={styles.headerSubtitle}>Mantenha-se hidratado!</Text>
        </View>
        {/*Main Progress Card */}
        <View style={styles.card}>
          <View style={styles.progressHeader}>
            <Text style={styles.cardTitle}>Progresso Diário</Text>
            <View style={styles.badge}>
              <Trophy color={'#dd940d'} size={14} />
              <Text style={styles.badgeText}>Streak: 5 dias</Text>
            </View>
          </View>

          <View style={styles.progressBarContainer}>
            <View
              style={[styles.progressBarFill, { width: `${percentage}%` }]}
            />
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
        <Text style={styles.sectionTitle}>Adicionar Rápido</Text>
        <View style={styles.quickAddContainer}>
          <QuickAddButton amount={200} onPress={() => handleAddWater(200)} />
          <QuickAddButton amount={300} onPress={() => handleAddWater(300)} />
          <QuickAddButton amount={500} onPress={() => handleAddWater(500)} />
        </View>

        {/* Recent History (Simulado) */}
        <Text style={styles.sectionTitle}>Histórico Recente</Text>
        <View style={styles.historyList}>
          <HistoryItem time="14:30" amount={300} />
          <HistoryItem time="10:15" amount={500} />
          <HistoryItem time="08:00" amount={250} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor,
      padding: theme.gap(2),
      paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 30,
    },
    scrollContent: {
      gap: theme.gap(3),
    },
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
    // Quick Add
    sectionTitle: {
      color: theme.colors.colorsBaseInkNormal,
      fontSize: 18,
      fontWeight: 'bold',
    },
    quickAddContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }, // History
    historyList: {
      gap: 12,
    },
  };
});
