#!/usr/bin/env bash

echo "What's your name?" 
read name 
echo "Hello there, $name!"

dir_name="${name}_dir"
fileURI="${dir_name}/his_file.sh"

# if() Check if folder/file is already there
mkdir "${dir_name}" && touch "$fileURI"
echo "#!/usr/bin/env bash " >> $fileURI
echo "echo The auto generated text from file ${fileURI}" >> $fileURI
echo "Now reading from auto generated file"

bash $fileURI

echo "What's the url you want to vist?" 
read url 

open '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe' --incognito "$url"
