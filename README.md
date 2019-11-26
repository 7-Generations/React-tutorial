# React-tutorial
Reactチュートリアルで用いられるまるばつゲームをTypescriptを使って作成する

## やってはいけないこと
Masterブランチで作業したり、developブランチで作業すること。必ず、developブランチに移動してそこから新しくブランチを切って自分たちの作業をすること


## クローンとブランチ作成の手順
1. `git clone https://github.com/7-Generations/React-tutorial.git`をする
1. `git branch`で今自分のいるブランチを確認する
1. developブランチがすでに作成されていると思うので、`git checkout develop`で移動する
1. 移動したdevelopブランチの中にいることを`git branch`で確認し、確認できたら、`git branch <任意のブランチ名(英語)>`でかく。<>は実際にかく時は省略すること
1. これでクローンとブランチの作成はできたと思う
#### * なお作業するエディタはVisual Studio Codeが望ましい


## よく使うgitコマンド
[Qiitaの記事](https://qiita.com/naoki_mochizuki/items/50e48c18908e493dfc75)
- `git add .`
- `git commit -m '何をしたのかをかく'`
- `git push <任意のブランチ名>`
- `git pull <任意のブランチ名>`
- `git merge <任意のブランチ名>`
#### * なおgitは間違えても戻せることが多い(戻せないこともある)のでおかしくなったら要相談

## Reactの開発環境について
- Dockerを利用して作成するつもりだが、今回は使わなくても環境を合わせられると思う
- nodeのバージョンを合わせる(今回は10であればなんでもいい)。MacOSの人はnodebrewを使うのがおすすめ[macOSでのnodebrewのインストールと使い方](https://qiita.com/ucan-lab/items/517ee13a2f8769ab866c)。windowsの場合はnodistというのがあるみたい(使ったことないので詳しくはわからない)[windowsでのnodistのインストールと使い方](https://qiita.com/t_kojima/items/780b3b3133a17cceb175)
- 上記の手法でnodeのバージョンを10.~~~のものにしてもらったらいい(12くらいまであるよ)
