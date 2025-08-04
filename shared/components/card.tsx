import { Color, GetProductsQuery, Product } from '@/lib/graphql/generated'

interface Props {
    product: Product
}

export const Card: React.FC<Props> = ({ product }) => {
    return (
        <div className="d-flex flex-column">
            <img className="w-100 h-100" src={`http://localhost:1337${product?.images[0]?.url}`} />
            <div>
                <div>
                    <div className="font-bold">{product?.title}</div>
                    {/* <div>{product?.description}</div> */}
                    <div className="font-bold text-[var(--podium-cds-color-text-secondary)]">
                        {product?.colors.length} Colors
                    </div>
                </div>
                <div className="font-bold">{product?.price} $</div>
            </div>
        </div>
    )
}
