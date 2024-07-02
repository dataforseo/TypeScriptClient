**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDomainInfo

# Interface: IDomainInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### canonicalization\_status\_code?

> **`optional`** **canonicalization\_status\_code**: `number`

status code returned by a canonicalized page
the checkup of the server behavior when our crawler tries to access the website via IP;
in most cases, it is recommended that canonicalized pages respond with a 301 or 302 status code

#### Source

main.ts:152194

***

### checks?

> **`optional`** **checks**: `Object`

website checks
other on-page check-ups related to the website

#### Index signature

 \[`key`: `string`\]: `boolean`

#### Source

main.ts:152184

***

### cms?

> **`optional`** **cms**: `string`

content management system
content management system identified on a website
the content of the generator meta tag
the data is taken from the first random page that returns the 200 response code
if our crawler was unable to identify the cms, the value would be null

#### Source

main.ts:152147

***

### crawl\_end?

> **`optional`** **crawl\_end**: `string`

time when the crawling ended
date and time when the crawling was finished
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00note: informative only if "crawl_progress" is "finished"
if "crawl_progress" is in_progress, the value will be null

#### Source

main.ts:152167

***

### crawl\_start?

> **`optional`** **crawl\_start**: `string`

time when the crawling start
date and time when the website was sent for crawling
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:152160

***

### directory\_browsing\_status\_code?

> **`optional`** **directory\_browsing\_status\_code**: `number`

status code returned by a directory
the status code returned by a directory page on a target website
in most cases, it is recommended that directories respond with a 403 or 401 status code

#### Source

main.ts:152198

***

### extended\_crawl\_status?

> **`optional`** **extended\_crawl\_status**: `string`

crawl status and errors
indicates the reason why a website was not crawledcan take the following values:
no_errors – no crawling errors were detected;
site_unreachable – our crawler could not reach a website and thus was not able to obtain a status code;
invalid_page_status_code – status code of the first crawled page >= 400;
forbidden_meta_tag – the first crawled page contains the `<meta robots=”noindex”>` tag;
forbidden_robots – robots.txt forbids crawling the page;
forbidden_http_header – HTTP header of the page contains “X-Robots-Tag: noindex” ;
too_many_redirects – the first crawled page has more than 10 redirects;
unknown – the reason is unknown

#### Source

main.ts:152178

***

### ip?

> **`optional`** **ip**: `string`

domain ip address

#### Source

main.ts:152149

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

root domain name

#### Source

main.ts:152204

***

### name?

> **`optional`** **name**: `string`

domain name

#### Source

main.ts:152141

***

### page\_not\_found\_status\_code?

> **`optional`** **page\_not\_found\_status\_code**: `number`

status code returned by a non-existent page
in most cases, it is recommended a server returns a 404 response code

#### Source

main.ts:152190

***

### server?

> **`optional`** **server**: `string`

website server
the version of the server detected on a website
the content of the server header
the information is taken from the first page which response code is 200

#### Source

main.ts:152154

***

### ssl\_info?

> **`optional`** **ssl\_info**: [`SslInfo`](../classes/SslInfo.md)

ssl certificate info
information about the Secure Sockets Layer protocol detected on a website

#### Source

main.ts:152181

***

### total\_pages?

> **`optional`** **total\_pages**: `number`

total crawled pages
the total number of crawled pages

#### Source

main.ts:152187

***

### www\_redirect\_status\_code?

> **`optional`** **www\_redirect\_status\_code**: `number`

redirect status code
the status code of the www to non-www redirect
in most cases, it is recommended that redirect returns a 301 status code

#### Source

main.ts:152202
