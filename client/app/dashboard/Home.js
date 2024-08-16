"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../component/Header";
import AddNewNote from "../component/AddNewNotes";

function Home() {
  // Event handler to log the note to the console and another new div
  const addNewNote = async () => {
    // try {
    //   //Make a POST Request to add a new note
    //   const response = await axios.post("http://localhost:4000/notes/save", {
    //     description: note,
    //   });
    //   setNotesArray([...notesArray, response.data.note]); // Assume the response contains the new note
    //   setNote(""); //Clear the input after adding note
    //   // Show success alert
    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "Note description successfully saved!",
    //     showConfirmButton: false,
    //     timer: 3000,
    //   });
    //   console.log(response.data.note);
    // } catch (error) {
    //   console.error("Error adding note:", error);
    // }
  };

  return (
    <div>
      <Header />
      <AddNewNote />
    </div>
  );
}

export default Home;
