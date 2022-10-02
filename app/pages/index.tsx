import Layout from '../components/layout'
import NotificationPage, { Props as NotificationPageProps } from '../components/notification-page'
import { INotification } from '../interfaces'

const baseURL = process.env.VERCEL_URL ? process.env.VERCEL_URL : 'http://localhost:3000'

export async function getStaticProps() {
  const res = await fetch(`${baseURL}/api/notifications`)
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
      <div className="w-[680px] my-auto">
        <NotificationPage {...props} />
      </div>
    </Layout>
  );
}

export default Home
