import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import mdx from "lume/plugins/mdx.ts";
import jsx from "lume/plugins/jsx.ts";
import remark from "lume/plugins/remark.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const site = lume();

site.add("/style.css");
site.add("/rebox.js");
site.add("/img");

site.use(date());
site.use(jsx());
site.use(mdx());
site.use(remark());
site.use(tailwindcss());

export default site;
