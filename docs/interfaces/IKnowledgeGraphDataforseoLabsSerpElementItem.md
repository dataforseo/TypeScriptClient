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

main.ts:95674

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id

#### Source

main.ts:95682

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:95672

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image from knowledge graph

#### Source

main.ts:95678

***

### items?

> **`optional`** **items**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)[]

elements of search results found in SERP

#### Source

main.ts:95684

***

### logo\_url?

> **`optional`** **logo\_url**: `string`

URL of the logo from knowledge graph

#### Source

main.ts:95680

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:95664

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:95660

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:95657

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:95654

***

### sub\_title?

> **`optional`** **sub\_title**: `string`

subtitle of the item

#### Source

main.ts:95670

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:95668

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Source

main.ts:95676

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:95666
