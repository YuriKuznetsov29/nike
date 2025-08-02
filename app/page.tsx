'use client'

import client from '@/lib/graphql/apolloClient'
import { Card } from '@/shared/components/card'
import { Header } from '@/shared/components/header'
import { Products } from '@/shared/components/products'
import { TopBar } from '@/shared/components/top-bar'
import { Button } from '@/shared/ui/button'
import { ApolloProvider } from '@apollo/client'

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <TopBar />
            <Header />
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <Button>Test</Button>
                <Button>Test</Button>
                <Button>Test</Button>
                {/* <Products /> */}
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
        </ApolloProvider>
    )
}
