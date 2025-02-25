---
title: "jj: Updating .gitignore does not automatically untrack a file"
layout: jekyll.vto
category: article
tags:
  - jj
  - tip
---

When moving from git to Jujutsu, there is a difference you will immediately spot after editing a .gitignore file.

While yes, Jujutsu does indeed support .gitignore files, it seems to stubbornly hold on to them.

The trick is to explicitly untrack a file with `jj file untrack`.

```
$ jj git init
Initialized repo in "."

$ echo "hi" > greeting.txt
$ jj st
Working copy changes:
A greeting.txt
Working copy : nrsxqzmx 53b4bbb9 (no description set)
Parent commit: zzzzzzzz 00000000 (empty) (no description set)

$ echo "greeting.txt" > .gitignore
$ jj st
Working copy changes:
A .gitignore
A greeting.txt
Working copy : nrsxqzmx 6573bd85 (no description set)
Parent commit: zzzzzzzz 00000000 (empty) (no description set)

$ jj file untrack greeting.txt
$ jj st
Working copy changes:
A .gitignore
Working copy : nrsxqzmx 98424fc8 (no description set)
Parent commit: zzzzzzzz 00000000 (empty) (no description set)
```

There is an open proposal for `jj st` to hint towards using untrack: <https://github.com/jj-vcs/jj/issues/3203>.
