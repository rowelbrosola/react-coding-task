import { type User } from "./usersData";
import styles from "./styles.module.css";

interface Props {
  user: User;
}

export default function UserListItem({ user }: Props) {
  return (
    <li className={styles.listItem}>
      <strong>{user.name}</strong> — {user.email} ({user.role})
    </li>
  );
}
