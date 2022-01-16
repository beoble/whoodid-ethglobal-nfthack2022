import ServerDataSource from "./api";
import axios from "axios";
import { Path } from "./path";
import { TrapTrap, VoidSnax } from "../constants";

export const testOpenSea = async () => {
  let server = new ServerDataSource();
  let res1 = await server.getAccountOpenSea(
    "0xD59134a3E004609f39C601cE6F0739df2cc78240"
  );
  let res2 = await server.getPriceCovalent(
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  );
};

export class WhoodidSdk {
  constructor() {
    this.client = axios.create({
      baseURL: Path.OPENSEA,
    });
  }

  getRestApi = async (path, params, headers) => {
    let config = {
      params,
      headers,
    };
    return await this.client.get(path, config);
  };

  getNFTByAddress = async (address) => {
    let param = { owner: address };
    return (await this.getRestApi(Path.OPENSEA_ASSETS, param)).data.assets;
  };

  getOpenSeaCollectionsByAddress = async (address) => {
    let param = { asset_owner: address };
    return (await this.getRestApi(Path.OPENSEA_COLLECTIONS, param)).data;
  };

  getNFTImageUrlsByAddresss = async (address) => {
    let nfts = await this.getNFTByAddress(address);
    return nfts.map((nft) => nft.image_url);
  };

  getCollectibleListByAddress = async (address) => {
    let NFTs = await this.getOpenSeaCollectionsByAddress(address);
    return NFTs.map((nft) => {
      return { name: nft.name, count: nft.stats.count };
    });
  };
}
