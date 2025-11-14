import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native'

const ToDo = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [editTask, setEdtTask] = useState(-1)

    const handleAddTak = () => {
        if(task){
            if(editTask !== -1){
                const updateTask = [...tasks]
                updateTask[editTask] = task
                setTasks(updateTask)
                setEdtTask(-1)
            }else{
                setTasks([...tasks, task])
            }
            setTask('')
        }
    }

    const handleEditTask = (index) => {
        const taskEdt = tasks[index]
        setTask(taskEdt)
        setEdtTask(index)
    }

    const handleDeleTask = (index) => {
        const updatesTasks = [...tasks]
        updatesTasks.splice(index, 1)
        setTasks(updatesTasks)
    }

    const renderItem = ({item, index}) => (
        <View style={styles.task}>
            <Text style={styles.itemList}>{item + ""}</Text>
            <View style={styles.taskButtons}>
                <TouchableOpacity 
                    onPress={() => handleEditTask(index)}>
                    <Text style={styles.editTask}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => handleDeleTask(index)}>
                    <Text style={styles.deleteTask}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  return (
    <View style={styles.container}>
        <Text style={styles.heading}> D E E J O F T</Text>
        <Text style={styles.title}>ToDO app</Text>
            <TextInput 
            style={styles.input}
            value={task}
            onChangeText={(text => setTask(text))}
            placeholder='Enter task' />
        
        <TouchableOpacity 
        onPress={() => handleAddTak()}
        style={styles.addButton}
        >
            <Text style={styles.addButtontext}>
                {editTask !== -1 ? "Update Task" : "Add Task"}
            </Text>
        </TouchableOpacity>

        <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()} />

    </View>
  )
}

export default ToDo

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 40,
        padding: 40,
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    heading:{
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 7,
        color: "green",
    },
    input:{
        fontSize: 18,
        borderColor: "#ccc",
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 3,
        padding: 10
    },
    addButton:{
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        borderRadius: 10,
    },
    addButtontext:{
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    },
    task:{
        justifyContent: "space-between",
        flexDirection: "row",
        fontSize: 18,
        alignItems: "center",
        marginBottom: 15,
        flexWrap: "wrap",

        borderWidth: 0.5,
        borderRadius: 10,
    },
    itemList:{
        fontSize: 19,
        marginBlock: 10
    },
    taskButtons:{
        flexDirection: "row",
        backgroundColor: "#e8e5e5e6",
        padding: 10,
        width: "100%",
        borderRadius: 10,
        justifyContent: "space-evenly"
    },
    editTask:{
        marginRight: 10,
        color: "green",
        fontSize: 18,
        fontWeight: 'bold'
    },
    deleteTask:{
        color: "red",
        fontSize: 18,
        fontWeight: "bold",
    }

})