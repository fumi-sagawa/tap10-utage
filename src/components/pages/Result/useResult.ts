import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { average } from '@/hooks/utility'
import { supabase } from '@/lib/supabaseClient'
import type { Entry, TeamMaster } from '@/types/supabase'

export const useResult = () => {
  const router = useRouter()
  const [pageState, setPageState] = useState<'scoretop' | 'ranking'>('scoretop')

  const [topTeam, setTopTeam] = useState<{
    teamNameJp: string
    average: number
  }>()
  const [loading, setLoading] = useState(true)
  //エントリーの取得
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
      .filter('game_key', 'eq', router.query.key)
      //あらかじめ降順で取得しておく
      .order('tap_count', { ascending: false })
    if (error) {
      throw error
    }
    if (data) {
      //ユニークなteam名配列の抽出
      const teamListFromEntry = data.map((item) => item.team)
      const uniqueTeamList = Array.from(new Set(teamListFromEntry))
      //平均値、名前、並び替え済みのエントリーデータをチーム毎に格納
      const processedData = uniqueTeamList.map((teamItem) => {
        //チーム名の日本語追加
        const labelJp = teamNameData.filter(
          (teamNameItem) => teamNameItem.team_value === teamItem
        )[0]?.team_name
        //チーム毎のタップスコア配列を取得
        const scoreListByTeam = data.filter(
          (entryItem) => entryItem.team === teamItem
        )
        //平均値を正しく求めるためプレイ済みのデータのみを抽出
        const notNullScoreListByTeam = scoreListByTeam.filter(
          (entryItem) => entryItem.played
        )
        //平均値を取得
        const tapCountAverage = average(
          notNullScoreListByTeam.map((item) => item.tap_count)
        )
        // くらえ！
        return {
          teamNameJp: labelJp,
          average: tapCountAverage,
        }
      })
      //平均値を元に並び替えを行う
      const sortedByAverageData = processedData
        .slice()
        .sort((first, second) => second.average - first.average)
      setTopTeam(sortedByAverageData[0])
    }
    setLoading(false)
  }

  const handleClickDetail = () => {
    setPageState('ranking')
  }

  useEffect(() => {
    if (router.isReady) {
      fetchData()
    }
  }, [router.isReady])

  return { handleClickDetail, topTeam, loading, pageState }
}
