[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksBacklinksLiveItem

# Interface: IBacklinksBacklinksLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### alt?

> `optional` **alt**: `string`

alternative text of the image
this field will be null if backlink type is not image

#### Defined in

main.ts:144103

***

### anchor?

> `optional` **anchor**: `string`

anchor text of the backlink

#### Defined in

main.ts:144108

***

### attributes?

> `optional` **attributes**: `string`[]

link attributes of the referring links
example:
nofollow

#### Defined in

main.ts:144095

***

### backlink\_spam\_score?

> `optional` **backlink\_spam\_score**: `number`

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Defined in

main.ts:144024

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Defined in

main.ts:144098

***

### domain\_from?

> `optional` **domain\_from**: `string`

domain referring to the target domain or webpage

#### Defined in

main.ts:144001

***

### domain\_from\_country?

> `optional` **domain\_from\_country**: `string`

ISO country code of the referring domain

#### Defined in

main.ts:144049

***

### domain\_from\_ip?

> `optional` **domain\_from\_ip**: `string`

IP address of the referring domain

#### Defined in

main.ts:144047

***

### domain\_from\_is\_ip?

> `optional` **domain\_from\_is\_ip**: `boolean`

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Defined in

main.ts:144045

***

### domain\_from\_platform\_type?

> `optional` **domain\_from\_platform\_type**: `string`[]

platform types of the referring domain
example:
"cms",
"blogs"

#### Defined in

main.ts:144042

***

### domain\_from\_rank?

> `optional` **domain\_from\_rank**: `number`

domain rank of the referring domain
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:144037

***

### domain\_to?

> `optional` **domain\_to**: `string`

domain the backlink is pointing to

#### Defined in

main.ts:144008

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:144077

***

### group\_count?

> `optional` **group\_count**: `number`

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Defined in

main.ts:144122

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

main.ts:144106

***

### indirect\_link\_path?

> `optional` **indirect\_link\_path**: [`Redirect`](../classes/Redirect.md)[]

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Defined in

main.ts:144145

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Defined in

main.ts:144125

***

### is\_indirect\_link?

> `optional` **is\_indirect\_link**: `boolean`

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Defined in

main.ts:144142

***

### is\_lost?

> `optional` **is\_lost**: `boolean`

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Defined in

main.ts:144021

***

### is\_new?

> `optional` **is\_new**: `boolean`

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Defined in

main.ts:144018

***

### item\_type?

> `optional` **item\_type**: `string`

link type
possible values:
anchor, image, meta, canonical, alternate, redirect

#### Defined in

main.ts:144091

***

### last\_seen?

> `optional` **last\_seen**: `string`

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:144087

***

### links\_count?

> `optional` **links\_count**: `number`

number of identical backlinks found on the referring page

#### Defined in

main.ts:144119

***

### original?

> `optional` **original**: `boolean`

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Defined in

main.ts:144100

***

### page\_from\_encoding?

> `optional` **page\_from\_encoding**: `string`

character encoding of the referring page
example:
utf-8

#### Defined in

main.ts:144061

***

### page\_from\_external\_links?

> `optional` **page\_from\_external\_links**: `number`

number of external links found on the referring page

#### Defined in

main.ts:144051

***

### page\_from\_internal\_links?

> `optional` **page\_from\_internal\_links**: `number`

number of internal links found on the referring page

#### Defined in

main.ts:144053

***

### page\_from\_language?

> `optional` **page\_from\_language**: `string`

language of the referring page
in ISO 639-1 format
example:
en

#### Defined in

main.ts:144066

***

### page\_from\_rank?

> `optional` **page\_from\_rank**: `number`

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:144033

***

### page\_from\_size?

> `optional` **page\_from\_size**: `number`

size of the referring page, in bytes
example:
63357

#### Defined in

main.ts:144057

***

### page\_from\_status\_code?

> `optional` **page\_from\_status\_code**: `number`

HTTP status code returned by the referring page
example:
200

#### Defined in

main.ts:144072

***

### page\_from\_title?

> `optional` **page\_from\_title**: `string`

title of the referring page

#### Defined in

main.ts:144068

***

### prev\_seen?

> `optional` **prev\_seen**: `string`

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:144082

***

### rank?

> `optional` **rank**: `number`

backlink rank
rank that the given backlink passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:144029

***

### ranked\_keywords\_info?

> `optional` **ranked\_keywords\_info**: [`RankedKeywordsInfo`](../classes/RankedKeywordsInfo.md)

number of keywords for which the page is ranked in top search results

#### Defined in

main.ts:144139

***

### semantic\_location?

> `optional` **semantic\_location**: `string`

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Defined in

main.ts:144117

***

### text\_post?

> `optional` **text\_post**: `string`

snippet after the anchor text

#### Defined in

main.ts:144112

***

### text\_pre?

> `optional` **text\_pre**: `string`

snippet before the anchor text

#### Defined in

main.ts:144110

***

### tld\_from?

> `optional` **tld\_from**: `string`

top-level domain of the referring URL

#### Defined in

main.ts:144015

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:143999

***

### url\_from?

> `optional` **url\_from**: `string`

URL of the page where the backlink is found

#### Defined in

main.ts:144003

***

### url\_from\_https?

> `optional` **url\_from\_https**: `boolean`

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Defined in

main.ts:144006

***

### url\_to?

> `optional` **url\_to**: `string`

URL the backlink is pointing to

#### Defined in

main.ts:144010

***

### url\_to\_https?

> `optional` **url\_to\_https**: `boolean`

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Defined in

main.ts:144013

***

### url\_to\_redirect\_target?

> `optional` **url\_to\_redirect\_target**: `string`

target url of the redirect
target page the redirect is pointing to

#### Defined in

main.ts:144137

***

### url\_to\_spam\_score?

> `optional` **url\_to\_spam\_score**: `number`

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to;
learn more about how the metric is calculated on this help center page

#### Defined in

main.ts:144134

***

### url\_to\_status\_code?

> `optional` **url\_to\_status\_code**: `number`

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Defined in

main.ts:144130
