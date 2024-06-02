**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPaidDataforseoLabsSerpElementItem

# Interface: IPaidDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Source

main.ts:90751

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Source

main.ts:90715

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:90713

***

### description\_rows?

> **`optional`** **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Source

main.ts:90724

***

### domain?

> **`optional`** **domain**: `string`

subdomain in SERP

#### Source

main.ts:90711

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:90746

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:90737

***

### extra?

> **`optional`** **extra**: `Object`

additional information about the result

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:90721

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Source

main.ts:90719

***

### impressions\_etv?

> **`optional`** **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:90742

***

### links?

> **`optional`** **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Source

main.ts:90728

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Source

main.ts:90730

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:90705

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:90701

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Source

main.ts:90749

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:90698

***

### rank\_info?

> **`optional`** **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Source

main.ts:90753

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Source

main.ts:90732

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:90695

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:90709

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Source

main.ts:90717

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:90707
