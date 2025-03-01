import React, { useState } from "react";

const sprintTasks = [
  "Terraform Lambda",
  "Terraform Gateway",
  "Terraform S3",
  "Feature branch testing terraform code to ensure terraform deployment will run",
  "Backend state",
  "Deployment of the resources to be used for the backend (S3, Gateway, Lambda)",
  "Manual Uploads of sample files to DynamoDB and S3 for officers' information",
  "Lambda code (Python) check",
  "This workflow will decide if the feature branch for Python changes should be merged",
  "DynamoDB x S3 x Lambda Design for officers page feature",
  "DynamoDB: Officers name, positions, description, LinkedIn link, and S3 link for photo",
  "S3: Store officer photos",
  "GET Method for Officer names and photos from S3",
  "Blogging app that uses a markdown file to output content (retrieves .md from storage)",
  "Change the structure of the repository for a scalable React app",
  "React App for Mobile using the output of Kobe",
  "Utilization of @media for Kobe's output"
];

// Background images for each page
const backgroundImages = [
  "https://my.alfred.edu/zoom/_images/foster-lake.jpg",
  "https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?cs=srgb&dl=pexels-matthew-montrone-230847-1324803.jpg&fm=jpg",
  "https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
  "https://static.vecteezy.com/system/resources/previews/049/855/258/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
  "https://static.vecteezy.com/system/resources/previews/049/195/817/non_2x/stone-platform-with-waterfall-and-flowers-in-the-background-photo.jpeg"
];

const tasksPerPage = Math.ceil(sprintTasks.length / 5);
const paginatedTasks = Array.from({ length: 5 }, (_, index) =>
  sprintTasks.slice(index * tasksPerPage, (index + 1) * tasksPerPage)
);

const TodoList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImages[currentPage - 1]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
        color: "black",

    animation: "zoomIn 0.5s forwards",
        transition: "background-image 0.5s fade"
      }}
    >
      <h2>Todo List - Sprint Tasks</h2>

      {/* Page Tabs */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              padding: "10px 15px",
              margin: "5px",
              backgroundColor: currentPage === index + 1 ? "black" : "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Page {index + 1}
          </button>
        ))}
      </div>

      {/* Todo List for the Selected Page */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {paginatedTasks[currentPage - 1].map((task, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              margin: "10px auto",
              maxWidth: "400px",
              borderRadius: "5px",
	      color: "white"
            }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
