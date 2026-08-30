---
title: "静磁场下的 Maxwell 分布"
description: "在静磁场中粒子速度分布如何由 Maxwell-Boltzmann 分布与磁场约束相结合。"
date: 2026-08-30
draft: false
tags:
  - phy
  - plasma
  - blog
---

# 静磁场下的 Maxwell 分布

在等离子体、稀薄气体和带电粒子系统中，静磁场（stationary magnetic field）会显著改变粒子的运动轨迹，而速度分布仍然遵守 Maxwell-Boltzmann 统计。它的核心是：磁场不对粒子能量做功，因此在静磁场中，粒子总能量仍由速度分布决定，但速度分量在横向和纵向上的分布会受到洛伦兹力约束。

## 1. 无磁场时的 Maxwell 分布

在平衡态下，粒子速度分布为经典 Maxwell 分布：

$$
 f(\mathbf{v}) = n\left(\frac{m}{2\pi k_B T}\right)^{3/2}
 \exp\left[-\frac{m(v_x^2+v_y^2+v_z^2)}{2k_B T}\right].
$$

其中：

- $n$ 是粒子数密度
- $m$ 是粒子质量
- $T$ 是温度
- $k_B$ 是玻尔兹曼常数

它本质上是 Boltzmann 因子在速度空间中的表现：

$$
 f(\mathbf{v}) \propto e^{-\beta \frac{m v^2}{2}},\qquad \beta = \frac{1}{k_B T}.
$$

## 2. 静磁场中的运动方程

在均匀静磁场

$$
\mathbf{B} = B\hat{z}
$$

中，带电粒子的运动满足

$$
 m\frac{d\mathbf{v}}{dt} = q\,\mathbf{v}\times\mathbf{B}.
$$

写成分量形式：

$$
 m\dot{v}_x = qB v_y,
\qquad
 m\dot{v}_y = -qB v_x,
\qquad
 m\dot{v}_z = 0.
$$

因此，粒子在垂直于磁场方向上做圆周运动，而沿着磁场方向保持匀速直线运动。相应地，速度可分解为

$$
\mathbf{v} = v_\parallel \hat{z} + \mathbf{v}_\perp.
$$

其中：

- $v_\parallel$ 是平行于磁场方向的速度分量
- $v_\perp$ 是垂直于磁场方向的速度分量

## 3. 磁场对速度分布的约束

因为磁场不做功，机械能守恒，所以

$$
\frac{1}{2}m v^2 = \frac{1}{2}m(v_\parallel^2 + v_\perp^2)
$$

仍是常数。于是平衡分布可写为

$$
 f(v_\parallel,v_\perp) = C \exp\left[-\frac{m}{2k_B T}(v_\parallel^2 + v_\perp^2)\right],
$$

其中 $C$ 由归一化条件确定：

$$
 \int f\,d^3v = n.
$$

这说明在均匀静磁场中，Maxwell 形式并没有被破坏；只是粒子轨道被约束成回旋运动，而其速度分布仍可在热平衡下保持各向同性的形式。

## 4. 回旋频率与磁矩

粒子在磁场中做圆周运动，回旋频率为

$$
\omega_c = \frac{|q|B}{m}.
$$

回旋半径（Larmor radius）是

$$
 r_L = \frac{m v_\perp}{|q|B}.
$$

因此，磁场会使粒子的横向轨迹发生回旋，但不会改变平行方向上的热运动。换言之，静磁场主要影响横向自由度，而不会给粒子提供净功。

## 5. 玻尔兹曼分布与磁化

在磁化等离子体中，粒子分布一般写成

$$
 f(\mathbf{v}) = n\left(\frac{m}{2\pi k_B T}\right)^{3/2}
 \exp\left[-\frac{m}{2k_B T}\left(v_\parallel^2 + v_\perp^2\right)\right].
$$

如果还考虑磁场存在导致的环向速度分布，通常可在 $v_\perp$ 的分布中看到回旋运动带来的约束。静磁场的最基本影响是：

- 沿磁场方向自由传播
- 垂直方向形成回旋运动
- 不改变总速度分布的 Maxwell 形式

## 6. 结论

在静磁场中，粒子并非失去 Maxwell 分布；相反，磁场只改变了粒子轨道的几何形式，而不改变热平衡统计结构。高斯单位或 SI 单位中都可写出相同的核心结论：

$$
 f(\mathbf{v}) \propto \exp\left[-\frac{m v^2}{2k_B T}\right],
$$

只要系统处于热平衡且磁场是静态、均匀且无耗散。对等离子体物理来说，这一结论是理解磁约束、回旋运动和磁流体稳定性的基础。

> 专有名词：Maxwell distribution（Maxwell 分布），magnetized plasma（磁化等离子体），Lorentz force（洛伦兹力），cyclotron frequency（回旋频率），Larmor radius（拉莫尔半径）。
