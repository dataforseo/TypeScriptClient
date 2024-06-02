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

main.ts:96918

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:96893

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Source

main.ts:96887

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:96913

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:96909

***

### featured\_title?

> **`optional`** **featured\_title**: `string`

title of a given element

#### Source

main.ts:96891

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Source

main.ts:96902

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:96883

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:96879

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Source

main.ts:96916

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:96876

***

### rank\_info?

> **`optional`** **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Source

main.ts:96920

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Source

main.ts:96904

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:96900

***

### table?

> **`optional`** **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Source

main.ts:96898

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:96889

***

### url?

> **`optional`** **url**: `string`

URL link

#### Source

main.ts:96895

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:96885
