import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField } from "@mui/material";
import "../index.css";
import SearchIcon from "@mui/icons-material/Search";
import "../index.css";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,

        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <TextField
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="standard"
        sx={{
          width: { sm: 150, md: 250 },
          "& .MuiInputBase-root": {
            height: 40,
          },
        }}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
