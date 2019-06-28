echo 'This package needs the DOS/MAC to UNIX text file format converter'
echo "Should we install it for you? Type yes or no(Case sensitive)"
read canInstall

if [ "$canInstall" = "yes" ]
then  
sudo apt-get install dos2unix

echo 'Installing dos2unix...'
echo 'Read more: https://linux.die.net/man/1/dos2unix'
else
    echo "Not Cool Beans"
fi
