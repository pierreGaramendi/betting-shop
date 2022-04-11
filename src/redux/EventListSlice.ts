import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
    name: "events",
    initialState: [],
    reducers: {
        loadEvents: (state: any, action: any) => {
            let eventsClone = action.payload.slice()
            let newEvents = eventsClone.map((event: any) => {
                const { id, name, markets } = event;
                let newMarkets = markets.map((market: any) => {
                    const { id, name, selections } = market;
                    let newSelections = selections.map((selection: any) => {
                        const { id, name, price } = selection;
                        return { id, name, price, selected: false }
                    });
                    return { id, name, selections: newSelections, someIsSelected: false }
                });
                return { id, name, markets: newMarkets }
            })
            return newEvents;
        },
        updateBet: (state: any, action: any): any => {
            let idDeleted = action.payload.id;
            let newValue = action.payload.value;
            let idMarket = action.payload.idMarket;

            let eventsClone = state.slice()
            let newEvents = eventsClone.map((event: any) => {
                const { id, name, markets } = event;
                let newMarkets = markets.map((market: any) => {
                    const { id, name, selections, someIsSelected } = market;
                    let newSomeIsSelected = id === idMarket? newValue : someIsSelected;                    
                    let newSelections = selections.map((selection: any) => {
                        const { id, name, price, selected } = selection;
                        let newSelected = (id === idDeleted) ? newValue : selected;
                        return { id, name, price, selected: newSelected }
                    });
                    return { id, name, selections: newSelections, someIsSelected: newSomeIsSelected }
                });
                return { id, name, markets: newMarkets }
            })            
            return newEvents;            
        }
    }
});

export const { updateBet, loadEvents } = eventsSlice.actions;

export default eventsSlice.reducer;