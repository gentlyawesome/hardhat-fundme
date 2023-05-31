<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Hardhat FundMe Sample</h3>

  <p align="center">
    This is a sample Hardhat project
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a sample tutorial and practice to hone the skill of the developer and inprove his solidity skills. Provided with latest update on hardhat and using the latest evm test networks.

This is not to use as a production project but more of a guideline to test the skill of the developer.

This will also serve as a proof of concept as it contains a real world sample of deploying smart contracts, testing and debugging.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Solidity][Solidity]][Solidity-url]
* [![Javascript][javascript]][Javascript-url]
* [![NodeJS][NodeJS]][NodeJS-url]
* [![NPM][NPM]][NPM-url]
* [![Yarn][Yarn]][Yarn-url]
* [![Chai][Chai]][Chai-url]
* Hardhat

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Install `Yarn` globally to install dependencies
* npm
  ```sh
  npm install yarn -g
  ```

### Installation

1. Get a free ETHERSCAN API Key for at [https://etherscan.io/apis](https://etherscan.io/apis)
2. Get a free ALCHEMY API Key for at [https://www.alchemy.com/](https://www.alchemy.com/)
3. Install a metamask in Chrome and create a wallet [https://metamask.io/](https://metamask.io/)
4. Get Eth from Sepolia Faucet [https://sepoliafaucet.com/](https://sepoliafaucet.com/)
4. Install Hardhat [https://hardhat.org/hardhat-runner/docs/getting-started#installation](https://hardhat.org/hardhat-runner/docs/getting-started#installation)
5. Clone this repo
6. Install NPM packages via Yarn
   ```sh
   yarn install
   ```
7. create a copy of `sample.env` to `.env` 
8. Enter your API in `.env`
   ```js
   COINMARKETCAP_API_KEY=
   SEPOLIA_RPC_URL=
   PRIVATE_KEY=
   ETHERSCAN_API_KEY=
   ```
9. Run a test 
   ```sh
   yarn hardhat test
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this for learning purposes. Do not use in production as this project has not been audited or secure to deploy a sample funding project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Arc Angelo Ibalio - [@gentlyawesome](https://twitter.com/gentlyawesome) 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Youtube Tutorial by Patrick Collins](https://www.youtube.com/watch?v=gyMwXuJrbJQ)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]:https://ph.linkedin.com/in/gentlyawesome 
[product-screenshot]: images/screenshot.png
[Javascript]:  https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://www.w3schools.com/js/
[NodeJS]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[NPM]:https://img.shields.io/npm/v/hardhat.svg?style=flat-square
[NPM-url]:https://www.npmjs.com/
[Yarn]:https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white 
[Yarn-url]:https://yarnpkg.com/ 
[Chai]:https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red
[Chai-url]:https://www.chaijs.com/
[Solidity]:https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white
[Solidity-url]:https://soliditylang.org/