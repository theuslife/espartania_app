import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import PremiumCoachCard from './PremiumCoachCard';

export default function PremiumCoachCardWithTopText({ order = 1, headerText, resumeText }) {
    return (
        <>
            <View style={{ marginTop: 15, marginBottom: 5 }}>

                <Text style={{ fontSize: 20, fontFamily: 'Cinzel-Bold' }}>{headerText}</Text>

                <Text style={{marginVertical: 1, fontFamily: 'Cinzel-Medium'}}>{resumeText}</Text>

            </View>

            <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>

                {order == 1 &&
                    <>
                        <PremiumCoachCard
                            imgSource={require('../../../assets/IMG_6236.png')}
                            cardTitle='SUPERIORES'
                            cardLevel='Iniciante'
                            star_1={true}
                            star_2={true}
                            star_3={true}
                        />

                        <PremiumCoachCard
                            imgSource={require('../../../assets/IMG_6480.png')}
                            cardTitle='INFERIORES'
                            cardLevel='Intermediário'
                            star_1={true}
                            star_2={true}
                            star_3={false}
                        />

                        <PremiumCoachCard
                            imgSource={require('../../../assets/IMG_6480.png')}
                            cardTitle='INFERIORES'
                            cardLevel='Avançado'
                            star_1={true}
                            star_2={true}
                            star_3={true}
                        />
                    </>
                }

                {order == 2 &&
                    <>
                        <PremiumCoachCard
                            imgSource={require('../../../assets/IMG_6480.png')}
                            cardTitle='MUSCLE UP'
                            cardLevel='Intermediário'
                            star_1={true}
                            star_2={true}
                            star_3={false}
                        />
                        <PremiumCoachCard
                            imgSource={require('../../../assets/IMG_6236.png')}
                            cardTitle='BRAÇOS'
                            cardLevel='Iniciante'
                            star_1={true}
                            star_2={true}
                            star_3={true}
                        />

                        <PremiumCoachCard
                            imgSource={require('../../../assets/IMG_6480.png')}
                            cardTitle='LIGAMENTOS'
                            cardLevel='Avançado'
                            star_1={true}
                            star_2={true}
                            star_3={true}
                        />
                    </>
                }

                {order == 3 &&
                    <>
                        <PremiumCoachCard
                            imgSource={require('../../../assets/IMG_6466.png')}
                            cardTitle='OLD SCHOOL'
                            cardLevel='Intermediário'
                            star_1={true}
                            star_2={true}
                            star_3={false}
                        />
                        <PremiumCoachCard
                            imgSource={require('../../../assets/IMG_6236.png')}
                            cardTitle='BRAÇOS'
                            cardLevel='Iniciante'
                            star_1={true}
                            star_2={true}
                            star_3={true}
                        />

                        <PremiumCoachCard
                            imgSource={require('../../../assets/IMG_6480.png')}
                            cardTitle='LIGAMENTOS'
                            cardLevel='Avançado'
                            star_1={true}
                            star_2={true}
                            star_3={true}
                        />
                    </>
                }


            </ScrollView>
        </>
    )
}

const styles = {

}
