import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Title } from '@components/title/Title'
import { Coins } from '@components/coin/Coins'
import { Button } from '@components/buttons/button/Button'
import { Input } from '@components/inputs/input/Input'
import { RadioButton } from '@components/buttons/radioButton/RadioButton'
import goldCoinIcon from '@assets/icon/goldenCoin.svg'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import minusIcon from '@assets/icon/minus2.svg'
import plusIcon from '@assets/icon/add_circle1.svg'
import './exchangeCoinPage.scss'

export const ExchangeCoinPage: FC = ({}) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const navigate = useNavigate()

  const schema = z.object({
    exchangeValue: z.coerce
      .number()
      .min(100, 'The amount cannot be less than 100!'),
  })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      exchangeValue: undefined,
    },
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onBlur',
  })

  const handleInputValue = (amount: number) => {
    const newAmount = amount < 0 ? 0 : amount

    setValue('exchangeValue', newAmount, { shouldValidate: true })
    clearErrors('exchangeValue')
    setSelectedAmount(newAmount)
  }

  const currentExchangeValue = watch('exchangeValue')
  const exchangeCoinValue = errors.exchangeValue ? 0 : currentExchangeValue / 10

  return (
    <div className="exchange-coin">
        <Title text="Баланс" />
        <div className="exchange-coin--coins">
          <Coins amount={220} isHiddenIcon />
          <Coins amount={100000} isHiddenIcon variant="silver" />
        </div>

      <div className="exchange-coin--form-block">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
        >
          <div className="form-wrapper">
            <div className="form-wrapper__inputs_button">
              <img
                src={minusIcon}
                alt="minus-icon"
                onClick={() => handleInputValue(currentExchangeValue - 100)}
              />
              <Input
                type="number"
                placeholder="Введіть суму"
                {...register('exchangeValue')}
                errorMessage={errors.exchangeValue?.message}
                isValid={isValid}
                isSilverCoin
              />
              <img
                src={plusIcon}
                alt="minus-icon"
                onClick={() => handleInputValue(currentExchangeValue + 100)}
              />
            </div>

            <div className="form-wrapper__buttons">
              <Button
                text="250"
                size="small"
                colorVariant={selectedAmount === 250 ? 'yellow' : 'light'}
                onClick={() => handleInputValue(250)}
              />
              <Button
                text="500"
                size="small"
                colorVariant={selectedAmount === 500 ? 'yellow' : 'light'}
                onClick={() => handleInputValue(500)}
              />
              <Button
                text="1000"
                size="small"
                colorVariant={selectedAmount === 1000 ? 'yellow' : 'light'}
                onClick={() => handleInputValue(1000)}
              />
            </div>

            <div className="form-wrapper__coin_block">
              <Title text="Виберіть монету" />

              <div className="coin-container">
                <div className="coin-container__wrapper">
                  <RadioButton />
                  <div className="coin-container__wrapper--block">
                    <div className="coin-container__wrapper--block__head">
                      <img src={goldCoinIcon} alt="coin-icon" />
                      <p className="text-bold">Golden</p>
                    </div>
                    <p className="text-tiny-regular">1 GD = 10 SC</p>
                  </div>
                </div>

                <div className="coin-container__wrapper--value">
                  <p className="coin-price text-medium">
                    + {exchangeCoinValue}
                  </p>
                  <img src={goldenCoin} alt="golden-icon-coin" />
                </div>
              </div>
            </div>
          </div>

          <Button
            text="Поповнити"
            size="large"
            fontSize="title-semi-bold"
            colorVariant="yellow"
            className={`${!isValid && 'disabled'}`}
            disabled={!isValid}
            // onClick={() => navigate('payout-detail')}
          />
        </form>
      </div>
    </div>
  )
}
