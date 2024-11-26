import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@components/buttons/button/Button'
import { Input } from '@components/inputs/input/Input'
import { Title } from '@components/title/Title'
import './changePasswordPage.scss'

const schema = z
  .object({
    current_password: z
      .string()
      .min(5, 'password must be longer than 5 characters')
      .max(14, 'password should not be longer than 14 characters'),
    password: z
      .string()
      .min(5, 'password must be longer than 5 characters')
      .max(14, 'password should not be longer than 14 characters'),
    confirm_password: z
      .string()
      .min(5, 'password must be longer than 5 characters')
      .max(14, 'password should not be longer than 14 characters'),
  })
  .refine((data) => data.password === data.confirm_password, {
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

  // const onSubmit = async (formData: FormData) => {
  //   const payload = {
  //     name: formData.name,
  //     email: 'ruslan_test_ruslan@rr.rr',
  //     phone: '+ (38) 067 123 4567',
  //   }

  //   try {
  //     const response = await updateAccountName(payload).unwrap()
  //     dispatch(userData(response.data))
  //     navigate(-1)
  //   } catch (error: any) {
  //     console.error('Error during PUT request:', error)
  //     alert('An error occurred while updating the nickname.')
  //   }
  // }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      current_password: '',
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
        <form>
          <Input
            {...register('current_password')}
            errorMessage={errors.current_password?.message}
            type="password"
            isValid={isValid}
            placeholder="Активний пароль"
            name="current_password"
          />
          <Input
            {...register('password')}
            errorMessage={errors.password?.message}
            type="password"
            isValid={isValid}
            placeholder="Новий пароль"
            name="password"
          />
          <Input
            {...register('confirm_password')}
            errorMessage={errors.confirm_password?.message}
            type="password"
            isValid={isValid}
            placeholder="Підтвердити пароль"
            name="confirm_password"
          />
          <Button
            type="submit"
            colorVariant="yellow"
            text="Підтвердити"
            marginBottom="8px"
          />
          <Button onClick={handleEditClick} text="Скасувати" />
        </form>
      </div>
    </div>
  )
}
