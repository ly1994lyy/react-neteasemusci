import { Divider, Menu } from 'antd'
import types from './index.module.less'
import logo from '@/assets/logo.svg'
import LayoutHeader from './header'
import Content from './content'
import Player from './player'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const items = [
  getItem('为我推荐', '1'),
  getItem('云音乐精选', '2'),
  getItem('博客', '3'),
  getItem('社区', '4')
]

const items2 = [
  getItem('我喜欢的音乐', '5'),
  getItem('最近播放', '6'),
  getItem('我的博客', '7'),
  getItem('我的收藏', '8'),
  getItem('下载管理', '9'),
  getItem('本地音乐', '10'),
  getItem('我的音乐网盘', '11')
]

const titles = ['网', '易', '云', '音', '乐']

function Main() {
  return (
    <div className={types.mainContainer}>
      <div className={types.mainLeft}>
        <div className={types.headerContainer}>
          <img className={types.logo} src={logo} alt="" />
          <div className={types.title}>
            {titles.map((e, i) => (
              <div className={types.word} key={i}>
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className={types.nav}>
          <Menu
            className={types.menu}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            mode="inline"
            items={items}
          />
        </div>
        <Divider style={{ background: '#27272E' }} />
        <div className={types.nav}>
          <Menu
            className={types.menu}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            mode="inline"
            items={items2}
          />
        </div>
        <Divider style={{ background: '#27272E' }} />
      </div>
      <div className={types.mainRight}>
        <LayoutHeader />
        <Content />
      </div>
      <div className={types.player}>
        <Player />
      </div>
    </div>
  )
}

export default Main
