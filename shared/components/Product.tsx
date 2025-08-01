import { useGetProductsQuery } from '@/lib/graphql/generated'
import React from 'react'
import Image from 'next/image'

export const Product = () => {
    const { loading, error, data } = useGetProductsQuery()

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка: {error.message}</p>

    console.log(data?.products[0])

    if (!data?.products[0]) return <p>Нет данных</p>

    return (
        <div>
            <h3>{data?.products[0].title}</h3>
            <p>{data?.products[0].description[0].children[0].text}</p>
            <img
                src={`http://localhost:1337${data?.products[0].images[0].url}`}
                alt={'Product image'}
                width={500}
                height={500}
            />
            <p>{data?.products[0].price}$</p>
        </div>
    )
}
