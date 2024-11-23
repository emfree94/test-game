import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@components/buttons/button/Button'
import { Input } from '@components/inputs/input/Input'
import { Title } from '@components/title/Title'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './changeNicknamePage.scss'

const schema = z.object({
  nickname: z
    .string()
    .min(3, 'Name must be longer than 3 letters')
    .max(32, 'To long name'),
})

type FormData = z.infer<typeof schema>

export const ChangeNicknamePage: FC = () => {
  const navigate = useNavigate()
  const methods = useForm()

  const handleEditClick = () => {
    navigate(-1)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      nickname: '',
    },
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onBlur',
  })
  const valueInput = watch('nickname')
  const inputLength = valueInput ? valueInput.length : 0

  return (
    <div className="nickname-container">
      <Title text="Зміна нікнейму" marginBottom="14px" />

      <div className="form-block">
        <form action="">
          <Input
            {...register('nickname')}
            errorMessage={errors.nickname?.message}
            type="text"
            isValid={isValid}
            placeholder="Nickname"
            name="nickname"
            inputLength={inputLength}
          />
        </form>
      </div>

      <Button colorVariant="yellow" text="Підтвердити" marginBottom="8px" />
      <Button onClick={handleEditClick} text="Скасувати" />
    </div>
  )
}
