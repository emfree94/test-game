import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@components/buttons/button/Button'
import { Input } from '@components/inputs/input/Input'
import { Title } from '@components/title/Title'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
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
  const [updateAccountName, { isLoading, data, isError }] =
    useUpdateAccountNameMutation()
  const dispatch = useDispatch()

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

  const onSubmit = async (formData: FormData) => {
    const payload = {
      name: formData.name,
      email: 'ruslan_test_ruslan@rr.rr',
      phone: '+ (38) 067 123 4567',
    }

    try {
      const response = await updateAccountName(payload).unwrap()
      dispatch(userData(response.data))
      navigate(-1)
    } catch (error: any) {
      console.error('Error during PUT request:', error)
      alert('An error occurred while updating the nickname.')
    }
  }

  return (
    <div className="nickname-container">
      {isError && <div className="">{isError}</div>}
      {<div className="">{data}</div>}
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

          <Button
            type="submit"
            colorVariant="yellow"
            text="Підтвердити"
            marginBottom="8px"
          />
        </form>
      </div>

      <Button onClick={handleEditClick} text="Скасувати" />
    </div>
  )
}
