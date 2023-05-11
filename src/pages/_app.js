//agregar librerias como:
//formik, react hook forms, toast 
//vercel para desplegarlo
import { TasksProvider } from "./TasksContext";
import Navbar from "../Components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TasksProvider>
        <Navbar />
        <Component {...pageProps} />
      </TasksProvider>
    </>
  );
}

export default MyApp;
