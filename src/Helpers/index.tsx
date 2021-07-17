const formatMoney = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
const formatDate = (date: Date) =>	new Intl.DateTimeFormat('pt-BR').format(date)
export { formatMoney, formatDate }