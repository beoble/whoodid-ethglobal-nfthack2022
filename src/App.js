import React, { useEffect } from "react";
import "./App.css";
import {} from "./sdk/metamask";
import ServerDataSource from "./sdk/api";
import MainAppBar from "./presentation/component/appbar";
import { AppContainer, MainHeroContainer } from "./styles/container";
import SocialClubListBar from "./presentation/component/socialClubListBar";
import styled from "styled-components";
import Post from "./presentation/component/post";
import HashtagListBar from "./presentation/component/hashtagListBar";
import Coolcat279 from "./assets/nft/coolcat279.png";
import Coolcat7795 from "./assets/nft/coolcat7795.png";
import MelvinProfile from "./assets/nft/phantabear1845.png";
import GurrenLagann from "./assets/gurrenlagann.png";
import Meka6242 from "./assets/nft/meka6242.png";
import Hood512 from "./assets/nft/hood512.png";
import F10Klaytn from "./assets/f10xklaytn.png";
import Doodle662 from "./assets/nft/doodle316.png";

import Typography from "@mui/material/Typography";

const PostContainer = styled.div`
  padding: 50px 0;
  width: 100%;
  height: fit-content;
  background-color: #00000015;
  margin: 72px 200px 0px 260px;
`;

const PostGreenSalad = () => {
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
    />
  );
};

const PostKryptonium = () => {
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
    />
  );
};

const PostShipDuck = () => {
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
    />
  );
};

const PostMelvin = () => {
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
    />
  );
};

const PostHoodie = () => {
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
  return <Post name="angry squid" profile={Hood512} content={<Content />} />;
};

function App() {
  const testOpenSea = async () => {
    let server = new ServerDataSource();
    let res1 = await server.getAccountOpenSea(
      "0xD59134a3E004609f39C601cE6F0739df2cc78240"
    );
    let res2 = await server.getPriceCovalent(
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
    console.log(res1);
    console.log(res2);
    console.log(process.env.REACT_APP_TEST_KEY);
    console.log(process.env.NODE_ENV);
  };

  useEffect(() => {
    testOpenSea();
  }, []);

  return (
    <AppContainer>
      <MainAppBar />
      <MainHeroContainer>
        <SocialClubListBar />
        {/*<TestConnectDiv />*/}
        <PostContainer>
          <PostGreenSalad />
          <PostMelvin />
          <PostShipDuck />
          <PostHoodie />
          <PostKryptonium />
        </PostContainer>
        <HashtagListBar />
      </MainHeroContainer>
    </AppContainer>
  );
}

export default App;
