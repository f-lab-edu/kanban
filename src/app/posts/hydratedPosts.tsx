import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import getQueryClient from '@/hooks/getQueryClient'
import Posts from './posts'
import { getPosts } from './getPosts'

export default async function HydratedPosts() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['posts'], getPosts)
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <Posts />
    </HydrationBoundary>
  )
}