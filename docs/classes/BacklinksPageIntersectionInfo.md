[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksPageIntersectionInfo

# Class: BacklinksPageIntersectionInfo

## Implements

- [`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageIntersectionInfo()

> **new BacklinksPageIntersectionInfo**(`data`?): [`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

#### Parameters

• **data?**: [`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md)

#### Returns

[`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

#### Defined in

main.ts:147456

## Properties

### alt?

> `optional` **alt**: `string`

alternative text of the image
this field will be null if backlink type is not image

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`alt`](../interfaces/IBacklinksPageIntersectionInfo.md#alt)

#### Defined in

main.ts:147415

***

### anchor?

> `optional` **anchor**: `string`

anchor text of the backlink

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`anchor`](../interfaces/IBacklinksPageIntersectionInfo.md#anchor)

#### Defined in

main.ts:147417

***

### attributes?

> `optional` **attributes**: `string`[]

link attributes of the referring links
example:
nofollow

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`attributes`](../interfaces/IBacklinksPageIntersectionInfo.md#attributes)

#### Defined in

main.ts:147407

***

### backlink\_spam\_score?

> `optional` **backlink\_spam\_score**: `number`

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`backlink_spam_score`](../interfaces/IBacklinksPageIntersectionInfo.md#backlink_spam_score)

#### Defined in

main.ts:147336

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`dofollow`](../interfaces/IBacklinksPageIntersectionInfo.md#dofollow)

#### Defined in

main.ts:147410

***

### domain\_from?

> `optional` **domain\_from**: `string`

domain referring to the target domain or webpage

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from)

#### Defined in

main.ts:147313

***

### domain\_from\_country?

> `optional` **domain\_from\_country**: `string`

ISO country code of the referring domain

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_country`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_country)

#### Defined in

main.ts:147361

***

### domain\_from\_ip?

> `optional` **domain\_from\_ip**: `string`

IP address of the referring domain

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_ip`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_ip)

#### Defined in

main.ts:147359

***

### domain\_from\_is\_ip?

> `optional` **domain\_from\_is\_ip**: `boolean`

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_is_ip`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_is_ip)

#### Defined in

main.ts:147357

***

### domain\_from\_platform\_type?

> `optional` **domain\_from\_platform\_type**: `string`[]

platform types of the referring domain
example:
"cms",
"blogs"

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_platform_type`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_platform_type)

#### Defined in

main.ts:147354

***

### domain\_from\_rank?

> `optional` **domain\_from\_rank**: `number`

domain rank of the referring domain
indicates the rank of the domain at the time our crawler last saw the backlink;
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_rank`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_rank)

#### Defined in

main.ts:147349

***

### domain\_to?

> `optional` **domain\_to**: `string`

domain the backlink is pointing to

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_to`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_to)

#### Defined in

main.ts:147320

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`first_seen`](../interfaces/IBacklinksPageIntersectionInfo.md#first_seen)

#### Defined in

main.ts:147389

***

### group\_count?

> `optional` **group\_count**: `number`

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`group_count`](../interfaces/IBacklinksPageIntersectionInfo.md#group_count)

#### Defined in

main.ts:147431

***

### indirect\_link\_path?

> `optional` **indirect\_link\_path**: [`Redirect`](Redirect.md)[]

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`indirect_link_path`](../interfaces/IBacklinksPageIntersectionInfo.md#indirect_link_path)

#### Defined in

main.ts:147452

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`is_broken`](../interfaces/IBacklinksPageIntersectionInfo.md#is_broken)

#### Defined in

main.ts:147434

***

### is\_indirect\_link?

> `optional` **is\_indirect\_link**: `boolean`

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`is_indirect_link`](../interfaces/IBacklinksPageIntersectionInfo.md#is_indirect_link)

#### Defined in

main.ts:147449

***

### is\_lost?

> `optional` **is\_lost**: `boolean`

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`is_lost`](../interfaces/IBacklinksPageIntersectionInfo.md#is_lost)

#### Defined in

main.ts:147333

***

### is\_new?

> `optional` **is\_new**: `boolean`

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`is_new`](../interfaces/IBacklinksPageIntersectionInfo.md#is_new)

#### Defined in

main.ts:147330

***

### item\_type?

> `optional` **item\_type**: `string`

link type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`item_type`](../interfaces/IBacklinksPageIntersectionInfo.md#item_type)

#### Defined in

main.ts:147403

***

### last\_seen?

> `optional` **last\_seen**: `string`

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`last_seen`](../interfaces/IBacklinksPageIntersectionInfo.md#last_seen)

#### Defined in

main.ts:147399

***

### links\_count?

> `optional` **links\_count**: `number`

number of identical backlinks found on the referring page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`links_count`](../interfaces/IBacklinksPageIntersectionInfo.md#links_count)

#### Defined in

main.ts:147428

***

### original?

> `optional` **original**: `boolean`

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`original`](../interfaces/IBacklinksPageIntersectionInfo.md#original)

#### Defined in

main.ts:147412

***

### page\_from\_encoding?

> `optional` **page\_from\_encoding**: `string`

character encoding of the referring page
example:
utf-8

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_encoding`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_encoding)

#### Defined in

main.ts:147373

***

### page\_from\_external\_links?

> `optional` **page\_from\_external\_links**: `number`

number of external links found on the referring page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_external_links`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_external_links)

#### Defined in

main.ts:147363

***

### page\_from\_internal\_links?

> `optional` **page\_from\_internal\_links**: `number`

number of internal links found on the referring page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_internal_links`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_internal_links)

#### Defined in

main.ts:147365

***

### page\_from\_language?

> `optional` **page\_from\_language**: `string`

language of the referring page
in ISO 639-1 format
example:
en

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_language`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_language)

#### Defined in

main.ts:147378

***

### page\_from\_rank?

> `optional` **page\_from\_rank**: `number`

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_rank`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_rank)

#### Defined in

main.ts:147344

***

### page\_from\_size?

> `optional` **page\_from\_size**: `number`

size of the referring page, in bytes
example:
63357

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_size`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_size)

#### Defined in

main.ts:147369

***

### page\_from\_status\_code?

> `optional` **page\_from\_status\_code**: `number`

HTTP status code returned by the referring page
example:
200

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_status_code`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_status_code)

#### Defined in

main.ts:147384

***

### page\_from\_title?

> `optional` **page\_from\_title**: `string`

title of the referring page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_title`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_title)

#### Defined in

main.ts:147380

***

### prev\_seen?

> `optional` **prev\_seen**: `string`

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`prev_seen`](../interfaces/IBacklinksPageIntersectionInfo.md#prev_seen)

#### Defined in

main.ts:147394

***

### rank?

> `optional` **rank**: `number`

backlink rank
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`rank`](../interfaces/IBacklinksPageIntersectionInfo.md#rank)

#### Defined in

main.ts:147340

***

### semantic\_location?

> `optional` **semantic\_location**: `string`

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`semantic_location`](../interfaces/IBacklinksPageIntersectionInfo.md#semantic_location)

#### Defined in

main.ts:147426

***

### text\_post?

> `optional` **text\_post**: `string`

snippet after the anchor text

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`text_post`](../interfaces/IBacklinksPageIntersectionInfo.md#text_post)

#### Defined in

main.ts:147421

***

### text\_pre?

> `optional` **text\_pre**: `string`

text snippet before the anchor text

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`text_pre`](../interfaces/IBacklinksPageIntersectionInfo.md#text_pre)

#### Defined in

main.ts:147419

***

### tld\_from?

> `optional` **tld\_from**: `string`

top-level domain of the referring URL

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`tld_from`](../interfaces/IBacklinksPageIntersectionInfo.md#tld_from)

#### Defined in

main.ts:147327

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`type`](../interfaces/IBacklinksPageIntersectionInfo.md#type)

#### Defined in

main.ts:147311

***

### url\_from?

> `optional` **url\_from**: `string`

URL of the page where the backlink is found

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_from`](../interfaces/IBacklinksPageIntersectionInfo.md#url_from)

#### Defined in

main.ts:147315

***

### url\_from\_https?

> `optional` **url\_from\_https**: `boolean`

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_from_https`](../interfaces/IBacklinksPageIntersectionInfo.md#url_from_https)

#### Defined in

main.ts:147318

***

### url\_to?

> `optional` **url\_to**: `string`

URL the backlink is pointing to

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to)

#### Defined in

main.ts:147322

***

### url\_to\_https?

> `optional` **url\_to\_https**: `boolean`

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to_https`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_https)

#### Defined in

main.ts:147325

***

### url\_to\_redirect\_target?

> `optional` **url\_to\_redirect\_target**: `string`

target url of the redirect
target page the redirect is pointing to

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to_redirect_target`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_redirect_target)

#### Defined in

main.ts:147446

***

### url\_to\_spam\_score?

> `optional` **url\_to\_spam\_score**: `number`

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to_spam_score`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_spam_score)

#### Defined in

main.ts:147443

***

### url\_to\_status\_code?

> `optional` **url\_to\_status\_code**: `number`

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to_status_code`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_status_code)

#### Defined in

main.ts:147439

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:147465

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:147538

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

#### Defined in

main.ts:147531
