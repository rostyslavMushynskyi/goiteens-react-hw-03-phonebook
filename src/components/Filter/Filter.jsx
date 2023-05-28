import { TextField } from "@mui/material";

function Filter({ filter, setFilter }) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      margin="normal"
      type="text"
      label="Search"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Пошук контактів за ім'ям"
    />
  );
}
export default Filter;
