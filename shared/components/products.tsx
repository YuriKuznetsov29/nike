import { useGetProductsQuery } from '@/lib/graphql/generated'
import React from 'react'
import Image from 'next/image'
import { Card } from '@/shared/components/card'
import { Color, Product } from '@/lib/graphql/generated'

export const Products = () => {
    // const { loading, error, data } = useGetProductsQuery()

    // if (loading) return <p>Загрузка...</p>
    // if (error) return <p>Ошибка: {error.message}</p>

    // console.log(data?.products[0])

    // if (!data) return <p>Нет данных</p>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {/* {data?.products.map((product) => {
                return <Card key={product?.slug} product={product} />
            })} */}
        </div>
    )
}
