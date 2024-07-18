import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import ContainerCard from '../components/card/ContainerCard';
import Card from '../components/card/Card';

const MyListPage = () => {
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

    const { myList } = useContext(MovieContext);

    return (
        <ContainerCard movies={ myList } title="Mi lista" showBtn={false}>
            {
                myList?.map(movie => (
                    <Card 
                        key={movie.id}  
                        id={movie.id} 
                        src={`${BASE_URL_IMG}/${movie.backdrop_path}`} 
                        alt={ movie.original_title} 
                        title={ movie.original_title } 
                        {...movie}
                    />
                ))
            }
        </ContainerCard>
    )
}

export default MyListPage