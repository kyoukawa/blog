---
title: "塞曼效应"
description: "塞曼效应（Zeeman Effect）的哈密顿量推导、能级分裂与 Landé g 因子。"
date: 2026-08-30
draft: false
tags:
  - phy
  - quantum
  - blog
---

# 塞曼效应

塞曼效应（Zeeman Effect）指的是原子在外磁场中，能级会发生分裂的现象。它不仅是磁场与原子相互作用的直接体现，也是量子力学中角动量耦合和磁矩概念的经典例子。

## 1. 原子在磁场中的哈密顿量

电子在磁场 $\mathbf{B}$ 中的相互作用哈密顿量可写为

$$
H_Z = -\boldsymbol{\mu}\cdot \mathbf{B},
$$

其中磁矩为

$$
\boldsymbol{\mu} = -\frac{e}{2m}\left(\mathbf{L}+g_s\mathbf{S}\right).
$$

因此，磁场项为

$$
H_Z = \frac{e}{2m}\left(\mathbf{L}+g_s\mathbf{S}\right)\cdot\mathbf{B}.
$$

若忽略磁场导致的微小径向项（diamagnetic term），则其一阶修正能量为

$$
\Delta E^{(1)} = \langle n\, jm_j | H_Z | n\,jm_j \rangle.
$$

在 $\mathbf{B}=B\,\hat{z}$ 的情况下，有

$$
H_Z = \frac{eB}{2m}(L_z + g_s S_z).
$$

## 2. 角动量耦合与总角动量

对于 LS 耦合（Russell–Saunders coupling），定态由总角动量

$$
\mathbf{J} = \mathbf{L} + \mathbf{S}
$$

描述。于是磁矩投影到磁场方向上为

$$
\mu_B = \frac{e\hbar}{2m},
$$

并且

$$
\langle J_z\rangle = \hbar m_J, \qquad m_J = -J, -J+1, \dots, J.
$$

可导出一阶微扰能量

$$
\Delta E^{(1)} = g_J \mu_B m_J B,
$$

其中 Landé g 因子为

$$
 g_J = 1 + \frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}
\times (g_s - 1).
$$

若忽略自旋修正，近似取 $g_s\approx 2$，则

$$
 g_J \approx 1 + \frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}.
$$

## 3. 正常塞曼效应与反常塞曼效应

### 3.1 正常塞曼效应（Normal Zeeman Effect）

当自旋作用可以忽略时，$S=0$，则

$$
J = L,
$$

并且

$$
g_J = 1.
$$

于是能级分裂为

$$
\Delta E = \mu_B m_J B,
$$

对应于一组等间距的磁光谱线。若 $m_J$ 取 $2J+1$ 个值，则能级分裂成 $2J+1$ 条。 

### 3.2 反常塞曼效应（Anomalous Zeeman Effect）

当 $S\neq 0$ 时，电子自旋对磁矩的贡献不可忽略，能级分裂不仅依赖于 $m_J$，还依赖于 Landé g 因子。此时能级间距变为

$$
\Delta E = g_J\mu_B B \Delta m_J.
$$

这就是常见的实验中观测到的“反常”分裂模式。 

## 4. 选择定则与谱线分裂

电偶极跃迁满足

$$
\Delta m_J = 0, \pm 1,
$$

与偏振相关：

- $\Delta m_J=0$：平行于磁场方向的光传播，通常为 $\pi$ 偏振
- $\Delta m_J=\pm 1$：垂直于磁场方向，通常为 $\sigma$ 偏振

因此，原本单一光谱线在磁场中分裂成多条线，形成经典的 Zeeman triplet（塞曼三重线）或更复杂的多线结构。

## 5. 从微扰到物理图像

把一阶近似写成

$$
E_{n,m_J} = E_n^{(0)} + g_J \mu_B B m_J,
$$

说明磁场会使不同 $m_J$ 子能级出现线性偏移。这种能级偏移对应到光谱线的不同行波长：

$$
\Delta \nu = \frac{\Delta E}{h} = \frac{g_J\mu_B B}{h} \Delta m_J.
$$

这正是实验中观察到的磁场导致光谱线分裂的根本机制。

## 6. 结论

塞曼效应的本质是：磁场与原子的磁矩耦合，使不同磁量子态在外磁场下发生能级分裂。对电子来说，角动量和自旋都参与贡献，进而引出 Landé g 因子和线性分裂规律。这个效应既体现了量子化角动量，也是磁光谱学和原子物理中的基本实验现象。

> 专有名词：Zeeman Effect（塞曼效应），Landé g factor（Landé g 因子），normal Zeeman effect（正常塞曼效应），anomalous Zeeman effect（反常塞曼效应），selection rule（选择定则）。
