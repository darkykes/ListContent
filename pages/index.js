import React, {useState , createContext}from 'react';
import ShowDataList from '../components/ShowListData';
import SearchBar from '../components/SearchBar';

export const dataContext = createContext(null);

export default function index() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <dataContext.Provider value={{searchTerm, setSearchTerm}} style={{ marginTop: 20}}><SearchBar/><ShowDataList/>
    </dataContext.Provider>
  )
}
