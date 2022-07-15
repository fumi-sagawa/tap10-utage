import { useEffect, useState } from 'react'

import { supabase } from '@/lib/supabaseClient'
import type { TeamMaster } from '@/types/supabase'

export const useTeamSelectOption = () => {
  //supabaase
  const [teamList, setTeamList] = useState<TeamMaster[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase
        .from<TeamMaster>('team_master')
        .select('*')
        .order('id')
      if (error) {
        throw error
      }
      if (data) {
        setTeamList(data)
      }
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    // supabaseからデータを取得
    fetchData()
  }, [])
  const selectOptions: { value: string; label: string }[] = teamList.map(
    (item) => {
      return {
        value: item.team_value,
        label: item.team_name,
      }
    }
  )
  return {
    selectOptions,
    loading,
  }
}
