#!/usr/bin/bash

for file in *; do
  qpdf --split-pages $file
  rm $file
done

for file in *; do
  if [[ $file != *"01"* ]]; then
    rm $file
  else
    pdftoppm $file $file "mag$(echo "$file" | cut -c8).pdf" -png
  fi
done
