import React, { useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Header } from './components/header';
import { HistoryItem, HistoryItemDTO } from './components/historyItem';
import { ProgressCard } from './components/progressCard';
import { QuickAddButton } from './components/quickAddButton';

type HomeScreenProps = {};

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [dailyGoal] = useState(2500);
  const [currentIntake, setCurrentIntake] = useState(0);
  const [history, setHistory] = useState<HistoryItemDTO[]>(
    [] as HistoryItemDTO[],
  );

  const percentage = Math.min((currentIntake / dailyGoal) * 100, 100);

  const handleAddWater = (amount: number) => {
    const newDateTime = `${
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : new Date().getHours()
    }:${
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : new Date().getMinutes()
    }:${
      new Date().getSeconds() < 10
        ? `0${new Date().getSeconds()}`
        : new Date().getSeconds()
    }`;
    setHistory(prev => [{ amount, time: newDateTime }, ...prev]);
    setCurrentIntake(prev => prev + amount);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/*header*/}
        <Header />
        {/*Main Progress Card */}
        <ProgressCard
          currentIntake={currentIntake}
          dailyGoal={dailyGoal}
          percentage={percentage}
        />
        {/*Quick Handling actions*/}
        <Text style={styles.sectionTitle}>Adicionar Rápido</Text>
        <View style={styles.quickAddContainer}>
          <QuickAddButton amount={200} onPress={() => handleAddWater(200)} />
          <QuickAddButton amount={300} onPress={() => handleAddWater(300)} />
          <QuickAddButton amount={500} onPress={() => handleAddWater(500)} />
        </View>

        {/* Recent History*/}
        <Text style={styles.sectionTitle}>Histórico Recente</Text>
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <HistoryItem amount={item.amount} time={item.time} />
          )}
          keyExtractor={item => item.time}
          contentContainerStyle={styles.historyList}
        />
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
    // Quick Add
    sectionTitle: {
      color: theme.colors.colorsBaseInkNormal,
      fontSize: 18,
      fontWeight: 'bold',
    },
    quickAddContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    // History
    historyList: {
      gap: 12,
    },
  };
});
