import {Navigation} from 'react-native-navigation';
import App from './components/App';
import Settings from './components/Settings';

Navigation.registerComponent('Main', () => App);
Navigation.registerComponent('Settings', () => Settings);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Main',
            },
          },
        ],
      },
    },
  });
});

// Navigation.setDefaultOptions({
//   topBar: {
//     title: {
//       text: 'Vancouver Sky',
//       color: '#ffffff',
//     },
//     backButton: {
//       color: '#ffffff',
//     },
//     background: {
//       //color: '#052842',
//       color: '#407999',
//     },
//   },
// });

Navigation.setDefaultOptions({
  topBar: {visible: false},
});
