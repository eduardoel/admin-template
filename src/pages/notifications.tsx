import Layout from "../components/templates/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notifications() {

  const { switchTheme } = useAppData()

  return (
    <Layout title="Notifications" subtitle="Here you can see your notifications">
      <button onClick={switchTheme}>Switch</button>
    </Layout>
  )
}
