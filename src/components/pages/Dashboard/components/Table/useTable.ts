import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'

import { supabase } from '@/lib/supabaseClient'
import type { Entry, TeamMaster } from '@/types/supabase'

export const useTable = (gameKey: string) => {
  type EntryItem = Entry & {
    created_at_hhtt: string
    teamJp: string
  }
  const [entryList, setEntryList] = useState<EntryItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    //チーム名リストの取得
    const { data: teamNameData, error: teamNameError } = await supabase
      .from<TeamMaster>('team_master')
      .select('*')
      .order('id')
    if (teamNameError) {
      throw teamNameError
    }
    //エントリーの取得
    const { data, error } = await supabase
      .from<Entry>('entry')
      .select('*')
      .filter('game_key', 'eq', gameKey)
      .order('id')
    if (error) {
      throw error
    }
    if (data) {
      const tableData: EntryItem[] = data.map((item) => {
        //チーム名の加工
        const labelJp = teamNameData.filter(
          (teamNameItem) => teamNameItem.team_value === item.team
        )[0]?.team_name
        //日付の加工
        const date = DateTime.fromISO(item.created_at)
        return {
          ...item,
          created_at_hhtt: date.toLocaleString(DateTime.TIME_SIMPLE),
          teamJp: labelJp,
        }
      })
      setEntryList(tableData)
    }
    setLoading(false)
  }

  //サブスクライブ
  useEffect(() => {
    const subscription = supabase
      .from<Entry>(`entry:game_key=eq.${gameKey}`)
      .on('*', (payload) => {
        fetchData()
      })
      .subscribe()
    //初回フェッチ
    fetchData()
    return () => {
      // アンマウント時にsubscriptionを解除
      if (subscription) {
        supabase.removeSubscription(subscription)
      }
    }
  }, [])
  return { loading, entryList }
}
