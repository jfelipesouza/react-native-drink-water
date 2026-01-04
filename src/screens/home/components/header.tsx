import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { Icon } from '../../../ui/Icon';
import { database } from '../../../database/mmkv';
import { USERS_TABLE } from '../../../database/mmkv/schema';
import User from '../../../database/models/user';

export const Header: React.FC = () => {
  const {
    theme: { colors },
  } = useUnistyles();

  const [name, setName] = useState('');

  const getUserName = async () => {
    const users = await database.get<User>(USERS_TABLE).query().fetch();
    setName(users[0].name);
    console.log({ user: users[0] });
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerUserSaudationContainer}>
        <View style={styles.headerUserSaudationContent}>
          <Text style={styles.headerUserSaudationText}>Olá, {name} 👋</Text>
        </View>
        <TouchableOpacity>
          <Icon name={'Settings'} color={colors.colorsBaseProductNormal} />
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
