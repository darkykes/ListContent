import React from 'react';
import ShowDataList from '../components/ShowListData';
import { useState } from 'react';

export default function index() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ marginTop: 20}}><ShowDataList searchTerm={searchTerm} setSearchTerm ={setSearchTerm}/></div>
  )
}
