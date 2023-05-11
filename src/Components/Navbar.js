import Link from "next/link";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();

  return (
    <div>
      <header>
        <Link href="/">
          <p>Task App</p>
        </Link>
        <div>
          <button onClick={() => router.push("/AddNewTask")}>Add Task</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
