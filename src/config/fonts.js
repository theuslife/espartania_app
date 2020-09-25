import * as Font from 'expo-font';

export const fetchFonts = () => {
    return Font.loadAsync({
        'Cinzel-Bold': require('../../assets/fonts/Cinzel-Bold.ttf'),
        'Cinzel-Medium': require('../../assets/fonts/Cinzel-Medium.ttf'),
        'Cinzel-Regular': require('../../assets/fonts/Cinzel-Regular.ttf')
    });
};