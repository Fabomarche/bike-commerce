import {View, Image} from 'react-native'
import { API_KEY_MAPS } from '../../utils/maps'
import { styles } from './styles'

const MapPreview = (props) => {
    const mapPreviewUrl = props.location ? `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=600x300&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${props.location.lat},${props.location.lng}&key=${API_KEY_MAPS}` : ''

    return(
        <View style={{...styles.mapPreview, ...props.style}}>
            {props.location
                ? <Image style={styles.mapImage} source={{uri: mapPreviewUrl}} />
                : (props.children)
            }
        </View>
    )
}

export default MapPreview