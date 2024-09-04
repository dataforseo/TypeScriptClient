[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOrganicDataforseoLabsSerpElementItem

# Interface: IOrganicDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: `object`

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Index Signature

 \[`key`: `string`\]: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

#### Defined in

main.ts:92884

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Defined in

main.ts:92871

***

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Defined in

main.ts:92912

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

main.ts:92852

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:92907

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:92864

***

### domain?

> `optional` **domain**: `string`

subdomain in SERP

#### Defined in

main.ts:92846

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:92902

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:92893

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Defined in

main.ts:92868

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:92876

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:92898

***

### is\_featured\_snippet?

> `optional` **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Defined in

main.ts:92860

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

main.ts:92856

***

### is\_malicious?

> `optional` **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Defined in

main.ts:92862

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

main.ts:92858

***

### links?

> `optional` **links**: `any`

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:92880

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain name in SERP

#### Defined in

main.ts:92886

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:92842

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Defined in

main.ts:92866

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:92838

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Defined in

main.ts:92910

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:92835

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Defined in

main.ts:92914

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:92874

***

### relative\_url?

> `optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Defined in

main.ts:92888

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:92832

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:92848

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:92850

***

### website\_name?

> `optional` **website\_name**: `string`

relevant website name in SERP

#### Defined in

main.ts:92854

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:92844
