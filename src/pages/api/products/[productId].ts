import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    id: number,
    name: string,
    category: string,
    amount: number
}

const products = require('../../../../data/products.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { productId } = req.query;
    const product = products.find((product: Data) => product.id === Number(productId));
    res.status(200).json(product);
}