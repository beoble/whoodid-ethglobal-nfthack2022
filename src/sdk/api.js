import axios from "axios";
import { Path } from "./path";

export default class ServerDataSource {
  async tryRestApi(apiCallFunc, header = {}, param = {}) {
    try {
      let res = await apiCallFunc();
      if (res?.status !== 200) throw res?.status;
      return res.data;
    } catch (err) {
      return err;
    }
  }

  async getRestApiData(path, header = {}, param = {}) {
    let config = {
      headers: header,
      params: param,
    };
    return this.tryRestApi(async () => {
      return await axios.get(path || "", config);
    });
  }

  async postRestApiData(path) {
    return this.tryRestApi(async () => {
      await axios.post(path || "");
    });
  }

  async deleteRestApiData(path) {
    return this.tryRestApi(async () => {
      await axios.delete(path || "");
    });
  }

  async putRestApiData(path) {
    return this.tryRestApi(async () => {
      await axios.put(path || "");
    });
  }

  async getAccountNFTPort(address) {
    let header = { Authorization: "1bc8affc-83d5-422b-a66b-4e2b0456fc53" };
    return this.getRestApiData(
      `${Path.NFTPORT}${Path.NFTPORT_ACCOUNTS}${address}`,
      header
    );
  }

  async getAccountOpenSea(address) {
    let param = { owner: address };
    return this.getRestApiData(
      `${Path.OPENSEA}${Path.OPENSEA_ASSETS}`,
      {},
      param
    );
  }

  async getPriceCovalent(address) {
    let param = {
      "quote-currency": "USD",
      format: "json",
      key: "ckey_72b4f4d669a843b4bc73df805e8",
    };
    console.log(`${Path.COVALENT}${Path.COVALENT_PRICING}1/USD/${address}/`);
    return this.getRestApiData(
      `${Path.COVALENT}${Path.COVALENT_PRICING}1/USD/${address}/`,
      {},
      param
    );
  }
}
