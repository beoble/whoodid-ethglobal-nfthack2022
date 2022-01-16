import React, { useState, useEffect } from "react";
import Post from "./presentation/component/post";
import Coolcat279 from "./assets/nft/coolcat279.png";
import Coolcat7795 from "./assets/nft/coolcat7795.png";
import Coolcat9816 from "./assets/nft/coolcat9816.png";
import MelvinProfile from "./assets/nft/phantabear1845.png";
import GurrenLagann from "./assets/gurrenlagann.png";
import Meka6242 from "./assets/nft/meka6242.png";
import Meka1784 from "./assets/nft/meka1784.png";
import Meka1922 from "./assets/nft/meka1922.png";
import Meka8597 from "./assets/nft/meka8597.png";
import CryptoPunk3100 from "./assets/nft/cryptopunk3100.png";
import CryptoPunk5081 from "./assets/nft/cryptopunk5081.png";
import CryptoPunk7804 from "./assets/nft/cryptopunk7804.png";
import CryptoPunk9998 from "./assets/nft/cryptopunk9998.png";
import Hood512 from "./assets/nft/hood512.png";
import Hood2294 from "./assets/nft/hood2294.png";
import Hood7171 from "./assets/nft/hood7171.png";
import Hood8868 from "./assets/nft/hood8868.png";
import Hood9476 from "./assets/nft/hood9476.png";
import F10Klaytn from "./assets/f10xklaytn.png";
import Doodle662 from "./assets/nft/doodle316.png";
import PhantaBear1845 from "./assets/nft/phantabear1845.png";
import PhantaBear4450 from "./assets/nft/phantabear4450.png";
import PhantaBear9999 from "./assets/nft/phantabear9999.jpg";
import Shoeuzi851 from "./assets/nft/shoeuzi851.png";
import Shoeuzi841 from "./assets/nft/shoeuzi841.png";
import Vitalik000 from "./assets/nft/vitalik.jpg";
import Binance from "./assets/nft/binance.png";

import VaccinePassportsMap from "./assets/posts/vitalik-post.png";
import AespaImage from "./assets/posts/aespa.jpg";
import BinanceHiringImage from "./assets/posts/binance-hiring.jpg";
import BlueWhaleImage from "./assets/posts/blue-whale.jpg";
import CatsImage from "./assets/posts/cats.jpg";
import CryptoPunksImage from "./assets/posts/cryptopunks.jpeg";
import DogsImage from "./assets/posts/dogs.jpg";
import GodOfWarImage from "./assets/posts/god-of-war.jpg";
import ReadyPlayerOneImage from "./assets/posts/ready-player-one.jpg";
import SummerWarsImage from "./assets/posts/summer-wars.jpg";
import TaigaImage from "./assets/posts/taiga.png";
import NftImage from "./assets/posts/nft-art.jpg";

import Typography from "@mui/material/Typography";
import { NFTGroup } from "./hook/useGroup";

export const PostGreenSalad = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Hi, I got another{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #coolcat
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      profile={Coolcat279}
      name="greensalad.eth"
      isVerified
      content={<Content />}
      image={Coolcat7795}
      nftGroup={NFTGroup.Whoodid}
    />
  );
};

export const PostKryptonium = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        NO ONE CAN STOP US{" "}
        <Typography variant="body1" color="#00A0FA">
          #springcamp #nakseong #fuck
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      profile={Doodle662}
      name="kryptonium.eth"
      isVerified
      content={<Content />}
      nftGroup={NFTGroup.Whoodid}
    />
  );
};

export const PostShipDuck = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Sharing my fav{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #anime{" "}
        </Typography>
        Character - who is yours?
        <Typography variant="body1" color="#00A0FA">
          #robot #gurrenlagann
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="shipduck.eth"
      isVerified
      content={<Content />}
      profile={Meka6242}
      image={GurrenLagann}
      nftGroup={NFTGroup.Mekaverse}
    />
  );
};

export const PostMelvin = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        <a
          href={
            "https://www.f10.global/press/startup-accelerator-f10-to-incubate-early-stage-blockchain-startups-in-singapore-with-klaytn-foundation"
          }
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body1" color="#00A0FA">
            f10.global/press/startup-...
          </Typography>
        </a>
        We are excited to announce our partnership with{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Klaytn.{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Interested startups do apply now!
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #buildonklaytn #F10 #klaytncubation
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="melvin.eth"
      isVerified
      profile={MelvinProfile}
      content={<Content />}
      image={F10Klaytn}
      nftGroup={NFTGroup.Whoodid}
    />
  );
};

export const PostHoodie = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Hi. I'm new to{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Whoodid.{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Anyone interested on{" "}
          <Typography display="inline" variant="body1" color="#00A0FA">
            #craftbeer{" "}
          </Typography>
          ?
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="angry squid"
      profile={CryptoPunk7804}
      content={<Content />}
      nftGroup={NFTGroup.Whoodid}
    />
  );
};

export const PostFactAboutWhale = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Fact of the day: Did you guys know that the blue whale is the largest
        animal that ever lived?
        <Typography variant="body1" color="#00A0FA">
          #whales{" "}
          <Typography display="inline" variant="body1" color="text.secondary">
            are just so amazing! 😍
          </Typography>
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #SecretSocietyOfWhales #Facts
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="whalelover.eth"
      profile={Coolcat9816}
      isVerified
      content={<Content />}
      image={BlueWhaleImage}
      nftGroup={NFTGroup.SecretSocietyOfWhales}
    />
  );
};

export const PostNftArt = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        This{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #NFT{" "}
          <Typography display="inline" variant="body1" color="text.secondary">
            is just dope!!! Just take my money please! 💸💸💸
          </Typography>
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #NFT{" "}
        </Typography>
      </Typography>
    );
  };
  return <Post name="dolphinia" profile={PhantaBear9999} content={<Content />} image={NftImage} />;
};

export const PostStayStrong = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        #StayStrong guys, we will go to the moon!
        <Typography variant="body1" color="#00A0FA">
          #StayStrong #Jonbeo
        </Typography>
      </Typography>
    );
  };
  return <Post name="Crypto Believer" profile={CryptoPunk5081} content={<Content />} />;
};

export const PostNftProjectAd = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Hey folks! Check this cool{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #NFTProject{" "}
          <Typography display="inline" variant="body1" color="text.secondary">
            out!!! Too excited!!!
          </Typography>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Presale goes live in just 2 days! 🔥🔥🔥
        </Typography>
        <Typography variant="body1" color="#00A0FA" sx={{ cursor: "pointer" }}>
          www.cryptopunks2077nft.art
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #NFT #NFTProject
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="crytopunks2077.eth"
      isVerified
      profile={CryptoPunk9998}
      content={<Content />}
      image={CryptoPunksImage}
      nftGroup={NFTGroup.Rarible}
    />
  );
};

export const PostVitalik = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        My favorite thing about arguments against vaccine passports is that they
        usually work even better verbatim as arguments against regular
        passports. Seriously, look at these maps. This is unfair apartheid and
        we should be resisting it more.
        <Typography variant="body1" color="#00A0FA">
          #Covid #FightVaccinePassports
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="vitalik.eth"
      isVerified
      profile={Vitalik000}
      content={<Content />}
      image={VaccinePassportsMap}
    />
  );
};

export const PostOhDuck = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Sharing my fav{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #anime{" "}
        </Typography>
        <Typography display="inline" variant="body1" color="text.secondary">
          character. A must-watch every winter for me ❄️❄️❄️
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Toradora #anime #Taiga
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="ohduck.eth"
      isVerified
      profile={Meka8597}
      content={<Content />}
      image={TaigaImage}
      nftGroup={NFTGroup.Mekaverse}
    />
  );
};

export const PostReadyPlayerOne = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        When do you guys think{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Metaverse{" "}
        </Typography>
        <Typography display="inline" variant="body1" color="text.secondary">
          like Ready Player One will come into reality? I am guessing in 10
          years for sure!
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Metaverse #movie
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="Oasis"
      profile={Hood2294}
      content={<Content />}
      image={ReadyPlayerOneImage}
      nftGroup={NFTGroup.Mekaverse}
    />
  );
};

export const PostSummerWars = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        If you love{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #anime{" "}
        </Typography>
        and{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Metaverse,{" "}
        </Typography>
        <Typography display="inline" variant="body1" color="text.secondary">
          you freakin' MUST WATCH THIS MOVE!!! LOVE EVERY SECOND OF IT!!!
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Metaverse #movie #SummerWars
        </Typography>
      </Typography>
    );
  };
  return <Post name="metanime.eth" profile={Meka1784} isVerified content={<Content />} image={SummerWarsImage} nftGroup={NFTGroup.Mekaverse}/>;
};

export const PostHiringAd = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Binance is looking for a{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #frontend #developer
        </Typography>
        !{" "}
        <Typography variant="body1" color="text.secondary">
          Check the link below for more details and application!
        </Typography>
        <Typography variant="body1" color="#00A0FA" sx={{ cursor: "pointer" }}>
          www.binance.com/careers/job-id=34921
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Binance #RemoteWork #Hiring #Developer
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="binance.eth"
      isVerified
      profile={Binance}
      content={<Content />}
      image={BinanceHiringImage}
      nftGroup={NFTGroup.Rarible}
    />
  );
};

export const PostDog = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        These are my Doge and Coin!{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #DogeCoin{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We will go to the moon together!!!
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Animals #cat #kitten
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="benedictK.eth"
      isVerified
      profile={PhantaBear4450}
      content={<Content />}
      image={DogsImage}
      nftGroup={NFTGroup.SecretSocietyOfWhales}
    />
  );
};

export const PostCat = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Today's cute{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #cat{" "}
        </Typography>
        <Typography display="inline" variant="body1" color="text.secondary">
          picture - my cousin named them{" "}
        </Typography>
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Shiba{" "}
        </Typography>
        and{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Coin{" "}
        </Typography>
        😂😂😂
        <Typography variant="body1" color="#00A0FA">
          #Animals #cat #kitten #ShibaCoin
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="Awesome Derrick"
      profile={Hood8868}
      content={<Content />}
      image={CatsImage}
      nftGroup={NFTGroup.SecretSocietyOfWhales}
    />
  );
};

export const PostAespa = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Hello fellow MY! Where can I get{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #Aespa{" "}
        </Typography>
        goods?{" "}
        <Typography variant="body1" color="#00A0FA">
          #Kpop #Aespa
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="winter_next_level"
      profile={Hood9476}
      content={<Content />}
      image={AespaImage}
      nftGroup={NFTGroup.Rarible}
    />
  );
};

export const PostCoinQuestion = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        anyone heard of{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #KimchiCoin
        </Typography>
        ?{" "}
        <Typography variant="body1" color="text.secondary">
          worth investing or just another shit coin?
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #KimchiCoin #Investment #Coin
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="astronaut9342"
      profile={Shoeuzi841}
      content={<Content />}
      nftGroup={NFTGroup.ScatteredShoeuziVol1}
    />
  );
};

export const PostGodOfWar = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        Damn!!!{" "}
        <Typography display="inline" variant="body1" color="#00A0FA">
          #GodOfWar{" "}
        </Typography>
        finally available for PC!!!{" "}
        <Typography variant="body1" color="text.secondary">
          LOVE YOU KRATOS!!!
        </Typography>
        <Typography variant="body1" color="#00A0FA">
          #Game #GodOfWar
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="GosuGamer.eth"
      isVerified
      profile={Shoeuzi851}
      content={<Content />}
      image={GodOfWarImage}
      nftGroup={NFTGroup.ScatteredShoeuziVol1}
    />
  );
};

export const PostTeen = () => {
  const Content = () => {
    return (
      <Typography variant="body1" color="text.secondary">
        too much homework. fml.{" "}
        <Typography variant="body1" color="#00A0FA">
          #SchoolLife #fml
        </Typography>
      </Typography>
    );
  };
  return (
    <Post
      name="blackwhite hacker"
      profile={Hood7171}
      content={<Content />}
      nftGroup={NFTGroup.MekaverseFactory}
    />
  );
};
