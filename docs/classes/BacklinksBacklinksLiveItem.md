[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBacklinksLiveItem

# Class: BacklinksBacklinksLiveItem

## Implements

- [`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBacklinksLiveItem.md#constructor)

### Properties

- [alt](BacklinksBacklinksLiveItem.md#alt)
- [anchor](BacklinksBacklinksLiveItem.md#anchor)
- [attributes](BacklinksBacklinksLiveItem.md#attributes)
- [backlink\_spam\_score](BacklinksBacklinksLiveItem.md#backlink_spam_score)
- [dofollow](BacklinksBacklinksLiveItem.md#dofollow)
- [domain\_from](BacklinksBacklinksLiveItem.md#domain_from)
- [domain\_from\_country](BacklinksBacklinksLiveItem.md#domain_from_country)
- [domain\_from\_ip](BacklinksBacklinksLiveItem.md#domain_from_ip)
- [domain\_from\_is\_ip](BacklinksBacklinksLiveItem.md#domain_from_is_ip)
- [domain\_from\_platform\_type](BacklinksBacklinksLiveItem.md#domain_from_platform_type)
- [domain\_from\_rank](BacklinksBacklinksLiveItem.md#domain_from_rank)
- [domain\_to](BacklinksBacklinksLiveItem.md#domain_to)
- [first\_seen](BacklinksBacklinksLiveItem.md#first_seen)
- [group\_count](BacklinksBacklinksLiveItem.md#group_count)
- [image\_url](BacklinksBacklinksLiveItem.md#image_url)
- [indirect\_link\_path](BacklinksBacklinksLiveItem.md#indirect_link_path)
- [is\_broken](BacklinksBacklinksLiveItem.md#is_broken)
- [is\_indirect\_link](BacklinksBacklinksLiveItem.md#is_indirect_link)
- [is\_lost](BacklinksBacklinksLiveItem.md#is_lost)
- [is\_new](BacklinksBacklinksLiveItem.md#is_new)
- [item\_type](BacklinksBacklinksLiveItem.md#item_type)
- [last\_seen](BacklinksBacklinksLiveItem.md#last_seen)
- [links\_count](BacklinksBacklinksLiveItem.md#links_count)
- [original](BacklinksBacklinksLiveItem.md#original)
- [page\_from\_encoding](BacklinksBacklinksLiveItem.md#page_from_encoding)
- [page\_from\_external\_links](BacklinksBacklinksLiveItem.md#page_from_external_links)
- [page\_from\_internal\_links](BacklinksBacklinksLiveItem.md#page_from_internal_links)
- [page\_from\_language](BacklinksBacklinksLiveItem.md#page_from_language)
- [page\_from\_rank](BacklinksBacklinksLiveItem.md#page_from_rank)
- [page\_from\_size](BacklinksBacklinksLiveItem.md#page_from_size)
- [page\_from\_status\_code](BacklinksBacklinksLiveItem.md#page_from_status_code)
- [page\_from\_title](BacklinksBacklinksLiveItem.md#page_from_title)
- [prev\_seen](BacklinksBacklinksLiveItem.md#prev_seen)
- [rank](BacklinksBacklinksLiveItem.md#rank)
- [ranked\_keywords\_info](BacklinksBacklinksLiveItem.md#ranked_keywords_info)
- [semantic\_location](BacklinksBacklinksLiveItem.md#semantic_location)
- [text\_post](BacklinksBacklinksLiveItem.md#text_post)
- [text\_pre](BacklinksBacklinksLiveItem.md#text_pre)
- [tld\_from](BacklinksBacklinksLiveItem.md#tld_from)
- [type](BacklinksBacklinksLiveItem.md#type)
- [url\_from](BacklinksBacklinksLiveItem.md#url_from)
- [url\_from\_https](BacklinksBacklinksLiveItem.md#url_from_https)
- [url\_to](BacklinksBacklinksLiveItem.md#url_to)
- [url\_to\_https](BacklinksBacklinksLiveItem.md#url_to_https)
- [url\_to\_redirect\_target](BacklinksBacklinksLiveItem.md#url_to_redirect_target)
- [url\_to\_spam\_score](BacklinksBacklinksLiveItem.md#url_to_spam_score)
- [url\_to\_status\_code](BacklinksBacklinksLiveItem.md#url_to_status_code)

### Methods

- [init](BacklinksBacklinksLiveItem.md#init)
- [toJSON](BacklinksBacklinksLiveItem.md#tojson)
- [fromJS](BacklinksBacklinksLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksBacklinksLiveItem**(`data?`): [`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md) |

#### Returns

[`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

#### Defined in

main.ts:136544

## Properties

### alt

• `Optional` **alt**: `string`

alternative text of the image
this field will be null if backlink type is not image

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[alt](../interfaces/IBacklinksBacklinksLiveItem.md#alt)

#### Defined in

main.ts:136498

___

### anchor

• `Optional` **anchor**: `string`

anchor text of the backlink

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[anchor](../interfaces/IBacklinksBacklinksLiveItem.md#anchor)

#### Defined in

main.ts:136503

___

### attributes

• `Optional` **attributes**: `string`[]

link attributes of the referring links
example:
nofollow

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[attributes](../interfaces/IBacklinksBacklinksLiveItem.md#attributes)

#### Defined in

main.ts:136490

___

### backlink\_spam\_score

• `Optional` **backlink\_spam\_score**: `number`

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[backlink_spam_score](../interfaces/IBacklinksBacklinksLiveItem.md#backlink_spam_score)

#### Defined in

main.ts:136419

___

### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[dofollow](../interfaces/IBacklinksBacklinksLiveItem.md#dofollow)

#### Defined in

main.ts:136493

___

### domain\_from

• `Optional` **domain\_from**: `string`

domain referring to the target domain or webpage

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[domain_from](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from)

#### Defined in

main.ts:136396

___

### domain\_from\_country

• `Optional` **domain\_from\_country**: `string`

ISO country code of the referring domain

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[domain_from_country](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_country)

#### Defined in

main.ts:136444

___

### domain\_from\_ip

• `Optional` **domain\_from\_ip**: `string`

IP address of the referring domain

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[domain_from_ip](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_ip)

#### Defined in

main.ts:136442

___

### domain\_from\_is\_ip

• `Optional` **domain\_from\_is\_ip**: `boolean`

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[domain_from_is_ip](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_is_ip)

#### Defined in

main.ts:136440

___

### domain\_from\_platform\_type

• `Optional` **domain\_from\_platform\_type**: `string`[]

platform types of the referring domain
example:
"cms",
"blogs"

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[domain_from_platform_type](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_platform_type)

#### Defined in

main.ts:136437

___

### domain\_from\_rank

• `Optional` **domain\_from\_rank**: `number`

domain rank of the referring domain
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[domain_from_rank](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_rank)

#### Defined in

main.ts:136432

___

### domain\_to

• `Optional` **domain\_to**: `string`

domain the backlink is pointing to

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[domain_to](../interfaces/IBacklinksBacklinksLiveItem.md#domain_to)

#### Defined in

main.ts:136403

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[first_seen](../interfaces/IBacklinksBacklinksLiveItem.md#first_seen)

#### Defined in

main.ts:136472

___

### group\_count

• `Optional` **group\_count**: `number`

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[group_count](../interfaces/IBacklinksBacklinksLiveItem.md#group_count)

#### Defined in

main.ts:136517

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[image_url](../interfaces/IBacklinksBacklinksLiveItem.md#image_url)

#### Defined in

main.ts:136501

___

### indirect\_link\_path

• `Optional` **indirect\_link\_path**: [`Redirect`](Redirect.md)[]

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[indirect_link_path](../interfaces/IBacklinksBacklinksLiveItem.md#indirect_link_path)

#### Defined in

main.ts:136540

___

### is\_broken

• `Optional` **is\_broken**: `boolean`

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[is_broken](../interfaces/IBacklinksBacklinksLiveItem.md#is_broken)

#### Defined in

main.ts:136520

___

### is\_indirect\_link

• `Optional` **is\_indirect\_link**: `boolean`

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[is_indirect_link](../interfaces/IBacklinksBacklinksLiveItem.md#is_indirect_link)

#### Defined in

main.ts:136537

___

### is\_lost

• `Optional` **is\_lost**: `boolean`

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[is_lost](../interfaces/IBacklinksBacklinksLiveItem.md#is_lost)

#### Defined in

main.ts:136416

___

### is\_new

• `Optional` **is\_new**: `boolean`

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[is_new](../interfaces/IBacklinksBacklinksLiveItem.md#is_new)

#### Defined in

main.ts:136413

___

### item\_type

• `Optional` **item\_type**: `string`

link type
possible values:
anchor, image, meta, canonical, alternate, redirect

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[item_type](../interfaces/IBacklinksBacklinksLiveItem.md#item_type)

#### Defined in

main.ts:136486

___

### last\_seen

• `Optional` **last\_seen**: `string`

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[last_seen](../interfaces/IBacklinksBacklinksLiveItem.md#last_seen)

#### Defined in

main.ts:136482

___

### links\_count

• `Optional` **links\_count**: `number`

number of identical backlinks found on the referring page

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[links_count](../interfaces/IBacklinksBacklinksLiveItem.md#links_count)

#### Defined in

main.ts:136514

___

### original

• `Optional` **original**: `boolean`

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[original](../interfaces/IBacklinksBacklinksLiveItem.md#original)

#### Defined in

main.ts:136495

___

### page\_from\_encoding

• `Optional` **page\_from\_encoding**: `string`

character encoding of the referring page
example:
utf-8

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[page_from_encoding](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_encoding)

#### Defined in

main.ts:136456

___

### page\_from\_external\_links

• `Optional` **page\_from\_external\_links**: `number`

number of external links found on the referring page

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[page_from_external_links](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_external_links)

#### Defined in

main.ts:136446

___

### page\_from\_internal\_links

• `Optional` **page\_from\_internal\_links**: `number`

number of internal links found on the referring page

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[page_from_internal_links](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_internal_links)

#### Defined in

main.ts:136448

___

### page\_from\_language

• `Optional` **page\_from\_language**: `string`

language of the referring page
in ISO 639-1 format
example:
en

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[page_from_language](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_language)

#### Defined in

main.ts:136461

___

### page\_from\_rank

• `Optional` **page\_from\_rank**: `number`

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[page_from_rank](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_rank)

#### Defined in

main.ts:136428

___

### page\_from\_size

• `Optional` **page\_from\_size**: `number`

size of the referring page, in bytes
example:
63357

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[page_from_size](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_size)

#### Defined in

main.ts:136452

___

### page\_from\_status\_code

• `Optional` **page\_from\_status\_code**: `number`

HTTP status code returned by the referring page
example:
200

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[page_from_status_code](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_status_code)

#### Defined in

main.ts:136467

___

### page\_from\_title

• `Optional` **page\_from\_title**: `string`

title of the referring page

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[page_from_title](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_title)

#### Defined in

main.ts:136463

___

### prev\_seen

• `Optional` **prev\_seen**: `string`

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[prev_seen](../interfaces/IBacklinksBacklinksLiveItem.md#prev_seen)

#### Defined in

main.ts:136477

___

### rank

• `Optional` **rank**: `number`

backlink rank
rank that the given backlink passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[rank](../interfaces/IBacklinksBacklinksLiveItem.md#rank)

#### Defined in

main.ts:136424

___

### ranked\_keywords\_info

• `Optional` **ranked\_keywords\_info**: [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

number of keywords for which the page is ranked in top search results

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[ranked_keywords_info](../interfaces/IBacklinksBacklinksLiveItem.md#ranked_keywords_info)

#### Defined in

main.ts:136534

___

### semantic\_location

• `Optional` **semantic\_location**: `string`

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[semantic_location](../interfaces/IBacklinksBacklinksLiveItem.md#semantic_location)

#### Defined in

main.ts:136512

___

### text\_post

• `Optional` **text\_post**: `string`

snippet after the anchor text

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[text_post](../interfaces/IBacklinksBacklinksLiveItem.md#text_post)

#### Defined in

main.ts:136507

___

### text\_pre

• `Optional` **text\_pre**: `string`

snippet before the anchor text

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[text_pre](../interfaces/IBacklinksBacklinksLiveItem.md#text_pre)

#### Defined in

main.ts:136505

___

### tld\_from

• `Optional` **tld\_from**: `string`

top-level domain of the referring URL

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[tld_from](../interfaces/IBacklinksBacklinksLiveItem.md#tld_from)

#### Defined in

main.ts:136410

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[type](../interfaces/IBacklinksBacklinksLiveItem.md#type)

#### Defined in

main.ts:136394

___

### url\_from

• `Optional` **url\_from**: `string`

URL of the page where the backlink is found

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[url_from](../interfaces/IBacklinksBacklinksLiveItem.md#url_from)

#### Defined in

main.ts:136398

___

### url\_from\_https

• `Optional` **url\_from\_https**: `boolean`

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[url_from_https](../interfaces/IBacklinksBacklinksLiveItem.md#url_from_https)

#### Defined in

main.ts:136401

___

### url\_to

• `Optional` **url\_to**: `string`

URL the backlink is pointing to

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[url_to](../interfaces/IBacklinksBacklinksLiveItem.md#url_to)

#### Defined in

main.ts:136405

___

### url\_to\_https

• `Optional` **url\_to\_https**: `boolean`

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[url_to_https](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_https)

#### Defined in

main.ts:136408

___

### url\_to\_redirect\_target

• `Optional` **url\_to\_redirect\_target**: `string`

target url of the redirect
target page the redirect is pointing to

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[url_to_redirect_target](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_redirect_target)

#### Defined in

main.ts:136532

___

### url\_to\_spam\_score

• `Optional` **url\_to\_spam\_score**: `number`

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to;
learn more about how the metric is calculated on this help center page

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[url_to_spam_score](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_spam_score)

#### Defined in

main.ts:136529

___

### url\_to\_status\_code

• `Optional` **url\_to\_status\_code**: `number`

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Implementation of

[IBacklinksBacklinksLiveItem](../interfaces/IBacklinksBacklinksLiveItem.md).[url_to_status_code](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_status_code)

#### Defined in

main.ts:136525

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

main.ts:136553

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

main.ts:136628

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

#### Defined in

main.ts:136621
