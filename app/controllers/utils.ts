
export const mapResultToJSON = (queryResult: any) => {
    console.log('res ', queryResult)
    const data = queryResult.rows;
    const cols = queryResult.rowDescription.columns
    return data.map((res: any) => {
        let bar: any = {}
        res.forEach((val: string, idx: number) => {
            let k1: string = cols[idx].name
            bar[k1] = val
        })
       return bar
    })
}