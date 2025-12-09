---
tags: 
title: 
date: 2025-04-01T22:19:00
modified:
---

##### 1.安装homebrew
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
> 我之前已安装，所以直接
> 查看版本：brew -v
> 更新 brew 版本：brew update
> 还更新：brew upgrate（其中Python升到了3.13）

##### 2.安装 stable diffusion webui 的依赖
brew install cmake protobuf rust python@3.10 wget
（PS：cmake、protobuf、rust、python@3.10、git、wget, 这些都是在后面安装 Stable Diffusion Webul 时需要用到的依赖, 这里通过一条命令直接安装了。）

##### 3.安装 Stable Diffusion WebUI 
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui

如果下载过程中出错。
可以到SD的GitHub主页下载Zip到本地：
![image.png|440](https://raw.githubusercontent.com/SibylYang55/tuchuang/master/img/20250401182140.png)

或者尝试一下，不用清华大学的源，改用阿里云的源：
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/  （如果 pip 找不到, 把 pip 替换为 pip3 再执行。）
git clone https://gitee.com/ineo6/stable-diffusion-webui.git

##### 4.下载模型
一般模型文件后缀为.ckpt或者.safetensors，而且都比较大，以G为单位。

**方式1：Hugging Face**
到[Hugging Face](https://huggingface.co/)上进行下载，一般下载1.5 版本的就行，推荐SDXL。
Hugging Face-->Stability AI-->Models-->你的目标模型-->Files
![image.png|455](https://raw.githubusercontent.com/SibylYang55/tuchuang/master/img/20250401185923.png)
**方式2：CIVITAI**
如果你想要很好看的图片，可以去[Civitai](https://civitai.com/)下载各种模型。
选中「Models」-「筛选」- 选择「Model types」（是大模型、还是 LoRA、还是 VAE等） - 然后选择一个模型点进去。
- 「大模型」放在 stable-diffusion-webui/models/Stable-diffusion 下面。
- 「LoRA 模型」放在 stable-diffusion-webui/models/Lora 下面 (在没有执行./webui.sh 前, 是没有 Lora 这个目录的, 可以先不放) 。
- 「VAE 模型」Variational Auto Encoder可以简单理解为滤镜，放在 stable-diffusion-webui/models/VAE 下面。
![image.png|680](https://raw.githubusercontent.com/SibylYang55/tuchuang/master/img/20250401191804.png)


##### 5.启动WebUI
cd ~/stable-diffusion-webui
./webui.sh
注意：第一次启动会下载一些库和依赖，等下载完成。之后每次都这两个命令启动。
![image.png|470](https://raw.githubusercontent.com/SibylYang55/tuchuang/master/img/20250401232732.png)
当出现 Running on local URL: [http://127.0.0.1:7860](https://link.juejin.cn/?target=http%3A%2F%2F127.0.0.1%3A7860 "http://127.0.0.1:7860") 的时候，说明 Stable Diffusion WebUI 已经启动好了。

在浏览器中输入URL，就可以看到 Stable Diffusion WebUI 的界面了。
![SCR-20250402-kisn.png|635](https://raw.githubusercontent.com/SibylYang55/tuchuang/master/img/SCR-20250402-kisn.png)

PS：我下载的大模型是GhostMix，刚刚测试生成第一张图时，一直报错(RuntimeError: Placeholder storage has not been allocated on MPS device!)，翻了好久的解决办法，都没成功。最后，按照以往经验，直接退出终端重新启动WebUI，就成了。
这里我觉得是网络的问题。

