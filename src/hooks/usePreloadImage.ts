import { useEffect } from 'react'

import { memberInfoList } from '@/constants/memberInfo'

export const usePreloadImage = () => {
  useEffect(() => {
    memberInfoList.forEach((item) => {
      const img = new Image()
      img.src = item.illustrationImageSrc
    })
  }, [])
}
