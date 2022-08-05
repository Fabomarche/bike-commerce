import { useState } from 'react'
import { ScrollView, View, Button, Text, TextInput  } from 'react-native'
import { useDispatch } from 'react-redux'
import { styles} from './styles'
import theme from '../../constants/theme'
import { addPlace } from '../../store/actions/place.action'
import { LocationSelector } from '../../components/index'


const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    const handleTitleChange = text => setTitle(text)

    const handleSave = () => {
        dispatch(addPlace(title))
        //navigation.navigate('Address')//ojo esto
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Reference</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                />
                <LocationSelector navigation={navigation}/>
                <Button 
                    title="Save Address"
                    color={theme.colors.secondary}
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

export default NewPlaceScreen