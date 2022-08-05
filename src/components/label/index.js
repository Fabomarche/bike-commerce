<<<<<<< HEAD
=======
import React from "react";
>>>>>>> develop
import { View, Text } from "react-native";
import { styles } from "./styles";

const Label = ({ children, style, label, subLabel, subLabelStyle }) => {
<<<<<<< HEAD
    return(
        <View style={styles.container}>
            <Text style={[styles.label, style]}>{label}</Text>
            {children}
            {subLabel && <Text style={[styles.subLabel, subLabelStyle]}>{subLabel}</Text> }
=======
    return (
        <View style={styles.container}>
            <Text style={[styles.label, style]}>{label}</Text>
            {children}
            {subLabel && <Text style={[styles.subLabel, subLabelStyle]}>{subLabel}</Text>}
>>>>>>> develop
        </View>
    )
}

<<<<<<< HEAD
export default Label
=======
export default Label;
>>>>>>> develop
