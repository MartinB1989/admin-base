import NavBar from '../components/NavBar'

const MainLayout = ({ children }) => {
  return (
    <div style={{margin: 'auto'}}>
      <NavBar />
      {children}
    </div>
  )
}

export default MainLayout