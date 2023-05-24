https://user-images.githubusercontent.com/98407930/216965351-664b7258-9690-47d4-a740-878f24376250.mp4

[Website's LINK](https://hatchery-dao.vercel.app/)

[Youtube's LINK](https://youtu.be/BLiCtM5fUBs)

# PitchTube 🐣️

PitchTube is an innovative startup incubator platform that operates on the concept of NFT (Non-Fungible Tokens). It aims to support and promote startups by providing them with a unique opportunity to raise funding through video pitches. By utilizing the power of NFTs, PitchTube offers a novel approach to attract potential investors and showcase the potential of budding businesses.

Through this platform, startups can create captivating video presentations that effectively communicate their ideas, products, and goals. PitchTube not only serves as a gateway for startups to secure funding but also facilitates networking and mentorship opportunities, creating a comprehensive ecosystem to nurture and propel entrepreneurial ventures forward.

PitchTube provides an inclusive platform for individuals holding the **Investor Soulbound NFT**, granting them access to invest in startups with the freedom to choose their desired investment amount, ranging from minimal to substantial.


## How the Platform makes money ? 💸️ 💰️

There are two ways in which the Platform can make money

**SOULBOUND NFTs** --------

- STARTUP Soulbound NFT
- INVESTOR Soulbound NFT

Everyone will get access to use functions based on the NFT that they have bought and all the amount of the NFT can be withdrawn by the **Owners' Address** only . Owners can be changed in the future if the platform wants.

**Commission on Investments** --------

The owner earns a certain percent of commission on each transaction made by investor and the rest amount is then transferred to the address of the startup owner

Currently the commission on investments is **10%** but can be changed in the future if the Platform wants.


## Features 🧑‍💻️

There are many features which are implemented while the creation of the platform which include :

- Buying of Soulbound NFTs
- No entry barrier for startups
- No limitation on Investing
- Live public presentation on Huddle01
- Private video chat with startup owners
- Startup video uploading on posting page
- Editing of startup post
- Decentralized video playing
- Private visibility of assets invested


## Tech Used ⚙️

The Platform is created using the Next.js framework and the styling is done using TailwindCss apart from these , the following tech is also used :

- **Huddle01** ------------------------------------------

  Huddle is used to create public meeting for pitching your idea in the PitchDeck page , I have used I frame for setting up the group meeting.

  [Line 7](https:/github.com/nwakaku/pitchTube/blob/main/pages/PitchDeckPublic.tsx)

  Also huddle is used in doing private video meetings with the startup owners , if they want before investion or clearing doubts.

  [Line 8](https:/github.com/nwakaku/pitchTube/blob/main/pages/PitchDeck.tsx)

- **Livepeer** ------------------------------------------

  Livepeer is used to upload the video of startup post and getting the playbackID. The playback is then getting stored on the smart contract.

  [Line 36 & 300](https:/github.com/nwakaku/pitchTube/blob/main/pages/PostStartup.tsx)

  [Line 240](https:/github.com/nwakaku/pitchTube/blob/main/pages/EditPost.tsx)

  It is also used to play the video of the same in the expand page which you can access by clicking _Allstartups/Expand_

  [Line 20 & 201](https:/github.com/nwakaku/pitchTube/blob/main/pages/Expand.tsx)

- **RainbowKit** -------------------------------------

  RainbowKit is a React library that makes it easy to add wallet connection to your dapp. It's intuitive, responsive and customizable.
  
  Various functions like useAccount(), useContract(), useProvider(), useSigner(), useBalance() and many more have been used .

  - **Lighthouse** ------------------------------------------

  Lighthouse is used to to encrypt the file in the data exchange. Before any file is uploaded it is first getting encrypted using the Lighthouse browser encryption and then the hash of the file is getting stored on the smart contract . Users also have to decrypt the file in order to view it.

  [Line 59 ](https:/github.com/nwakaku/pitchTube/blob/main/components/DataExForm.tsx)

  Not only in the Data exchange but it is also used to normal upload the image file on the startup post on the ipfs using the Light house

  [Line 202 ](https:/github.com/nwakaku/pitchTube/blob/main/pages/EditPost.tsx)

## Challenges I ran into 🏇️

- I ran into the problem of deploying the contract on the theta network , it was my first time deploying to the theta blockchain

- Also i was using the protocols like Huddle01 and Livepeer for thr first time , It was quite challenging to implement all that but have to say their docs helped me a lot.

## dev
Name:   Wisdom Chris

Email:   [gmail](nwakakucc@gmail.com)

Track:    Video Track

## How to run the app ? 💫️

Just Three Commands to get started

```bash
git clone https://github.com/nwakaku/pitchTube.git

yarn
# or
npm install

npm run dev
# or
yarn dev
```

Also dont forget to add the API keys from :

- Livepeer
- Huddle
- Lighthouse

and the naming in `.env` file should be

```js
NEXT_PUBLIC_LIGHTHOUSE=<Your_API_Key>
NEXT_PUBLIC_STUDIO_API_KEY=<Your_API_Key>
NEXT_PUBLIC_HUDDLE=<Your_API_Key>
```
