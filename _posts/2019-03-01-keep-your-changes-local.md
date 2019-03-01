---
title: Keep your state changes local
layout: article
category: article
tags: [ruby, elixir]
---

# Keep your state changes local

Today I stumbled upon this code during a review:

```ruby
class UsersController < ApplicationController
  def list
    params.merge!(sort: "created_desc")
    @items = UsersSearch.search(params)
  end
end
```

I immediately urged the author to update the first line of the action to something like this instead:

```ruby
params = params.merge(sort: "created_desc")
```

A programmer is very likely to go for the first implementation because its terseness makes it attractive and the second version is not very obvious (especially to a rubyist). I want to convince you to avoid the short version altogether. Given that the example code lives in a rails controller, the potential downsides might not be immediately apparent—after the value is passed to `search`, the execution ends.

In an active codebase, it is only a matter of time before a line changes. Imagine that at some point we extract the `params` manipulation into a dedicated method and call it from various places. Now the manipulation is hidden from us, and it gets too easy to forget the mutating nature of the extracted method. Furthermore, we add functionality to the method, and now the execution doesn't end there anymore. Soon after that, we end up scratching our heads when our `params` contain an unexpected value, and we have no idea where it came from.

By using variable reassignment, we make sure that the change in value stays local to the method. Avoiding mutation is even more critical outside rails controllers, where the order of execution is less obvious and changes over time. There are times when we do need the change to be global. In those cases, we should be mindful of where we make the change. A constructor is usually the right place, but if that's not possible consider a dedicated method with a descriptive name.

## Elixir gets it right

Elixir is a functional language, so it does not offer equivalents to `Hash#merge!` or `Hash#update`. However, we are allowed to write something akin to our reassignment example above:

```elixir
params = Map.put(params, :sort, "created_desc")
```

The above might look like mutating a value in a functional language, but that's not the case—the variable is just re-bound to another value ([read a detailed explanation][elixir-variable-rebinding]).

## Conclusion

Avoid mutating values when possible, and when you can't avoid it, use variable reassignment to keep the changes local to the current method/function.

[elixir-variable-rebinding]: http://blog.plataformatec.com.br/2016/01/comparing-elixir-and-erlang-variables/
