<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Image Carousel</title>
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      background: #f8f9fa;
    }

    #carousel-container {
      width: 500px;
      height: 400px;
      border: 2px solid #ddd;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
    }

    #carousel-image {
      width: 400px;
      height: 300px;
      object-fit: contain;
    }

    .controls {
      margin-top: 20px;
    }

    .controls button {
      font-size: 20px;
      padding: 8px 20px;
      margin: 0 10px;
      border: none;
      background-color: #007bff;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }

    .controls button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <h2>JavaScript Image Carousel</h2>

  <div id="carousel-container">
    <img id="carousel-image" src="" alt="Carousel Image" />
  </div>

  <div class="controls">
    <button onclick="showPrev()">&lt;</button>
    <button onclick="sho
