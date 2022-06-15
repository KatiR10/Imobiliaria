import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get('window').width;

export default function ImovelMod(props) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Modal style={lista.design} isVisible={isModalVisible}>
                <ScrollView >
                    <Image style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: 250, height: 350, }} source={{ uri: props.imagem }} />
                    <Text style={{ fontFamily: "times", color: "black", textAlign: 'center', }}>{props.endereco}</Text>
                    <Text style={{ fontFamily: "times", color: "black", textAlign: 'center' }}>{props.finalidade}</Text>
                    <Text style={{ fontFamily: "times", color: "black", textAlign: 'center' }}>{props.tipo}</Text>
                    <Text style={{ fontFamily: "times", color: "black", textAlign: 'center' }}>{props.valor}</Text>

                </ScrollView>
                <TouchableOpacity onPress={toggleModal} style={lista.button}>

                    <Text style={{ color: 'black', fontFamily: 'times' }}>Fechar</Text>
                </TouchableOpacity>
            </Modal>


            <Image style={{ width: 100, height: 100 }} source={{ uri: props.imagem }} />
            <Text style={{ fontFamily: "times", color: "black" }}>{props.endereco}</Text>
            <Text style={{ fontFamily: "times", color: "black" }}>{props.finalidade}</Text>
            <Text style={{ fontFamily: "times", color: "black" }}>{props.tipo}</Text>
            <Text style={{ fontFamily: "times", color: "black" }}>{props.valor}</Text>
            <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                <View style={{ flex: 1, padding: 10 }}>
                    <TouchableOpacity onPress={toggleModal} style={lista.button}>
                        <Text style={{ color: 'black', fontFamily: 'times' }}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const lista = StyleSheet.create({


    design: {
        flex: 1,
        borderRadius: 15,
        height: 400,
        width: 330,
        backgroundColor: '#469536',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: "#6eaa5e",
        padding: 6,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
    }
});
