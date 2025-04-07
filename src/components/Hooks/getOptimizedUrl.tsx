export const getOptimizedImageUrl = (url: string, width: number) => {
  try {
    // publicフォルダ内の画像の場合は、そのままURLを返す
    if (url.startsWith('/') || url.match(/\.(jpg|jpeg|png|gif)$/i)) {
      return url
    }

    // // 既存のCloudinary用の最適化ロジック
    // const baseUrl = url.split('/upload/')[0] + '/upload/'
    // const imagePath = url.split('/upload/')[1]
    // return `${baseUrl}w_${width},f_auto,q_auto,c_scale,dpr_auto/${imagePath}`
  } catch (error) {
    console.error('Error optimizing image URL:', error)
    return url
  }
}