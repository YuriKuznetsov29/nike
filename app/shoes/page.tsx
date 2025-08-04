'use client'

import client from '@/lib/graphql/apolloClient'
import { Card } from '@/shared/components/card'
import { Filters } from '@/shared/components/filters'
import { Footer } from '@/shared/components/footer'
import { Gallery } from '@/shared/components/gallery'
import { Header } from '@/shared/components/header'
import { Menu } from '@/shared/components/menu'
import { Products } from '@/shared/components/products'
import { TopBar } from '@/shared/components/top-bar'
import { Button } from '@/shared/ui/button'
import { ApolloProvider } from '@apollo/client'

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <TopBar />
            <Header />
            <main className="w-full flex flex-col gap-[32px]">
                <div className="max-w-[1920px] flex justify-center gap-[32px]">
                    <Filters />
                    <Products />
                </div>
                <Menu />
            </main>
            <Footer />
        </ApolloProvider>
    )
}
