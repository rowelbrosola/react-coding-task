import styles from "./styles.module.css";

interface Props {
  searchTerm: string;
  onChange: (value: string) => void;
}

export default function UserSearchInput({ searchTerm, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  );
}
