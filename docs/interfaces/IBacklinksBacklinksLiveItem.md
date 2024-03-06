[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksBacklinksLiveItem

# Interface: IBacklinksBacklinksLiveItem

## Implemented by

- [`BacklinksBacklinksLiveItem`](../classes/BacklinksBacklinksLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [alt](IBacklinksBacklinksLiveItem.md#alt)
- [anchor](IBacklinksBacklinksLiveItem.md#anchor)
- [attributes](IBacklinksBacklinksLiveItem.md#attributes)
- [backlink\_spam\_score](IBacklinksBacklinksLiveItem.md#backlink_spam_score)
- [dofollow](IBacklinksBacklinksLiveItem.md#dofollow)
- [domain\_from](IBacklinksBacklinksLiveItem.md#domain_from)
- [domain\_from\_country](IBacklinksBacklinksLiveItem.md#domain_from_country)
- [domain\_from\_ip](IBacklinksBacklinksLiveItem.md#domain_from_ip)
- [domain\_from\_is\_ip](IBacklinksBacklinksLiveItem.md#domain_from_is_ip)
- [domain\_from\_platform\_type](IBacklinksBacklinksLiveItem.md#domain_from_platform_type)
- [domain\_from\_rank](IBacklinksBacklinksLiveItem.md#domain_from_rank)
- [domain\_to](IBacklinksBacklinksLiveItem.md#domain_to)
- [first\_seen](IBacklinksBacklinksLiveItem.md#first_seen)
- [group\_count](IBacklinksBacklinksLiveItem.md#group_count)
- [image\_url](IBacklinksBacklinksLiveItem.md#image_url)
- [indirect\_link\_path](IBacklinksBacklinksLiveItem.md#indirect_link_path)
- [is\_broken](IBacklinksBacklinksLiveItem.md#is_broken)
- [is\_indirect\_link](IBacklinksBacklinksLiveItem.md#is_indirect_link)
- [is\_lost](IBacklinksBacklinksLiveItem.md#is_lost)
- [is\_new](IBacklinksBacklinksLiveItem.md#is_new)
- [item\_type](IBacklinksBacklinksLiveItem.md#item_type)
- [last\_seen](IBacklinksBacklinksLiveItem.md#last_seen)
- [links\_count](IBacklinksBacklinksLiveItem.md#links_count)
- [original](IBacklinksBacklinksLiveItem.md#original)
- [page\_from\_encoding](IBacklinksBacklinksLiveItem.md#page_from_encoding)
- [page\_from\_external\_links](IBacklinksBacklinksLiveItem.md#page_from_external_links)
- [page\_from\_internal\_links](IBacklinksBacklinksLiveItem.md#page_from_internal_links)
- [page\_from\_language](IBacklinksBacklinksLiveItem.md#page_from_language)
- [page\_from\_rank](IBacklinksBacklinksLiveItem.md#page_from_rank)
- [page\_from\_size](IBacklinksBacklinksLiveItem.md#page_from_size)
- [page\_from\_status\_code](IBacklinksBacklinksLiveItem.md#page_from_status_code)
- [page\_from\_title](IBacklinksBacklinksLiveItem.md#page_from_title)
- [prev\_seen](IBacklinksBacklinksLiveItem.md#prev_seen)
- [rank](IBacklinksBacklinksLiveItem.md#rank)
- [ranked\_keywords\_info](IBacklinksBacklinksLiveItem.md#ranked_keywords_info)
- [semantic\_location](IBacklinksBacklinksLiveItem.md#semantic_location)
- [text\_post](IBacklinksBacklinksLiveItem.md#text_post)
- [text\_pre](IBacklinksBacklinksLiveItem.md#text_pre)
- [tld\_from](IBacklinksBacklinksLiveItem.md#tld_from)
- [type](IBacklinksBacklinksLiveItem.md#type)
- [url\_from](IBacklinksBacklinksLiveItem.md#url_from)
- [url\_from\_https](IBacklinksBacklinksLiveItem.md#url_from_https)
- [url\_to](IBacklinksBacklinksLiveItem.md#url_to)
- [url\_to\_https](IBacklinksBacklinksLiveItem.md#url_to_https)
- [url\_to\_redirect\_target](IBacklinksBacklinksLiveItem.md#url_to_redirect_target)
- [url\_to\_spam\_score](IBacklinksBacklinksLiveItem.md#url_to_spam_score)
- [url\_to\_status\_code](IBacklinksBacklinksLiveItem.md#url_to_status_code)

## Properties

### alt

• `Optional` **alt**: `string`

alternative text of the image
this field will be null if backlink type is not image

#### Defined in

[main.ts:131418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131418)

___


### anchor

• `Optional` **anchor**: `string`

anchor text of the backlink

#### Defined in

[main.ts:131423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131423)

___


### attributes

• `Optional` **attributes**: `string`[]

link attributes of the referring links
example:
nofollow

#### Defined in

[main.ts:131410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131410)

___


### backlink\_spam\_score

• `Optional` **backlink\_spam\_score**: `number`

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Defined in

[main.ts:131339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131339)

___


### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Defined in

[main.ts:131413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131413)

___


### domain\_from

• `Optional` **domain\_from**: `string`

domain referring to the target domain or webpage

#### Defined in

[main.ts:131316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131316)

___


### domain\_from\_country

• `Optional` **domain\_from\_country**: `string`

ISO country code of the referring domain

#### Defined in

[main.ts:131364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131364)

___


### domain\_from\_ip

• `Optional` **domain\_from\_ip**: `string`

IP address of the referring domain

#### Defined in

[main.ts:131362](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131362)

___


### domain\_from\_is\_ip

• `Optional` **domain\_from\_is\_ip**: `boolean`

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Defined in

[main.ts:131360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131360)

___


### domain\_from\_platform\_type

• `Optional` **domain\_from\_platform\_type**: `string`[]

platform types of the referring domain
example:
"cms",
"blogs"

#### Defined in

[main.ts:131357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131357)

___


### domain\_from\_rank

• `Optional` **domain\_from\_rank**: `number`

domain rank of the referring domain
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:131352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131352)

___


### domain\_to

• `Optional` **domain\_to**: `string`

domain the backlink is pointing to

#### Defined in

[main.ts:131323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131323)

___


### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:131392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131392)

___


### group\_count

• `Optional` **group\_count**: `number`

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Defined in

[main.ts:131437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131437)

___


### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

[main.ts:131421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131421)

___


### indirect\_link\_path

• `Optional` **indirect\_link\_path**: [`Redirect`](../classes/Redirect.md)[]

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Defined in

[main.ts:131460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131460)

___


### is\_broken

• `Optional` **is\_broken**: `boolean`

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Defined in

[main.ts:131440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131440)

___


### is\_indirect\_link

• `Optional` **is\_indirect\_link**: `boolean`

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Defined in

[main.ts:131457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131457)

___


### is\_lost

• `Optional` **is\_lost**: `boolean`

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Defined in

[main.ts:131336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131336)

___


### is\_new

• `Optional` **is\_new**: `boolean`

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Defined in

[main.ts:131333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131333)

___


### item\_type

• `Optional` **item\_type**: `string`

link type
possible values:
anchor, image, meta, canonical, alternate, redirect

#### Defined in

[main.ts:131406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131406)

___


### last\_seen

• `Optional` **last\_seen**: `string`

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:131402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131402)

___


### links\_count

• `Optional` **links\_count**: `number`

number of identical backlinks found on the referring page

#### Defined in

[main.ts:131434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131434)

___


### original

• `Optional` **original**: `boolean`

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Defined in

[main.ts:131415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131415)

___


### page\_from\_encoding

• `Optional` **page\_from\_encoding**: `string`

character encoding of the referring page
example:
utf-8

#### Defined in

[main.ts:131376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131376)

___


### page\_from\_external\_links

• `Optional` **page\_from\_external\_links**: `number`

number of external links found on the referring page

#### Defined in

[main.ts:131366](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131366)

___


### page\_from\_internal\_links

• `Optional` **page\_from\_internal\_links**: `number`

number of internal links found on the referring page

#### Defined in

[main.ts:131368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131368)

___


### page\_from\_language

• `Optional` **page\_from\_language**: `string`

language of the referring page
in ISO 639-1 format
example:
en

#### Defined in

[main.ts:131381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131381)

___


### page\_from\_rank

• `Optional` **page\_from\_rank**: `number`

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:131348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131348)

___


### page\_from\_size

• `Optional` **page\_from\_size**: `number`

size of the referring page, in bytes
example:
63357

#### Defined in

[main.ts:131372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131372)

___


### page\_from\_status\_code

• `Optional` **page\_from\_status\_code**: `number`

HTTP status code returned by the referring page
example:
200

#### Defined in

[main.ts:131387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131387)

___


### page\_from\_title

• `Optional` **page\_from\_title**: `string`

title of the referring page

#### Defined in

[main.ts:131383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131383)

___


### prev\_seen

• `Optional` **prev\_seen**: `string`

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:131397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131397)

___


### rank

• `Optional` **rank**: `number`

backlink rank
rank that the given backlink passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:131344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131344)

___


### ranked\_keywords\_info

• `Optional` **ranked\_keywords\_info**: [`RankedKeywordsInfo`](../classes/RankedKeywordsInfo.md)

number of keywords for which the page is ranked in top search results

#### Defined in

[main.ts:131454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131454)

___


### semantic\_location

• `Optional` **semantic\_location**: `string`

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Defined in

[main.ts:131432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131432)

___


### text\_post

• `Optional` **text\_post**: `string`

snippet after the anchor text

#### Defined in

[main.ts:131427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131427)

___


### text\_pre

• `Optional` **text\_pre**: `string`

snippet before the anchor text

#### Defined in

[main.ts:131425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131425)

___


### tld\_from

• `Optional` **tld\_from**: `string`

top-level domain of the referring URL

#### Defined in

[main.ts:131330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131330)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:131314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131314)

___


### url\_from

• `Optional` **url\_from**: `string`

URL of the page where the backlink is found

#### Defined in

[main.ts:131318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131318)

___


### url\_from\_https

• `Optional` **url\_from\_https**: `boolean`

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Defined in

[main.ts:131321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131321)

___


### url\_to

• `Optional` **url\_to**: `string`

URL the backlink is pointing to

#### Defined in

[main.ts:131325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131325)

___


### url\_to\_https

• `Optional` **url\_to\_https**: `boolean`

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Defined in

[main.ts:131328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131328)

___


### url\_to\_redirect\_target

• `Optional` **url\_to\_redirect\_target**: `string`

target url of the redirect
target page the redirect is pointing to

#### Defined in

[main.ts:131452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131452)

___


### url\_to\_spam\_score

• `Optional` **url\_to\_spam\_score**: `number`

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to;
learn more about how the metric is calculated on this help center page

#### Defined in

[main.ts:131449](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131449)

___


### url\_to\_status\_code

• `Optional` **url\_to\_status\_code**: `number`

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Defined in

[main.ts:131445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131445)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")