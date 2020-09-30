import React from 'react'
import resources from '../../config/resources';
import DashboardCardButton from './DashboardCardButton';
import { View, StatusBar, ScrollView, SafeAreaView } from 'react-native';

export default function Dashboard({ navigation: { navigate } }) {

    React.useEffect(() => {

        if (Platform.OS == 'android') {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor('#A9A9A9')
        } else
            StatusBar.setBarStyle('dark-content');

        return () => { }

    }, [])

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#f8f8ff'}}>
            <View style={{
                flex: 1,
                backgroundColor: '#f8f8ff',
            }}>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.pull_up_icon}
                            title='Barra Fixa'
                        />

                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.push_up_icon}
                            title='Flexões'
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.brain}
                            title='Mentalidade'
                        />

                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.cardio}
                            title='Cárdio'
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.rings}
                            title='Argolas'
                        />

                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.dip_bar}
                            title='Paralelas'
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.core}
                            title='Core'
                        />

                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.legs}
                            title='Inferiores'
                        />

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.arm}
                            title='Braços'
                        />

                        <DashboardCardButton
                            onPress={() => navigate('Exercises')}
                            sourceImg={resources.meditation}
                            title='Mobilidade'
                        />

                    </View>


                </ScrollView>

            </View>
        </SafeAreaView>
    )


}
