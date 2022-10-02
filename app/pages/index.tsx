import Layout from '../components/layout'
import NotificationPage, { Props as NotificationPageProps } from '../components/notification-page'
import { INotification } from '../interfaces'

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/notifications')
  const items: INotification[] = await res.json()
  const unreadCount = items.filter(i => i.isUnread).length
  return {
    props: {
      items,
      unreadCount
    }
  }
}

const Home = (props: NotificationPageProps) => {
  return (
    <Layout>
      <div className="w-[734px]">
        <NotificationPage {...props} />
      </div>
    </Layout>
  )
}

export default Home
