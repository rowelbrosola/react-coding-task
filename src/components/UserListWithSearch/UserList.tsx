import { type User } from "./usersData";
import UserListItem from "./UserListItem";
import styles from "./styles.module.css";

interface Props {
  users: User[];
}

export default function UserList({ users }: Props) {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
