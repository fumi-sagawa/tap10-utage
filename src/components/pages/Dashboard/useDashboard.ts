import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { supabase } from '@/lib/supabaseClient'

export const useDashboard = () => {
  //
  const [isModalVisible, setIsModalVisible] = useState(false)
  const openModal = () => {
    setIsModalVisible(true)
  }
  const closeModal = () => {
    setIsModalVisible(false)
  }

  return { openModal, closeModal, isModalVisible }
}
