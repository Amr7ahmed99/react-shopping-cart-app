import React, { useState, useEffect } from "react";
import "../../../css/main/Main.css";
import { words } from "../../../words";
import Products from "../products/Products";
// import data from '../../../data.json';

export default function Main() {
  return (
    <main>
        <Products />      
    </main>
  );
}
