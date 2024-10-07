export const formatAmount = (amount: string | number) => {
  const amountStr = typeof amount === 'number' ? amount.toString() : amount;
  return amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const sortByDate = (data: any[]) => {
  return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};