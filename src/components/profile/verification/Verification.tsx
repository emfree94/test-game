import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@components/inputs/input/Input'
import { Title } from '@components/title/Title'
import { InputPhone } from '@components/inputs/InputPhone/InputPhone'
import './verification.scss'

const schema = z.object({
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Invalid phone number')
})

type FormData = z.infer<typeof schema>

export const Verification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      phone: '',
    },
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onBlur',
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className="verification">
      <Title text='Верифікація' />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Input
          {...register('email')}
          errorMessage={errors.email?.message}
          type="email"
          placeholder="Введіть email"
          isValid={isValid}
        />
        <InputPhone
          {...register('phone')}
          errorMessage={errors.phone?.message}
          type="tel"
          placeholder="Введіть номер телефону"
          isValid={isValid}
        />
      </form>
    </div>
  )
}
