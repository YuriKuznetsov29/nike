import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:1337/graphql', // Strapi GraphQL endpoint
    documents: 'graphql/**/*.graphql', // Папка с твоими .graphql запросами
    generates: {
        './lib/graphql/generated.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                withHooks: true, // Генерировать useQuery, useMutation
                withHOC: false,
                withComponent: false,
            },
        },
    },
}
export default config
