**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IFeaturedSnippetDataforseoLabsSerpElementItem

# Interface: IFeaturedSnippetDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Source

main.ts:95529

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:95506

***

### domain?

> **`optional`** **domain**: `string`

subdomain in SERP

#### Source

main.ts:95500

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:95524

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:95520

***

### featured\_title?

> **`optional`** **featured\_title**: `string`

the title of the featured snippets source page

#### Source

main.ts:95504

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Source

main.ts:95513

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:95496

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:95492

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Source

main.ts:95527

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:95489

***

### rank\_info?

> **`optional`** **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Source

main.ts:95531

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Source

main.ts:95515

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:95486

***

### table?

> **`optional`** **table**: `any`

results table
if there are none, equals null

#### Source

main.ts:95511

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:95502

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Source

main.ts:95508

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:95498
