import React from "react";
import {View,Text,TextInput,TouchableOpacity} from "react-native";
import * as animatable from "react-native-animatable";
import {styles} from "./style";

const SignIn = () => {

    return (
        <View style={styles.container}>
            <animatable.View animation={'fadeInLeft'} delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </animatable.View>

            <animatable.View animation={'fadeInUp'} style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="digite o E-mail ..." style={styles.input}/>
                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="digite a Senha ..." style={styles.input}/>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </animatable.View>
        </View>
    )
}

export {SignIn}