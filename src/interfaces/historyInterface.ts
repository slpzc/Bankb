export interface ICheck {
    type?: string,
    name?: string,
    description?: string,
    price?: number,
}

export interface IHistory {
    show?: boolean,
    sellerName?: string,
    sellerInfo?: string,
    sellerType?: string,
    sellerLogo?: string,
    check?: Array<ICheck>
}
