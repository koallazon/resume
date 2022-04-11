#!/usr/bin/env sh

# 명령어 실패 시 script를 바로 종료시칸다.
set -e

# vue build
npm run build

cd dist

git init
git add -A
git commit -m $1
git push -f git@github.com-koalla:koallazon/resume.git master:resume-pages

cd -
