#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"

function titleFromFileName(fileName) {
    const base = path.basename(fileName, path.extname(fileName))
    return base
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (char) => char.toUpperCase())
}

function normalizeTag(value) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9\-\s]/g, "")
        .trim()
        .replace(/\s+/g, "-")
}

function inferTags(filePath) {
    const parent = path.basename(path.dirname(filePath))
    const tags = new Set()

    if (parent && parent !== "content") {
        tags.add(normalizeTag(parent))
    }

    tags.add("notes")
    tags.add("blog")

    return [...tags]
}

function ensureFrontmatter(filePath) {
    const resolved = path.resolve(process.cwd(), filePath)
    const dir = path.dirname(resolved)
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }

    const exists = fs.existsSync(resolved)
    const original = exists ? fs.readFileSync(resolved, "utf8") : ""
    const trimmed = original.trim()

    if (/^---\n[\s\S]*?\n---\n?/.test(trimmed)) {
        return { filePath: resolved, changed: false, reason: "frontmatter already present" }
    }

    const title = titleFromFileName(resolved)
    const tags = inferTags(resolved)
    const date = new Date().toISOString().slice(0, 10)

    const frontmatter = `---
title: "${title}"
description: "Notes and observations on ${title.toLowerCase()}."
date: ${date}
draft: false
tags:
${tags.map((tag) => `  - ${tag}`).join("\n")}
---

`

    const fallbackBody = `# ${title}\n\nWrite something here.\n`
    const nextContent = `${frontmatter}${trimmed ? `${trimmed}\n` : fallbackBody}`
    fs.writeFileSync(resolved, nextContent, "utf8")

    return { filePath: resolved, changed: true, title, tags }
}

const target = process.argv[2] ?? "content/_drafts/new-note.md"
const result = ensureFrontmatter(target)
console.log(JSON.stringify(result, null, 2))
