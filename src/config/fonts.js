import * as Font from 'expo-font';

export const fetchFonts = () => {
    return Font.loadAsync({
        'Barlow-bold': require('../../assets/fonts/Barlow-Bold.ttf'),
        'Barlow-italic': require('../../assets/fonts/Barlow-Italic.ttf'),
        'Barlow-regular': require('../../assets/fonts/Barlow-Regular.ttf')
    });
};