import { useNavigation } from "expo-router"

// Go to next screen
export const useNavigateTo = () => {

    const navigation = useNavigation()

    const navigateTo = (screen, params) => {
        navigation.navigate(screen, params)
    };

    return navigateTo;
    
}

// clear navigation history
export const useReplaceNavigation = () => {

  const navigation = useNavigation()

  const navigateReplace = (screen) => {
    navigation.replace(screen)
  }

  return navigateReplace;
}

// go to prev screen
export const useGoBack = () => {

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return goBack;
  
};
