**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOrganicDataforseoLabsSerpElementItem

# Interface: IOrganicDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> **`optional`** **about\_this\_result**: `Object`

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Index signature

 \[`key`: `string`\]: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

#### Source

main.ts:90286

***

### amp\_version?

> **`optional`** **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Source

main.ts:90273

***

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Source

main.ts:90309

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Source

main.ts:90254

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:90266

***

### domain?

> **`optional`** **domain**: `string`

subdomain in SERP

#### Source

main.ts:90248

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:90304

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:90295

***

### extended\_snippet?

> **`optional`** **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Source

main.ts:90270

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Source

main.ts:90278

***

### impressions\_etv?

> **`optional`** **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:90300

***

### is\_featured\_snippet?

> **`optional`** **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Source

main.ts:90262

***

### is\_image?

> **`optional`** **is\_image**: `boolean`

indicates whether the element contains an image

#### Source

main.ts:90258

***

### is\_malicious?

> **`optional`** **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Source

main.ts:90264

***

### is\_video?

> **`optional`** **is\_video**: `boolean`

indicates whether the element contains a video

#### Source

main.ts:90260

***

### links?

> **`optional`** **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Source

main.ts:90282

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Source

main.ts:90288

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:90244

***

### pre\_snippet?

> **`optional`** **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Source

main.ts:90268

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:90240

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Source

main.ts:90307

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:90237

***

### rank\_info?

> **`optional`** **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Source

main.ts:90311

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:90276

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Source

main.ts:90290

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:90234

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:90250

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Source

main.ts:90252

***

### website\_name?

> **`optional`** **website\_name**: `string`

relevant website name in SERP

#### Source

main.ts:90256

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:90246
