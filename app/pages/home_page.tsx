import { Text, StyleSheet, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Task from "../../components/Task"

export default class HomePage
    extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.taskWrapper}>
                    <Text style={styles.sectionTitle}>Today's task</Text>
                    <View style={styles.items}>
                        <Task text={"Lokantha"} />
                        <Task />

                    </View>
                </View>

                {/* // Write a task */}
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
                    <TextInput style={styles.input} placeholder='Write a task'></TextInput>
                    <TouchableOpacity >
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>

                        </View>
                    </TouchableOpacity>

                </KeyboardAvoidingView>

            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,

    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold"

    },
    items: {
        marginTop: 30,

    },
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        borderRadius: 50,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250,

    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,

    },
    addText: {

    }
})