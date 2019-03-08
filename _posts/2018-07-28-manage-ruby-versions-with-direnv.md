---
title: Manage ruby versions with direnv
layout: article
category: article
tags: [direnv, ruby]
---

# Manage ruby versions with direnv

If you are not a ruby developer, a ruby version manager might be overkill if
you only need it from time to time.

[direnv][] is a tool that manages your environment depending on the current
directory[^1]. At first, I started using it to manage environment variables
for specific projects. After that, it replaced version managers for languages
I use less often, like python and javascript (node). Once my projects had
everything neatly configured in `.envrc` files, it made sense to include the
ruby version as well.

## How?

    $ brew install direnv

First, [install][] direnv and [configure][setup] your shell to use it.

    $ brew install chruby

Then install chruby[^2], but _do not_ configure your shell to source it.
Instead, we will do this via direnv. Edit `~/.direnvrc` and append the
following:

{% gist 4f3467acaff8c8a86407d4f1e7ea9e54 %}

If your ruby versions are not in `~/.rubies`, uncomment the `RUBIES` line and
set the value appropriately.

Relaunch your shell, navigate to your project, run `direnv edit .`, and add
the following (assuming you have 2.5.1 installed):

```
use ruby 2.5.1
```

Your shell should now be ready with the specified ruby version.

<style>
  .terminal-screenshot {
  }
  .terminal-screenshot img {
    margin-left: -55px;
    max-width: 782px;
    width: 100%;
    overflow: hidden;
  }
</style>

<figure class="terminal-screenshot">
  <img
    alt="Fish shell with direnv and ruby 2.5.1."
    src="/assets{{ page.id }}/terminal.png">
</figure>


(See also: [Manage project dependencies with direnv]({% post_url 2019-03-03-manage-project-dependencies-with-direnv %}).)

[direnv]: https://direnv.net
[install]: https://github.com/direnv/direnv#install
[setup]: https://github.com/direnv/direnv#setup

[^1]: `dir` + `env`. Get it?.
[^2]: Other managers would probably work as well, or even some custom scripting, but chruby is a simple project and it lends well to this purpose.
