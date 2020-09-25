import React from 'react'
import Colors from '../../config/colors';
import resources from '../../config/resources';
import { View, Text, StatusBar, Image } from 'react-native';

export default function Dashboard() {

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
            backgroundColor: '#f8f8ff',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <View
                style={{
                    marginVertical: 20,
                    marginHorizontal: 10,
                    width: '40%',
                    height: 150,
                    borderRadius: 12.5,
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    elevation: 3,
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                }}
            >

                <Image
                    source={resources.pull_up_icon}
                    style={[{ width: 60, height: 60, marginTop: 20 }]}
                />
                <Text style={{
                    fontFamily: 'Cinzel-Medium',
                    marginTop: 10,
                    fontSize: 15,
                    color: Colors.secondaryRed
                }}>
                    Barra Fixa
                </Text>

            </View>
            <View
                style={{
                    marginVertical: 20,
                    marginHorizontal: 10,
                    width: '40%',
                    height: 150,
                    borderRadius: 12.5,
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    elevation: 3,
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                }}
            >

                <Image
                    source={resources.push_up_icon}
                    style={[{ width: 60, height: 60, marginTop: 20 }]}
                />
                <Text style={{
                    fontFamily: 'Cinzel-Medium',
                    marginTop: 10,
                    fontSize: 15,
                    color: Colors.secondaryRed
                }}>
                    Flexões
                </Text>

            </View>

        </View>
    )


}
