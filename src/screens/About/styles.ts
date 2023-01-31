import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121214'
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        marginTop: 24,
        color: '#FFFFFF'
    },
    sub: {
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '500'
    },
    perfis: {
        height: 80,
        width: 80
    },
    perfil: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    }
})