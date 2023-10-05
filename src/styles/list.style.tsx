import { StyleSheet } from "react-native"

const ListStyle = StyleSheet.create({
    titleContainer:{
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        marginBottom: 20,
    },
    title:{
        fontSize:30,
        fontWeight:"bold"
    },
    hideCompleted:{
        fontWeight:"bold",
        color:'#3478F6'
    },
    todoItem:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft:"5%",
        marginBottom:10
    },
    checkContainer:{
        marginRight:10
    },
    todoTextContainer:{
        flex:1
    }
})

export default ListStyle;