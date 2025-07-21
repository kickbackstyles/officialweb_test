'use client'

import { init, send } from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { Input } from '../../ui/input'
import { Textarea } from '../../ui/textarea'

const formShema = z.object({
  name: z.string().min(2, { message: '2文字以上で入力してください' }),
  email: z
    .string()
    .email({ message: 'メールアドレスの形式ではありません。例: @~.com など' }),
  content: z.string().min(1, { message: 'お問い合わせ内容は入力必須です。' }),
})

type formType = z.infer<typeof formShema>

const Contact = (): JSX.Element => {
  const router = useRouter()
  const [buttonText, setButtonText] = useState<React.ReactNode>('送信')

  const form = useForm<formType>({
    resolver: zodResolver(formShema),
    defaultValues: {
      name: '',
      email: '',
      content: '',
    },
  })

  const onSubmit: SubmitHandler<formType> = async (data: formType) => {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

    const { name, email, content } = data

    if (userId && serviceId && templateId) {
      setButtonText(
        <div className="size-sm animate-spin rounded-full border-2 border-white border-t-transparent sm:size-xs"></div>,
      )

      //emailjsを初期化する
      init(userId)

      //送信するデータを定義する
      const params = {
        name,
        email,
        content,
      }

      //送信する
      await send(serviceId, templateId, params)

      router.push('/contact/thanks') // ここでリダイレクト
    }
  }

  return (
    <div className="container flex h-[210vw] items-center border-none sm:h-auto">
      <div className="mx-md w-full sm:mb-xl sm:ml-2xl sm:mt-2xl lg:w-3/5">
        <h2 className="mb-xl text-md font-bold sm:mb-lg sm:text-md-pc">
          お問い合わせ
        </h2>

        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="relative">
                    名前
                    <span className="absolute -right-sm -top-xs text-xs sm:-right-xxs sm:-top-xxxs sm:text-sm-pc">
                      ＊
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="relative">
                    メールアドレス
                    <span className="absolute -right-sm -top-xs text-xs sm:-right-xxs sm:-top-xxxs sm:text-sm-pc">
                      ＊
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="relative">
                    お問い合わせ内容
                    <span className="absolute -right-sm -top-xs text-xs sm:-right-xxs sm:-top-xxxs sm:text-sm-pc">
                      ＊
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder=""
                      {...field}
                      className="h-[200px] resize-none"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>{buttonText}</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Contact
