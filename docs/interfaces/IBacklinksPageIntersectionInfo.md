[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksPageIntersectionInfo

# Interface: IBacklinksPageIntersectionInfo

## Implemented by

- [`BacklinksPageIntersectionInfo`](../classes/BacklinksPageIntersectionInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [alt](IBacklinksPageIntersectionInfo.md#alt)
- [anchor](IBacklinksPageIntersectionInfo.md#anchor)
- [attributes](IBacklinksPageIntersectionInfo.md#attributes)
- [backlink\_spam\_score](IBacklinksPageIntersectionInfo.md#backlink_spam_score)
- [dofollow](IBacklinksPageIntersectionInfo.md#dofollow)
- [domain\_from](IBacklinksPageIntersectionInfo.md#domain_from)
- [domain\_from\_country](IBacklinksPageIntersectionInfo.md#domain_from_country)
- [domain\_from\_ip](IBacklinksPageIntersectionInfo.md#domain_from_ip)
- [domain\_from\_is\_ip](IBacklinksPageIntersectionInfo.md#domain_from_is_ip)
- [domain\_from\_platform\_type](IBacklinksPageIntersectionInfo.md#domain_from_platform_type)
- [domain\_from\_rank](IBacklinksPageIntersectionInfo.md#domain_from_rank)
- [domain\_to](IBacklinksPageIntersectionInfo.md#domain_to)
- [first\_seen](IBacklinksPageIntersectionInfo.md#first_seen)
- [group\_count](IBacklinksPageIntersectionInfo.md#group_count)
- [indirect\_link\_path](IBacklinksPageIntersectionInfo.md#indirect_link_path)
- [is\_broken](IBacklinksPageIntersectionInfo.md#is_broken)
- [is\_indirect\_link](IBacklinksPageIntersectionInfo.md#is_indirect_link)
- [is\_lost](IBacklinksPageIntersectionInfo.md#is_lost)
- [is\_new](IBacklinksPageIntersectionInfo.md#is_new)
- [item\_type](IBacklinksPageIntersectionInfo.md#item_type)
- [last\_seen](IBacklinksPageIntersectionInfo.md#last_seen)
- [links\_count](IBacklinksPageIntersectionInfo.md#links_count)
- [original](IBacklinksPageIntersectionInfo.md#original)
- [page\_from\_encoding](IBacklinksPageIntersectionInfo.md#page_from_encoding)
- [page\_from\_external\_links](IBacklinksPageIntersectionInfo.md#page_from_external_links)
- [page\_from\_internal\_links](IBacklinksPageIntersectionInfo.md#page_from_internal_links)
- [page\_from\_language](IBacklinksPageIntersectionInfo.md#page_from_language)
- [page\_from\_rank](IBacklinksPageIntersectionInfo.md#page_from_rank)
- [page\_from\_size](IBacklinksPageIntersectionInfo.md#page_from_size)
- [page\_from\_status\_code](IBacklinksPageIntersectionInfo.md#page_from_status_code)
- [page\_from\_title](IBacklinksPageIntersectionInfo.md#page_from_title)
- [prev\_seen](IBacklinksPageIntersectionInfo.md#prev_seen)
- [rank](IBacklinksPageIntersectionInfo.md#rank)
- [semantic\_location](IBacklinksPageIntersectionInfo.md#semantic_location)
- [text\_post](IBacklinksPageIntersectionInfo.md#text_post)
- [text\_pre](IBacklinksPageIntersectionInfo.md#text_pre)
- [tld\_from](IBacklinksPageIntersectionInfo.md#tld_from)
- [type](IBacklinksPageIntersectionInfo.md#type)
- [url\_from](IBacklinksPageIntersectionInfo.md#url_from)
- [url\_from\_https](IBacklinksPageIntersectionInfo.md#url_from_https)
- [url\_to](IBacklinksPageIntersectionInfo.md#url_to)
- [url\_to\_https](IBacklinksPageIntersectionInfo.md#url_to_https)
- [url\_to\_redirect\_target](IBacklinksPageIntersectionInfo.md#url_to_redirect_target)
- [url\_to\_spam\_score](IBacklinksPageIntersectionInfo.md#url_to_spam_score)
- [url\_to\_status\_code](IBacklinksPageIntersectionInfo.md#url_to_status_code)

## Properties

### alt

• `Optional` **alt**: `string`

alternative text of the image
this field will be null if backlink type is not image

#### Defined in

[main.ts:138045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138045)

___

### anchor

• `Optional` **anchor**: `string`

anchor text of the backlink

#### Defined in

[main.ts:138047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138047)

___

### attributes

• `Optional` **attributes**: `string`[]

link attributes of the referring links
example:
nofollow

#### Defined in

[main.ts:138037](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138037)

___

### backlink\_spam\_score

• `Optional` **backlink\_spam\_score**: `number`

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Defined in

[main.ts:137967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137967)

___

### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Defined in

[main.ts:138040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138040)

___

### domain\_from

• `Optional` **domain\_from**: `string`

domain referring to the target domain or webpage

#### Defined in

[main.ts:137944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137944)

___

### domain\_from\_country

• `Optional` **domain\_from\_country**: `string`

ISO country code of the referring domain

#### Defined in

[main.ts:137991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137991)

___

### domain\_from\_ip

• `Optional` **domain\_from\_ip**: `string`

IP address of the referring domain

#### Defined in

[main.ts:137989](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137989)

___

### domain\_from\_is\_ip

• `Optional` **domain\_from\_is\_ip**: `boolean`

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Defined in

[main.ts:137987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137987)

___

### domain\_from\_platform\_type

• `Optional` **domain\_from\_platform\_type**: `string`[]

platform types of the referring domain
example:
"cms",
"blogs"

#### Defined in

[main.ts:137984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137984)

___

### domain\_from\_rank

• `Optional` **domain\_from\_rank**: `number`

domain rank of the referring domain
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:137979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137979)

___

### domain\_to

• `Optional` **domain\_to**: `string`

domain the backlink is pointing to

#### Defined in

[main.ts:137951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137951)

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:138019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138019)

___

### group\_count

• `Optional` **group\_count**: `number`

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Defined in

[main.ts:138061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138061)

___

### indirect\_link\_path

• `Optional` **indirect\_link\_path**: [`Redirect`](../classes/Redirect.md)[]

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Defined in

[main.ts:138082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138082)

___

### is\_broken

• `Optional` **is\_broken**: `boolean`

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Defined in

[main.ts:138064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138064)

___

### is\_indirect\_link

• `Optional` **is\_indirect\_link**: `boolean`

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Defined in

[main.ts:138079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138079)

___

### is\_lost

• `Optional` **is\_lost**: `boolean`

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Defined in

[main.ts:137964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137964)

___

### is\_new

• `Optional` **is\_new**: `boolean`

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Defined in

[main.ts:137961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137961)

___

### item\_type

• `Optional` **item\_type**: `string`

link type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Defined in

[main.ts:138033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138033)

___

### last\_seen

• `Optional` **last\_seen**: `string`

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:138029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138029)

___

### links\_count

• `Optional` **links\_count**: `number`

number of identical backlinks found on the referring page

#### Defined in

[main.ts:138058](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138058)

___

### original

• `Optional` **original**: `boolean`

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Defined in

[main.ts:138042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138042)

___

### page\_from\_encoding

• `Optional` **page\_from\_encoding**: `string`

character encoding of the referring page
example:
utf-8

#### Defined in

[main.ts:138003](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138003)

___

### page\_from\_external\_links

• `Optional` **page\_from\_external\_links**: `number`

number of external links found on the referring page

#### Defined in

[main.ts:137993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137993)

___

### page\_from\_internal\_links

• `Optional` **page\_from\_internal\_links**: `number`

number of internal links found on the referring page

#### Defined in

[main.ts:137995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137995)

___

### page\_from\_language

• `Optional` **page\_from\_language**: `string`

language of the referring page
in ISO 639-1 format
example:
en

#### Defined in

[main.ts:138008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138008)

___

### page\_from\_rank

• `Optional` **page\_from\_rank**: `number`

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:137975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137975)

___

### page\_from\_size

• `Optional` **page\_from\_size**: `number`

size of the referring page, in bytes
example:
63357

#### Defined in

[main.ts:137999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137999)

___

### page\_from\_status\_code

• `Optional` **page\_from\_status\_code**: `number`

HTTP status code returned by the referring page
example:
200

#### Defined in

[main.ts:138014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138014)

___

### page\_from\_title

• `Optional` **page\_from\_title**: `string`

title of the referring page

#### Defined in

[main.ts:138010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138010)

___

### prev\_seen

• `Optional` **prev\_seen**: `string`

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:138024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138024)

___

### rank

• `Optional` **rank**: `number`

backlink rank
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:137971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137971)

___

### semantic\_location

• `Optional` **semantic\_location**: `string`

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Defined in

[main.ts:138056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138056)

___

### text\_post

• `Optional` **text\_post**: `string`

snippet after the anchor text

#### Defined in

[main.ts:138051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138051)

___

### text\_pre

• `Optional` **text\_pre**: `string`

text snippet before the anchor text

#### Defined in

[main.ts:138049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138049)

___

### tld\_from

• `Optional` **tld\_from**: `string`

top-level domain of the referring URL

#### Defined in

[main.ts:137958](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137958)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:137942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137942)

___

### url\_from

• `Optional` **url\_from**: `string`

URL of the page where the backlink is found

#### Defined in

[main.ts:137946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137946)

___

### url\_from\_https

• `Optional` **url\_from\_https**: `boolean`

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Defined in

[main.ts:137949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137949)

___

### url\_to

• `Optional` **url\_to**: `string`

URL the backlink is pointing to

#### Defined in

[main.ts:137953](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137953)

___

### url\_to\_https

• `Optional` **url\_to\_https**: `boolean`

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Defined in

[main.ts:137956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137956)

___

### url\_to\_redirect\_target

• `Optional` **url\_to\_redirect\_target**: `string`

target url of the redirect
target page the redirect is pointing to

#### Defined in

[main.ts:138076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138076)

___

### url\_to\_spam\_score

• `Optional` **url\_to\_spam\_score**: `number`

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
learn more about how the metric is calculated on this help center page

#### Defined in

[main.ts:138073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138073)

___

### url\_to\_status\_code

• `Optional` **url\_to\_status\_code**: `number`

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Defined in

[main.ts:138069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138069)
