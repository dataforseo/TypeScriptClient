[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKnowledgeGraphSerpElementItem

# Interface: IKnowledgeGraphSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### card\_id?

> `optional` **card\_id**: `string`

card id

#### Defined in

main.ts:29284

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Defined in

main.ts:29295

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:29282

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

main.ts:29289

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:29298

***

### logo\_url?

> `optional` **logo\_url**: `string`

URL of the logo from knowledge graph

#### Defined in

main.ts:29291

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`position`](IBaseSerpElementItem.md#position)

#### Defined in

main.ts:20721

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20717

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20714

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29302

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the item

#### Defined in

main.ts:29280

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:29278

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

#### Defined in

main.ts:20710

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:29286

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`xpath`](IBaseSerpElementItem.md#xpath)

#### Defined in

main.ts:20723
