import circleIcon from '@assets/icon/check_circle.svg'
import silverCoinICon from '@assets/icon/silver_coins.svg'
import goldenCoinIcon from '@assets/icon/golden_coins2.svg'
import errorIcon from '@assets/icon/error.svg'
import successIcon from '@assets/icon/check_circle_success.svg'

export const formatAmount = (amount: string | number | undefined) => {
  if (amount === undefined || amount === null) {
    return '0'; 
  }
  const amountStr = typeof amount === 'number' ? amount.toString() : amount;
  return amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};


export const sortByDate = (data: any[]) => {
  return data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export const copyTextToClipboard = (data: string) => {
  navigator.clipboard.writeText(data)
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return (
    date.toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }) +
    ', ' +
    date.toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit',
    })
  )
}

export const getIcon = ({
  isSilverCoin,
  coinIcon,
  errorMessage,
  isValid,
}: {
  isSilverCoin?: boolean
  coinIcon?: boolean
  errorMessage?: string
  isValid?: boolean
}) => {
  if (isSilverCoin) {
    return silverCoinICon
  } else if (coinIcon) {
    return goldenCoinIcon
  } else if (errorMessage) {
    return errorIcon
  } else if (isValid) {
    return successIcon
  }

  return circleIcon
}
