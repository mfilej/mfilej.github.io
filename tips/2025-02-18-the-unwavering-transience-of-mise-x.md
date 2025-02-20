---
title: The unwavering transience of mise x
category: articles
layout: jekyll.vto
---

Do you ever think twice before installing a tool, knowing there's a significant chance you'll forget about it tomorrow? Just me?

I've gotten into the habit of using this [install-and-run][mise exec] trick with [mise-en-place][]:

```
mise x dart -- sass -I_sass base.sass out.css
```

You can also quickly try something in a specific language version without modifying your shell session or reconfiguring your project:

```
mise x ruby@3.5 -- irb
```

One of mise's many party tricks is installing tools via its [backends][]. Some tools require installation through npm, pip, or cargo. Since I'm not intimately familiar with these ecosystems, I'm never quite sure where commands get installed or whether I have the appropriate directories in my PATH.

Managing your PATH is mise's forte:

```
mise x ubi:Cretezy/lazyjj@0.5.0 -- lazyjj
```

```
mise x pipx:aider-install -- aider -h
```

```
mise x node@22 npm:@tailwindcss/upgrade -- npx @tailwindcss/upgrade
```

```
mise x rust cargo:vsixHarvester -- vsixHarvester --help
```

Note that in some cases I'm specifying node/rust since they aren't already in my PATH.

Once you're satisfied with a tool and want to use it regularly, just change `mise x` to `mise i[nstall]`.

[mise exec]: https://mise.jdx.dev/cli/exec.html
[mise-en-place]: https://mise.jdx.dev/
[backends]: https://mise.jdx.dev/dev-tools/backends/
