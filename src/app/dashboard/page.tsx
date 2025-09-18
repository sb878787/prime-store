// Components
import Container from "@/components/Container"
import AddItemForm from "@/components/dashboard/AddItemForm"

const Dashboard = () => {
  return (
    <Container>
        <h1 className="text-2xl font-bold mt-4">Dashboard</h1>

        <AddItemForm />
    </Container>
  )
}

export default Dashboard