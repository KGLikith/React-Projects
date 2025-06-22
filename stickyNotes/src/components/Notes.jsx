import React, { createRef, useEffect, useRef, useState } from "react";
import Note from "./Note";

const Notes = ({ notes, setnotes,count,setcount }) => {
    const [value, setvalue] = useState()

    useEffect(()=>{
        // localStorage.clear() 
        // if the note is already present in the local storage
        const savedNotes = JSON.parse(localStorage.getItem("Notes")) ;
        console.log(savedNotes)
        if(savedNotes) {
            setnotes(savedNotes);
        }
    },[])

  useEffect(() => {
    // local storage
    const updatedNotes = notes.map((note) => {
        if(note.position){
            return {...note,position:note.position}
        }else{
            const position = determineNewPosition();
            return { ...note, position };
        }
    });
    if(updatedNotes.length!=0){
        localStorage.setItem("Notes", JSON.stringify(updatedNotes));
        setnotes(updatedNotes);
    }
  }, [notes.length]);

  const noterefs = useRef([]);

  const determineNewPosition = () => {
    const maxX = window.innerWidth - 300; //windows width - width of the note....
    const maxY = window.innerHeight - 300;
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    }
  };

  const handleDragStart = (e, note) => {
    const { id } = note;
    const noteref = noterefs.current[id].current;
    const rect = noteref.getBoundingClientRect();

    const offsetX = e.clientX - rect.left; //clientx=> where the mouse is .. rect.left=> where the note(distance from the screen to the left)
    // offsetx gives the distance between the noteleft to the mouse touch... like (it s less than the distance of the note logically)
    const offsetY = e.clientY - rect.top; //same goes for this

    const startPosn = note.position; // just if the notes overlap...
    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX; // where the mouse is (actual distance without any refernce) - where the mouse is(with refernce to the left of note)
      const newY = e.clientY - offsetY; // this will give the distance of left of the note to the screen...
      noteref.style.left = `${newX}px`;
      noteref.style.top = `${newY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      const finalRect = noteref.getBoundingClientRect();
      const newPosition = {
        x: finalRect.left,
        y: finalRect.top,
      };

      // check for overlap..
      if (checkforoverlap(id)) {
        noteref.style.left = `${startPosn.x}px`;
        noteref.style.top = `${startPosn.y}px`;
      } else {
        updateNotePosition(id, newPosition);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

  };

  const checkforoverlap = (id) => { 
    const currentnoteref = noterefs.current[id].current;
    const rect = currentnoteref.getBoundingClientRect();
    // this will return the boolean value...
    return notes.some((note) => {
      if (note.id === id) return false;

      const othernoteref = noterefs.current[note.id].current;
      const otherrect = othernoteref.getBoundingClientRect();
      const overlap =
       (rect.right > otherrect.left &&
        rect.left < otherrect.right &&
        rect.bottom > otherrect.top &&
        rect.top < otherrect.bottom);
      return overlap;
    });
  };
  
  const updateNotePosition = (id, newPos) => {
    const updatedNotes = notes.map((note) =>
      note.id == id ? { ...note, position: newPos } : note
    );
    setnotes(updatedNotes);
    localStorage.setItem("Notes", JSON.stringify(updatedNotes));
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        style={{
          width: "300px",
          height: "40px",
          backgroundColor: "lightyellow",
          paddingLeft: "10px",
          fontFamily: "sans-serif",
          fontSize: "20px",
          marginRight:"20px"
        }}
        onChange={(e)=>{
            setvalue(e.target.value)
        }}
        value={value}
        type="text"
        placeholder="Enter the text"
      />
      <button 
        onClick={()=>{
          const updatednotes=[...notes,{
              id:count+1,
              text:value
          }]
          setvalue("")
          setnotes(updatednotes)
          setcount(count+1)
        }}>Submit
      </button>

      {notes.map((note) => {
        if(note) 
        return (
          <Note 
            key={note.id}
            ref={
              noterefs.current[note.id]
                ? noterefs.current[note.id]
                : (noterefs.current[note.id] = createRef())
            }
            content={note.text}
            position={note.position}
            onMouseDown={(e) => handleDragStart(e, note)}
          />
        );
      })}
    </div>
  );
};

export default Notes;
