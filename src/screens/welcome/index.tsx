import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import {useNavigation} from "@react-navigation/native";
import { styles } from "./style";


import logoImg from "../../assets/logo.png";

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image animation={'flipInY'} source={logoImg} resizeMode="contain" />
            </View>
            <Animatable.View delay={600} animation={'fadeInUp'} style={styles.containerform}>
                <Text style={styles.title}>Monitore, organize o teu gasto em qualquer lugar!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Signin')}>
                    <Text style={styles.buttonText}>Accesar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

export { Welcome }