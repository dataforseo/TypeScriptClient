[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IFeaturedSnippetDataforseoLabsSerpElementItem

# Interface: IFeaturedSnippetDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Defined in

main.ts:99355

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:99330

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:99324

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:99350

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:99346

***

### featured\_title?

> `optional` **featured\_title**: `string`

title

#### Defined in

main.ts:99328

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain name in SERP

#### Defined in

main.ts:99339

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:99320

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:99316

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Defined in

main.ts:99353

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:99313

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Defined in

main.ts:99357

***

### relative\_url?

> `optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Defined in

main.ts:99341

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:99337

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:99335

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:99326

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:99332

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:99322
