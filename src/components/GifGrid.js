import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <TitleCategory className='animate__animated animate__flash'>🔷{ category.toUpperCase() }</TitleCategory>

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
        </>
    )
}

const TitleCategory = styled.h3({
    color: '#1c6ab9',
    marginBottom: '15px',
})

const LoadingContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
})

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px 20px;
    margin: 15px 0;

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }

    @media screen and (min-width: 601px) and (max-width: 730px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 731px) and (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
`

export default GifGrid