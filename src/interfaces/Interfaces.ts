export module Interfaces {

    export interface Selection {
        id: string;
        name: string;
        price: number;
    }

    export interface Market {
        id: string;
        name: string;
        selections: Selection[];
    }

    export interface Event {
        id: string;
        name: string;
        markets: Market[];
    }

}

