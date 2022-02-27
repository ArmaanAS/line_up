import { useEffect, useState } from "react";
import { User } from "../types/UserTypes";
import UserInfo from "./UserInfo";

/**
 * Paginated table component to display reqres.in test user data
 * 
 * @returns UserTable component
 */
export default function UserTable() {
  // States
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loadPage, LoadPage] = useState<number | undefined>();
  const [totalPages, setTotalPages] = useState(2);
  const [focusedUser, setFocusedUser] = useState<User | undefined>();

  // Fetch current page data on either
  // - first render
  // - loadPage state change
  useEffect(() => {
    (async () => {
      const res = await (await fetch(`https://reqres.in/api/users?page=${loadPage}`)).json();

      setPage(loadPage || 1);
      setUsers(res.data);
      setTotalPages(res.total_pages);
    })();
  }, [loadPage]);


  // Render table and pagination page selector
  return (<>
    <div className="mb-4 text-lg overflow-hidden rounded-xl border border-slate-300 dark:border-slate-700 font-semibold shadow-2xl shadow-gray-600/30 dark:shadow-gray-900/50">
      <hr className="bg-blue-300 dark:bg-blue-400 h-2.5 shadow-md shadow-blue-400 border-0" />

      <div className="grid grid-cols-2 px-4 py-2 border-bx border-slate-300 dark:border-slate-700 text-xl font-bold tracking-tight text-slate-600 dark:text-blue-100 bg-gray-200 dark:bg-gray-900">
        <span>Name</span>
        <span>Email</span>
      </div>

      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        {users.map((user, i) => (
          <div
            onClick={() => setFocusedUser(user)}
            className="grid grid-cols-2 items-center px-4 pt-2 pb-2 hover:bg-gray-200 hover:dark:bg-gray-700 cursor-pointer">
            <span className="flex items-center">
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name} avatar`}
                className="w-12 h-12 rounded-full mr-4" />
              {user.first_name} {user.last_name}
            </span>
            <span className="font-mono text-slate-500 dark:text-slate-400 tracking-tight">{user.email}</span>
          </div>
        ))}
      </div>
    </div>

    <ol className="flex gap-2 text-lg">
      {new Array(totalPages).fill(0).map((_, i) => i + 1).map(i => (
        <li><button type="button"
          onClick={() => LoadPage(i)}
          className={`bg-white rounded-full w-10 h-10 dark:highlight-white/20 font-bold text-gray-400 dark:text-gray-300 ${page === i ? "dark:bg-gray-500 text-gray-800 dark:text-white" : "dark:bg-slate-800"}`}>{i}</button></li>
      ))}
    </ol>

    <UserInfo user={focusedUser} open={!!focusedUser} close={() => setFocusedUser(undefined)} />
  </>);
}