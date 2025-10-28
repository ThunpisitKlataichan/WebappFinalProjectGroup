// InstrumentTypes.ts
export interface InstrumentProps {
    _id: string;
    imageUrl: string; 
    brand: string;
    model: string;
    price: number; 
    stock: number; 
    description: string;
    isShown: boolean;
    showBuy?: boolean; 
}

export interface ShowCardProps {
    dataset: InstrumentProps[];
}

export interface ProductPageProps {
    datasetProd: InstrumentProps[];
}