import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@components/buttons/button/Button'
import { Input } from '@components/inputs/input/Input'
import { Title } from '@components/title/Title'

const schema = z
  .object({
    password: z
      .string()
      .min(5, 'password must be longer than 5 characters')
      .max(14, 'password should not be longer than 14 characters'),
    confirm_password: z
      .string()
      .min(5, 'password must be longer than 5 characters')
      .max(14, 'password should not be longer than 14 characters'),
  })
  .refine((data) => data.confirm_password !== data.password, {
    path: ['confirm_password'],
    message: 'Password not match',
  })

type FormData = z.infer<typeof schema>

export const ChangePasswordPage: FC = () => {
  const navigate = useNavigate()
  const methods = useForm()

  const handleEditClick = () => {
    navigate('/profile')
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      password: '',
      confirm_password: '',
    },
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onBlur',
  })

  return (
    <div className="nickname-container">
      <Title text="Зміна паролю" marginBottom="14px" />

      <div className="form-block">
        <form action="">
          <Input
            {...register('password')}
            errorMessage={errors.password?.message}
            type="password"
            isValid={isValid}
            placeholder="Активний пароль"
            name="password"
          />
          <Input
            {...register('confirm_password')}
            errorMessage={errors.confirm_password?.message}
            type="password"
            isValid={isValid}
            placeholder="Новий пароль"
            name="confirm_password"
          />
        </form>
      </div>

      <Button colorVariant="yellow" text="Підтвердити" marginBottom="8px" />
      <Button onClick={handleEditClick} text="Скасувати" />
    </div>
  )
}
