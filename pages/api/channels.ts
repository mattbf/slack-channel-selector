// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type SlackChannel = {
  name: string
  id: string
}

type Response = {
  data: SlackChannel[]
  hasNextPage: boolean
}

const channels: SlackChannel[] = [
  { name: 'general', id: 'C03CNQ18X98' },
  { name: 'bugs', id: 'C03NXMSL3S5' },
  { name: 'tweets', id: 'C03P8Q9R1AL' },
  { name: 'deals', id: 'C04E2VDU57E' },
  { name: 'feedback', id: 'C04E6T90Y8Z' },
  { name: 'engineering', id: 'C04ECKBPHTK' },
  { name: 'wip', id: 'C04ES2B8N3B' },
  { name: 'slack-app-testing', id: 'C04FYSC2UAU' },
  { name: 'design', id: 'C04HERXK3QU' },
  { name: 'product', id: 'C04HNUN79L7' },
  { name: 'api-alerts', id: 'C04J3BUV5S7' },
  { name: 'web-alerts', id: 'C04J5UXQNAG' },
  { name: 'rant', id: 'C04JBEBFUDC' },
  { name: 'noob', id: 'C04JC2274H3' },
  { name: 'eng-ops', id: 'C04JG4BN3B3' },
  { name: 'wins', id: 'C04JK0H9JL8' },
  { name: 'shitpost', id: 'C04K37Z10QH' },
  { name: 'shipped', id: 'C04KJL01BK2' },
  { name: 'signups', id: 'C04LYDVE8E5' },
  { name: 'office', id: 'C04M2B0AFPW' },
  { name: 'inspo', id: 'C04P8582DD4' },
  { name: 'yolo', id: 'C04S5FPEX54' },
  { name: 'proj-canvas-comments', id: 'C050GN7GE9G' },
  { name: 'proj-custom-digests', id: 'C050KFD5BNG' },
  { name: 'community', id: 'C0514RWGTUJ' },
  { name: 'emails', id: 'C052YUTP5QA' },
  { name: 'nyc-2023', id: 'C054FG72RN1' },
  { name: 'proj-public-posts', id: 'C0557FHR933' },
  { name: 'proj-task-integrations', id: 'C055XCAFTEG' },
  { name: 'proj-billing', id: 'C056QDJTX7X' },
  { name: 'proj-pricing-page', id: 'C0537PH6971' },
  { name: 'proj-favorites', id: 'C05FGHFGA0H' },
  { name: 'proj-private-projects', id: 'C054US44P7V' }
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  console.log(req.url)
  const { searchParams } = new URL(`http://localhost/${req.url}`)
  const searchParam = searchParams.get('q')
  const filteredChannels = searchParam ? channels.filter((channel) => channel.name.includes(searchParam)) : channels
  const pageParam = searchParams.get('page')
  const page = pageParam ? parseInt(pageParam) : 1
  const perPage = 10
  const start = (page - 1) * perPage
  const end = start + perPage
  const hasNextPage = end < filteredChannels.length

  res.status(200).json({ data: filteredChannels.slice(start, end), hasNextPage })
}
