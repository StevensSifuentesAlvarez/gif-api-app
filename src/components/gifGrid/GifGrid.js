import ReactLoading from 'react-loading'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { CardGrid, LoadingContainer, TitleCategory } from './styles';

import GifGridItem from '../gifGridItem/GifGridItem';
import { Fragment } from 'react';

const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs( category );

    return (
        <Fragment>
            <TitleCategory className='animate__animated animate__flash'>{ category.toUpperCase() }</TitleCategory>

            { loading && <LoadingContainer>
                            <ReactLoading 
                                type='bubbles' 
                                color='#092c4c' 
                                height={'10%'} 
                                width={'10%'}/>
                        </LoadingContainer> }
            <CardGrid>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} // NEW
                        />
                    ))
                }
            </CardGrid>
        </Fragment>
    )
}

export default GifGrid