import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38A690'
    },
    containerHeader:{
        marginTop:'18%',
        marginBottom:'8%',
        paddingStart:'5%'
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff'
    },
    containerForm:{
        backgroundColor:'#fff',
        flex:1,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:20,
        marginTop:28
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:16,
        fontSize:16,
    },
    button:{
        backgroundColor:'#38A690',
        width:'100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center'
    },
    registerText:{
        color:'#a1a1a1'
    }
})