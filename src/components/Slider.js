import * as React from 'react';
import { View, StyleSheet,Text} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import PropTypes from 'prop-types';  

import { observer } from 'mobx-react';
import HomeStore from '../Store/HomeStore';


const SliderContainer = (props: {
    caption: string;
    children: React.ReactElement;
    sliderValue?: Array<number>;
    trackMarks?: Array<number>;
}) => {
const {caption, sliderValue, trackMarks} = props;
const [value, setValue] = React.useState(
    sliderValue ? sliderValue : 30,
);


let renderTrackMarkComponent: React.ReactNode;

if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index: number) => {
        const currentMarkValue = trackMarks[index];
        const currentSliderValue =
            value || (Array.isArray(value) && value[0]) || 0;
        const style =
            currentMarkValue > Math.max(currentSliderValue)
                ? trackMarkStyles.activeMark
                : trackMarkStyles.inactiveMark;
        return <View style={style} />;
    };
}

const renderChildren = () => {
    return React.Children.map(
        props.children,
        (child: React.ReactElement) => {
            if (!!child && child.type === Slider) {
                return React.cloneElement(child, {
                    onValueChange: setValue,
                    renderTrackMarkComponent,
                    trackMarks,
                    value,
                });
            }

            return child;
        },
    );
};

/*
    <View style={styles.titleContainer}>
        <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
    </View>

    renderChildren() ın üstüne atarsan bu kodu sliderın valueleri görülebilir
*/
return (
    <View style={styles.sliderContainer}>

        {renderChildren()}
        {HomeStore.setSliderMin(value[0])}
        {HomeStore.setSliderMax(value[1])}
    </View>
    );
};


export default SliderBar = (props) => (
    <View contentContainerStyle={styles.container}>
            <SliderContainer
                sliderValue={[Number(props.min+100), Number(props.max-100)]}>
                <Slider
                    animateTransitions
                    maximumValue={props.max}                           
                    minimumValue={props.min}                                
                    step={1}                                         
                    thumbTouchSize={{width: 40, height: 40}}          
                    thumbTintColor={props.thumbcolor}          // #FF7448               
                    maksimumTrackTintColor={props.thumbcolor}   // #FF7448              
                    minimumTrackTintColor={props.thumbcolor}      // #FF7448               
                    thumbStyle={{borderWidth:3, borderColor:"white"}} 
                    trackStyle={{height:4, backgroundColor: props.trackcolor}}  //#111847
                />
            </SliderContainer>  
    </View>
);

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    sliderContainer: {
        paddingVertical: 0,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});


SliderBar.propTypes = {                      
    maximumValue:PropTypes.number.isRequired,
    minimumValue:PropTypes.number.isRequired                                    
};

SliderBar.defaultProps = {          
    maximumValue:1000,
    minimumValue:0
}

