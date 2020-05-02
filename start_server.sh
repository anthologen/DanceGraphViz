#!/bin/bash

cd simple_server
mkdir -p build
cp -r ../images ./build
cp -r ../graph_data ./build

python3 server.py
