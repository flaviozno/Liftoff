import React, {useState} from "react";
import { View, FlatList } from 'react-native'
import { styles } from "./styles";

import { Profile } from '../../components/Profile'
import { ButtonAdd} from '../../components/ButtonAdd'
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from '../../components/Appointment';
import { ListDivider } from "../../components/ListDivider";


//FlatList é para muitos elementos e reder aos poucos, já a scrollView é para poucos e é mais performatica
export function Home(){
    const [category, setCategory] = useState('')

    const appointment = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '24/06 às 18:40h',
            description: 'É hoje que o manolo pega m7 de veigar!'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '24/06 às 18:40h',
            description: 'É hoje que o manolo pega m7 de veigar!'
        }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    return(
    <View>
        <View style={styles.header}>
            <Profile />
            <ButtonAdd />
        </View>
        
           <CategorySelect 
           categorySelected={category}
           setCategory={handleCategorySelect}
           />

           <View style={styles.content}>
                <ListHeader 
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />
                <FlatList
                    data={appointment}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                    <Appointment data={item}/>
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsHorizontalScrollIndicator={false}
                /> 
           </View>
    </View>
    )
}