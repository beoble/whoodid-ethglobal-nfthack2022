import ServerDataSource from "./api";

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
  constructor() {}

  testOpenSea = () => {};
}
