import Layout from "../components/templates/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notifications() {

  const context = useAppData()

  return (
    <Layout title="Notifications" subtitle="Here you can see your notifications">
      <h3>{context.name}</h3>
    </Layout>
  )
}
