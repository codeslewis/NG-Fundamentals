export interface EventModel {
    id: number,
    name: string,
    date: string,
    time: string,
    price: number,
    imageUrl: string,
    onlineUrl?: string,
    location?: any,
    sessions: any[]
}
