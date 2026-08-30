---
title: "空间相干性"
description: "空间相干性（Spatial Coherence）的互相干函数、可见度与 van Cittert–Zernike 定理推导。"
date: 2026-08-30
draft: false
tags:
  - phy
  - optics
  - blog
---

# 空间相干性

空间相干性（Spatial Coherence）描述的是光场在不同空间点之间是否具有稳定的相位关联。它决定了光源是否适合形成清晰干涉条纹，也决定了成像系统、干涉测量和相干成像的能力。

## 1. 互相干函数

设光场在两个观察点 $P_1$ 和 $P_2$ 处的复振幅分别为 $E_1(t)$ 和 $E_2(t)$。定义互相干函数（mutual coherence function）为

$$
\Gamma_{12}(\tau) = \langle E_1(t)E_2^*(t+\tau) \rangle,
$$

其中角括号表示时间平均。它描述了两点间的相位关联强度。若取 $\tau=0$，则得到

$$
\Gamma_{12}(0)=\langle E_1 E_2^* \rangle.
$$

归一化的复相干度定义为

$$
\gamma_{12}(\tau) = \frac{\Gamma_{12}(\tau)}{\sqrt{\Gamma_{11}(0)\Gamma_{22}(0)}}.
$$

其中 $0\le |\gamma_{12}| \le 1$。若 $|\gamma_{12}|=1$，则两个点完全相干；若 $|\gamma_{12}|=0$，则不相干。

## 2. 空间相干性与干涉可见度

对于双光束干涉，光强可写为

$$
I = I_1 + I_2 + 2\sqrt{I_1I_2}\,\operatorname{Re}\{\gamma_{12}(\tau)\}.
$$

若光源在两个点上完全相干，则干涉条纹可见度最大。定义可见度（visibility）为

$$
V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = |\gamma_{12}|.
$$

因此，可见度本质上就是空间相干度的直接测量量。

## 3. 迈克尔逊型干涉仪中的相干性

在双孔或迈克尔逊干涉仪中，干涉强度可写成

$$
I(\Delta) = I_1 + I_2 + 2\sqrt{I_1I_2}\,\operatorname{Re}\{\Gamma_{12}(\Delta/c)\}.
$$

如果两点之间的相位相关性较强，则条纹清晰；反之则模糊，最终衰减到平坦背景。这说明空间相干性直接决定了干涉图样的清晰度。

## 4. van Cittert–Zernike 定理

对于一个部分相干光源，源分布 $S(\mathbf{r})$ 在观察平面上的复相干度满足 van Cittert–Zernike 定理：

$$
\Gamma(\mathbf{r}_1,\mathbf{r}_2) \propto \iint S(\mathbf{r})\, e^{-ik(\hat{s}_1-\hat{s}_2)\cdot\mathbf{r}}\, d^2\mathbf{r}.
$$

也就是说，远场中两个点间的相干性，等于源分布的傅里叶变换。

这意味着：

- 面积越大的无定域热光源，通常越不相干；
- 光源越小、越近似点光源，越容易形成高相干性；
- 远场观察中，相干度的空间分布由源的角度分布决定。

## 5. 相干面积与光束质量

定义相干面积（coherence area）为

$$
A_c = \frac{\pi}{4}\cdot \frac{\lambda^2}{\Omega_s},
$$

其中 $\Omega_s$ 是光源的角尺寸。该关系说明：

- 光源更大：$\Omega_s$ 更大，$A_c$ 更小；
- 波长更长：$A_c$ 更大；
- 相干区域更大意味着更容易在大范围上保持相位稳定。

这在激光、光学干涉、天文学和相干成像中非常关键。

## 6. 结论

空间相干性是光场在空间中保持相位锁定程度的量度。它从互相干函数出发，连接了光强、干涉条纹、源尺寸与远场成像之间的关系。van Cittert–Zernike 定理揭示了这一关系的深层结构：远场中的相干性，等于源分布的傅里叶变换。 

这使得空间相干性成为理解激光、相干散射、光学成像和干涉测量的核心概念。

> 专有名词：Spatial Coherence（空间相干性），mutual coherence function（互相干函数），visibility（可见度），van Cittert–Zernike theorem（范·西特尔特-泽尔尼克定理），coherence area（相干面积）。
