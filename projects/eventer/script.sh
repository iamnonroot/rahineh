# check yarn on system
if ! command -v yarn &> /dev/null
then
    echo "Please install 'yarn' on your system via 'npm install yarn'"
    exit
fi

# version up
yarn version --patch
# push
git add -A
git commit -m "[script] push and publish"
git push -f
# publish
npm publish --registry https://tpm.rc0.ir/