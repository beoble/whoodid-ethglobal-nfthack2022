import React, { useState, useEffect, useCallback } from "react";
import { formatEther } from "@ethersproject/units";
import { metaMask, hooks } from "../../sdk/metamask";
import { getAddChainParameters, CHAINS, URLS } from "../../sdk/chains";

export const Status = ({ hooks }) => {
  const { useChainId, useAccounts, useError } = hooks;
  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const connected = chainId && accounts;
  return (
    <div>
      <b>MetaMask</b>
      <br />
      {error ? (
        <>
          🛑 {error.name ?? "Error"}: {error.message}
        </>
      ) : connected ? (
        <>✅ Connected</>
      ) : (
        <>⚠️ Disconnected</>
      )}
    </div>
  );
};

export const ChainId = ({ hooks }) => {
  const { useChainId } = hooks;
  const chainId = useChainId();
  return <div>Chain Id: {chainId ? <b>{chainId}</b> : "-"}</div>;
};

const useBalances = (provider, accounts) => {
  const [balances, setBalances] = useState();

  useEffect(() => {
    if (provider && accounts?.length) {
      let stale = false;

      void Promise.all(
        accounts.map((account) => provider.getBalance(account))
      ).then((balances) => {
        if (!stale) {
          setBalances(balances);
        }
      });

      return () => {
        stale = true;
        setBalances(undefined);
      };
    }
  }, [provider, accounts]);

  return balances;
};

export const Accounts = ({ hooks }) => {
  const { useAccounts, useProvider, useENSNames } = hooks;
  const provider = useProvider();
  const accounts = useAccounts();
  const ENSNames = useENSNames(provider);

  const balances = useBalances(provider, accounts);

  return (
    <div>
      Accounts:
      {accounts === undefined
        ? " -"
        : accounts.length === 0
        ? " None"
        : accounts?.map((account, i) => (
            <ul
              key={account}
              style={{
                margin: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <b>{ENSNames?.[i] ?? account}</b>
              {balances?.[i] ? ` (Ξ${formatEther(balances[i])})` : null}
            </ul>
          ))}
    </div>
  );
};

const MetaMaskSelect = ({ chainId, setChainId }) => {
  return (
    <label>
      Chain:{" "}
      <select
        value={`${chainId}`}
        onChange={
          setChainId
            ? (event) => {
                setChainId(Number(event.target.value));
              }
            : undefined
        }
        disabled={!setChainId}
      >
        <option value={-1}>Default</option>
        {Object.keys(URLS).map((chainId) => (
          <option key={chainId} value={chainId}>
            {CHAINS[Number(chainId)].name}
          </option>
        ))}
      </select>
    </label>
  );
};

export const MetaMaskConnect = ({ connector, hooks }) => {
  const { useChainId, useIsActivating, useError, useIsActive } = hooks;
  const currentChainId = useChainId();
  const isActivating = useIsActivating();
  const error = useError();
  const active = useIsActive();

  const [desiredChainId, setDesiredChainId] = useState(-1);

  const setChainId = useCallback(
    (chainId) => {
      setDesiredChainId(chainId);
      if (chainId !== -1 && chainId !== currentChainId) {
        return connector.activate(getAddChainParameters(chainId));
      }
    },
    [setDesiredChainId, currentChainId, connector]
  );

  if (error) {
    return (
      <>
        <MetaMaskSelect chainId={desiredChainId} setChainId={setChainId} />
        <br />
        <button
          onClick={() =>
            connector.activate(
              desiredChainId === -1
                ? undefined
                : getAddChainParameters(desiredChainId)
            )
          }
        >
          Try Again?
        </button>
      </>
    );
  } else if (active) {
    return (
      <>
        <MetaMaskSelect
          chainId={desiredChainId === -1 ? -1 : currentChainId}
          setChainId={setChainId}
        />
        <br />
        <button disabled>Connected</button>
      </>
    );
  } else {
    return (
      <>
        <MetaMaskSelect
          chainId={desiredChainId}
          setChainId={isActivating ? undefined : setChainId}
        />
        <br />
        <button
          onClick={
            isActivating
              ? undefined
              : () =>
                  connector.activate(
                    desiredChainId === -1
                      ? undefined
                      : getAddChainParameters(desiredChainId)
                  )
          }
          disabled={isActivating}
        >
          {isActivating ? "Connecting..." : "Connect"}
        </button>
      </>
    );
  }
};

export const TestConnectDiv = () => {
  return (
    <div
      style={{ display: "flex", flexFlow: "wrap", fontFamily: "sans-serif" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "20rem",
          padding: "1rem",
          margin: "1rem",
          overflow: "auto",
          border: "1px solid",
          borderRadius: "1rem",
        }}
      >
        <div>
          <Status hooks={hooks} />
          <br />
          <ChainId hooks={hooks} />
          <Accounts hooks={hooks} />
          <br />
        </div>
        <MetaMaskConnect connector={metaMask} hooks={hooks} />
      </div>
    </div>
  );
};
