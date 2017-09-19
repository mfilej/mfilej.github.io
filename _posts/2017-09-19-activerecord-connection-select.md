---
title: ActiveRecord connection select cheat sheet
layout: default
---

<link rel="stylesheet" href="/assets/activerecord-connection-select.css">

# ActiveRecord `select_*` cheat sheet 

You are familiar with ActiveRecord and its myriad of ways to compose queries.
You are cautious of premature optimization, but you know that in rare
circumstances, like querying large datasets, instantiating vast amounts of
ActiveRecord objects can be taxing for the interpreter (as demonstrated by the
benchmarks that you have run against your code).

In those cases you know that you should take advantage of [`pluck`][] to extract
only the essential data, without instantiating any models.

In rare cases, when there is no `ActiveRecord::Relation` to send `pluck` to,
or when raw SQL is the only viable solution [^1], a different approach might
be needed. That's when the `select_*` family of methods [^2], available on the
`ActiveRecord::Base.connection` object, comes handy. Its members are:

  * [`select_value`][]
  * [`select_values`][]
  * [`select_rows`][]
  * [`select_one`][]
  * [`select_all`][]

Each is useful depending on how many columns are being queried and how many
rows of results are expected, but honestly, their names are not that intuitive
to remember. This is where this cheat sheet comes in.

Given the following table:

{% include activerecord-connection-select/snippets/table.html %}

The data can be queried in the following ways:

<table class="highlight">
  <thead>
    <tr>
      <th class="blank"></th>
      <th>Returns Single Row</th>
      <th>Returns Multiple Rows</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>
        Single Column
      </th>
      <td>
        {% include activerecord-connection-select/snippets/select_value.html %}
      </td>
      <td>
        {% include activerecord-connection-select/snippets/select_values.html %}
      </td>
    </tr>
    <tr>
      <th rowspan="2">
        Multiple Columns
      </th>
      <td class="not-available">
      </td>
      <td>
        {% include activerecord-connection-select/snippets/select_rows.html %}
      </td>
    </tr>
    <tr>
      <td>
        {% include activerecord-connection-select/snippets/select_one.html %}
      </td>
      <td>
        {% include activerecord-connection-select/snippets/select_all.html %}
      </td>
    </tr>
  </tbody>
</table>

With `select_all`, instead of a raw data structure, an instance of
[`ActiveRecord::Result`][] is returned. It responds to `#columns` and `#rows`,
but most importantly it is enumerable and as such it can be used as a simple
array of hashes.

{% highlight ruby %}
result = ActiveRecord::Base.connection.select_all(
  "SELECT id, name, hex FROM colors"
)
result.columns
=> ["id", "name", "hex"]
result.rows
=> [
  [1, "red", "f00"],
  [2, "green", "0f0"],
  [3, "blue", "00f"]
]
result.to_a
=> [
  {"id"=>1, "name"=>"red", "hex"=>"f00"},
  {"id"=>2, "name"=>"green", "hex"=>"0f0"},
  {"id"=>3, "name"=>"blue", "hex"=>"00f"}
]

{% endhighlight %}

Check out [the code that generated the examples][code] in the above tables.

[`pluck`]: http://guides.rubyonrails.org/active_record_querying.html#pluck
[`select_value`]: http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/DatabaseStatements.html#method-i-select_value
[`select_values`]: http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/DatabaseStatements.html#method-i-select_values
[`select_rows`]: http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/DatabaseStatements.html#method-i-select_rows
[`select_one`]: http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/DatabaseStatements.html#method-i-select_one
[`select_all`]: http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/DatabaseStatements.html#method-i-select_all
[`ActiveRecord::Result`]: http://api.rubyonrails.org/classes/ActiveRecord/Result.html
[code]: https://github.com/mfilej/mfilej.github.io/blob/master/_includes/activerecord-connection-select/Rakefile

[^1]: Or when working with Rails versions where `pluck` wasn't as capable (before Rails 4), or did not yet exist at all (before Rails 3.2).
[^2]: Dating all the way back to Rails 1.0.
