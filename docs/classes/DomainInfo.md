[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainInfo

# Class: DomainInfo

## Implements

- [`IDomainInfo`](../interfaces/IDomainInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainInfo.md#constructor)

### Properties

- [canonicalization\_status\_code](DomainInfo.md#canonicalization_status_code)
- [checks](DomainInfo.md#checks)
- [cms](DomainInfo.md#cms)
- [crawl\_end](DomainInfo.md#crawl_end)
- [crawl\_start](DomainInfo.md#crawl_start)
- [directory\_browsing\_status\_code](DomainInfo.md#directory_browsing_status_code)
- [extended\_crawl\_status](DomainInfo.md#extended_crawl_status)
- [ip](DomainInfo.md#ip)
- [main\_domain](DomainInfo.md#main_domain)
- [name](DomainInfo.md#name)
- [page\_not\_found\_status\_code](DomainInfo.md#page_not_found_status_code)
- [server](DomainInfo.md#server)
- [ssl\_info](DomainInfo.md#ssl_info)
- [total\_pages](DomainInfo.md#total_pages)
- [www\_redirect\_status\_code](DomainInfo.md#www_redirect_status_code)

### Methods

- [init](DomainInfo.md#init)
- [toJSON](DomainInfo.md#tojson)
- [fromJS](DomainInfo.md#fromjs)

## Constructors

### constructor

• **new DomainInfo**(`data?`): [`DomainInfo`](DomainInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainInfo`](../interfaces/IDomainInfo.md) |

#### Returns

[`DomainInfo`](DomainInfo.md)

#### Defined in

[main.ts:143368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143368)

## Properties

### canonicalization\_status\_code

• `Optional` **canonicalization\_status\_code**: `number`

status code returned by a canonicalized page
the checkup of the server behavior when our crawler tries to access the website via IP;
in most cases, it is recommended that canonicalized pages respond with a 301 or 302 status code

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[canonicalization_status_code](../interfaces/IDomainInfo.md#canonicalization_status_code)

#### Defined in

[main.ts:143354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143354)

___

### checks

• `Optional` **checks**: `Object`

website checks
other on-page check-ups related to the website

#### Index signature

▪ [key: `string`]: `boolean`

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[checks](../interfaces/IDomainInfo.md#checks)

#### Defined in

[main.ts:143344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143344)

___

### cms

• `Optional` **cms**: `string`

content management system
content management system identified on a website
the content of the generator meta tag
the data is taken from the first random page that returns the 200 response code
if our crawler was unable to identify the cms, the value would be null

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[cms](../interfaces/IDomainInfo.md#cms)

#### Defined in

[main.ts:143307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143307)

___

### crawl\_end

• `Optional` **crawl\_end**: `string`

time when the crawling ended
date and time when the crawling was finished
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00note: informative only if "crawl_progress" is "finished"
if "crawl_progress" is in_progress, the value will be null

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[crawl_end](../interfaces/IDomainInfo.md#crawl_end)

#### Defined in

[main.ts:143327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143327)

___

### crawl\_start

• `Optional` **crawl\_start**: `string`

time when the crawling start
date and time when the website was sent for crawling
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[crawl_start](../interfaces/IDomainInfo.md#crawl_start)

#### Defined in

[main.ts:143320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143320)

___

### directory\_browsing\_status\_code

• `Optional` **directory\_browsing\_status\_code**: `number`

status code returned by a directory
the status code returned by a directory page on a target website
in most cases, it is recommended that directories respond with a 403 or 401 status code

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[directory_browsing_status_code](../interfaces/IDomainInfo.md#directory_browsing_status_code)

#### Defined in

[main.ts:143358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143358)

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

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[extended_crawl_status](../interfaces/IDomainInfo.md#extended_crawl_status)

#### Defined in

[main.ts:143338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143338)

___

### ip

• `Optional` **ip**: `string`

domain ip address

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[ip](../interfaces/IDomainInfo.md#ip)

#### Defined in

[main.ts:143309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143309)

___

### main\_domain

• `Optional` **main\_domain**: `string`

root domain name

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[main_domain](../interfaces/IDomainInfo.md#main_domain)

#### Defined in

[main.ts:143364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143364)

___

### name

• `Optional` **name**: `string`

domain name

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[name](../interfaces/IDomainInfo.md#name)

#### Defined in

[main.ts:143301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143301)

___

### page\_not\_found\_status\_code

• `Optional` **page\_not\_found\_status\_code**: `number`

status code returned by a non-existent page
in most cases, it is recommended a server returns a 404 response code

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[page_not_found_status_code](../interfaces/IDomainInfo.md#page_not_found_status_code)

#### Defined in

[main.ts:143350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143350)

___

### server

• `Optional` **server**: `string`

website server
the version of the server detected on a website
the content of the server header
the information is taken from the first page which response code is 200

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[server](../interfaces/IDomainInfo.md#server)

#### Defined in

[main.ts:143314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143314)

___

### ssl\_info

• `Optional` **ssl\_info**: [`SslInfo`](SslInfo.md)

ssl certificate info
information about the Secure Sockets Layer protocol detected on a website

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[ssl_info](../interfaces/IDomainInfo.md#ssl_info)

#### Defined in

[main.ts:143341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143341)

___

### total\_pages

• `Optional` **total\_pages**: `number`

total crawled pages
the total number of crawled pages

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[total_pages](../interfaces/IDomainInfo.md#total_pages)

#### Defined in

[main.ts:143347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143347)

___

### www\_redirect\_status\_code

• `Optional` **www\_redirect\_status\_code**: `number`

redirect status code
the status code of the www to non-www redirect
in most cases, it is recommended that redirect returns a 301 status code

#### Implementation of

[IDomainInfo](../interfaces/IDomainInfo.md).[www_redirect_status_code](../interfaces/IDomainInfo.md#www_redirect_status_code)

#### Defined in

[main.ts:143362](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143362)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:143377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143377)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:143414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143414)

___

### fromJS

▸ **fromJS**(`data`): [`DomainInfo`](DomainInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainInfo`](DomainInfo.md)

#### Defined in

[main.ts:143407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143407)
