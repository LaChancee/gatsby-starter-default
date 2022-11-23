import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Footer from "../components/Footer";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      {/* headeeer */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#What"><Link to="/">Game</Link></a>
              </li>
              <li>
                <a href="#rules"><Link to="/">Rules</Link></a>
              </li>
              <li>
                <Link to="/answer">Answer</Link>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case font-bold text-xl">
            Take it.
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="#What"><Link to="/">Game</Link></a>
            </li>
            <li>
              <a href="#rules"><Link to="/">Rules</Link></a>
            </li>
            <li>
              <Link to="/answer">Answer</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600">
            Jouer
          </a>
        </div>
      </div>

      {/* Header */}
      {/* Content */}

      <body className="p-5">
        <div className=" rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 grid grid-cols-1 place-content-center text-center h-48 text-white">
          <h1 className="text-3xl font-bold justify-center  ">
            Welcome player !
          </h1>
          <h2 className="text-xl">
            You want to play <span className="font-bold"> Take it. </span>
            Here we are !
          </h2>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold" id="What">
            What is Take it. ?🤔
          </h2>
          <p>
            Take it. is simlar to the well known game
            <span className="font-bold text-green-800"> Jungle Speed</span>.
            Created by 4 students of MydigitalSchool of Rennes, the great idea
            of Take it. was born.
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Game setup</h2>
          <p>
            A deck with the 150 cards is in the center of the table next to the
            totem and players get ready to guess the upcoming brand including
            taking the totem.
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold" id="rules">
            Rules
          </h2>
          <p>
            <ul className="list-disc px-5">
              <li>
                The player that guess the right brand and that took the totem
                earn a point (a card)
              </li>
              <li>
                If the player did not guess the brand and don’t have the totem
                he’s not winning a point
              </li>
              <li>
                If the player did not guess the brand and have the totem in his
                hand he’s losing a point
              </li>
              <li>The player that have thrown the totem lose a point</li>
            </ul>
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold">What male up the game ?</h2>
          <p>
            <ul>
              <li>150 cards</li>
              <li>134 basic cards</li>
              <li>5 bonus cards</li>
              <li>5 penalties cards</li>
              <li>5 special cards</li>
              <li>A totem</li>
              <li>This website 😉</li>
            </ul>
          </p>
        </div>
      </body>

      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Take it.</title>;
