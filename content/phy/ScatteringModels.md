---
title: "常见散射模型"
description: "散射模型的基本框架，以及 Rayleigh、Mie、Thomson 与 Born 近似的物理含义。"
date: 2026-08-30
draft: false
tags:
  - phy
  - optics
  - blog
---

# 常见散射模型

散射（Scattering）是波在介质中与粒子、缺陷或结构相互作用后偏离原始传播方向的现象。光学、声学、粒子物理和天体物理中都存在散射问题，但其背后的统一思想相同：入射波激发了介质的响应，再通过再辐射形成偏离原方向的波。

## 1. 散射的一般框架

对于一个入射场 $\mathbf{E}_\text{in}$，若介质中存在散射中心，则总场可写为

$$
\mathbf{E} = \mathbf{E}_\text{in} + \mathbf{E}_\text{sc}.
$$

散射振幅通常与介质的极化响应相关：

$$
\mathbf{P} = \varepsilon_0 \chi \mathbf{E},
$$

而散射截面定义为

$$
\sigma_\text{sc} = \frac{P_\text{sc}}{I_\text{in}},
$$

其中 $P_\text{sc}$ 是散射功率，$I_\text{in}$ 是入射强度。

## 2. Thomson 散射

在经典电磁学中，当波长远大于粒子尺度时，可以把电子看成自由点电荷。此时散射截面为

$$
\sigma_T = \frac{8\pi}{3} r_e^2,
$$

其中电子经典半径为

$$
 r_e = \frac{e^2}{4\pi\varepsilon_0 m_e c^2}.
$$

它描述的是自由电子对电磁波的弹性散射。Thomson 散射在高能物理、太阳物理和等离子体中非常重要，也是更高级散射模型的基础。

## 3. Rayleigh 散射

当粒子尺寸远小于波长，即

$$
 a \ll \lambda,
$$

可以采用 Rayleigh 散射模型。若粒子的极化率为 $\alpha$，则散射强度近似为

$$
 I_\text{sc} \propto \frac{\omega^4}{r^2} |\alpha|^2 \sin^2\theta.
$$

其截面为

$$
\sigma_\text{Rayleigh} = \frac{8\pi}{3} k^4 a^6 \left|\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right|^2.
$$

这里 $a$ 是粒径，$k = 2\pi/\lambda$。这是大气中蓝天、日落红霞和小粒子散射的经典解释。

## 4. Mie 散射

当粒子尺寸与波长同量级，即

$$
 a \sim \lambda,
$$

则需要用 Mie 理论。此时多重极化和内部相位效应都重要，不能简单用 Rayleigh 近似。Mie 散射的关键特征是：

- 有明显的前向散射增强
- 散射强度分布依赖粒径与折射率
- 可描述水滴、灰尘、气溶胶和微粒的光学行为

其本质上是球对称粒子在电磁场中的精确解，通常用无穷级数表示：

$$
\mathbf{E}_\text{sc} = \sum_{n=1}^{\infty} a_n \mathbf{M}_n + b_n \mathbf{N}_n,
$$

其中 $a_n,b_n$ 是散射系数，依赖于粒子的半径、折射率和波长。

## 5. Born 近似散射

在弱扰动条件下，若散射势远小于入射束的能量，可以使用 Born 近似。此时散射振幅近似为

$$
 f(\theta) \propto \int V(\mathbf{r}) e^{i\mathbf{q}\cdot\mathbf{r}} d^3r,
$$

其中 $\mathbf{q} = \mathbf{k}_\text{in} - \mathbf{k}_\text{out}$ 是动量转移。Born 近似在核物理、X 射线散射和电子衍射中有广泛应用。

它的物理含义是：入射波与散射中心的相互作用足够弱，散射可以看作是“第一次近似”的响应，而不需要求得全部多次散射过程。

## 6. 其他常见散射模型

除了以上几种，还有一些广泛使用的散射模型：

- Raman scattering（拉曼散射）：涉及分子振动能级跃迁。
- Brillouin scattering（布里渊散射）：涉及声子和光子耦合。
- Compton scattering（康普顿散射）：高能光子与电子非弹性散射。
- diffuse scattering（漫反射/漫散射）：表面粗糙度或随机介质造成的非定向散射。

## 7. 结论

常见散射模型可以分为三类：

- 小粒子近似：Rayleigh scattering
- 中等尺度球粒子：Mie scattering
- 经典自由电子：Thomson scattering
- 弱扰动近似：Born approximation

它们各自适用于不同长度尺度和相互作用强度。理解这些模型的边界条件，是解释天空颜色、气溶胶光学、介质表征与天体辐射特征的关键。

> 专有名词：scattering（散射），Rayleigh scattering（瑞利散射），Mie scattering（米散射），Thomson scattering（汤姆逊散射），Born approximation（Born 近似）。
