import React from 'react'
import PremiumCoachCardWithTopText from './PremiumCoachCardWithTopText';
import { View, StatusBar, Platform, ScrollView, } from 'react-native'

export default function PremiumCoach() {

    React.useEffect(() => {

        if (Platform.OS == 'android') {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor('#A9A9A9')
        } else
            StatusBar.setBarStyle('dark-content');

        return () => { }

    }, [])

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',

        }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ marginHorizontal: 15 }}>

                    <View style={{ marginBottom: 10 }}>
                        <PremiumCoachCardWithTopText
                            headerText='Hipertrofia'
                            resumeText='Treino com foco em grupos musculares para que você cresça'
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <PremiumCoachCardWithTopText
                            order={2}
                            headerText='Força'
                            resumeText='Treino com foco em força musculares para que seja o hulk'
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <PremiumCoachCardWithTopText
                            order={3}
                            headerText='Resistência'
                            resumeText='Treino com resistência muscular para que você seja o mestre das repetiçnoes'
                        />
                    </View>

                </View>

            </ScrollView>

        </View >
    )
}
