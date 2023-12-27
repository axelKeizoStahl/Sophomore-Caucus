#!/bin/bash
for file in *; do
first_char=$(echo "$file" | cut -c1)
new_name="mag${first_char}.pdf"
mv "$file" "$new_name"
echo "Renamed: $file to $new_name"
done
