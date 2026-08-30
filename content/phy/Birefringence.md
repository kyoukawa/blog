---
title: "双折射"
description: "双折射（Birefringence）的光学本构方程、主轴分解与相位差推导。"
date: 2026-08-30
draft: false
tags:
  - phy
  - optics
  - blog
---

# 双折射

双折射（Birefringence）描述的是某些各向异性介质对不同偏振方向具有不同折射率的现象。它是晶体光学中的核心现象，也是偏振光、相位延迟和光学调制器的基础。

## 1. 介质响应与本构张量

在各向异性介质中，电位移和电场之间不再是简单的标量关系，而是

$$
\mathbf{D}=\varepsilon_0\,\bar{\varepsilon}\,\mathbf{E},
$$

其中 $\bar{\varepsilon}$ 是介电张量。对晶体主轴坐标系，可写成对角形式：

$$
\bar{\varepsilon} =
\begin{bmatrix}
\varepsilon_x & 0 & 0 \\
0 & \varepsilon_y & 0 \\
0 & 0 & \varepsilon_z
\end{bmatrix}.
$$

如果存在单轴晶体（uniaxial crystal），则令

$$
\varepsilon_x = \varepsilon_y = \varepsilon_\perp,\qquad \varepsilon_z = \varepsilon_\parallel,
$$

于是介质的折射率平方为

$$
 n_x^2 = n_y^2 = n_o^2, \qquad n_z^2 = n_e^2.
$$

这里，$n_o$ 是 ordinary wave（寻常光）的折射率，$n_e$ 是 extraordinary wave（非常光）的折射率。光轴（optic axis）通常与 $z$ 方向重合。 

## 2. 波动方程与本征模

考虑单色平面波

$$
\mathbf{E}(\mathbf{r},t)=\mathbf{E}_0 e^{i(\mathbf{k}\cdot\mathbf{r}-\omega t)},
$$

在介质中，麦克斯韦方程给出

$$
\mathbf{k}\times(\mathbf{k}\times\mathbf{E}) + \omega^2\mu_0\bar{\varepsilon}\,\mathbf{E}=0.
$$

把它写成矩阵形式：

$$
\left[\frac{1}{c^2}\omega^2\bar{\varepsilon} - k^2\mathbf{I} + \mathbf{k}\mathbf{k}^T \right]\mathbf{E}=0.
$$

这是一类本征值问题。非零解要求其系数矩阵的行列式为零，即所谓的波矢关系（dispersion relation）。

对于光轴沿 $z$ 方向的单轴晶体，可以分别考虑两种偏振模：

- 寻常光：$
\mathbf{E} \perp \text{optic axis}
$
- 非常光：$
\mathbf{E} \not\perp \text{optic axis}
$

## 3. 寻常光与非常光

### 3.1 寻常光（ordinary wave）

如果电场垂直于光轴，则极化方向在 $x$-$y$ 平面，介质响应近似为各向同性：

$$
n_o = \sqrt{\frac{\varepsilon_\perp}{\varepsilon_0}}.
$$

它的传播速度与偏振方向无关，因此称为 ordinary wave。

### 3.2 非常光（extraordinary wave）

如果电场分量具有 $z$ 方向成分，则存在耦合项。折射率满足

$$
\frac{k_x^2 + k_y^2}{n_o^2} + \frac{k_z^2}{n_e^2} = \frac{\omega^2}{c^2}.
$$

这就是单轴晶体的 index ellipsoid（折射率椭球）关系。它说明非常光的传播不再与偏振方向无关，也不遵循普通的球面等相位面。 

## 4. 折射率椭球与相位差

折射率椭球可写成

$$
\frac{x^2}{n_o^2} + \frac{y^2}{n_o^2} + \frac{z^2}{n_e^2} = 1.
$$

当一束自然光进入晶体时，它会分解为两个正交偏振分量：

$$
\mathbf{E} = \mathbf{E}_o + \mathbf{E}_e.
$$

这两个分量在晶体中以不同相速度传播，经过厚度 $L$ 后产生相位差

$$
\Delta \phi = \frac{2\pi}{\lambda_0} (n_e - n_o) L.
$$

其中 $\lambda_0$ 是真空波长。这个相位差就是双折射相位延迟（birefringent phase retardation）。

## 5. 偏振状态与波片

若两分量的振幅相同，则出射光的偏振状态取决于相位差 $\Delta\phi$：

- $\Delta\phi = 0$：线偏振
- $\Delta\phi = \pi/2$：圆偏振（在适当相位关系下）
- $\Delta\phi = \pi$：线偏振且方向反转

这也是半波片（half-wave plate）和四分之一波片（quarter-wave plate）的核心机制。

## 6. 结论

双折射的本质在于：晶体中不同偏振方向对应不同的介电响应，因此同一入射光在晶体中会拆成两条传播路径。通过本构张量、波动方程和折射率椭球的分析，可以完整理解它们的传播速度差异、偏振特性以及相位延迟现象。

这也是现代偏振光学、液晶显示和光学传感中的基础机制。

> 专有名词：Birefringence（双折射），optic axis（光轴），ordinary wave（寻常光），extraordinary wave（非常光），phase retardation（相位延迟）。
