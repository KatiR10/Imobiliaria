import React, { Component } from 'react'
import { View, Button, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
var width = Dimensions.get('window').width;


export default function Home({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: '#b7d5ac' }}>
            <View style={header.background}>
                <View style={header.container}>
                    <Text style={header.title}> Imobiliária</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#b7d5ac' }}>
                <View style={{ alignItems: 'center', marginTop: 150 }}>
                    <TouchableOpacity style={botoes.botao}
                        onPress={() => { navigation.navigate('Cadastro') }}>
                        <Text style={{ fontFamily: "times", color: "black", textAlign: 'center' }}>Ir para Cadastro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={botoes.botao}

                        onPress={() => { navigation.navigate('Listagem') }}>
                        <Text style={{ fontFamily: "times", color: "black", textAlign: 'center', padding: 5 }}>Ir para Listagem</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>

    );
}

const botoes = StyleSheet.create({

    botao: {
        backgroundColor: "#6eaa5e",
        padding: 6,
        width: 300,
        height: 50,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 5,
        alignContent: 'center'


    },

});

const header = StyleSheet.create({
    background: {
        width: width,
        height: 60,
        backgroundColor: "#469536"
    },
    container: {
        textAlign: "center"
    },
    title: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
        fontFamily: "times",
        textAlign: "center"
    },


});