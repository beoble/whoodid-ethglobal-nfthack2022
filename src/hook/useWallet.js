import React, { useEffect, useState, useCallback } from "react";
import { metaMask, hooks } from "../sdk/metamask";
import { getAddChainParameters, CHAINS, URLS } from "../sdk/chains";
import { formatEther } from "@ethersproject/units";

const useWallet = () => {
  const [desiredChainId, setDesiredChainId] = useState(1);
  const {
    useChainId,
    useAccounts,
    useError,
    useProvider,
    useENSNames,
    useIsActivating,
    useIsActive,
  } = hooks;

  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const provider = useProvider();
  const ensNames = useENSNames(provider);
  const connected = chainId && accounts;
  const balances = useBalances(provider, accounts);

  const connect = () => {
    console.log(desiredChainId);
    metaMask.activate(
      desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId)
    );
  };

  const setChainId = useCallback(
    (previousChainId) => {
      setDesiredChainId(previousChainId);
      if (previousChainId !== -1 && previousChainId !== chainId) {
        return metaMask.activate(getAddChainParameters(chainId));
      }
    },
    [setDesiredChainId, chainId, metaMask]
  );

  return {
    chainId,
    connected,
    accounts,
    ensNames,
    balances,
    setChainId,
    connect,
  };
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

export default useWallet;
