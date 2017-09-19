---
title: Numeric types in Ruby
layout: default
---

<link rel="stylesheet" href="/assets/ruby-numeric.css">

# Numeric types in Ruby

Ruby uses a handful of classes to represent numbers. I had trouble remembering
the exact class hierarchy[^1], so I opened up `irb` to inspect the ancestors
of each class. The hierarchy turned out to be simpler than I expected and
actually not that hard to remember once laid out:

{% include ruby-numeric-tree.html %}

:warning: **Update**: `Fixnum` and `Bignum` have been unified into `Integer` in Ruby 2.4 and
are planned to be deprecated in the future. See [Unify Fixnum and Bignum into
Integer][unify].

Everything starts with the [`Numeric`][numeric-ruby-doc] superclass, which
also includes the [`Comparable`][comparable-ruby-doc] module.

There are four basic types: `Integer`, `Float`, `Rational`, and `Complex`.
Each can be constructed in at least the following ways: with literals,
conversion methods  defined on `Object` and [capitalized conversion
methods][cap-con] defined on `Kernel`.

[Floating point][wiki-float] representation is only an approximation of [real
numbers][wiki-real]. In order to represent very large or very accurate
floating point numbers in Ruby, we have to resort to `BigDecimal`.[^3] From
[the documentation][bigd-ruby-doc]:

> Decimal arithmetic is also useful for general calculation, because it
> provides the correct answers people expect–whereas normal binary floating
> point arithmetic often introduces subtle errors because of the conversion
> between base 10 and base 2.

{:.ruby-numeric-types-table}
Type                        | Literal | Object# | Kernel#
----------------------------|---------|---------|-------------------
Integer                     |  `73`   | `to_i`  | `Integer()`
Rational                    |  `1/3r` | `to_r`  | `Rational()`
Complex                     |  `2i`   | `to_c`  | `Complex()`
Float                       |  `1.1`  | `to_f`  | `Float()`
[BigDecimal][bigd-ruby-doc] |  ---    | ---     | `BigDecimal()`[^2]


## What about `Fixnum` and `Bignum`?

:warning: **Update**: This chapter only applies to Ruby versions before 2.4.
([#12005][unify])

Ruby uses instances of these two classes to represent integers. The
interesting part is that we never actually create `Integer` instances:

{% highlight ruby %}
>> Integer("1").class
=> Fixnum
>> "1".to_i.class
=> Fixnum
{% endhighlight %}

Behind the scenes, Ruby juggles between `Fixnum` and `Bignum`, depending on
the size of the number we want to reference.

You can verify this in irb:

{% highlight ruby %}
>> num = 2 ** 62 - 1
=> 4611686018427387903
>> num.class
=> Fixnum
>> num = num + 1
=> 4611686018427387904
>> num.class
=> Bignum
>> num = num - 1
=> 4611686018427387903
>> num.class
=> Fixnum
{% endhighlight %}

The automatic conversion is also mentioned in the [documentation for `Fixnum`][fixnum-ruby-doc]:

> [Fixnum] holds Integer values that can be represented in a native machine word (minus 1 bit). If any operation on a Fixnum exceeds this range, the value is automatically converted to a Bignum.
> Fixnum objects have immediate value. This means that when they are assigned or passed as parameters, the actual object is passed, rather than a reference to that object.
> Assignment does not alias Fixnum objects. There is effectively only one Fixnum object instance for any given integer value, so, for example, you cannot add a singleton method to a Fixnum. Any attempt to add a singleton method to a Fixnum object will raise a TypeError.

Unsurprisingly, [the documentation for `Bignum`][bignum-ruby-doc] is similar:

> Bignum objects hold integers outside the range of Fixnum. Bignum objects are created automatically when integer calculations would otherwise overflow a Fixnum. When a calculation involving Bignum objects returns a result that will fit in a Fixnum, the result is automatically converted.
> For the purposes of the bitwise operations and [], a Bignum is treated as if it were an infinite-length bitstring with 2’s complement representation.
> While Fixnum values are immediate, Bignum objects are not—assignment and parameter passing work with references to objects, not the objects themselves.

Wait, what was that last bit? `Fixnum` and `Bignum` seem to behave differently when it comes to memory allocation. Let’s try to confirm this:

{% highlight ruby %}
>> num1 = 2 ** 63
=> 9223372036854775808
>> num1.class
=> Bignum
>> num2 = 2 ** 63
=> 9223372036854775808
>> num1.object_id == num2.object_id
=> false
{% endhighlight %}

The object ids differ, showing that the two variables point to different objects. Fixnum instances show the opposite behaviour:

{% highlight ruby %}
1.object_id == 1.object_id
=> true
{% endhighlight %}

[ruby-positive]: https://bugs.ruby-lang.org/issues/11151
[cap-con]: http://devblog.avdi.org/2012/05/07/a-ruby-conversion-idiom/
[numeric-ruby-doc]: http://ruby-doc.org/core-2.2.2/Numeric.html
[comparable-ruby-doc]: http://ruby-doc.org/core-2.2.2/Comparable.html
[bigd-ruby-doc]: http://ruby-doc.org/stdlib-2.2.2/libdoc/bigdecimal/rdoc/BigDecimal.html
[fixnum-ruby-doc]: http://ruby-doc.org/core-2.2.2/Fixnum.html
[bignum-ruby-doc]: http://ruby-doc.org/core-2.2.2/Bignum.html
[wiki-float]: https://en.wikipedia.org/wiki/Floating_point
[wiki-real]: https://en.wikipedia.org/wiki/Real_number
[unify]: https://bugs.ruby-lang.org/issues/12005

[^1]: I was relieved to find out that I wasn't [alone][ruby-positive].
[^2]: `BigDecimal` is the only numeric class in Ruby that can be instantiated with a constructor method, e.g.: `BigDecimal.new("1.2")` --- note that the argument is passed as a string to work around the imprecise nature of floats.
[^3]: Don't forget to `require "bigdecimal"`.
