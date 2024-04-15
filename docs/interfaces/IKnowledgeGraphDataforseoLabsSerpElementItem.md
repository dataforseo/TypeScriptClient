**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### card\_id?

> **`optional`** **card\_id**: `string`

card id

#### Source

main.ts:94230

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id

#### Source

main.ts:94238

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:94228

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image from knowledge graph

#### Source

main.ts:94234

***

### items?

> **`optional`** **items**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)[]

elements of search results found in SERP

#### Source

main.ts:94240

***

### logo\_url?

> **`optional`** **logo\_url**: `string`

URL of the logo from knowledge graph

#### Source

main.ts:94236

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:94220

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:94216

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:94213

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:94210

***

### sub\_title?

> **`optional`** **sub\_title**: `string`

subtitle of the item

#### Source

main.ts:94226

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:94224

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Source

main.ts:94232

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:94222
