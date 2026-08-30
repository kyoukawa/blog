---
title: "流体波"
description: "流体波（Fluid Waves）的线性化欧拉方程、连续性方程与重力波/声波色散关系。"
date: 2026-08-30
draft: false
tags:
  - phy
  - fluid
  - blog
---

# 流体波

流体波（Fluid Waves）研究的是流体中小扰动如何传播。它涵盖了声波（acoustic waves）、重力波（gravity waves）和浅水波等经典问题。其核心在于连续性方程和欧拉方程的线性化处理。

## 1. 连续性方程与欧拉方程

在不可压缩流体中，质量守恒写为

$$
\frac{\partial \rho}{\partial t} + \nabla\cdot(\rho \mathbf{u}) = 0,
$$

其中 $\rho$ 是密度，$\mathbf{u}$ 是流体速度。动量守恒则是欧拉方程：

$$
\rho\left(\frac{\partial \mathbf{u}}{\partial t} + \mathbf{u}\cdot\nabla \mathbf{u}\right) = -\nabla p + \rho \mathbf{g}.
$$

如果研究小幅度扰动，可以对基态进行线性化。设

$$
\rho = \rho_0 + \rho',\qquad p = p_0 + p',\qquad \mathbf{u} = \mathbf{u}',
$$

其中 $\rho',p'$ 以及 $\mathbf{u}'$ 都是小量。忽略二阶项，得到线性化方程：

$$
\frac{\partial \rho'}{\partial t} + \rho_0 \nabla\cdot \mathbf{u}' = 0,
$$

$$
\rho_0\frac{\partial \mathbf{u}'}{\partial t} = -\nabla p' + \rho'\mathbf{g}.
$$

## 2. 声波：声速与波动方程

对于小压缩波动，假设

$$
 p' = c^2 \rho',
$$

其中 $c$ 是声速。由连续性方程与动量方程可消去 $\mathbf{u}'$，得到

$$
\nabla^2 p' - \frac{1}{c^2}\frac{\partial^2 p'}{\partial t^2}=0.
$$

这正是声波方程（acoustic wave equation）。若取平面波解

$$
 p' = p_0 e^{i(kx-\omega t)},
$$

则有

$$
\omega^2 = c^2 k^2,
$$

即

$$
\omega = c k.
$$

因此，声波的传播速度由介质的压缩性决定：

$$
 c^2 = \frac{dp}{d\rho}.
$$

## 3. 自由表面重力波

考虑不深液体中自由表面高度 $\eta(x,t)$。在图像上，液体表面被微小扰动为

$$
z = \eta(x,t).
$$

在势流近似下，速度场可写成

$$
\mathbf{u} = \nabla \phi,
$$

其中 $\phi$ 是速度势。速度势满足拉普拉斯方程：

$$
\nabla^2\phi = 0.
$$

在自由表面处，边界条件包括：

$$
\frac{\partial \eta}{\partial t} = \frac{\partial \phi}{\partial z},
$$

以及动态边界条件

$$
\frac{\partial \phi}{\partial t} + g\eta = 0.
$$

假设平面波形式

$$
\eta = \eta_0 e^{i(kx-\omega t)},
$$

则可以得到

$$
\omega^2 = gk\tanh(kh),
$$

其中 $h$ 是液体深度。这个方程就是重力波（gravity wave）的色散关系（dispersion relation）。

### 3.1 浅水极限

若 $kh\ll 1$，则 $\tanh(kh)\approx kh$，因此

$$
\omega^2 \approx gh k^2,
$$

即

$$
\omega \approx \sqrt{gh}\, k.
$$

这为浅水波（shallow water wave）提供了经典色散关系。

### 3.2 深水极限

若 $kh\gg 1$，则 $\tanh(kh)\approx 1$，从而

$$
\omega^2 \approx gk,
$$

即

$$
\omega \approx \sqrt{gk}.
$$

这对应深水波（deep water wave）的典型行为。

## 4. 面波与相速度

重力波的相速度为

$$
 c_p = \frac{\omega}{k} = \sqrt{\frac{g}{k}\tanh(kh)}.
$$

它说明：

- 波长越长，传播越快；
- 在浅水中，相速近似为 $\sqrt{gh}$；
- 在深水中，相速由波长和重力共同决定。

## 5. 结论

流体波的核心机制是：质量守恒与动量守恒共同决定了扰动如何传播。线性化后，声波和重力波都能够写成标准的波动方程，并得到各自的色散关系。前者由压缩性控制，后者由重力和液体深度决定。

这使得流体波成为流体力学、海洋物理、气象学和声学的共同基础。

> 专有名词：Fluid Waves（流体波），acoustic wave（声波），gravity wave（重力波），dispersion relation（色散关系），shallow water wave（浅水波），deep water wave（深水波）。
