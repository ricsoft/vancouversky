import {Navigation} from 'react-native-navigation';
import App from './components/App';
import Settings from './components/Settings';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Settings', () => Settings);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  topBar: {visible: false},
});
