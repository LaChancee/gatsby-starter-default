import * as React from "react";
import { ReactDOM } from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Answer: React.FC<PageProps> = () => {
  return (
    <main>
      {/* header */}
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
                <a href="#What">Game</a>
              </li>
              <li>
                <a href="#rules">Rules</a>
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
              <a href="#What">Game</a>
            </li>
            <li>
              <a href="#rules">Rules</a>
            </li>
            <li>
              <Link to="/Answer">Answer</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600">
            Jouer
          </a>
        </div>
      </div>
      <body className="p-5">
        <div className=" rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 grid grid-cols-1 place-content-center text-center h-48 text-white">
          <h1 className="text-3xl font-bold justify-center  ">
            Looking for Answers ?
          </h1>
          <h2 className="text-xl">
            Look up for them and their fact
            <span className="font-bold"> Take it. </span>
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold py-6">Brands</h2>
          {/* Input
          <div className="form-control py-4">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div> */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Brands</th>
                  <th>Tagline</th>
                  <th>Logo</th>
                  <th>Typography</th>
                  <th>Emojis</th>
                  <th>Fact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Apple</td>
                  <td>Think different</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Apple-logo.png"
                      alt="Apple logo"
                      layout="fixed"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td>San Francisco (SF)</td>
                  <td>📱🍏💻</td>
                  <td>
                    Almost every second, Apple products are purchased somewhere
                    in the world. Count at least six iPhones and one iPad.
                  </td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>Nike</td>
                  <td>Just do it.</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Nike.png"
                      alt="Nike logo"
                      layout="fixed"
                      width={150}
                      height={80}
                    />
                  </td>
                  <td>Condensed Extra Bold</td>
                  <td>💪🏼🏃🏻‍♂️🏀</td>
                  <td>
                    Carolyn Davidson, a student at the time at the University,
                    designed the logo for the modest sum of $200. She would
                    later receive a legitimate property grant.
                  </td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>McDonald's</td>
                  <td>Come has you are</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Logo_France_Mcdo.png"
                      alt="MacDonald's"
                      layout="fixed"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td>Neue Haas Unica</td>
                  <td>🍔🍟Ⓜ️</td>
                  <td>
                    It is said that the Golden Arches are the most recognized
                    symbol in the world. They would even supplant the cross.
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>KFC</td>
                  <td>It's Finger Lickin' Good</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/KFC_logo.svg.png"
                      alt="KFC"
                      layout="fixed"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td>/</td>
                  <td>🍗🐔🍔</td>
                  <td>
                    Going to KFC is a tradition in Japan for Christmas On 25
                    December, KFC achieved a third of its annual turnover!
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Dior</td>
                  <td>Life isn’t black and white, it’s gold</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/dior.png"
                      alt="Dior"
                      width={150}
                      height={70}
                    />
                  </td>
                  <td>Nicolas Cochin</td>
                  <td>💄💅🏻💋</td>
                  <td>
                    Christian Dior and the industrialist Marcel Boussac decide
                    to form a partnership by creating the fashion house
                    Christian Dior. It will open on 16 December 1946, Avenue
                    Montaigne in Paris
                  </td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>Ben & Jerry’s</td>
                  <td>Peace, love and ice cream</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/BN.png"
                      alt="Ben & Jerry's"
                      width={150}
                      height={70}
                    />
                  </td>
                  <td>Chunk Style</td>
                  <td>🍦🍪</td>
                  <td>
                    Ben & Jerry’s almost became a bagel company! Luckily for us,
                    image.pngJerry and Ben couldn’t afford the bagel machines
                    and turned to ice cream.
                  </td>
                </tr>
                <tr>
                  <th>7</th>
                  <td>Google</td>
                  <td>Do the right thing</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/google.png"
                      alt="Google"
                      width={225}
                      height={75}
                    />
                  </td>
                  <td>Product Sans</td>
                  <td>🔍👩🏼‍💻🥇</td>
                  <td>
                    Google’s name comes from a "googol" spelling error, which
                    means "one" followed by a hundred zeros, to denote the
                    estimated size of operations.
                  </td>
                </tr>
                <tr>
                  <th>8</th>
                  <td>Amazon</td>
                  <td>work hard, have fun, make history </td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Amazon_logo.svg"
                      alt="Amazon Logo"
                    />
                  </td>
                  <td>Amazon Ember</td>
                  <td>🚐📬📦</td>
                  <td>
                    Amazon was founded in 1994 in Jeff Bezos' garage and the
                    company’s first logo represented the world’s largest river –
                    the Amazon
                  </td>
                </tr>
                {/* 9 */}
                <tr>
                  <th>9</th>
                  <td>Samsung</td>
                  <td>Do What you can't</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/samsung.png"
                      alt="Samsung Logo"
                    />
                  </td>
                  <td>DDT</td>
                  <td>📱🇰🇷🚫🍏</td>
                  <td>
                    Samsung was created on March 1, 1938 in Taegu, South Korea
                    by Lee Byung-chul
                  </td>
                </tr>
                <tr>
                  <th>10</th>
                  <td>Coca-Cola</td>
                  <td>Taste the feeling</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Coca.svg"
                      alt="Samsung Logo"
                      width={300}
                      height={100}
                    />
                  </td>
                  <td>/</td>
                  <td>🥤🧊🫧</td>
                  <td>
                    The former vice-president of the company, said that
                    currently, only three people knew the recipe. Even the
                    current patrons of Coca-Cola don’t really know how the drink
                    is made.
                  </td>
                </tr>
                <tr>
                  <th>11</th>
                  <td>Air France </td>
                  <td>Fly off in style</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Air-France-logo.png"
                      alt="Air France Logo"
                      width={150}
                      height={70}
                    />
                  </td>
                  <td>Maven Pro Black Font.</td>
                  <td>✈️🏷️🧳</td>
                  <td>
                    Aircraft names are chosen according to different themes.
                    Some are named after famous squares in the Netherlands,
                    others after flowers, famous cities or UNESCO World Heritage
                    sites.
                  </td>
                </tr>
                <tr>
                  <th>12</th>
                  <td>Reese's </td>
                  <td>Two great tastes that taste great together</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/reeses.png"
                      alt="reeses Logo"
                      width={150}
                      height={53}
                    />
                  </td>
                  <td>/</td>
                  <td>🍫🥜😋</td>
                  <td>
                    Reese’s was created by Harry Burnett Reese. He first worked
                    for Hershey’s in 1917, which inspired him to make his own
                    chocolate.
                  </td>
                </tr>
                <tr>
                  <th>13</th>
                  <td>Disney</td>
                  <td>When magic comes to life</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Disney_wordmark.svg"
                      alt="Disney Logo"
                    />
                  </td>
                  <td>Waltograph Disney</td>
                  <td>🐭🎬✨👦🏼</td>
                  <td>
                    Originally, Mickey Mouse was supposed to be called Mortimer
                    Mouse. But Walt Disney’s wife talked him out of it. Mortimer
                    became Mickey’s rival.
                  </td>
                </tr>
                <tr>
                  <th>14</th>
                  <td>Mercedes-Benz</td>
                  <td>The best or nothing </td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Merco.png"
                      alt="Merco Logo"
                    />
                  </td>
                  <td>Mercedes-Benz Corpo</td>
                  <td>🚘👑🇩🇪</td>
                  <td>
                    Mercedes Benz was created in Germany by Emil Jellinek and
                    Paul Daimler on June 28, 1926
                  </td>
                </tr>
                <tr>
                  <th>15</th>
                  <td>Pampers</td>
                  <td>Protect every little miracle </td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Pampers.png"
                      alt="Pampers Logo"
                    />
                  </td>
                  <td>Chit Chat Regular or DK Zonnig</td>
                  <td>👶🩲💩💧</td>
                  <td>
                    Vic Mills, engineer at Procter&Gamble and inventor of the
                    disposable diaper in 1956 is the creator of Pampers. It is
                    for the well-being of his grandchildren that this papy cake
                    indeed created the diapers. Their name is adapted from the
                    verb «to pamper», which means pamper and pamper.
                  </td>
                </tr>
                <tr>
                  <th>16</th>
                  <td>Tesla</td>
                  <td>A New American Car Company </td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Tesla.png"
                      alt="Tesla Logo"
                      height={200}
                    />
                  </td>
                  <td>Tesla</td>
                  <td>🚘⚡️🇺🇸</td>
                  <td>
                    Thanks to the large weight of the batteries, located in the
                    chassis and close to the ground, Tesla models can hardly
                    roll over in the event of an accident!
                  </td>
                </tr>
                <tr>
                  <th>17</th>
                  <td>IKEA</td>
                  <td>So quiet</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Ikea_logo.svg"
                      alt="IKEA Logo"
                      height={200}
                    />
                  </td>
                  <td>Futurapress</td>
                  <td>🛋️🪑🪞</td>
                  <td>
                    The name Ikea is an acronym: the I and K for Ingvar Kamprad,
                    the founder of Ikea, the E for Elmtaryd, the name of the
                    farm where he grew up and A for Agunnaryd, his hometown.
                  </td>
                </tr>
                <tr>
                  <th>18</th>
                  <td>Netflix</td>
                  <td>See what's next</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Netflix_2015_logo.svg"
                      alt="Netflix Logo"
                    />
                  </td>
                  <td>Bebas Neue</td>
                  <td>🍿💻🛏️🎬</td>
                  <td>
                    Netflix was created before Google and was almost named
                    Kibble
                  </td>
                </tr>
                <tr>
                  <th>19</th>
                  <td>TF1</td>
                  <td>Let's share positive vibes</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/TF1.png"
                      alt="TF1 Logo"
                    />
                  </td>
                  <td> Gill Sans Ultra Bold</td>
                  <td>📺🇫🇷🥇</td>
                  <td>
                    TF1 was created on 1 January 1975. Sociologist Jean
                    Cazeneuve, former chairman of the ORTF programme committee,
                    is appointed president of the new first channel.
                  </td>
                </tr>
                <tr>
                  <th>20</th>
                  <td>Twitter</td>
                  <td>what's up?</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/twitter.png"
                      alt="twitter Logo"
                      width={123}
                      height={100}
                    />
                  </td>
                  <td> Pico Black</td>
                  <td>📺🇫🇷🥇</td>
                  <td>
                    The bird is Twitter’s mascot and is named Larry in honour of
                    American basketball day Larry Bird.
                  </td>
                </tr>
                <tr>
                  <th>21</th>
                  <td>Spotify</td>
                  <td>Music for every mood</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Spotify.png"
                      alt="twitter Logo"
                    />
                  </td>
                  <td>Spotify Circular</td>
                  <td>🎶🎤🎧</td>
                  <td>
                    When choosing the name of their company in 2006, the two
                    founders randomly call out potential names when the first
                    one thinks he hears Spotify. After a quick Google search,
                    the two Swedes see that the name is free and decide to
                    register the domain name in the process.
                  </td>
                </tr>
                <tr>
                  <th>22</th>
                  <td>Canon</td>
                  <td>You can</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/canon.png"
                      alt="Canon Logo"
                    />
                  </td>
                  <td>/</td>
                  <td>📸🎞️🏞️</td>
                  <td>
                    In 1933, Yoshida Gorō created the first 35 mm camera
                    prototype ever made in Japan. On June 26, 1935, the company
                    deposited the name Canon.
                  </td>
                </tr>
                <tr>
                  <th>23</th>
                  <td>Kellogg’s</td>
                  <td>The breakfast of great ideas</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Kelloggs-Logo.png"
                      alt="Kellogs Logo"
                    />
                  </td>
                  <td>/</td>
                  <td>🌾🥣🥛</td>
                  <td>
                    In 1969, during the Apollo 11 mission, the American company
                    was chosen to provide the astronauts with breakfast during
                    their spacewalk.
                  </td>
                </tr>
                <tr>
                  <th>24</th>
                  <td>RedBull</td>
                  <td>RedBull gives wings</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/redbull.png"
                      alt="redbull Logo"
                    />
                  </td>
                  <td>Futura</td>
                  <td>⚡️♉️😤</td>
                  <td>
                    Red Bull Energy Drink is actually based on an older recipe:
                    the Krating Daeng whose name means «red bull»
                  </td>
                </tr>
                <tr>
                  <th>25</th>
                  <td>Carglass</td>
                  <td>Carglass repairs, Carglass replaces</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Carglass.png"
                      alt="Carglass Logo"
                    />
                  </td>
                  <td>ITC Newtext Demi</td>
                  <td>🚘🔧🪟</td>
                  <td>
                    Carglass was created in 1986 in France by the Belron group
                  </td>
                </tr>
                <tr>
                  <th>26</th>
                  <td>Carrefour</td>
                  <td>the positive is back</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Logo_Carrefour.png"
                      alt="Carrefour Logo"
                    />
                  </td>
                  <td>Erica Type Bold Fon</td>
                  <td>🛒🥬🍫</td>
                  <td>
                    June 15, 1963 remains a historic date in Carrefour’s long
                    history. That day, the brand opened the first French
                    hypermarket in Sainte-Geneviève-des-Bois
                  </td>
                </tr>
                <tr>
                  <th>27</th>
                  <td>Nespresso</td>
                  <td>What else ?</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Nespresso.png"
                      alt="Canon Logo"
                    />
                  </td>
                  <td>Nespresso Typeface</td>
                  <td>☕️🤵‍♂️</td>
                  <td>
                    Married to an Italian woman who never ceases to criticize
                    homemade coffee, the Swiss Eric Favre decides to study
                    closely how the Italian national drink is prepared and
                    invents a machine providing optimal extraction with an
                    individual coffee capsule
                  </td>
                </tr>
                <tr>
                  <th>28</th>
                  <td>Airbnb</td>
                  <td>At home, elsewhere.</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Airbnb.png"
                      alt="Airbnb Logo"
                    />
                  </td>
                  <td>Cereal</td>
                  <td>🏠🔑🤝🏼👫</td>
                  <td>
                    Airbed and Breakfast was the former Airbnb, a well-known
                    name that surpassed the Hilton Hotels empire in number of
                    nights booked.
                  </td>
                </tr>
                <tr>
                  <th>29</th>
                  <td>Fnac</td>
                  <td>Unleash the culture</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/fnac.webp"
                      alt="Canon Logo"
                    />
                  </td>
                  <td> Nimbus Sans Extended Bold</td>
                  <td>💻📱📚</td>
                  <td>
                    The founders André Essel and Max Théret created the group in
                    1954. The turnover is 7.4 billion euros in 2016. The group
                    experienced a significant change in 2016, following the
                    acquisition of Darty, to fight against competition.
                  </td>
                </tr>
                <tr>
                  <th>30</th>
                  <td>UPS</td>
                  <td>The future is electric</td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/UPS-logo.png"
                      alt="UPS Logo"
                    />
                  </td>
                  <td> UPS Sans</td>
                  <td>🚛📦⚡️🇺🇸</td>
                  <td>
                    In 1907, two teenagers created what would become the largest
                    parcel delivery service in the world. Starting in a Seattle
                    winery with a $100 loan, Claude Ryan and Jim Casey opened
                    the American Messenger Company now UPS
                  </td>
                </tr>
                <tr>
                  <th>31</th>
                  <td>Chupa Chups</td>
                  <td>Forever Fun </td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/chupa.png"
                      alt="Chupa Chups Logo"
                    />
                  </td>
                  <td> Lobster Two Bold Italic Font</td>
                  <td>🍭🧒😋</td>
                  <td>
                    The story goes that Dalí drew the logo in an hour on a
                    newspaper page at the corner of a table on the terrace of a
                    café. The painter also has the idea of putting this logo on
                    the top of the lollipop and not on the side, to make it more
                    visible.
                  </td>
                </tr>
                <tr>
                  <th>32</th>
                  <td>Lego</td>
                  <td>There’s nothing better than the best </td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/LEGO_logo.png"
                      alt="LEGO Logo"
                    />
                  </td>
                  <td>/</td>
                  <td>🧒🧱🧩</td>
                  <td>LEGO means “plays well” in Danish</td>
                </tr>
                <tr>
                  <th>33</th>
                  <td>Nutella</td>
                  <td>Every day is happiness to spread </td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Nutella-Logo.png"
                      alt="Nutella Logo"
                    />
                  </td>
                  <td> ITC Avant Garde</td>
                  <td>🍫🍞🥄🫙</td>
                  <td>
                    In 2013, thieves robbed Nutella valued at over $20,000. The
                    result? They ended up with about 5 tons of Nutella in their
                    house.
                  </td>
                </tr>
                <tr>
                  <th>34</th>
                  <td>Nesquik</td>
                  <td>Nesquik,we have a hell of a desire ! </td>
                  <td>
                    <StaticImage
                      src="../images/brandsLogo/Nesquick.png"
                      alt="Nesquick Logo"
                    />
                  </td>
                  <td>/</td>
                  <td>🐰🍫🥣</td>
                  <td>
                    The company was originally a baby food company and in 1948
                    developed the first cocoa-based product: instant dry cocoa,
                    designed to make it easier for mothers to care for their
                    babies.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed  border-none z-90 bottom-10 right-8 bg-gradient-to-r from-blue-600 to-blue-500   flex justify-center items-center text-white  hover:bg-blue-700  btn btn-square"
        >
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z" />
          </svg>
        </button>
      </body>
      {/* Header */}
    </main>
  );
};

export default Answer;

export const Head: HeadFC = () => <title>Answers</title>;
