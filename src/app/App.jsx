import Router from "./routing/Router";
import TasksPage from "@/pages/TasksPage";
import taskPage from "@/pages/TaskPage";
import './styles'


const App = () => {

  const routes = {
    '/': TasksPage,
    '/tasks/:id': taskPage,
    '*': () => <div>404 Page not found</div>
  }

  return (
    <Router routes={routes} />
  )
};

export default App;
