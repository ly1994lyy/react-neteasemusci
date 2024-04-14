// 云音乐精选页面选项卡
const FEATURED_TYPE = [
  { label: '精选', path: 'curation' },
  { label: '歌单广场', path: 'playlist' },
  { label: '排行榜', path: 'rank' },
  { label: '歌手', path: 'artist' },
  { label: 'VIP', path: 'vip' }
]

// 歌手按照语言分类
const ARTIST_LANGUAGE_TYPE = [
  { label: '全部', value: '-1' },
  { label: '华语', value: '7' },
  { label: '欧美', value: '96' },
  { label: '日本', value: '8' },
  { label: '韩国', value: '16' },
  { label: '其他', value: '0' }
]

const ARTIST_TYPE = [
  { label: '全部', value: '-1' },
  { label: '男歌手', value: '1' },
  { label: '女歌手', value: '2' },
  { label: '乐队组合', value: '3' }
]

// 歌手详情页tab
const ARTIST_DETAIL_TAB = [
  { label: '歌曲', path: 'songs' },
  { label: '专辑', path: 'albums' },
  { label: 'MV', path: 'mv' },
  { label: '歌手详情', path: 'desc' },
  { label: '相似歌手', path: 'likeArtists' }
]

export {
  FEATURED_TYPE,
  ARTIST_LANGUAGE_TYPE,
  ARTIST_TYPE,
  ARTIST_DETAIL_TAB
}
