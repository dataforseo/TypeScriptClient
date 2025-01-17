[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksPageIntersectionInfo

# Class: BacklinksPageIntersectionInfo

Defined in: main.ts:158582

## Implements

- [`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageIntersectionInfo()

> **new BacklinksPageIntersectionInfo**(`data`?): [`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

Defined in: main.ts:158729

#### Parameters

##### data?

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md)

#### Returns

[`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

## Properties

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:158688

alternative text of the image
this field will be null if backlink type is not image

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`alt`](../interfaces/IBacklinksPageIntersectionInfo.md#alt)

***

### anchor?

> `optional` **anchor**: `string`

Defined in: main.ts:158690

anchor text of the backlink

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`anchor`](../interfaces/IBacklinksPageIntersectionInfo.md#anchor)

***

### attributes?

> `optional` **attributes**: `string`[]

Defined in: main.ts:158680

link attributes of the referring links
example:
nofollow

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`attributes`](../interfaces/IBacklinksPageIntersectionInfo.md#attributes)

***

### backlink\_spam\_score?

> `optional` **backlink\_spam\_score**: `number`

Defined in: main.ts:158609

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`backlink_spam_score`](../interfaces/IBacklinksPageIntersectionInfo.md#backlink_spam_score)

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:158683

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`dofollow`](../interfaces/IBacklinksPageIntersectionInfo.md#dofollow)

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:158586

domain referring to the target domain or webpage

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from)

***

### domain\_from\_country?

> `optional` **domain\_from\_country**: `string`

Defined in: main.ts:158634

ISO country code of the referring domain

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_country`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_country)

***

### domain\_from\_ip?

> `optional` **domain\_from\_ip**: `string`

Defined in: main.ts:158632

IP address of the referring domain

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_ip`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_ip)

***

### domain\_from\_is\_ip?

> `optional` **domain\_from\_is\_ip**: `boolean`

Defined in: main.ts:158630

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_is_ip`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_is_ip)

***

### domain\_from\_platform\_type?

> `optional` **domain\_from\_platform\_type**: `string`[]

Defined in: main.ts:158627

platform types of the referring domain
example:
"cms",
"blogs"

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_platform_type`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_platform_type)

***

### domain\_from\_rank?

> `optional` **domain\_from\_rank**: `number`

Defined in: main.ts:158622

domain rank of the referring domain
indicates the rank of the domain at the time our crawler last saw the backlink;
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_from_rank`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_rank)

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:158593

domain the backlink is pointing to

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`domain_to`](../interfaces/IBacklinksPageIntersectionInfo.md#domain_to)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:158662

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`first_seen`](../interfaces/IBacklinksPageIntersectionInfo.md#first_seen)

***

### group\_count?

> `optional` **group\_count**: `number`

Defined in: main.ts:158704

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`group_count`](../interfaces/IBacklinksPageIntersectionInfo.md#group_count)

***

### indirect\_link\_path?

> `optional` **indirect\_link\_path**: [`Redirect`](Redirect.md)[]

Defined in: main.ts:158725

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`indirect_link_path`](../interfaces/IBacklinksPageIntersectionInfo.md#indirect_link_path)

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:158707

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`is_broken`](../interfaces/IBacklinksPageIntersectionInfo.md#is_broken)

***

### is\_indirect\_link?

> `optional` **is\_indirect\_link**: `boolean`

Defined in: main.ts:158722

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`is_indirect_link`](../interfaces/IBacklinksPageIntersectionInfo.md#is_indirect_link)

***

### is\_lost?

> `optional` **is\_lost**: `boolean`

Defined in: main.ts:158606

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`is_lost`](../interfaces/IBacklinksPageIntersectionInfo.md#is_lost)

***

### is\_new?

> `optional` **is\_new**: `boolean`

Defined in: main.ts:158603

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`is_new`](../interfaces/IBacklinksPageIntersectionInfo.md#is_new)

***

### item\_type?

> `optional` **item\_type**: `string`

Defined in: main.ts:158676

link type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`item_type`](../interfaces/IBacklinksPageIntersectionInfo.md#item_type)

***

### last\_seen?

> `optional` **last\_seen**: `string`

Defined in: main.ts:158672

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`last_seen`](../interfaces/IBacklinksPageIntersectionInfo.md#last_seen)

***

### links\_count?

> `optional` **links\_count**: `number`

Defined in: main.ts:158701

number of identical backlinks found on the referring page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`links_count`](../interfaces/IBacklinksPageIntersectionInfo.md#links_count)

***

### original?

> `optional` **original**: `boolean`

Defined in: main.ts:158685

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`original`](../interfaces/IBacklinksPageIntersectionInfo.md#original)

***

### page\_from\_encoding?

> `optional` **page\_from\_encoding**: `string`

Defined in: main.ts:158646

character encoding of the referring page
example:
utf-8

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_encoding`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_encoding)

***

### page\_from\_external\_links?

> `optional` **page\_from\_external\_links**: `number`

Defined in: main.ts:158636

number of external links found on the referring page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_external_links`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_external_links)

***

### page\_from\_internal\_links?

> `optional` **page\_from\_internal\_links**: `number`

Defined in: main.ts:158638

number of internal links found on the referring page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_internal_links`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_internal_links)

***

### page\_from\_language?

> `optional` **page\_from\_language**: `string`

Defined in: main.ts:158651

language of the referring page
in ISO 639-1 format
example:
en

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_language`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_language)

***

### page\_from\_rank?

> `optional` **page\_from\_rank**: `number`

Defined in: main.ts:158617

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_rank`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_rank)

***

### page\_from\_size?

> `optional` **page\_from\_size**: `number`

Defined in: main.ts:158642

size of the referring page, in bytes
example:
63357

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_size`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_size)

***

### page\_from\_status\_code?

> `optional` **page\_from\_status\_code**: `number`

Defined in: main.ts:158657

HTTP status code returned by the referring page
example:
200

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_status_code`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_status_code)

***

### page\_from\_title?

> `optional` **page\_from\_title**: `string`

Defined in: main.ts:158653

title of the referring page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`page_from_title`](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_title)

***

### prev\_seen?

> `optional` **prev\_seen**: `string`

Defined in: main.ts:158667

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`prev_seen`](../interfaces/IBacklinksPageIntersectionInfo.md#prev_seen)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:158613

backlink rank
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`rank`](../interfaces/IBacklinksPageIntersectionInfo.md#rank)

***

### semantic\_location?

> `optional` **semantic\_location**: `string`

Defined in: main.ts:158699

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`semantic_location`](../interfaces/IBacklinksPageIntersectionInfo.md#semantic_location)

***

### text\_post?

> `optional` **text\_post**: `string`

Defined in: main.ts:158694

snippet after the anchor text

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`text_post`](../interfaces/IBacklinksPageIntersectionInfo.md#text_post)

***

### text\_pre?

> `optional` **text\_pre**: `string`

Defined in: main.ts:158692

text snippet before the anchor text

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`text_pre`](../interfaces/IBacklinksPageIntersectionInfo.md#text_pre)

***

### tld\_from?

> `optional` **tld\_from**: `string`

Defined in: main.ts:158600

top-level domain of the referring URL

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`tld_from`](../interfaces/IBacklinksPageIntersectionInfo.md#tld_from)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:158584

type of element

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`type`](../interfaces/IBacklinksPageIntersectionInfo.md#type)

***

### url\_from?

> `optional` **url\_from**: `string`

Defined in: main.ts:158588

URL of the page where the backlink is found

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_from`](../interfaces/IBacklinksPageIntersectionInfo.md#url_from)

***

### url\_from\_https?

> `optional` **url\_from\_https**: `boolean`

Defined in: main.ts:158591

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_from_https`](../interfaces/IBacklinksPageIntersectionInfo.md#url_from_https)

***

### url\_to?

> `optional` **url\_to**: `string`

Defined in: main.ts:158595

URL the backlink is pointing to

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to)

***

### url\_to\_https?

> `optional` **url\_to\_https**: `boolean`

Defined in: main.ts:158598

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to_https`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_https)

***

### url\_to\_redirect\_target?

> `optional` **url\_to\_redirect\_target**: `string`

Defined in: main.ts:158719

target url of the redirect
target page the redirect is pointing to

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to_redirect_target`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_redirect_target)

***

### url\_to\_spam\_score?

> `optional` **url\_to\_spam\_score**: `number`

Defined in: main.ts:158716

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to_spam_score`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_spam_score)

***

### url\_to\_status\_code?

> `optional` **url\_to\_status\_code**: `number`

Defined in: main.ts:158712

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Implementation of

[`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md).[`url_to_status_code`](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_status_code)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:158738

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:158811

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

Defined in: main.ts:158804

#### Parameters

##### data

`any`

#### Returns

[`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)
