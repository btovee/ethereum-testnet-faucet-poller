#!/usr/bin/env bash

echo Building ethereum-testnet-faucet-poller:latest
docker build --no-cache -t ethereum-testnet-faucet-poller:latest -f ./docker/Dockerfile .
