import { useState, useMemo } from "react";
import styles from "./styles.module.css";
import { users } from "@/components/UserListWithSearch/usersData";
import UserSearchInput from "@/components/UserListWithSearch/UserSearchInput";
import UserList from "@/components/UserListWithSearch/UserList";
import NoResults from "@/components/UserListWithSearch/NoResults";

export default function UserListWithSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <h2>User List</h2>
      <UserSearchInput searchTerm={searchTerm} onChange={setSearchTerm} />
      {filteredUsers.length > 0 ? (
        <UserList users={filteredUsers} />
      ) : (
        <NoResults />
      )}
    </div>
  );
}
