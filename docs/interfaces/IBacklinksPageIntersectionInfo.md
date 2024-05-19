**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksPageIntersectionInfo

# Interface: IBacklinksPageIntersectionInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### alt?

> **`optional`** **alt**: `string`

alternative text of the image
this field will be null if backlink type is not image

#### Source

main.ts:144620

***

### anchor?

> **`optional`** **anchor**: `string`

anchor text of the backlink

#### Source

main.ts:144622

***

### attributes?

> **`optional`** **attributes**: `string`[]

link attributes of the referring links
example:
nofollow

#### Source

main.ts:144612

***

### backlink\_spam\_score?

> **`optional`** **backlink\_spam\_score**: `number`

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Source

main.ts:144542

***

### dofollow?

> **`optional`** **dofollow**: `boolean`

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Source

main.ts:144615

***

### domain\_from?

> **`optional`** **domain\_from**: `string`

domain referring to the target domain or webpage

#### Source

main.ts:144519

***

### domain\_from\_country?

> **`optional`** **domain\_from\_country**: `string`

ISO country code of the referring domain

#### Source

main.ts:144566

***

### domain\_from\_ip?

> **`optional`** **domain\_from\_ip**: `string`

IP address of the referring domain

#### Source

main.ts:144564

***

### domain\_from\_is\_ip?

> **`optional`** **domain\_from\_is\_ip**: `boolean`

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Source

main.ts:144562

***

### domain\_from\_platform\_type?

> **`optional`** **domain\_from\_platform\_type**: `string`[]

platform types of the referring domain
example:
"cms",
"blogs"

#### Source

main.ts:144559

***

### domain\_from\_rank?

> **`optional`** **domain\_from\_rank**: `number`

domain rank of the referring domain
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:144554

***

### domain\_to?

> **`optional`** **domain\_to**: `string`

domain the backlink is pointing to

#### Source

main.ts:144526

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:144594

***

### group\_count?

> **`optional`** **group\_count**: `number`

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Source

main.ts:144636

***

### indirect\_link\_path?

> **`optional`** **indirect\_link\_path**: [`Redirect`](../classes/Redirect.md)[]

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Source

main.ts:144657

***

### is\_broken?

> **`optional`** **is\_broken**: `boolean`

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Source

main.ts:144639

***

### is\_indirect\_link?

> **`optional`** **is\_indirect\_link**: `boolean`

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Source

main.ts:144654

***

### is\_lost?

> **`optional`** **is\_lost**: `boolean`

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Source

main.ts:144539

***

### is\_new?

> **`optional`** **is\_new**: `boolean`

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Source

main.ts:144536

***

### item\_type?

> **`optional`** **item\_type**: `string`

link type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Source

main.ts:144608

***

### last\_seen?

> **`optional`** **last\_seen**: `string`

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:144604

***

### links\_count?

> **`optional`** **links\_count**: `number`

number of identical backlinks found on the referring page

#### Source

main.ts:144633

***

### original?

> **`optional`** **original**: `boolean`

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Source

main.ts:144617

***

### page\_from\_encoding?

> **`optional`** **page\_from\_encoding**: `string`

character encoding of the referring page
example:
utf-8

#### Source

main.ts:144578

***

### page\_from\_external\_links?

> **`optional`** **page\_from\_external\_links**: `number`

number of external links found on the referring page

#### Source

main.ts:144568

***

### page\_from\_internal\_links?

> **`optional`** **page\_from\_internal\_links**: `number`

number of internal links found on the referring page

#### Source

main.ts:144570

***

### page\_from\_language?

> **`optional`** **page\_from\_language**: `string`

language of the referring page
in ISO 639-1 format
example:
en

#### Source

main.ts:144583

***

### page\_from\_rank?

> **`optional`** **page\_from\_rank**: `number`

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:144550

***

### page\_from\_size?

> **`optional`** **page\_from\_size**: `number`

size of the referring page, in bytes
example:
63357

#### Source

main.ts:144574

***

### page\_from\_status\_code?

> **`optional`** **page\_from\_status\_code**: `number`

HTTP status code returned by the referring page
example:
200

#### Source

main.ts:144589

***

### page\_from\_title?

> **`optional`** **page\_from\_title**: `string`

title of the referring page

#### Source

main.ts:144585

***

### prev\_seen?

> **`optional`** **prev\_seen**: `string`

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:144599

***

### rank?

> **`optional`** **rank**: `number`

backlink rank
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:144546

***

### semantic\_location?

> **`optional`** **semantic\_location**: `string`

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Source

main.ts:144631

***

### text\_post?

> **`optional`** **text\_post**: `string`

snippet after the anchor text

#### Source

main.ts:144626

***

### text\_pre?

> **`optional`** **text\_pre**: `string`

text snippet before the anchor text

#### Source

main.ts:144624

***

### tld\_from?

> **`optional`** **tld\_from**: `string`

top-level domain of the referring URL

#### Source

main.ts:144533

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:144517

***

### url\_from?

> **`optional`** **url\_from**: `string`

URL of the page where the backlink is found

#### Source

main.ts:144521

***

### url\_from\_https?

> **`optional`** **url\_from\_https**: `boolean`

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Source

main.ts:144524

***

### url\_to?

> **`optional`** **url\_to**: `string`

URL the backlink is pointing to

#### Source

main.ts:144528

***

### url\_to\_https?

> **`optional`** **url\_to\_https**: `boolean`

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Source

main.ts:144531

***

### url\_to\_redirect\_target?

> **`optional`** **url\_to\_redirect\_target**: `string`

target url of the redirect
target page the redirect is pointing to

#### Source

main.ts:144651

***

### url\_to\_spam\_score?

> **`optional`** **url\_to\_spam\_score**: `number`

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
learn more about how the metric is calculated on this help center page

#### Source

main.ts:144648

***

### url\_to\_status\_code?

> **`optional`** **url\_to\_status\_code**: `number`

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Source

main.ts:144644
