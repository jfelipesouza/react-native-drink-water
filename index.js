/**
 * @format
 */

import './unistyles';
import { AppRegistry } from 'react-native';
import { MyApplication } from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MyApplication);
