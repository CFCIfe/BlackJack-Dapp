# [Decentralized Umoja III](https://events.reach.sh/decentralized-umoja-3) :technologist:

This project contains our implementation of a [Blackjack-like game](https://events.reach.sh/decentralized-umoja-3#:~:text=lie%2C%20you%20lose.-,Blackjack,-A%20blackjack%2Dlike) with asymmetric payout based on proximity to 21.

:computer: This Project was developed by:

:man: [Peter Abolude](https://github.com/CFCIfe)
:man: [Samson Olusanya](https://github.com/Ayodeji63)
:man: [Adebayo Saheed](https://github.com/adewaledev)

:microphone: A big shout-out to [Nick Stanford](https://github.com/nstanford5/) for being available to us during the course of the project and [Paul Ogwulumba](https://github.com/paulogwulumba/), our mentor.


### :question:	What is [Reach](https://docs.reach.sh/tut/overview/#overview)?


:bulb: DApps are made of multiple agents interacting with each other through some backend consensus network, like Ethereum or Algorand. 

:bulb: In [Reach](https://docs.reach.sh/tut/overview/#overview), a programmer only needs to specify the actions of participants---what they do individually and what they do in unison. The [Reach](https://docs.reach.sh/tut/overview/#overview) compiler automatically derives a contract for the consensus network via a connector that enforces these rules. [More on [Reach](https://docs.reach.sh/tut/overview/#overview)](https://docs.[Reach](https://docs.reach.sh/tut/overview/#overview).sh/tut/overview/#overview)

[React](https://reactjs.org/docs/create-a-new-react-app.html) is [one of many](https://docs.reach.sh/frontend/#p_1) frameworks that can be implemented with [Reach](https://docs.reach.sh/tut/overview/#overview).

:seedling: This boilerplate helps kickstart your development of a Reach dAPP using React frontend.

---

### USING [Our Program](https://github.com/CFCIfe/BlackJack-Dapp)

#### File Directory
.
<pre>├── <font color="#3465A4"><b>build</b></font>
│   ├── asset-manifest.json
│   ├── backend.txt
│   ├── favicon.ico
│   ├── index.html
│   ├── <font color="#75507B"><b>logo192.png</b></font>
│   ├── <font color="#75507B"><b>logo512.png</b></font>
│   ├── manifest.json
│   ├── precache-manifest.092ed836510c38166ea183a53ff67f42.js
│   ├── robots.txt
│   ├── secrets.txt
│   ├── service-worker.js
│   └── <font color="#3465A4"><b>static</b></font>
│       ├── <font color="#3465A4"><b>css</b></font>
│       │   ├── main.4caba1f7.chunk.css
│       │   └── main.4caba1f7.chunk.css.map
│       └── <font color="#3465A4"><b>js</b></font>
│           ├── 1.8de0fa20.chunk.js
│           ├── 1.8de0fa20.chunk.js.map
│           ├── main.67c2c531.chunk.js
│           ├── main.67c2c531.chunk.js.map
│           ├── runtime~main.229c360f.js
│           └── runtime~main.229c360f.js.map
├── Demo Video.txt
├── index.mjs
├── index.rsh
├── package.json
├── <font color="#3465A4"><b>public</b></font>
│   ├── backend.txt
│   ├── favicon.ico
│   ├── index.html
│   ├── <font color="#75507B"><b>logo192.png</b></font>
│   ├── <font color="#75507B"><b>logo512.png</b></font>
│   ├── manifest.json
│   ├── robots.txt
│   └── secrets.txt
├── <font color="#4E9A06"><b>reach</b></font>
├── README.md
├── secrets.txt
├── <font color="#3465A4"><b>src</b></font>
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── <font color="#3465A4"><b>cardComponents</b></font>
│   │   ├── BorderCardFigureConditions.js
│   │   ├── CardHolder.js
│   │   ├── Card.js
│   │   ├── CardsWrapper.js
│   │   ├── CenterCardElement.js
│   │   ├── data.js
│   │   ├── FigureCardCenter.js
│   │   ├── <font color="#3465A4"><b>figureComponents</b></font>
│   │   │   ├── JackOfClub.jsx
│   │   │   ├── JackOfDiamond.jsx
│   │   │   ├── JackOfHeart.jsx
│   │   │   ├── JackOfSpade.jsx
│   │   │   ├── KingOfClub.jsx
│   │   │   ├── KingOfDiamond.jsx
│   │   │   ├── KingOfHeart.jsx
│   │   │   ├── KingOfSpade.jsx
│   │   │   ├── QueenOfClub.jsx
│   │   │   ├── QueenOfDiamond.jsx
│   │   │   ├── QueenOfHeart.jsx
│   │   │   └── QueenOfSpade.jsx
│   │   ├── index.js
│   │   ├── styles.css
│   │   └── useRandomValueFromArray.js
│   ├── <font color="#3465A4"><b>components</b></font>
│   │   ├── Header.js
│   │   ├── loader.css
│   │   └── Loader.js
│   ├── index.css
│   ├── index.js
│   ├── <font color="#75507B"><b>logo.svg</b></font>
│   ├── <font color="#3465A4"><b>reach</b></font>
│   │   ├── <font color="#3465A4"><b>build</b></font>
│   │   │   └── index.main.mjs
│   │   ├── index.mjs
│   │   ├── index.rsh
│   │   └── <font color="#4E9A06"><b>reach</b></font>
│   ├── reportWebVitals.txt
│   ├── test.js
│   ├── <font color="#3465A4"><b>utils</b></font>
│   │   ├── constants.js
│   │   ├── loader.css
│   │   └── loader.jsx
│   └── <font color="#3465A4"><b>views</b></font>
│       ├── AcceptWager.js
│       ├── Attaching.js
│       ├── ConnectAccount.js
│       ├── Deploying.js
│       ├── DeployOrAttach.js
│       ├── GameOutcomeView.js
│       ├── GamePlayView.js
│       ├── index.js
│       ├── PasteContractInfo.js
│       ├── SetWager.js
│       ├── styles.css
│       └── WaitForAttacher.js
└── yarn.lock

</pre>

---

#### Requirements:

:computer: Reach - https://docs.reach.sh/tut/rps/#tut-1

:computer: git - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

:computer: npm - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

#### Clone the repository

`git clone https://github.com/CFCIfe/BlackJack-Dapp`

#### Install the dependencies

```
npm install

# From the project root path

cd src/reach

# To compile to the latest version of REACH to check if no backend errors

./reach compile
```

---

#### Test the Application


Run `npm start` to get your development server start.

This opens a new browser with `localhost:3000` running.

---

#### Deployer and Attacher view

Open `localhost:3000` on separate browsers to test using [MyAlgo](https://wallet.myalgo.com/) Testnet or it's Mnemonic keys.

Implement your backend changes in `src/reach/index.rsh`

---

#### Demo Video

[Click here](https://drive.google.com/file/d/138iQ1RRkfguv23ttQybPN7v-hDSjsA1w/view?usp=sharing)to watch our Demo video
