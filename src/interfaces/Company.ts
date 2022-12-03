import Employee from "./Employee"

export default interface Company {
  id: string
  name: string
  email: string
  address: string
  employees: Employee[]
}
