[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksBacklinksLiveItem

# Interface: IBacklinksBacklinksLiveItem

Defined in: main.ts:152333

## Indexable

\[`key`: `string`\]: `any`

## Properties

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:152439

alternative text of the image
this field will be null if backlink type is not image

***

### anchor?

> `optional` **anchor**: `string`

Defined in: main.ts:152444

anchor text of the backlink

***

### attributes?

> `optional` **attributes**: `string`[]

Defined in: main.ts:152431

link attributes of the referring links
example:
nofollow

***

### backlink\_spam\_score?

> `optional` **backlink\_spam\_score**: `number`

Defined in: main.ts:152360

spam score of the backlink
learn more about how the metric is calculated on this help center page

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:152434

indicates whether the backlink is dofollow
if false, the backlink is nofollow

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:152337

domain referring to the target domain or webpage

***

### domain\_from\_country?

> `optional` **domain\_from\_country**: `string`

Defined in: main.ts:152385

ISO country code of the referring domain

***

### domain\_from\_ip?

> `optional` **domain\_from\_ip**: `string`

Defined in: main.ts:152383

IP address of the referring domain

***

### domain\_from\_is\_ip?

> `optional` **domain\_from\_is\_ip**: `boolean`

Defined in: main.ts:152381

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

***

### domain\_from\_platform\_type?

> `optional` **domain\_from\_platform\_type**: `string`[]

Defined in: main.ts:152378

platform types of the referring domain
example:
"cms",
"blogs"

***

### domain\_from\_rank?

> `optional` **domain\_from\_rank**: `number`

Defined in: main.ts:152373

domain rank of the referring domain
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:152344

domain the backlink is pointing to

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:152413

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### group\_count?

> `optional` **group\_count**: `number`

Defined in: main.ts:152458

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:152442

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

***

### indirect\_link\_path?

> `optional` **indirect\_link\_path**: [`Redirect`](../classes/Redirect.md)[]

Defined in: main.ts:152481

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:152461

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

***

### is\_indirect\_link?

> `optional` **is\_indirect\_link**: `boolean`

Defined in: main.ts:152478

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

***

### is\_lost?

> `optional` **is\_lost**: `boolean`

Defined in: main.ts:152357

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

***

### is\_new?

> `optional` **is\_new**: `boolean`

Defined in: main.ts:152354

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

***

### item\_type?

> `optional` **item\_type**: `string`

Defined in: main.ts:152427

link type
possible values:
anchor, image, meta, canonical, alternate, redirect

***

### last\_seen?

> `optional` **last\_seen**: `string`

Defined in: main.ts:152423

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### links\_count?

> `optional` **links\_count**: `number`

Defined in: main.ts:152455

number of identical backlinks found on the referring page

***

### original?

> `optional` **original**: `boolean`

Defined in: main.ts:152436

indicates whether the backlink was present on the referring page when our crawler first visited it

***

### page\_from\_encoding?

> `optional` **page\_from\_encoding**: `string`

Defined in: main.ts:152397

character encoding of the referring page
example:
utf-8

***

### page\_from\_external\_links?

> `optional` **page\_from\_external\_links**: `number`

Defined in: main.ts:152387

number of external links found on the referring page

***

### page\_from\_internal\_links?

> `optional` **page\_from\_internal\_links**: `number`

Defined in: main.ts:152389

number of internal links found on the referring page

***

### page\_from\_language?

> `optional` **page\_from\_language**: `string`

Defined in: main.ts:152402

language of the referring page
in ISO 639-1 format
example:
en

***

### page\_from\_rank?

> `optional` **page\_from\_rank**: `number`

Defined in: main.ts:152369

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

***

### page\_from\_size?

> `optional` **page\_from\_size**: `number`

Defined in: main.ts:152393

size of the referring page, in bytes
example:
63357

***

### page\_from\_status\_code?

> `optional` **page\_from\_status\_code**: `number`

Defined in: main.ts:152408

HTTP status code returned by the referring page
example:
200

***

### page\_from\_title?

> `optional` **page\_from\_title**: `string`

Defined in: main.ts:152404

title of the referring page

***

### prev\_seen?

> `optional` **prev\_seen**: `string`

Defined in: main.ts:152418

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:152365

backlink rank
rank that the given backlink passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

***

### ranked\_keywords\_info?

> `optional` **ranked\_keywords\_info**: [`RankedKeywordsInfo`](../classes/RankedKeywordsInfo.md)

Defined in: main.ts:152475

number of keywords for which the page is ranked in top search results

***

### semantic\_location?

> `optional` **semantic\_location**: `string`

Defined in: main.ts:152453

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

***

### text\_post?

> `optional` **text\_post**: `string`

Defined in: main.ts:152448

snippet after the anchor text

***

### text\_pre?

> `optional` **text\_pre**: `string`

Defined in: main.ts:152446

snippet before the anchor text

***

### tld\_from?

> `optional` **tld\_from**: `string`

Defined in: main.ts:152351

top-level domain of the referring URL

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:152335

type of element

***

### url\_from?

> `optional` **url\_from**: `string`

Defined in: main.ts:152339

URL of the page where the backlink is found

***

### url\_from\_https?

> `optional` **url\_from\_https**: `boolean`

Defined in: main.ts:152342

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

***

### url\_to?

> `optional` **url\_to**: `string`

Defined in: main.ts:152346

URL the backlink is pointing to

***

### url\_to\_https?

> `optional` **url\_to\_https**: `boolean`

Defined in: main.ts:152349

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

***

### url\_to\_redirect\_target?

> `optional` **url\_to\_redirect\_target**: `string`

Defined in: main.ts:152473

target url of the redirect
target page the redirect is pointing to

***

### url\_to\_spam\_score?

> `optional` **url\_to\_spam\_score**: `number`

Defined in: main.ts:152470

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to;
learn more about how the metric is calculated on this help center page

***

### url\_to\_status\_code?

> `optional` **url\_to\_status\_code**: `number`

Defined in: main.ts:152466

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200
