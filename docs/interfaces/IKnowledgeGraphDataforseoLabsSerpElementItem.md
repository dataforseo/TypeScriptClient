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

main.ts:95991

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id

#### Source

main.ts:95999

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:95989

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image from knowledge graph

#### Source

main.ts:95995

***

### items?

> **`optional`** **items**: [`PeopleAlsoAskElement`](../classes/PeopleAlsoAskElement.md)[]

elements of search results found in SERP

#### Source

main.ts:96001

***

### logo\_url?

> **`optional`** **logo\_url**: `string`

URL of the logo from knowledge graph

#### Source

main.ts:95997

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:95981

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:95977

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:95974

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:95970

***

### sub\_title?

> **`optional`** **sub\_title**: `string`

subtitle of the item

#### Source

main.ts:95987

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:95985

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Source

main.ts:95993

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:95983
