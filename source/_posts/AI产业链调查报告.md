---
title: AI产业链调查报告
categories: Technical Journals
date: 2024-05-01 11:04:05
updated: 2024-05-01 11:04:05
tags: [中文, AI]
excerpt: "一个简单的AI产业链调查"
---

# AI产业链及代表企业


## 上游：硬件层
> 包括：芯片、算力、半导体、CPO、光模块等关键技术领域

### Semiconductor: 半导体
> 一种介于导体和绝缘体中间的物质, 基础材料是硅, 由四个组成部分组成  
	- 集成电路 (Integrated circuit): 占 80%+  
	- 光电器件  
	- 分立器件  
	- 传感器  

> 其中集成电路：分为以下四类（也统称为芯片 Chip）  
	- 微处理器  
	- 存储器  
	- 逻辑器件  
	- 模拟器件  

**全球**：根据TechInsights报告显示，2023年全球TOP25半导体公司分别为:  

- 台积电（TSMC）
- 英特尔（Intel）
- 英伟达（NVIDIA）
- 三星（Samsung）
- 高通（Qualcomm）
- 博通（Broadcom）
- SK海力士（SK hynix）
- AMD
- 英飞凌（Infineon）
- 意法半导体（ST）
- 德州仪器（TI）
- 苹果（Apple）
- 美光（Micron）
- 联发科（MediaTek）
- 恩智浦（NXP ）
- ADI（Analog Devices）
- 索尼（Sony）
- 瑞萨（Renesas）
- 微芯（Microchip）
- 安森美（Onsemi）
- 格芯（GlobalFoundries）
- 联电（UMC）
- 铠侠（Kioxia）
- 中芯国际（SMIC）
- 西部数据（Kioxia）

**大陆**：
![Pic 1](https://img.36krcdn.com/hsossms/20240320/v2_db558fcf5e9e4696bb5734e00f6ce685@000000_oswg1033349oswg1080oswg3165_img_000?x-oss-process=image/format,jpg/interlace,1/format,jpg/interlace,1/format,jpg/interlace,1)

### Optical Module: 光模块
**光模块链路**：
![Pic 2](https://img.36krcdn.com/hsossms/20231019/v2_775777ba9bf54ddfa6278a176aa93b7d@5967662_oswg181110oswg1080oswg439_img_000?x-oss-process=image/format,jpg/interlace,1/format,jpg/interlace,1/format,jpg/interlace,1/format,jpg/interlace,1/format,jpg/interlace,1)

#### 更多参考
- [英伟达吃肉，光模块喝汤？](https://36kr.com/p/2480834050072704)
- [Introduction And Application Of Optical Modules](https://www.researchhub.com/post/1998/introduction-and-application-of-optical-modules)
- [清晰明了！10分钟讲懂光模块【深度报告】](https://www.bilibili.com/video/BV1aN41117K1/?spm_id_from=333.337.search-card.all.click&vd_source=cebe69f84577caa5e4b4425764aef2cb)

### Processors: 处理器, 核心是芯片
> - 为AI提供算力, 每种处理器擅长处理的计算不一样，需要按照AI项目的需要选择
> - 处理器的不同主要由芯片来决定

#### 按硬件类型分类
- CPU: 中央处理器
	- CPU是计算机系统中的主要处理器，用于执行大部分的通用计算任务，目前常用于家用电脑和手机
	- 它负责处理指令、控制计算机的各个组件以及执行软件程序。CPU通常具有多个核心，每个核心都能执行指令序列，进行算术和逻辑运算，并处理内存中的数据
- GPU: 图形处理器（在AI界，最广泛使用）
	- GPU是专门设计用于处理图形和并行计算的处理器。它具有大量的并行计算单元，适用于同时处理大规模数据集的并行任务。GPU最初用于图形渲染和游戏，但现在也广泛用于科学计算、机器学习和深度学习等领域
	- 主要制造商：
		- Nvidia
		- AMD
		- Intel
	- 主要应用：
		- Chat GPT-3
- TPU: 张量处理器
	- TPU是由谷歌公司开发的专用硬件加速器，旨在加速人工智能任务中的张量计算 
	- 主要由 [Google Cloud TPU](https://cloud.google.com/blog/products/compute/whats-new-with-google-clouds-ai-hypercomputer-architecture?hl=en) 提供
	- 主要应用：
		- Google Search
		- Google Photos
		- Google Translate
		- Waymo
- DPU: 数据处理器
	- 专门设计用于数据处理任务，具有高度优化的硬件结构，适用于特定领域的计算需求
	- 主要制造商：
		- Nvidia: BlusField系列
- QPU: 量子处理器（发展前景大，但目前无成熟产品）
	- QPU是用于执行量子计算的处理器。与传统的计算机架构不同，量子计算利用量子力学原理，以量子比特（qubit）作为计算的基本单位。QPU能够处理和操作量子态，执行特定的量子算法，以解决某些问题中的复杂计算和优化任务

#### 更多参考：
- [CPU vs GPU vs TPU vs DPU vs QPU](https://www.bilibili.com/video/BV1S14y1k72N/?spm_id_from=333.337.search-card.all.click&vd_source=cebe69f84577caa5e4b4425764aef2cb)
- [Ai Hardware](https://www.larksuite.com/en_us/topics/ai-glossary/ai-hardware) 

### Memory & Storage
> - AI 模型进行训练和计算的时候，需要读取数据
> - 能够迅速的读取数据，有助于模型快速的进行运算
> - 一般来说，读取存放在 disk 内的数据时，需要以下几步：
> 	- 先从存储层（Hard Disk）中进行查找
> 	- 把查找到的内容保存到内存（memory）
> 	- 操作系统再从内存中读取数据
> 	- （以上步骤，每步花费的时间越短越好，因此需要可以快速查询的Hard Disk 和 Memory）

- Fast memory: RAM
	- 主要制造商: [Link](https://us.metoree.com/categories/5443/)
- Storage: SSD
	- 主要制造商: [Link](https://us.metoree.com/categories/5508/)

### 未来发展方向
- Quantum computing: 可以进行更复杂且迅速的运算
- Edge computing: 在 Local devices （包括手机，IoT Devices，汽车等）上处理数据
- 可持续 & energy-efficient designs: 切合全球可持续发展的目标

## 中游：平台层
> 基于各类识别技术构建的软件产品、解决方案和技术平台

### 数字/信息安全
> 用 AI 来评估多个来源的海量数据，识别可能需要调查的异常行为

- [Google Gemini](https://cloud.google.com/blog/products/ai-machine-learning/gemini-for-google-cloud-is-here): 主要用于服务器
- [Microsoft Copilot](https://www.microsoft.com/zh-cn/security/business/ai-machine-learning/microsoft-copilot-security#tabs-oc19f7_tab2): 主要用于服务器
- [深信服安全GPT](https://www.securitygpt.com.cn/): 主要用于公司内网等区域网络
	- 类似公司有：安恒信息、永信⾄诚、美亚柏科、绿盟科技、左江科技、科创信息、中孚信息、电科网安、中新赛克、奇安信  

#### 更多参考
- [什么是网络安全 AI？](https://www.microsoft.com/zh-cn/security/business/security-101/what-is-ai-for-cybersecurity)

### 大模型
- [Large Language Models Explained](https://www.nvidia.com/en-us/glossary/large-language-models/)
- 国外：[Link](https://zapier.com/blog/best-llm/)
- 国内：[Link](http://www.cbdio.com/BigData/2024-02/01/content_6176476.htm)

#### 更多参考
- [Hugging Face](https://huggingface.co/): 分享AI模型的平台
- [Awesome-LLM](https://github.com/Hannibal046/Awesome-LLM): 关于大模型的一切资料

## 下游：应用层
### 游戏
- [天风证券-游戏产业人士看AI应用前景](https://pdf.dfcfw.com/pdf/H3_AP202310191602085337_1.pdf?1697724877000.pdf)
- 解决方案：
	- [AWS](https://aws.amazon.com/cn/campaigns/aigc/gaming/)
	- 其他，没看太多，各大云服务商应该都有
### 医疗
应用方向：
- 处理门诊管理、人员管理等管理任务
- 改进诊断
- 助力药物开发
- 帮助疾病风险预测
案例：
- [AWS-生成式 AI 助力医疗健康与生命科学创新](https://aws.amazon.com/cn/campaigns/aigc/hcls/)
- [Intel-医疗保健和生命科学领域中的人工智能](https://marketplace.intel.com/s/pmp-category/a5N3b000000L7SFEA0/solution?language=zh_CN&search=%7B%22q%22%3A%22%22%2C%22p%22%3A1%2C%22s%22%3A%22%22%2C%22f%22%3A%7B%22OfferingIndustries%22%3A%5B%22a5N3b000000L7SiEAK%22%2C%22a5N3b000000L7TKEA0%22%5D%7D%7D)

### 新媒体运营
- 实现流程：
	- [创新想法：AI赋能新媒体平台运营](https://www.woshipm.com/ai/1466006.html)
- 现成产品:
	- [百度智能云-媒体行业智能运营解决方案](https://cloud.baidu.com/solution/mediaoperationsolutionv1.html)
	- [AiDeep](https://www.aideep.com/product/operation)
	- [昆仑万维](https://www.kunlun.com/index.html)


## 推荐书籍
- [图解人工智能](https://github.com/Kensuke-Hinata/statistic/blob/master/AI/books/%E5%9B%BE%E8%A7%A3%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.pdf): 简单了解原理
  

## References
- [Deepgram: AI Hardware](https://deepgram.com/ai-glossary/ai-hardware)
- [雪球：人工智能产业链全景及概念分析](https://xueqiu.com/7723952820/278839941)
- [PWC: What’s the real value of AI for your business and how can you capitalise?](https://www.pwc.com/gx/en/issues/analytics/assets/pwc-ai-analysis-sizing-the-prize-report.pdf)
- [一口气了解英伟达，芯片新王凭什么是他](https://www.youtube.com/watch?v=EdTPykGAe0Q)
- [AI in Network 智能自治网络案例报告](https://carrier.huawei.com/~/media/cnbgv2/download/products/wireless-network/ai-in-network.pdf)
