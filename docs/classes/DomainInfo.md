[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainInfo

# Class: DomainInfo

Defined in: main.ts:165280

## Implements

- [`IDomainInfo`](../interfaces/IDomainInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainInfo()

> **new DomainInfo**(`data`?): [`DomainInfo`](DomainInfo.md)

Defined in: main.ts:165350

#### Parameters

##### data?

[`IDomainInfo`](../interfaces/IDomainInfo.md)

#### Returns

[`DomainInfo`](DomainInfo.md)

## Properties

### canonicalization\_status\_code?

> `optional` **canonicalization\_status\_code**: `number`

Defined in: main.ts:165336

status code returned by a canonicalized page
the checkup of the server behavior when our crawler tries to access the website via IP;
in most cases, it is recommended that canonicalized pages respond with a 301 or 302 status code

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`canonicalization_status_code`](../interfaces/IDomainInfo.md#canonicalization_status_code)

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:165326

website checks
other on-page check-ups related to the website

#### Index Signature

\[`key`: `string`\]: `boolean`

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`checks`](../interfaces/IDomainInfo.md#checks)

***

### cms?

> `optional` **cms**: `string`

Defined in: main.ts:165288

content management system
content management system identified on a website
the content of the generator meta tag
the data is taken from the first random page that returns the 200 response code
if our crawler was unable to identify the cms, the value would be null

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`cms`](../interfaces/IDomainInfo.md#cms)

***

### crawl\_end?

> `optional` **crawl\_end**: `string`

Defined in: main.ts:165308

time when the crawling ended
date and time when the crawling was finished
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00note: informative only if "crawl_progress" is "finished"
if "crawl_progress" is in_progress, the value will be null

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`crawl_end`](../interfaces/IDomainInfo.md#crawl_end)

***

### crawl\_start?

> `optional` **crawl\_start**: `string`

Defined in: main.ts:165301

time when the crawling start
date and time when the website was sent for crawling
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`crawl_start`](../interfaces/IDomainInfo.md#crawl_start)

***

### directory\_browsing\_status\_code?

> `optional` **directory\_browsing\_status\_code**: `number`

Defined in: main.ts:165340

status code returned by a directory
the status code returned by a directory page on a target website
in most cases, it is recommended that directories respond with a 403 or 401 status code

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`directory_browsing_status_code`](../interfaces/IDomainInfo.md#directory_browsing_status_code)

***

### extended\_crawl\_status?

> `optional` **extended\_crawl\_status**: `string`

Defined in: main.ts:165320

crawl status and errors
indicates the reason why a website was not crawled;
can take the following values:
no_errors – no crawling errors were detected;
site_unreachable – our crawler could not reach a website and thus was not able to obtain a status code;
invalid_page_status_code – status code of the first crawled page >= 400;
forbidden_meta_tag – the first crawled page contains the <meta robots=”noindex”> tag;
forbidden_robots – robots.txt forbids crawling the page;
forbidden_http_header – HTTP header of the page contains “X-Robots-Tag: noindex” ;
too_many_redirects – the first crawled page has more than 10 redirects;
unknown – the reason is unknown

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`extended_crawl_status`](../interfaces/IDomainInfo.md#extended_crawl_status)

***

### ip?

> `optional` **ip**: `string`

Defined in: main.ts:165290

domain ip address

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`ip`](../interfaces/IDomainInfo.md#ip)

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:165346

root domain name

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`main_domain`](../interfaces/IDomainInfo.md#main_domain)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:165282

domain name

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`name`](../interfaces/IDomainInfo.md#name)

***

### page\_not\_found\_status\_code?

> `optional` **page\_not\_found\_status\_code**: `number`

Defined in: main.ts:165332

status code returned by a non-existent page
in most cases, it is recommended a server returns a 404 response code

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`page_not_found_status_code`](../interfaces/IDomainInfo.md#page_not_found_status_code)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:165295

website server
the version of the server detected on a website
the content of the server header
the information is taken from the first page which response code is 200

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`server`](../interfaces/IDomainInfo.md#server)

***

### ssl\_info?

> `optional` **ssl\_info**: [`SslInfo`](SslInfo.md)

Defined in: main.ts:165323

ssl certificate info
information about the Secure Sockets Layer protocol detected on a website

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`ssl_info`](../interfaces/IDomainInfo.md#ssl_info)

***

### total\_pages?

> `optional` **total\_pages**: `number`

Defined in: main.ts:165329

total crawled pages
the total number of crawled pages

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`total_pages`](../interfaces/IDomainInfo.md#total_pages)

***

### www\_redirect\_status\_code?

> `optional` **www\_redirect\_status\_code**: `number`

Defined in: main.ts:165344

redirect status code
the status code of the www to non-www redirect
in most cases, it is recommended that redirect returns a 301 status code

#### Implementation of

[`IDomainInfo`](../interfaces/IDomainInfo.md).[`www_redirect_status_code`](../interfaces/IDomainInfo.md#www_redirect_status_code)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:165359

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:165396

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainInfo`](DomainInfo.md)

Defined in: main.ts:165389

#### Parameters

##### data

`any`

#### Returns

[`DomainInfo`](DomainInfo.md)
