import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@components/buttons/button/Button'
import { Input } from '@components/inputs/input/Input'
import { Title } from '@components/title/Title'
import { DepositAccordion } from '@components/depositAccordion/DepositAccordion'
import goldIcon from '@assets/icon/golden_coins2.svg'
import shibuIcon from '@assets/icon/shiba_inu-small.svg'
import './deposit.scss'

export interface DepositProps {
  activeComponent: string
  setActiveComponent: (component: string) => void
}

export const Deposit: FC<DepositProps> = ({
  activeComponent,
  setActiveComponent,
}) => {
  const navigate = useNavigate()

  const schema = z.object({
    depositValue: z.coerce
      .number()
      .min(500, 'deposit must be more than 500 coins'),
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
      depositValue: undefined,
    },
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onBlur',
  })

  const depositValue = watch('depositValue') || 0

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)

  const handleInputValue = (amount: number) => {
    setValue('depositValue', amount, { shouldValidate: true })
    clearErrors('depositValue')
    setSelectedAmount(amount)
  }

  return (
    <div className="deposit-form">
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
          size="medium"
          fontSize={activeComponent === 'payout' ? 'text-bold' : 'text-semi-bold additional-button-color'}
          colorVariant={activeComponent === 'payout' ? 'yellow' : 'light'}
          onClick={() => setActiveComponent('payout')}
        />
      </div>

      <Title text="Введіть суму" />
      <form action="">
        <Input
          type="number"
          placeholder="Введіть суму"
          {...register('depositValue')}
          errorMessage={errors.depositValue?.message}
          isValid={isValid}
          coinIcon
        />
      </form>

      <div className="form-buttons">
        <Button
          text="750"
          size="small"
          colorVariant={selectedAmount === 750 ? 'yellow' : 'light'}
          onClick={() => handleInputValue(750)}
        />
        <Button
          text="1000"
          size="small"
          colorVariant={selectedAmount === 1000 ? 'yellow' : 'light'}
          onClick={() => handleInputValue(1000)}
        />
        <Button
          text="1500"
          size="small"
          colorVariant={selectedAmount === 1500 ? 'yellow' : 'light'}
          onClick={() => handleInputValue(1500)}
        />
      </div>

      <div className="deposit-accordion">
        <DepositAccordion />
      </div>
      <Button
        text="Поповнити"
        size="large"
        fontSize="title-semi-bold"
        colorVariant="yellow"
        className={`${!isValid && 'disabled'}`}
        disabled={!isValid}
        onClick={() => navigate('refill-account')}
      />

      {isValid && (
        <div className="deposit-info">
          <div className="deposit-info-wrapper">
            <h5 className="text-semi-bold">
              Ти купуєш {depositValue} Golden Coins
            </h5>
            <img src={goldIcon} alt="coin-icon" />
          </div>
          <div className="deposit-info-wrapper">
            <p className="text-regular">За 1 200 Shiba Uno </p>
            <img src={shibuIcon} alt="coin-icon" />
          </div>
        </div>
      )}
    </div>
  )
}
