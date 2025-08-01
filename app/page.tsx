'use client'

import client from '@/lib/graphql/apolloClient'
import { Product } from '@/shared/components/Product'
import { TopBar } from '@/shared/components/top-bar'
import { ApolloProvider } from '@apollo/client'

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <TopBar />
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <Product />
                </main>
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
            </div>
        </ApolloProvider>
    )
}
