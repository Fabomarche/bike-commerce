import { View, FlatList, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux"
import { CategoryItem } from "../../components/index";
import { selectCategory } from "../../store/actions/category.action";
import { styles } from "./styles";

const CategoriesScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const categories =  useSelector(state => state.category.categories)

    const onSelected = item => {
        dispatch(selectCategory(item.id))
        navigation.navigate("Products", {
            title:item.title
        })
    }

    const renderItem = ({ item }) => (
        <CategoryItem item={item} onSelected={onSelected} />
    )

    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/splash.png') }
                style={styles.image}
            />
            <Text style={styles.title}>Bikecommerce</Text>
            <Text style={styles.text}>Select your kind of Bike</Text>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default CategoriesScreen