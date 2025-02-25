---
title: The unwavering transience of mise x
category: article
layout: jekyll.vto
tags:
  - mise
preface: |
  <a href="https://mise.jdx.dev/">Mise-en-place</a> is a DX tool has completely replaced both direnv and asdf in my development environment. This article covers the usage of its <code>exec</code> subcommand.
---

Some popular tools require installation through npm, pip, or cargo. Since I'm not intimately familiar with these ecosystems, I'm never quite sure where package managers store the binaries and which directories I need to add to my PATH.

I've gotten into the habit of using this [install-and-run][mise exec] trick with mise:

```
$ mise x pipx:aider-install -- aider --sonnet
─────────────────────────────────────────────────────────
Aider v0.74.2
...
```

_Translation: add the specified tool to the PATH (also install, if necessary) and execute the given command (i.e. whatever comes after `--`)._

All of this is done without permanently modifying your environment. Here's another example with cargo where I'm also adding rust to the PATH since it's not already present:

```
$ mise x rust cargo:sparkline -- sparkr 109 105 104 97
█ ▆ ▅ ▁
```

Similarly, with npm, where I'm also specifying the node version I want to use for the duration of the command:

```
$ mise x node@22 npm:@tailwindcss/upgrade -- npx @tailwindcss/upgrade
```

Mise also gives you access to language-agnostic backends, such as [aqua][]:

```
$ mise x aqua:trufflesecurity/trufflehog -- trufflehog
```

Heck, you can even run aqua itself:

```
$ mise x aqua -- aqua init
```

There is a rich set of aliases that you can use without specifying a backend (running `mise u` will give you a searchable list).

However, if there is something you can't find in any of the backends, you can always fall back to the [ubi backend][], which allows you to install binaries directly from GitHub Releases and URL packages:

```
$ mise x ubi:technosophos/dashing -- dashing -h
```

Once you're satisfied with a tool and want to use it regularly, just change `mise x` to `mise i[nstall]`.

## Bonus tip

Every once in a while, I want to test whether a behaviour has changed in a specific language version.

You can simply ask for a specific language version and immediately launch into a REPL, without modifying your shell session or reconfiguring your project:

```
$ mise x ruby@3.5 -- irb
```

```
$ mise x erlang@26 elixir@1.17 -- iex
```

## Conclusion

I often hesitate before installing a tool, knowing there's a significant chance I'll forget about it and leave it lingering on my system indefinitely. This install-and-run approach feels wonderfully ephemeral. Maybe give it a shot next time something sparks your curiosity. Happy hacking!

[mise]: https://mise.jdx.dev/
[mise exec]: https://mise.jdx.dev/cli/exec.html
[aqua]: https://aquaproj.github.io/
[ubi backend]: https://mise.jdx.dev/dev-tools/backends/ubi.html
