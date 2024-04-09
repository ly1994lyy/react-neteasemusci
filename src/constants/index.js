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

export {
  FEATURED_TYPE,
  ARTIST_LANGUAGE_TYPE,
  ARTIST_TYPE
}
