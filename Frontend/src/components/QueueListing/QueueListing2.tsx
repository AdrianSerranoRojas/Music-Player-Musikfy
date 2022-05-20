// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// import QueueCard from "../QueueCard/QueueCard";

// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const reorder = (list, startIndex, endIndex) => {
//   const result = [...list];
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };
// const initialTasks = [
//   {
//     audio: "",
//     isPlaying: false,
//     songArtist: "xcxc",
//     songGenre: "xcxc",
//     songName: "pe",
//   },
//   {
//     audio: "",
//     isPlaying: false,
//     songArtist: "cvbvcb",
//     songGenre: "xcxc",
//     songName: "pep",
//   },
//   {
//     audio: "",
//     isPlaying: false,
//     songArtist: "cvb",
//     songGenre: "cvbc",
//     songName: "pepe",
//   },
//   {
//     audio: "",
//     isPlaying: false,
//     songArtist: "cvbcvb",
//     songGenre: "cvbcv",
//     songName: "pepin",
//   },
// ];

// const QueueListing = () => {
//   const currentSong = useSelector((state) => state.songs.currentSong);
//   const [tasks, setTasks] = useState(initialTasks);

//   console.log(tasks);

//   useEffect(() => {}, []);

//   return (
//     <DragDropContext
//       onDragEnd={(result) => {
//         const { source, destination } = result;
//         if (!destination) {
//           return;
//         }
//         if (
//           source.index === destination.index &&
//           source.droppableId === destination.droppableId
//         ) {
//           return;
//         }

//         setTasks((prevTasks) =>
//           reorder(prevTasks, source.index, destination.index)
//         );
//       }}
//     >
//       <div className="QueueListContainer">
//         <Droppable droppableId="tasks">
//           {(droppableProvided) => (
//             <ul
//               {...droppableProvided.droppableProps}
//               ref={droppableProvided.innerRef}
//               className="task-container"
//             >
//               {
//                 tasks.map((task, index) => (
//                   <Draggable
//                     key={task.songName}
//                     draggableId={task.songName}
//                     index={index}
//                   >
//                     {(draggableProvided) => (
//                       <li
//                         {...draggableProvided.draggableProps}
//                         ref={draggableProvided.innerRef}
//                         {...draggableProvided.dragHandleProps}
//                         className="task-item"
//                       >
//                         <QueueCard
//                           songName={task.songName}
//                           songArtist={task.songArtist}
//                         />
//                       </li>
//                     )}
//                   </Draggable>
//                 ))}
//               {droppableProvided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </div>
//     </DragDropContext>
//   );
// };

// export default QueueListing;

import { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  {
    id: "1",
    text: "React.js",
  },
  {
    id: "2",
    text: "HTML/CSS",
  },
  {
    id: "3",
    text: "AWS",
  },
  {
    id: "4",
    text: "JavaScript",
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function QueueListing() {
  const [tasks, setTasks] = useState(initialTasks);
  console.log(initialTasks);
  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }

        setTasks((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
      }}
    >
      <div className="app">
        <h1>Estudiar</h1>
        <Droppable droppableId="tasks">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="task-container"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="task-item"
                    >
                      {task.text}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default QueueListing;
