import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
var width = Dimensions.get('window').width;

import ImovelMod from './ImovelMod';


export default class Listagem extends Component {

    state = {
        imovel: [
            { endereco: 'Rua Lalala, n° 40, SP', finalidade: 'Venda', tipo: 'Casa', valor: 'R$500.000,00', imagem: 'https://i.pinimg.com/564x/3c/3b/0b/3c3b0b3df0405be64b39ce9586350305.jpg' },
            { endereco: 'Rua bababa, n° 60, SP', finalidade: 'Aluguel', tipo: 'Apartamento', valor: 'R$1.500,00/mês', imagem: 'https://i.pinimg.com/564x/e6/fd/56/e6fd563d0f22bc283e947e068dd8d987.jpg' },
            { endereco: 'Rua kakkak, n° 35, RJ', finalidade: 'Venda', tipo: 'Apartamento', valor: 'R$120.000,00', imagem: 'https://i.pinimg.com/564x/25/da/01/25da0126f94097e0e940b5c75fe851c3.jpg' },
            { endereco: 'Rua Lalala, n° 120, SP', finalidade: 'Venda', tipo: 'Casa', valor: 'R$400.000,00', imagem: 'https://i.pinimg.com/564x/ea/bf/e8/eabfe8dae949003e8ae55cf965899e76.jpg' },
            { endereco: 'Rua Papapap, n° 62, SP', finalidade: 'Aluguel', tipo: 'Casa', valor: 'R$500/mês', imagem: 'https://i.pinimg.com/564x/be/33/29/be33290be8be0e173e0115101edaa072.jpg' },
            { endereco: 'Rua Lalala, n° 99, SP', finalidade: 'Aluguel', tipo: 'Apartamento', valor: 'R$1.800,00/mês', imagem: 'https://i.pinimg.com/564x/a4/c0/b7/a4c0b753c65dffc85598dbf19cc78540.jpg' },

        ]
    }

    renderImovelMod = ({ item }) => (
        <ImovelMod
            endereco={item.endereco}
            finalidade={item.finalidade}
            imagem={item.imagem}
            tipo={item.tipo}
            valor={item.valor} />)


    render() {
        return (
            <ScrollView style={{ backgroundColor: '#b7d5ac' }}>
                <View style={header.background}>
                    <View style={header.container}>
                        <Text style={header.title}> Imobiliária</Text>
                    </View>
                </View>

                <FlatList
                    data={this.state.imovel}
                    renderItem={this.renderImovelMod}
                    numColumns={2}
                />
            </ScrollView >
        );
    }
}




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