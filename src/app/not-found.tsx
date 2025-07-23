import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ページが見つかりません',
  description: 'お探しのページは見つかりませんでした。KickBackStylesのトップページにお戻りください。',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'ページが見つかりません | KickBackStyles',
    description: 'お探しのページは見つかりませんでした。KickBackStylesのトップページにお戻りください。',
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          ページが見つかりません
        </h2>
        <p className="mb-8 text-gray-600">
          お探しのページは存在しないか、移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="rounded bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  )
} 