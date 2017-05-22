import { NavigationActions } from 'react-navigation';

export const loginAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main' })
  ]
});