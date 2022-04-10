export const dropEmpty = (list: Array<any>) => {
    return list.filter((item: any) => {
        return item.markets.length !== 0;
    });
}
