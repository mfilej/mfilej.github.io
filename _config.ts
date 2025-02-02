import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const site = lume();

site.use(tailwindcss());
site.add("/style.css");

export default site;
