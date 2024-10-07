import { Button } from '@components/buttons/button/Button'
import { Input } from '@components/inputs/input/Input'
import { Title } from '@components/title/Title'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { DepositAccordion } from '@components/depositAccordion/DepositAccordion'
import goldIcon from '@assets/icon/golden_coins2.svg'
import shibuIcon from '@assets/icon/shiba_inu-small.svg'
import './deposit.scss'

export const Deposit = () => {
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

  const depositValue = watch('depositValue') || 0;

  const handleInputValue = (amount: number) => {
    setValue('depositValue', amount, { shouldValidate: true })
    clearErrors('depositValue')
  }

  const handleClick = () => {
    console.log('click')
  }

  return (
    <div className="deposit-form">
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
            colorVariant="light"
            onClick={() => handleInputValue(750)}
          />
          <Button
            text="1000"
            size="small"
            colorVariant="light"
            onClick={() => handleInputValue(1000)}
          />
          <Button
            text="1500"
            size="small"
            colorVariant="light"
            onClick={() => handleInputValue(1500)}
          />
        </div>

        <div className="deposit-accordion">
          <DepositAccordion />
        </div>
        <Button
          text="Поповнити"
          size="large"
          fontSize='title-semi-bold'
          colorVariant="yellow"
          className={`${!isValid && 'disabled'}`}
          disabled={!isValid}
          onClick={handleClick}
        />

        {isValid && (
          <div className="deposit-info">
            <div className="deposit-info-wrapper">
              <h5 className="text-semi-bold">Ти купуєш {depositValue} Golden Coins</h5>
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
