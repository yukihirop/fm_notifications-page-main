import Layout from '../components/layout'
import NotificationPage, { Props as NotificationPageProps } from '../components/notification-page'
import { INotification } from '../interfaces'

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";
  const res = await fetch(`${baseURL}/api/notifications`);
  const items: INotification[] = await res.json();
  const unreadCount = items.filter((i) => i.isUnread).length;
  return {
    props: {
      items,
      unreadCount,
    },
  };
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
