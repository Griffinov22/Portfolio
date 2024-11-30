import youngTech from "../img/youngTech.png";
import coffeeLogic from "../img/coffee-logic 1.png";
import img2048 from "../img/img-2048.png";
import fwm from "../img/fwmetals-3944521380 1.png";
import psg from "../img/student-gov 1.png";
import diceGame from "../img/dice-game 1.png";
import { useEffect, useState } from "react";

const WorkSection = () => {
  const [index, setIndex] = useState<number>(0);
  const [maxIndex, setMaxIndex] = useState<number>(0);

  useEffect(() => {
    setMaxForCarousel();
    window.addEventListener("resize", setMaxForCarousel);
    return () => window.removeEventListener("resize", setMaxForCarousel);
  }, []);

  useEffect(() => {
    // left arrow has disabled class by default
    if (index === maxIndex) {
      const rightBtn = document.getElementById("right-btn");
      rightBtn!.classList.toggle("btn-disable");
    } else if (index === 0) {
      const leftBtn = document.getElementById("left-btn");
      leftBtn!.classList.toggle("btn-disable");
    } else {
      const [leftBtn, rightBtn] = document.querySelectorAll(".caro-btn");
      leftBtn.classList.remove("btn-disable");
      rightBtn.classList.remove("btn-disable");
    }

    const carouselItems = document.querySelectorAll(".caro-item");
    carouselItems.forEach((el) => {
      (el as HTMLElement).style.transform = `translateX(-${375.5 * index}px)`;
    });
  }, [index]);

  const rightArrowClick = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
      // helper.setCaroArrowColor("left", "blue");
      // helper.moveCarousel(index);

      // if (index === maxIndex) {
      //   helper.setCaroArrowColor("right", "grey");
      // }
    }
  };

  const leftArrowClick = () => {
    if (index > 0) {
      setIndex(index - 1);
      // helper.setCaroArrowColor("right", "blue");
      // helper.moveCarousel(index);

      if (index === 0) {
        // helper.setCaroArrowColor("left", "grey");
      }
    } else if (index === 0) {
      // helper.setCaroArrowColor("left", "grey");
    }
  };

  const setMaxForCarousel = () => {
    const carouselItems = document.querySelectorAll(".caro-item");
    const screenWidth = window.innerWidth;
    if (screenWidth <= 850) {
      setMaxIndex(carouselItems.length - 1);
    } else if (screenWidth <= 1275) {
      setMaxIndex(carouselItems.length - 2);
    } else {
      setMaxIndex(carouselItems.length - 3);
    }
    // restart carousel at beginning
    setIndex(0);
  };

  return (
    <section
      id="work-section"
      className="work-section position-relative">
      <h2 className="text-center section-header">Work I've done in the past</h2>
      <p className="text-center sub-header low-opacity">
        Need more? Check out my{" "}
        <a
          target="_blank"
          href="https://github.com/Griffinov22?tab=repositories">
          Github
        </a>
      </p>
      <div className="d-flex justify-content-around align-items-center m-auto carousel-parent">
        <button
          id="left-btn"
          onClick={() => leftArrowClick()}
          className="caro-btn btn-disable">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" />
          </svg>
        </button>
        <div className="d-flex py-5 align-items-center flex-nowrap carousel-container">
          <div
            className="caro-item bg-white p-3 rounded"
            data-desc="This a group project I completed at Purdue University using HTML,CSS, and JS along with Figma for prototyping and design."
            onClick={() => window.open(`https://coffee-logic.netlify.app/`, "_blank")}>
            <img
              className="rounded-2 object-fit-cover"
              src={coffeeLogic}
              alt="screenshot of website I have worked on"
            />
          </div>
          <div
            className="caro-item bg-white p-3 rounded"
            data-desc="I created a mock version of the popular 2048 to showcase my jQuery and OOP skills."
            onClick={() =>
              window.open(`https://2048-griffinovermyer.netlify.app/`, "_blank")
            }>
            <img
              className="rounded-2 object-fit-cover"
              src={img2048}
              alt="screenshot of website I have worked on"
            />
          </div>
          <div
            className="caro-item bg-white p-3 rounded"
            data-desc="This is a fullstack blog built with React, Node.js, and Azure resources. Login uses Microsoft Entra AD."
            onClick={() =>
              window.open(
                `https://mango-grass-04e5f210f.5.azurestaticapps.net/`,
                "_blank"
              )
            }>
            <img
              className="rounded-2 object-fit-cover"
              src={youngTech}
              alt="screenshot of website I have worked on"
            />
          </div>
          <div
            className="caro-item bg-white p-3 rounded smaller-desc"
            data-desc="This confidential project was a full-stack application using ASP.NET and Entity Framework for a company over the 2023 summer.">
            <img
              className="rounded-2"
              src={fwm}
              alt="screenshot of website I have worked on"
            />
          </div>
          <div
            className="caro-item bg-white p-3 rounded"
            data-desc="I contributed on Purdue Student Governments website development. It contains plugins for excel sheets."
            onClick={() => window.open(`https://purduesg.org/`, "_blank")}>
            <img
              className="rounded-2 object-fit-cover"
              src={psg}
              alt="screenshot of website I have worked on"
            />
          </div>
          <div
            className="caro-item bg-white p-3 rounded"
            data-desc="This two player game built completely in JS involves rolling a dice to gain points, but if you roll a '1,' you lose your hand! First to 100 wins."
            onClick={() =>
              window.open(`https://griffin-hold-dice-game.netlify.app/`, "_blank")
            }>
            <img
              className="rounded-2 object-fit-cover"
              src={diceGame}
              alt="screenshot of website I have worked on"
            />
          </div>
        </div>
        <button
          id="right-btn"
          onClick={() => rightArrowClick()}
          className="caro-btn">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" />
          </svg>
        </button>
      </div>
    </section>
  );
};
export default WorkSection;
