export const getRandomColor=()=>{
    const colors=[
        '#845EC2',
        '#D65DB1',
        '#FF6F91',
        '#FF9671',
        '#FFC75F',
        '#2C73D2',
        '#008F7A',
        '#C25E74',
        '#7F5987',
        '#FF00B1',
        '#FF7F49',
        '#FF0774',
        '#0066FF',
        '#00A6DC',
        '#00AE94',
        '#FFE9FF',
        '#A98ABC',
        '#C3FCF2',
        '#DD0000',
        '#0579F0',
        '#00A4FF',
        '#00DFB7',
        '#87F085',
        '#F9F871',
        '#B7498F',
        '#E7EFFF',
        '#A0AEE5',
        '#437C79',
        '#7B1FA2',
        '#212121',
        '#0288D1',
        '#B3E5FC',
        '#00BCD4',
        '#CDDC39',
        '#388E3C',
        '#536DFE',
        '#455A64',
        '#757575',
        '#FF0075',
        '#77D970',
        '#172774',
        '#F45905',
        '#297CA0',
        '#907FA4',
        '#FF9234',
        '#7871BF',
        '#00A19D',
        '#6F69AC'
    ];
    const min=1;
    const max = colors.length-1
    const random =  Math.floor(Math.random() * (max - min + 1))

    return colors[random]
}