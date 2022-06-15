import React, { Component } from 'react';
import { ScrollView, Text, TextInput, Button, DevSettings, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
var width = Dimensions.get('window').width;

import ListaCadastro from '../Components/ListaCadastro';
import Database from '../Database/Database';
import Imoveis from '../Model/Imoveis';

import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";


export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            endereco: "",
            finalidade: "",
            tipo: "",
            valor: 0,
            foto: "",
            listaCadastro: []
        }
        this.ListarCadastro()
    }

    ListarCadastro() {
        const banco = new Database();
        banco.Listar().then(data => { this.setState({ listaCadastro: data }) })
    }

    CadastrarImovel(endereco, finalidade, tipo, valor, foto) {
        const novoImovel = new Imoveis(endereco, finalidade, tipo, valor, foto)
        const banco = new Database();
        banco.Inserir(novoImovel);
        this.ListarCadastro();

    }

    DeletarImovel(id) {
        const banco = new Database();
        banco.Deletar(id);
        DevSettings.reload();
    }
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);

            console.log("[React Native Camera] Caminho da imagem no cache: " + data.uri);
            CameraRoll.save(data.uri)
            this.setState({ foto: data.uri })




        }
    };

    render() {
        return (


            <ScrollView style={{ backgroundColor: '#b7d5ac' }}>
                <View style={header.background}>
                    <View style={header.container}>
                        <Text style={header.title}> Imobiliária</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 20, color: "black", fontFamily: "times", textAlign: "center", marginTop: 10, marginBottom: 20 }}> Cadastro de Imóveis </Text>

                <TextInput style={{ color: 'black', fontFamily: 'times', backgroundColor: '#93bf85', marginBottom: 5, borderRadius: 5 }} onChangeText={(valorInformado) => { this.setState({ endereco: valorInformado }) }} placeholder='Endereço do Imóvel' />
                <TextInput style={{ color: 'black', fontFamily: 'times', backgroundColor: '#93bf85', marginBottom: 5, borderRadius: 5 }} onChangeText={(valorInformado) => { this.setState({ finalidade: valorInformado }) }} placeholder='Finalidade do Imóvel' />
                <TextInput style={{ color: 'black', fontFamily: 'times', backgroundColor: '#93bf85', marginBottom: 5, borderRadius: 5 }} onChangeText={(valorInformado) => { this.setState({ tipo: valorInformado }) }} placeholder='Tipo do Imóvel' />
                <TextInput style={{ color: 'black', fontFamily: 'times', backgroundColor: '#93bf85', marginBottom: 5, borderRadius: 5 }} onChangeText={(valorInformado) => { this.setState({ valor: valorInformado }) }} placeholder='Valor do Imóvel' />
                <Text></Text>
                <Text></Text>
                <Text style={{ color: 'black', fontFamily: 'times', marginBottom: 10, textAlign: 'center' }}>Foto tirada com Sucesso! Salva em sua galeria.</Text>
                <Text></Text>
                <Text></Text>
                <View style={styles.container}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={{ width: 10, height: 80 }}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                    />

                </View>
                <View>
                    <Text></Text>


                    <TouchableOpacity style={botoes.botao} onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 12, color: 'black', fontFamily: 'times' }}> TIRAR FOTO </Text>
                    </TouchableOpacity>
                    <Text></Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity style={botoes.botao2} onPress={() => { this.CadastrarImovel(this.state.endereco, this.state.finalidade, this.state.tipo, this.state.valor, this.state.foto) }}>
                        <Text style={{ fontFamily: "times", color: "black", textAlign: 'center' }}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>


                <Text style={{ fontSize: 20, color: "black", fontFamily: "times", textAlign: "center", marginTop: 10, marginBottom: 20 }}>Lista de Imóveis</Text>
                <Text></Text>
                {
                    this.state.listaCadastro.map(item => (
                        <ListaCadastro style={{ color: "black", fontFamily: "times", textAlign: "center", marginTop: 10, }}
                            key={item.id}
                            id={item.id}
                            endereco={item.endereco}
                            finalidade={item.finalidade}
                            tipo={item.tipo}
                            valor={item.valor}
                            foto={item.foto}
                            deletar={this.DeletarImovel} />))
                }


            </ScrollView >

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 10,
        alignSelf: 'center',
        margin: 20,
    },
});

const botoes = StyleSheet.create({

    botao: {
        backgroundColor: "#6eaa5e",
        padding: 6,
        width: 300,
        height: 50,
        marginBottom: 5,
        textAlign: 'center',
        borderRadius: 5,
        alignContent: 'center'

    },

    botao2: {
        backgroundColor: "#6eaa5e",
        padding: 6,
        width: 300,
        height: 40,
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