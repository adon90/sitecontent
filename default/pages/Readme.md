### Fantomato
Fantomato is a Wiki / blog engine written in Fantom.

This is a port / rewrite of my old java engine called [JotWiki](http://www.jotwiki.net/).
It does not have yet all the features jotwiki had, however it has better performance.

At this point I still have a long [TODO](todo.txt) list however it is already usable and i use.
For example I use it [here](http://www.status302.com/) and [here](http://wiki.colar.net/)

While it currently lacks an "in place editor" to edit a page online, it is implemented in such
way that it is very easy to have the content managed/stored in github or bitbucket and pulled to the wiki server.

### Features:

- **Support for multiple syntaxes**:

Whenever you create a page you can give the page file 3 extensions: `.md`, `.txt` or `.html`.
Sometimes pages are simple and sometimes they are not, so you may pick an apropriate syntax accordingly.

* If the page is a `.md` it will be rendered in the [Markdown](http://daringfireball.net/projects/markdown/syntax) format which is a simple but very popular format.<br/>
* If the page is a `.txt` it will be rendered in the [Jotwiki](http://www.colar.net/syntax.html).
That format is my own but VERY similar to the [DokuWiki creole](https://www.dokuwiki.org/wiki:syntax).
It is a bit more intuitive and more flexible than markdown and allows html embedding, good for more complex pages.
* If the page is a `.html`, it will be rendered "as-is", used for complex pages when you need full freedom. <br/>

- **Entirely File system based**:

There is no database needed, everything is stored in plain files in a single folder. This makes for simple and easy administration. It also makes it easy to store and transfer the content from say Git or Bitbucket.

- **Namespaces support**:

It supports multiple namespaces with their own option sets and templates.
So you could have say /blog/** and /me/** as if they where completely different instances.
If you couple this with a proxy frontend such as Apache or Nginx this allows you to have
multiple sites under the same instances with their own styles and settings.

- **Templates support**

Pages are rendered within a template. You may create your on templates.
The templates support the [Mustache](http://mustache.github.com/) format for variables & minimal logic / lambdas.
This allows including variables and "subtemplates" in the templates.
Custom variables can be added by the user at the namespace or page level (page config)
You can assign a template per namespace, and you can even assign a template page to a specifc page if needed.
Uses twiter bootstrap for the default templates, although you may change that.

- **Caching**:

By default all text content gets cached in memory, this provides fast speed and greatly minimizes I/O.
Note that as of now caching is not configurable but it will soon be.

- **Auto reloading including conf:**

While the content is cached it also auto detects changes and reloads automatically. So wether you change a page or  cnfig file, as soon as you copy it over it will be picked up and reloaded.

- **Googe analytics** :

Just enter your Google analytics ID in the namespace config and of you go, Google analytics you got.

- **Addthis support**:

Just enter your addThis id in the namespace config and your template will be able to show the addThis sharing options in your page. (Social Media sharing)

- **sitemap generation**:

Google sitemaps really help with proper indexing. so fantomato autocreates them for you, all you have to do is submit it to Google.

- **comments:**

If you enable comments, then users maybe submit them. At this time they are plain text only. This might chage, but then again it can be seen as a security feature.

- **And more ...**

There are many more thing I'm planning to do when I have time, see [todo.txt](todo.txt).

### Installation

- You will need java6+ installed:

`apt-get install oracle-java7-installer`

- Create the wiki content root (I recommend creating a non root user, say 'fantomato'):

`sudo useradd fantomato`

`sudo mkdir /data/fantomato/`

`sudo chown fantomato /data/fantomato/`

- Copy the default data and example into it

`su - fantomato`

`cd /data/fantomato/`

`wget "https://bitbucket.org/tcolar/fantomato/raw/tip/data.tgz"`

`tar -xvf data.tgz`

- You will need Fantom installed, download fantom [here](http://fantom.org/):

`cd ~`

`unzip famtom-1.0.64.zip`

`mv famtom-1.0.64 fantom`

`sh ~/fantom/adm/unixsetup`

`export PATH=$PATH:~/fantom/bin/`

- Configure the repo root in the fantom config:

` mkdir ~/fantom/etc/fantomato`

`echo "dataRoot=/data/fantomato/" > ~/fantom/etc/fantomato.props`

- Use fanr to install Fantomato:

`fanr install -r http://repo.status302.com/fanr/ fantomato`

- You may now try Fantomato manually using:

`fan draft fantomato`

This will run fantomato on port 8080, go have a look.

- Init script and proxy config:

You might want to setup a proper init.d script, [here is one](fantomato.sh).

You will probably want to run this behind a proxy.
Here are [Nginx](doc/nginx-site-example.conf) and Apache(doc/apache-site-example.conf) examples.

### Usage
You can have a look under /data/fantomato/default/ to see the data of the default/example namespace.

You can put your data in there, but I recommand creating your own namespace say /data/fantomato/me/

Here is what the namespace layout looks like:

- `ns.conf` : This is the config of this namespace.
- `pages/*` : This is where you will put your .md, .txt or .html pages
- `pages/conf/*` : This is where individual page settings go (optional, you don't have to create it unless you need it)
- `comments/*` : This is where page comments will be stored (JSON).
- `files/*` : This is where all non page items get stored (Files, images etc ...)

#### Creating pages

Simply create a file under the pages folder with a proper name and extension, say my_page.md

Then you can go look at it at http://localhost/me/my_page/ where "me" is the namespace name.

#### Creating own Namespaces

Simply create a folder under the repo root with the proper layout, just like the "default" namespace.

#### Creating own Templates

Templates are in the tpl/ folder (/data/fantomato/tpl/). See the "default" template for a commented example.

You should create your own template by simply creating a new folder /data/fantomato/my_tpl/ and copying/editing
as needed (For example page.html, template.css)

Note that custom templates "inherit" from the "default" one so you only need to "override" what you want to change.

In other words, if an item is not found in your template folder, it will be fetched from "default"

For reference you may see my own [repo root here](https://bitbucket.org/tcolar/sitecontent/src). (templates and pages)



