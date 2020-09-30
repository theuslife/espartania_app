import React from 'react';
import { View } from 'react-native';
import ExercisesCard from './ExercisesCard';
import Collapsible from 'react-native-collapsible';
import ExercisesLineCollap from './ExercisesLineCollap';

export default function ExercisesCardVertical({ isCollapsed, setCollapsed, titleLine, iconName, textBeforeIcon }) {
    return (
        <>
            <ExercisesLineCollap
                activeOpacity={1}
                title={titleLine}
                iconName={iconName}
                textBeforeIcon={textBeforeIcon}
                onPress={() => setCollapsed()}
            />

            <Collapsible collapsed={isCollapsed}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    <ExercisesCard 
                    
                    />

                    <ExercisesCard 
                        sourceImg={require('../../../assets/IMG_6236.png')}
                    />

                </View>
            </Collapsible>

            <Collapsible collapsed={!isCollapsed}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ExercisesCard />
                    <ExercisesCard />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ExercisesCard />
                    <ExercisesCard />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <ExercisesCard />
                    <ExercisesCard />
                </View>
            </Collapsible>
        </>
    )
}

const styles = {

}
