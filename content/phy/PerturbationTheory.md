---
title: "Perturbation Theory"
description: "Notes and observations on perturbation theory."
date: 2026-08-30
draft: false
tags:
  - phy
  - notes
  - blog
---

# Perturbation Theory

This note is a working reference for perturbation theory ideas and related calculations.

A standard first-order perturbation expansion can be written as:

$$
\begin{aligned}
H &= H_0 + V \\
E_n^{(1)} &= \langle \psi_n^{(0)} \mid V \mid \psi_n^{(0)} \rangle \\
\psi_n &= \psi_n^{(0)} + \sum_{m \ne n} \frac{\langle \psi_m^{(0)} \mid V \mid \psi_n^{(0)} \rangle}{E_n^{(0)} - E_m^{(0)}} \psi_m^{(0)} + \cdots
\end{aligned}
$$

For a compact matrix form, one may also write:

$$
\begin{bmatrix}
E_1^{(0)} & 0 \\
0 & E_2^{(0)}
\end{bmatrix}
+
\begin{bmatrix}
V_{11} & V_{12} \\
V_{21} & V_{22}
\end{bmatrix}
=
\begin{bmatrix}
E_1 & 0 \\
0 & E_2
\end{bmatrix}
$$

$$
E_a^{(b)}: order=a, b^{th} perturbation
$$

# Time independent, non-degenerate perturbation theory

$$
\begin{aligned}
E_n &= E_n^{(0)} + \lambda E_n^{(1)} + \lambda^2 E_n^{(2)} + O(\lambda^3) \\
    &= E_n^{(0)} + \lambda \langle \psi_n^{(0)} \mid V \mid \psi_n^{(0)} \rangle + \lambda^2 \sum_{m \ne n} \frac{|\langle \psi_m^{(0)} \mid V \mid \psi_n^{(0)} \rangle|^2}{E_n^{(0)} - E_m^{(0)}} + O(\lambda^3) \\
\psi_n &= \psi_n^{(0)} + \lambda \psi_n^{(1)} + \lambda^2 \psi_n^{(2)} + O(\lambda^3)
\end{aligned}
$$