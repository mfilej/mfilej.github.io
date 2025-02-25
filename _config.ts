import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import mdx from "lume/plugins/mdx.ts";
import jsx from "lume/plugins/jsx.ts";
import remark from "lume/plugins/remark.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import redirects from "lume/plugins/redirects.ts";

const site = lume();

site.add("/style.css");
site.add("/rebox.js");
site.add("/img");
site.add("/twil");

site.use(
  date({
    formats: { YEAR: "yyyy" },
  }),
);
site.use(jsx());
site.use(mdx());
site.use(remark());
site.use(tailwindcss());
site.use(redirects());

export default site;
