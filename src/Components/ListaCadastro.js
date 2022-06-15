import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get('window').width;

export default class ListaCadastro extends Component {
    render() {
        return (
            <View >

                <View style={{ backgroundColor: '#98c398', borderRadius: 8 }}>
                    <Text style={{ fontFamily: "times", color: "black", marginLeft: 10 }}> ID: {this.props.id}</Text>
                    <Text style={{ fontFamily: "times", color: "black", marginLeft: 10 }}> Endereço: {this.props.endereco}</Text>
                    <Text style={{ fontFamily: "times", color: "black", marginLeft: 10 }}> Finalidade (Aluguel/Venda): {this.props.finalidade}</Text>
                    <Text style={{ fontFamily: "times", color: "black", marginLeft: 10 }}> Tipo: {this.props.tipo}</Text>
                    <Text style={{ fontFamily: "times", color: "black", marginLeft: 10 }}> Valor: {this.props.valor}</Text>


                    <Image
                        style={{ padding: 10, width: 150, height: 100, alignItems: 'center', marginTop: 10, marginLeft: 100 }}
                        source={{ uri: this.props.foto }}
                    />
                    <View >
                        <TouchableOpacity style={{ backgroundColor: '#6eaa5e', width: 120, height: 35, padding: 6, marginBottom: 10, borderRadius: 10, alignItems: 'center', marginTop: 10, marginLeft: 120 }} onPress={() => { this.props.deletar(this.props.id) }} >
                            <Text style={{ fontFamily: "times", color: "black", }}>Remover</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>


        )
    }
}

const botao = StyleSheet.create({

    button: {
        backgroundColor: "#6eaa5e",
        padding: 6,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
    }
});
