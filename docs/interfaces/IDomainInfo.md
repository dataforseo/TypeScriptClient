[Documentation](../README.md) / [Exports](../modules.md) / IDomainInfo

# Interface: IDomainInfo

## Implemented by

- [`DomainInfo`](../classes/DomainInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [canonicalization\_status\_code](IDomainInfo.md#canonicalization_status_code)
- [checks](IDomainInfo.md#checks)
- [cms](IDomainInfo.md#cms)
- [crawl\_end](IDomainInfo.md#crawl_end)
- [crawl\_start](IDomainInfo.md#crawl_start)
- [directory\_browsing\_status\_code](IDomainInfo.md#directory_browsing_status_code)
- [extended\_crawl\_status](IDomainInfo.md#extended_crawl_status)
- [ip](IDomainInfo.md#ip)
- [main\_domain](IDomainInfo.md#main_domain)
- [name](IDomainInfo.md#name)
- [page\_not\_found\_status\_code](IDomainInfo.md#page_not_found_status_code)
- [server](IDomainInfo.md#server)
- [ssl\_info](IDomainInfo.md#ssl_info)
- [total\_pages](IDomainInfo.md#total_pages)
- [www\_redirect\_status\_code](IDomainInfo.md#www_redirect_status_code)

## Properties

### canonicalization\_status\_code

• `Optional` **canonicalization\_status\_code**: `number`

status code returned by a canonicalized page
the checkup of the server behavior when our crawler tries to access the website via IP;
in most cases, it is recommended that canonicalized pages respond with a 301 or 302 status code

#### Defined in

main.ts:143644

___

### checks

• `Optional` **checks**: `Object`

website checks
other on-page check-ups related to the website

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

main.ts:143634

___

### cms

• `Optional` **cms**: `string`

content management system
content management system identified on a website
the content of the generator meta tag
the data is taken from the first random page that returns the 200 response code
if our crawler was unable to identify the cms, the value would be null

#### Defined in

main.ts:143597

___

### crawl\_end

• `Optional` **crawl\_end**: `string`

time when the crawling ended
date and time when the crawling was finished
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00note: informative only if "crawl_progress" is "finished"
if "crawl_progress" is in_progress, the value will be null

#### Defined in

main.ts:143617

___

### crawl\_start

• `Optional` **crawl\_start**: `string`

time when the crawling start
date and time when the website was sent for crawling
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:143610

___

### directory\_browsing\_status\_code

• `Optional` **directory\_browsing\_status\_code**: `number`

status code returned by a directory
the status code returned by a directory page on a target website
in most cases, it is recommended that directories respond with a 403 or 401 status code

#### Defined in

main.ts:143648

___

### extended\_crawl\_status

• `Optional` **extended\_crawl\_status**: `string`

crawl status and errors
indicates the reason why a website was not crawledcan take the following values:
no_errors – no crawling errors were detected;
site_unreachable – our crawler could not reach a website and thus was not able to obtain a status code;
invalid_page_status_code – status code of the first crawled page >= 400;
forbidden_meta_tag – the first crawled page contains the <meta robots=”noindex”> tag;
forbidden_robots – robots.txt forbids crawling the page;
forbidden_http_header – HTTP header of the page contains “X-Robots-Tag: noindex” ;
too_many_redirects – the first crawled page has more than 10 redirects;
unknown – the reason is unknown

#### Defined in

main.ts:143628

___

### ip

• `Optional` **ip**: `string`

domain ip address

#### Defined in

main.ts:143599

___

### main\_domain

• `Optional` **main\_domain**: `string`

root domain name

#### Defined in

main.ts:143654

___

### name

• `Optional` **name**: `string`

domain name

#### Defined in

main.ts:143591

___

### page\_not\_found\_status\_code

• `Optional` **page\_not\_found\_status\_code**: `number`

status code returned by a non-existent page
in most cases, it is recommended a server returns a 404 response code

#### Defined in

main.ts:143640

___

### server

• `Optional` **server**: `string`

website server
the version of the server detected on a website
the content of the server header
the information is taken from the first page which response code is 200

#### Defined in

main.ts:143604

___

### ssl\_info

• `Optional` **ssl\_info**: [`SslInfo`](../classes/SslInfo.md)

ssl certificate info
information about the Secure Sockets Layer protocol detected on a website

#### Defined in

main.ts:143631

___

### total\_pages

• `Optional` **total\_pages**: `number`

total crawled pages
the total number of crawled pages

#### Defined in

main.ts:143637

___

### www\_redirect\_status\_code

• `Optional` **www\_redirect\_status\_code**: `number`

redirect status code
the status code of the www to non-www redirect
in most cases, it is recommended that redirect returns a 301 status code

#### Defined in

main.ts:143652
