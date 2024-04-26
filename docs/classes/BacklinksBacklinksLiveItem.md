**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBacklinksLiveItem

# Class: BacklinksBacklinksLiveItem

## Implements

- [`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBacklinksLiveItem(data)

> **new BacklinksBacklinksLiveItem**(`data`?): [`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md)

#### Returns

[`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

#### Source

main.ts:136832

## Properties

### alt?

> **`optional`** **alt**: `string`

alternative text of the image
this field will be null if backlink type is not image

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`alt`](../interfaces/IBacklinksBacklinksLiveItem.md#alt)

#### Source

main.ts:136786

***

### anchor?

> **`optional`** **anchor**: `string`

anchor text of the backlink

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`anchor`](../interfaces/IBacklinksBacklinksLiveItem.md#anchor)

#### Source

main.ts:136791

***

### attributes?

> **`optional`** **attributes**: `string`[]

link attributes of the referring links
example:
nofollow

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`attributes`](../interfaces/IBacklinksBacklinksLiveItem.md#attributes)

#### Source

main.ts:136778

***

### backlink\_spam\_score?

> **`optional`** **backlink\_spam\_score**: `number`

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`backlink_spam_score`](../interfaces/IBacklinksBacklinksLiveItem.md#backlink_spam_score)

#### Source

main.ts:136707

***

### dofollow?

> **`optional`** **dofollow**: `boolean`

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`dofollow`](../interfaces/IBacklinksBacklinksLiveItem.md#dofollow)

#### Source

main.ts:136781

***

### domain\_from?

> **`optional`** **domain\_from**: `string`

domain referring to the target domain or webpage

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from)

#### Source

main.ts:136684

***

### domain\_from\_country?

> **`optional`** **domain\_from\_country**: `string`

ISO country code of the referring domain

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_country`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_country)

#### Source

main.ts:136732

***

### domain\_from\_ip?

> **`optional`** **domain\_from\_ip**: `string`

IP address of the referring domain

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_ip`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_ip)

#### Source

main.ts:136730

***

### domain\_from\_is\_ip?

> **`optional`** **domain\_from\_is\_ip**: `boolean`

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_is_ip`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_is_ip)

#### Source

main.ts:136728

***

### domain\_from\_platform\_type?

> **`optional`** **domain\_from\_platform\_type**: `string`[]

platform types of the referring domain
example:
"cms",
"blogs"

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_platform_type`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_platform_type)

#### Source

main.ts:136725

***

### domain\_from\_rank?

> **`optional`** **domain\_from\_rank**: `number`

domain rank of the referring domain
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_rank`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_rank)

#### Source

main.ts:136720

***

### domain\_to?

> **`optional`** **domain\_to**: `string`

domain the backlink is pointing to

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_to`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_to)

#### Source

main.ts:136691

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`first_seen`](../interfaces/IBacklinksBacklinksLiveItem.md#first_seen)

#### Source

main.ts:136760

***

### group\_count?

> **`optional`** **group\_count**: `number`

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`group_count`](../interfaces/IBacklinksBacklinksLiveItem.md#group_count)

#### Source

main.ts:136805

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`image_url`](../interfaces/IBacklinksBacklinksLiveItem.md#image_url)

#### Source

main.ts:136789

***

### indirect\_link\_path?

> **`optional`** **indirect\_link\_path**: [`Redirect`](Redirect.md)[]

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`indirect_link_path`](../interfaces/IBacklinksBacklinksLiveItem.md#indirect_link_path)

#### Source

main.ts:136828

***

### is\_broken?

> **`optional`** **is\_broken**: `boolean`

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`is_broken`](../interfaces/IBacklinksBacklinksLiveItem.md#is_broken)

#### Source

main.ts:136808

***

### is\_indirect\_link?

> **`optional`** **is\_indirect\_link**: `boolean`

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`is_indirect_link`](../interfaces/IBacklinksBacklinksLiveItem.md#is_indirect_link)

#### Source

main.ts:136825

***

### is\_lost?

> **`optional`** **is\_lost**: `boolean`

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`is_lost`](../interfaces/IBacklinksBacklinksLiveItem.md#is_lost)

#### Source

main.ts:136704

***

### is\_new?

> **`optional`** **is\_new**: `boolean`

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`is_new`](../interfaces/IBacklinksBacklinksLiveItem.md#is_new)

#### Source

main.ts:136701

***

### item\_type?

> **`optional`** **item\_type**: `string`

link type
possible values:
anchor, image, meta, canonical, alternate, redirect

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`item_type`](../interfaces/IBacklinksBacklinksLiveItem.md#item_type)

#### Source

main.ts:136774

***

### last\_seen?

> **`optional`** **last\_seen**: `string`

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`last_seen`](../interfaces/IBacklinksBacklinksLiveItem.md#last_seen)

#### Source

main.ts:136770

***

### links\_count?

> **`optional`** **links\_count**: `number`

number of identical backlinks found on the referring page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`links_count`](../interfaces/IBacklinksBacklinksLiveItem.md#links_count)

#### Source

main.ts:136802

***

### original?

> **`optional`** **original**: `boolean`

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`original`](../interfaces/IBacklinksBacklinksLiveItem.md#original)

#### Source

main.ts:136783

***

### page\_from\_encoding?

> **`optional`** **page\_from\_encoding**: `string`

character encoding of the referring page
example:
utf-8

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_encoding`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_encoding)

#### Source

main.ts:136744

***

### page\_from\_external\_links?

> **`optional`** **page\_from\_external\_links**: `number`

number of external links found on the referring page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_external_links`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_external_links)

#### Source

main.ts:136734

***

### page\_from\_internal\_links?

> **`optional`** **page\_from\_internal\_links**: `number`

number of internal links found on the referring page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_internal_links`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_internal_links)

#### Source

main.ts:136736

***

### page\_from\_language?

> **`optional`** **page\_from\_language**: `string`

language of the referring page
in ISO 639-1 format
example:
en

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_language`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_language)

#### Source

main.ts:136749

***

### page\_from\_rank?

> **`optional`** **page\_from\_rank**: `number`

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_rank`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_rank)

#### Source

main.ts:136716

***

### page\_from\_size?

> **`optional`** **page\_from\_size**: `number`

size of the referring page, in bytes
example:
63357

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_size`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_size)

#### Source

main.ts:136740

***

### page\_from\_status\_code?

> **`optional`** **page\_from\_status\_code**: `number`

HTTP status code returned by the referring page
example:
200

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_status_code`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_status_code)

#### Source

main.ts:136755

***

### page\_from\_title?

> **`optional`** **page\_from\_title**: `string`

title of the referring page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_title`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_title)

#### Source

main.ts:136751

***

### prev\_seen?

> **`optional`** **prev\_seen**: `string`

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`prev_seen`](../interfaces/IBacklinksBacklinksLiveItem.md#prev_seen)

#### Source

main.ts:136765

***

### rank?

> **`optional`** **rank**: `number`

backlink rank
rank that the given backlink passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`rank`](../interfaces/IBacklinksBacklinksLiveItem.md#rank)

#### Source

main.ts:136712

***

### ranked\_keywords\_info?

> **`optional`** **ranked\_keywords\_info**: [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

number of keywords for which the page is ranked in top search results

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`ranked_keywords_info`](../interfaces/IBacklinksBacklinksLiveItem.md#ranked_keywords_info)

#### Source

main.ts:136822

***

### semantic\_location?

> **`optional`** **semantic\_location**: `string`

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`semantic_location`](../interfaces/IBacklinksBacklinksLiveItem.md#semantic_location)

#### Source

main.ts:136800

***

### text\_post?

> **`optional`** **text\_post**: `string`

snippet after the anchor text

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`text_post`](../interfaces/IBacklinksBacklinksLiveItem.md#text_post)

#### Source

main.ts:136795

***

### text\_pre?

> **`optional`** **text\_pre**: `string`

snippet before the anchor text

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`text_pre`](../interfaces/IBacklinksBacklinksLiveItem.md#text_pre)

#### Source

main.ts:136793

***

### tld\_from?

> **`optional`** **tld\_from**: `string`

top-level domain of the referring URL

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`tld_from`](../interfaces/IBacklinksBacklinksLiveItem.md#tld_from)

#### Source

main.ts:136698

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`type`](../interfaces/IBacklinksBacklinksLiveItem.md#type)

#### Source

main.ts:136682

***

### url\_from?

> **`optional`** **url\_from**: `string`

URL of the page where the backlink is found

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_from`](../interfaces/IBacklinksBacklinksLiveItem.md#url_from)

#### Source

main.ts:136686

***

### url\_from\_https?

> **`optional`** **url\_from\_https**: `boolean`

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_from_https`](../interfaces/IBacklinksBacklinksLiveItem.md#url_from_https)

#### Source

main.ts:136689

***

### url\_to?

> **`optional`** **url\_to**: `string`

URL the backlink is pointing to

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to)

#### Source

main.ts:136693

***

### url\_to\_https?

> **`optional`** **url\_to\_https**: `boolean`

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to_https`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_https)

#### Source

main.ts:136696

***

### url\_to\_redirect\_target?

> **`optional`** **url\_to\_redirect\_target**: `string`

target url of the redirect
target page the redirect is pointing to

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to_redirect_target`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_redirect_target)

#### Source

main.ts:136820

***

### url\_to\_spam\_score?

> **`optional`** **url\_to\_spam\_score**: `number`

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to;
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to_spam_score`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_spam_score)

#### Source

main.ts:136817

***

### url\_to\_status\_code?

> **`optional`** **url\_to\_status\_code**: `number`

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to_status_code`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_status_code)

#### Source

main.ts:136813

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:136841

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:136916

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

#### Source

main.ts:136909
