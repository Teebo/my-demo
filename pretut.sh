echo 'This package needs the DOS/MAC to UNIX text file format converter to be installed(dos2unix)'
echo 'If you would like to install it yourself then try: sudo apt-get install dos2unix'
echo ''
echo "Should we install it for you? Type yes or no(Case sensitive)"
read canInstall

if [["$canInstall" = "yes"] || ["$canInstall" = "y"]]
then  
sudo apt-get install dos2unix

echo 'Installing dos2unix...'
echo 'Read more: https://linux.die.net/man/1/dos2unix'
elif  [[ "$canInstall" = "no"] || ["$canInstall" = "n"]]
 then
    echo "Cheers..."
    echo 'Remember you need the dos2unix package installed in your system, for our NPM package to work'
else
   echo 'Please us yes or no(Case sensitive)'
fi
