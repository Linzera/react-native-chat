import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { ROUTES } from '../utilis/Constants';

export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            userInput: ''
        }

        this.enterApp = this.enterApp.bind(this);
    }

    enterApp = (username) => {

        this.props.navigation.navigate(ROUTES.HOME, {username: username});

    }

    render() {

        const username = this.state.userInput;

        return (
            <View style={styles.container}>
                <View style={styles.loginForm}>
                    <Text style={styles.label}>{username}</Text>
                    <TextInput style={styles.textInput}
                        underlineColorAndroid={'white'}
                        textContentType={'nickname'}
                        selectionColor={'blue'}
                        onChangeText={(text) => this.setState({ userInput: text })} />
                    <View style={{margin: 10}}>
                        <Button color='#841584' title="Entrar" onPress={() => this.enterApp(username)} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    loginForm: {
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10
    },
    label: {
        margin: 10,
        fontSize: 25,
        color: 'white'
    },
    textInput: {
        margin: 10,
        width: 300,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10
    }
});