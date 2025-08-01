import { useGetArticlesQuery } from '@/lib/graphql/generated';
import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_ARTICLES = gql`
    query GetArticles {
        articles {
            title
            author {
                name
            }
            title
            slug
        }
    }
`;
export const Article = () => {
    const { loading, error, data } = useGetArticlesQuery();

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    console.log(data);
    return <h1>{data?.articles.length ? data.articles[0].title : null}</h1>;
};
