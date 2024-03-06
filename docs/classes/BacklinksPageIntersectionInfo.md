[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksPageIntersectionInfo

# Class: BacklinksPageIntersectionInfo

## Implements

- [`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksPageIntersectionInfo.md#constructor)

### Properties

- [alt](BacklinksPageIntersectionInfo.md#alt)
- [anchor](BacklinksPageIntersectionInfo.md#anchor)
- [attributes](BacklinksPageIntersectionInfo.md#attributes)
- [backlink\_spam\_score](BacklinksPageIntersectionInfo.md#backlink_spam_score)
- [dofollow](BacklinksPageIntersectionInfo.md#dofollow)
- [domain\_from](BacklinksPageIntersectionInfo.md#domain_from)
- [domain\_from\_country](BacklinksPageIntersectionInfo.md#domain_from_country)
- [domain\_from\_ip](BacklinksPageIntersectionInfo.md#domain_from_ip)
- [domain\_from\_is\_ip](BacklinksPageIntersectionInfo.md#domain_from_is_ip)
- [domain\_from\_platform\_type](BacklinksPageIntersectionInfo.md#domain_from_platform_type)
- [domain\_from\_rank](BacklinksPageIntersectionInfo.md#domain_from_rank)
- [domain\_to](BacklinksPageIntersectionInfo.md#domain_to)
- [first\_seen](BacklinksPageIntersectionInfo.md#first_seen)
- [group\_count](BacklinksPageIntersectionInfo.md#group_count)
- [indirect\_link\_path](BacklinksPageIntersectionInfo.md#indirect_link_path)
- [is\_broken](BacklinksPageIntersectionInfo.md#is_broken)
- [is\_indirect\_link](BacklinksPageIntersectionInfo.md#is_indirect_link)
- [is\_lost](BacklinksPageIntersectionInfo.md#is_lost)
- [is\_new](BacklinksPageIntersectionInfo.md#is_new)
- [item\_type](BacklinksPageIntersectionInfo.md#item_type)
- [last\_seen](BacklinksPageIntersectionInfo.md#last_seen)
- [links\_count](BacklinksPageIntersectionInfo.md#links_count)
- [original](BacklinksPageIntersectionInfo.md#original)
- [page\_from\_encoding](BacklinksPageIntersectionInfo.md#page_from_encoding)
- [page\_from\_external\_links](BacklinksPageIntersectionInfo.md#page_from_external_links)
- [page\_from\_internal\_links](BacklinksPageIntersectionInfo.md#page_from_internal_links)
- [page\_from\_language](BacklinksPageIntersectionInfo.md#page_from_language)
- [page\_from\_rank](BacklinksPageIntersectionInfo.md#page_from_rank)
- [page\_from\_size](BacklinksPageIntersectionInfo.md#page_from_size)
- [page\_from\_status\_code](BacklinksPageIntersectionInfo.md#page_from_status_code)
- [page\_from\_title](BacklinksPageIntersectionInfo.md#page_from_title)
- [prev\_seen](BacklinksPageIntersectionInfo.md#prev_seen)
- [rank](BacklinksPageIntersectionInfo.md#rank)
- [semantic\_location](BacklinksPageIntersectionInfo.md#semantic_location)
- [text\_post](BacklinksPageIntersectionInfo.md#text_post)
- [text\_pre](BacklinksPageIntersectionInfo.md#text_pre)
- [tld\_from](BacklinksPageIntersectionInfo.md#tld_from)
- [type](BacklinksPageIntersectionInfo.md#type)
- [url\_from](BacklinksPageIntersectionInfo.md#url_from)
- [url\_from\_https](BacklinksPageIntersectionInfo.md#url_from_https)
- [url\_to](BacklinksPageIntersectionInfo.md#url_to)
- [url\_to\_https](BacklinksPageIntersectionInfo.md#url_to_https)
- [url\_to\_redirect\_target](BacklinksPageIntersectionInfo.md#url_to_redirect_target)
- [url\_to\_spam\_score](BacklinksPageIntersectionInfo.md#url_to_spam_score)
- [url\_to\_status\_code](BacklinksPageIntersectionInfo.md#url_to_status_code)

### Methods

- [init](BacklinksPageIntersectionInfo.md#init)
- [toJSON](BacklinksPageIntersectionInfo.md#tojson)
- [fromJS](BacklinksPageIntersectionInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksPageIntersectionInfo**(`data?`): [`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksPageIntersectionInfo`](../interfaces/IBacklinksPageIntersectionInfo.md) |

#### Returns

[`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

#### Defined in

[main.ts:137791](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137791)

## Properties

### alt

• `Optional` **alt**: `string`

alternative text of the image
this field will be null if backlink type is not image

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[alt](../interfaces/IBacklinksPageIntersectionInfo.md#alt)

#### Defined in

[main.ts:137750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137750)

___


### anchor

• `Optional` **anchor**: `string`

anchor text of the backlink

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[anchor](../interfaces/IBacklinksPageIntersectionInfo.md#anchor)

#### Defined in

[main.ts:137752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137752)

___


### attributes

• `Optional` **attributes**: `string`[]

link attributes of the referring links
example:
nofollow

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[attributes](../interfaces/IBacklinksPageIntersectionInfo.md#attributes)

#### Defined in

[main.ts:137742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137742)

___


### backlink\_spam\_score

• `Optional` **backlink\_spam\_score**: `number`

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[backlink_spam_score](../interfaces/IBacklinksPageIntersectionInfo.md#backlink_spam_score)

#### Defined in

[main.ts:137672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137672)

___


### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[dofollow](../interfaces/IBacklinksPageIntersectionInfo.md#dofollow)

#### Defined in

[main.ts:137745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137745)

___


### domain\_from

• `Optional` **domain\_from**: `string`

domain referring to the target domain or webpage

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[domain_from](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from)

#### Defined in

[main.ts:137649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137649)

___


### domain\_from\_country

• `Optional` **domain\_from\_country**: `string`

ISO country code of the referring domain

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[domain_from_country](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_country)

#### Defined in

[main.ts:137696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137696)

___


### domain\_from\_ip

• `Optional` **domain\_from\_ip**: `string`

IP address of the referring domain

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[domain_from_ip](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_ip)

#### Defined in

[main.ts:137694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137694)

___


### domain\_from\_is\_ip

• `Optional` **domain\_from\_is\_ip**: `boolean`

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[domain_from_is_ip](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_is_ip)

#### Defined in

[main.ts:137692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137692)

___


### domain\_from\_platform\_type

• `Optional` **domain\_from\_platform\_type**: `string`[]

platform types of the referring domain
example:
"cms",
"blogs"

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[domain_from_platform_type](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_platform_type)

#### Defined in

[main.ts:137689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137689)

___


### domain\_from\_rank

• `Optional` **domain\_from\_rank**: `number`

domain rank of the referring domain
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[domain_from_rank](../interfaces/IBacklinksPageIntersectionInfo.md#domain_from_rank)

#### Defined in

[main.ts:137684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137684)

___


### domain\_to

• `Optional` **domain\_to**: `string`

domain the backlink is pointing to

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[domain_to](../interfaces/IBacklinksPageIntersectionInfo.md#domain_to)

#### Defined in

[main.ts:137656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137656)

___


### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[first_seen](../interfaces/IBacklinksPageIntersectionInfo.md#first_seen)

#### Defined in

[main.ts:137724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137724)

___


### group\_count

• `Optional` **group\_count**: `number`

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[group_count](../interfaces/IBacklinksPageIntersectionInfo.md#group_count)

#### Defined in

[main.ts:137766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137766)

___


### indirect\_link\_path

• `Optional` **indirect\_link\_path**: [`Redirect`](Redirect.md)[]

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[indirect_link_path](../interfaces/IBacklinksPageIntersectionInfo.md#indirect_link_path)

#### Defined in

[main.ts:137787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137787)

___


### is\_broken

• `Optional` **is\_broken**: `boolean`

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[is_broken](../interfaces/IBacklinksPageIntersectionInfo.md#is_broken)

#### Defined in

[main.ts:137769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137769)

___


### is\_indirect\_link

• `Optional` **is\_indirect\_link**: `boolean`

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[is_indirect_link](../interfaces/IBacklinksPageIntersectionInfo.md#is_indirect_link)

#### Defined in

[main.ts:137784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137784)

___


### is\_lost

• `Optional` **is\_lost**: `boolean`

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[is_lost](../interfaces/IBacklinksPageIntersectionInfo.md#is_lost)

#### Defined in

[main.ts:137669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137669)

___


### is\_new

• `Optional` **is\_new**: `boolean`

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[is_new](../interfaces/IBacklinksPageIntersectionInfo.md#is_new)

#### Defined in

[main.ts:137666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137666)

___


### item\_type

• `Optional` **item\_type**: `string`

link type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[item_type](../interfaces/IBacklinksPageIntersectionInfo.md#item_type)

#### Defined in

[main.ts:137738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137738)

___


### last\_seen

• `Optional` **last\_seen**: `string`

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[last_seen](../interfaces/IBacklinksPageIntersectionInfo.md#last_seen)

#### Defined in

[main.ts:137734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137734)

___


### links\_count

• `Optional` **links\_count**: `number`

number of identical backlinks found on the referring page

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[links_count](../interfaces/IBacklinksPageIntersectionInfo.md#links_count)

#### Defined in

[main.ts:137763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137763)

___


### original

• `Optional` **original**: `boolean`

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[original](../interfaces/IBacklinksPageIntersectionInfo.md#original)

#### Defined in

[main.ts:137747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137747)

___


### page\_from\_encoding

• `Optional` **page\_from\_encoding**: `string`

character encoding of the referring page
example:
utf-8

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[page_from_encoding](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_encoding)

#### Defined in

[main.ts:137708](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137708)

___


### page\_from\_external\_links

• `Optional` **page\_from\_external\_links**: `number`

number of external links found on the referring page

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[page_from_external_links](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_external_links)

#### Defined in

[main.ts:137698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137698)

___


### page\_from\_internal\_links

• `Optional` **page\_from\_internal\_links**: `number`

number of internal links found on the referring page

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[page_from_internal_links](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_internal_links)

#### Defined in

[main.ts:137700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137700)

___


### page\_from\_language

• `Optional` **page\_from\_language**: `string`

language of the referring page
in ISO 639-1 format
example:
en

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[page_from_language](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_language)

#### Defined in

[main.ts:137713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137713)

___


### page\_from\_rank

• `Optional` **page\_from\_rank**: `number`

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[page_from_rank](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_rank)

#### Defined in

[main.ts:137680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137680)

___


### page\_from\_size

• `Optional` **page\_from\_size**: `number`

size of the referring page, in bytes
example:
63357

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[page_from_size](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_size)

#### Defined in

[main.ts:137704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137704)

___


### page\_from\_status\_code

• `Optional` **page\_from\_status\_code**: `number`

HTTP status code returned by the referring page
example:
200

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[page_from_status_code](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_status_code)

#### Defined in

[main.ts:137719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137719)

___


### page\_from\_title

• `Optional` **page\_from\_title**: `string`

title of the referring page

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[page_from_title](../interfaces/IBacklinksPageIntersectionInfo.md#page_from_title)

#### Defined in

[main.ts:137715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137715)

___


### prev\_seen

• `Optional` **prev\_seen**: `string`

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[prev_seen](../interfaces/IBacklinksPageIntersectionInfo.md#prev_seen)

#### Defined in

[main.ts:137729](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137729)

___


### rank

• `Optional` **rank**: `number`

backlink rank
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[rank](../interfaces/IBacklinksPageIntersectionInfo.md#rank)

#### Defined in

[main.ts:137676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137676)

___


### semantic\_location

• `Optional` **semantic\_location**: `string`

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[semantic_location](../interfaces/IBacklinksPageIntersectionInfo.md#semantic_location)

#### Defined in

[main.ts:137761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137761)

___


### text\_post

• `Optional` **text\_post**: `string`

snippet after the anchor text

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[text_post](../interfaces/IBacklinksPageIntersectionInfo.md#text_post)

#### Defined in

[main.ts:137756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137756)

___


### text\_pre

• `Optional` **text\_pre**: `string`

text snippet before the anchor text

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[text_pre](../interfaces/IBacklinksPageIntersectionInfo.md#text_pre)

#### Defined in

[main.ts:137754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137754)

___


### tld\_from

• `Optional` **tld\_from**: `string`

top-level domain of the referring URL

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[tld_from](../interfaces/IBacklinksPageIntersectionInfo.md#tld_from)

#### Defined in

[main.ts:137663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137663)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[type](../interfaces/IBacklinksPageIntersectionInfo.md#type)

#### Defined in

[main.ts:137647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137647)

___


### url\_from

• `Optional` **url\_from**: `string`

URL of the page where the backlink is found

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[url_from](../interfaces/IBacklinksPageIntersectionInfo.md#url_from)

#### Defined in

[main.ts:137651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137651)

___


### url\_from\_https

• `Optional` **url\_from\_https**: `boolean`

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[url_from_https](../interfaces/IBacklinksPageIntersectionInfo.md#url_from_https)

#### Defined in

[main.ts:137654](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137654)

___


### url\_to

• `Optional` **url\_to**: `string`

URL the backlink is pointing to

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[url_to](../interfaces/IBacklinksPageIntersectionInfo.md#url_to)

#### Defined in

[main.ts:137658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137658)

___


### url\_to\_https

• `Optional` **url\_to\_https**: `boolean`

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[url_to_https](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_https)

#### Defined in

[main.ts:137661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137661)

___


### url\_to\_redirect\_target

• `Optional` **url\_to\_redirect\_target**: `string`

target url of the redirect
target page the redirect is pointing to

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[url_to_redirect_target](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_redirect_target)

#### Defined in

[main.ts:137781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137781)

___


### url\_to\_spam\_score

• `Optional` **url\_to\_spam\_score**: `number`

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
learn more about how the metric is calculated on this help center page

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[url_to_spam_score](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_spam_score)

#### Defined in

[main.ts:137778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137778)

___


### url\_to\_status\_code

• `Optional` **url\_to\_status\_code**: `number`

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Implementation of

[IBacklinksPageIntersectionInfo](../interfaces/IBacklinksPageIntersectionInfo.md).[url_to_status_code](../interfaces/IBacklinksPageIntersectionInfo.md#url_to_status_code)

#### Defined in

[main.ts:137774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137774)

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

[main.ts:137800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137800)

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

[main.ts:137873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137873)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md)

#### Defined in

[main.ts:137866](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137866)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")