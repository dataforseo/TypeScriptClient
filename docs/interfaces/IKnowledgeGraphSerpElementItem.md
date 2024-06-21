**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphSerpElementItem

# Interface: IKnowledgeGraphSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### card\_id?

> **`optional`** **card\_id**: `string`

card id

#### Source

main.ts:28837

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Source

main.ts:28848

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:28835

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Source

main.ts:28842

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:28851

***

### logo\_url?

> **`optional`** **logo\_url**: `string`

URL of the logo from knowledge graph

#### Source

main.ts:28844

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:28827

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:28823

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:28820

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:28855

***

### subtitle?

> **`optional`** **subtitle**: `string`

subtitle of the item

#### Source

main.ts:28833

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:28831

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Source

main.ts:28839

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:28829
