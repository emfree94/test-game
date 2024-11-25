import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DepositProps } from '@components/deposit/Deposit'
import { Title } from '@components/title/Title'
import { Button } from '@components/buttons/button/Button'
import { NetworkAccordion } from '@components/networkAccordion/NetworkAccordion'
import { RadioButton } from '@components/buttons/radioButton/RadioButton'
import { Input } from '@components/inputs/input/Input'
import goldenCoin from '@assets/icon/golden_coins2.svg'
import usdtIcon from '@assets/icon/tether.svg'
import './payout.scss'

export const Payout: FC<DepositProps> = ({
  setActiveComponent,
  activeComponent,
}) => {
  const navigate = useNavigate()

  const schema = z.object({
    payoutValue: z.coerce.number().min(500, 'payout must be more than 500 coins'),
    walletId: z.string().min(10, 'wallet id must be more than 10 characters'),
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
      payoutValue: undefined,
      walletId: '',
    },
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onBlur',
  })

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)

  const handleInputValue = (amount: number) => {
    setValue('payoutValue', amount, { shouldValidate: true })
    clearErrors('payoutValue')
    setSelectedAmount(amount)
  }

  const currentPayoutValue = watch('payoutValue') || 0
  const exchangeCoinValue = errors.payoutValue ? 0 : currentPayoutValue / 100

  return (
    <div className="payout">
      <Title text="Баланс" />
      <div className="payout--balance">
        <img src={goldenCoin} alt="golden-coin-icon" />
        <p className="text-semi-bold">220</p>
      </div>
      <div className="transfer-buttons">
        <Button
          text="Поповнення"
          size="medium"
          fontSize={activeComponent === 'deposit' ? 'text-bold' : 'text-semi-bold additional-button-color'}
          colorVariant={activeComponent === 'deposit' ? 'yellow' : 'light'}
          onClick={() => setActiveComponent('deposit')}
        />
        <Button
          text="Вивід"
          fontSize={activeComponent === 'payout' ? 'text-bold' : 'text-semi-bold additional-button-color'}
          colorVariant={activeComponent === 'payout' ? 'yellow' : 'light'}
          onClick={() => setActiveComponent('payout')}
        />
      </div>

      <div className="payout--form-block">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
        >
          <div className="form-wrapper">
            <Input
              type="number"
              placeholder="Введіть суму"
              {...register('payoutValue')}
              errorMessage={errors.payoutValue?.message}
              isValid={isValid}
              coinIcon
            />

            <div className="form-wrapper__buttons">
              <Button
                text="1250"
                size="small"
                colorVariant={selectedAmount === 1250 ? 'yellow' : 'light'}
                onClick={() => handleInputValue(1250)}
              />
              <Button
                text="1500"
                size="small"
                colorVariant={selectedAmount === 1500 ? 'yellow' : 'light'}
                onClick={() => handleInputValue(1500)}
              />
              <Button
                text="2000"
                size="small"
                colorVariant={selectedAmount === 2000 ? 'yellow' : 'light'}
                onClick={() => handleInputValue(2000)}
              />
            </div>

            <div className="form-wrapper__coin_block">
              <Title text="Виберіть монету" />

              <div className="coin-container">
                <div className="coin-container__wrapper">
                  <RadioButton />
                  <div className="coin-container__wrapper--block">
                    <div className="coin-container__wrapper--block__head">
                      <img src={usdtIcon} alt="coin-icon" />
                      <p className="text-bold">USDT</p>
                    </div>
                    <p className="text-tiny-regular">1 USDT = 100 GD</p>
                  </div>
                </div>
                <p className="coin-price text-medium">+ {exchangeCoinValue} USDT</p>
              </div>
            </div>

            <div className="form-wrapper__wallet">
              <Title text="Введіть гаманець" />

              <Input
                type="text"
                placeholder="Введіть номер гаманця"
                {...register('walletId')}
                errorMessage={errors.walletId?.message}
                isValid={isValid}
              />

              <NetworkAccordion />
            </div>
          </div>

          <Button
            text="Поповнити"
            size="large"
            fontSize="title-semi-bold"
            colorVariant="yellow"
            className={`${!isValid && 'disabled'}`}
            disabled={!isValid}
            onClick={() => navigate('payout-detail')}
          />
        </form>
      </div>
    </div>
  )
}
