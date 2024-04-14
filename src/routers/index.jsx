import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import Main from '@/layout/Main.jsx'
import Featured from '@/pages/musicFeatured'
import Loading from '@/components/Loading.jsx'

const PlayList = lazy(() => import('@/pages/musicFeatured/playlist'))
const Vip = lazy(() => import('@/pages/musicFeatured/vip'))
const Rank = lazy(() => import('@/pages/musicFeatured/rank'))
const Curation = lazy(() => import('@/pages/musicFeatured/curation'))
const Artist = lazy(() => import('@/pages/musicFeatured/artist'))
const ArtistDetail = lazy(() => import('@/pages/musicFeatured/artist/detail'))

const ArtistSongs = lazy(() => import('@/pages/musicFeatured/artist/detail/songs'))
const ArtistAlbums = lazy(() => import('@/pages/musicFeatured/artist/detail/albums'))
const ArtistMv = lazy(() => import('@/pages/musicFeatured/artist/detail/mv'))
const ArtistDesc = lazy(() => import('@/pages/musicFeatured/artist/detail/desc'))
const ArtistLikes = lazy(() => import('@/pages/musicFeatured/artist/detail/likeArtists'))

const Routers = () => {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: 'featured',
          element: <Featured />,
          children: [
            { path: 'playlist', element: <Loading><PlayList /></Loading> },
            { path: 'vip', element: <Loading><Vip /></Loading> },
            { path: 'rank', element: <Loading><Rank /></Loading> },
            { path: 'curation', element: <Loading><Curation /></Loading> },
            { path: 'artist', element: <Loading><Artist /></Loading> }
          ]
        },
        {
          path: 'artist/:id',
          element: <Loading><ArtistDetail /></Loading>,
          children: [
            { path: 'songs', element: <Loading><ArtistSongs /></Loading> },
            { path: 'albums', element: <Loading><ArtistAlbums /></Loading> },
            { path: 'mv', element: <Loading><ArtistMv /></Loading> },
            { path: 'desc', element: <Loading><ArtistDesc /></Loading> },
            { path: 'likeArtists', element: <Loading><ArtistLikes /></Loading> }
          ]
        }
      ]
    }
  ])
}

export default Routers
