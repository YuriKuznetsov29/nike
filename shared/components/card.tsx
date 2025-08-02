import { Color, Product } from '@/lib/graphql/generated'

interface Props {
    product: Product | null
}

export const Card: React.FC<Props> = ({ product }) => {
    return (
        <div className="d-flex flex-column">
            <img className="w-100 h-100" src={`http://localhost:1337${product?.images[0]?.url}`} />
            <div>
                <div>
                    <div>{product?.title}</div>
                    {/* <div>{product?.description}</div> */}
                    <div>{product?.colors.length} Colors</div>
                </div>
                <div>{product?.price} $</div>
            </div>
        </div>
    )
}
