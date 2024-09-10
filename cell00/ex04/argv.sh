#!/bin/bash

for i in {1..3}; do
  if [ -n "${!i}" ]; then
    echo "${!i}"
  fi
done
