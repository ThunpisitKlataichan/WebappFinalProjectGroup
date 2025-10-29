// InstrumentTypes.ts
export interface InstrumentProps {
    showOnHome: any;
    _id: string;
    imageUrl: string; 
    brand: string;
    model: string;
    type: string;
    price: number; 
    stock: number; 
    description: string;
    isShown: boolean;
}

export interface ShowCardProps {
    dataset: InstrumentProps[];
}

export interface ProductPageProps {
    datasetProd: InstrumentProps[];
}