import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Button, TextInput, ScrollView } from 'react-native'
import { styles }  from './styles'
import theme from '../../constants/theme'
import { addplace } from '../../store/actions/place.action'



const NewPlaceScreen = () => {
    const dispatch =  useDispatch()
    const [title, setTitle] = useState("")

    const handletitleChange = text => setTitle(text)

    const handleSave = () => {
        dispatch(addplace(title, image))
        NavigationPreloadManager.navigate('Address')
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Button title="Save Addres" color={theme.colors.secondary} onPress={()=>{}} />
            </View>
        </ScrollView>
    )
}

export default NewPlaceScreen