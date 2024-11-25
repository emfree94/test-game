import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@components/buttons/button/Button'
import { Input } from '@components/inputs/input/Input'
import { Title } from '@components/title/Title'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './changeNicknamePage.scss'
import { useUpdateAccountNameMutation } from 'features/api/putSlice'
import { useDispatch } from 'react-redux'
import { userData } from 'features/response/responseSlice'

const schema = z.object({
  name: z
    .string()
    .min(3, 'Name must be longer than 3 letters')
    .max(32, 'To long name'),
})

type FormData = z.infer<typeof schema>

export const ChangeNicknamePage: FC = () => {
  const navigate = useNavigate()
  const methods = useForm()
  const [updateAccountName, { isLoading, data, isError }] = useUpdateAccountNameMutation()
  const dispatch = useDispatch()

  const onSubmit = async (formData: FormData) => {
    const payload = {
      name: formData.name, 
      email: 'ruslan_test_ruslan@rr.rr',
      phone: '+ (38) 067 123 4567',
    }

    try {
     await updateAccountName(payload).unwrap()
      dispatch(userData(data.data))
    } catch (error: any) {
      alert(isError)
    }
  }

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
      name: '',
    },
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onBlur',
  })
  const valueInput = watch('name')
  const inputLength = valueInput ? valueInput.length : 0

  return (
    <div className="nickname-container">
      <Title text="Зміна нікнейму" marginBottom="14px" />

      <div className="form-block">
      <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('name')}
            errorMessage={errors.name?.message}
            type="text"
            isValid={isValid}
            placeholder="name"
            name="name"
            inputLength={inputLength}
          />
        </form>
      </div>

      <Button type='submit' colorVariant="yellow" text="Підтвердити" marginBottom="8px" />
      <Button onClick={handleEditClick} text="Скасувати" />
    </div>
  )
}
