[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKnowledgeGraphSerpElementItem

# Interface: IKnowledgeGraphSerpElementItem

Defined in: main.ts:31109

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### card\_id?

> `optional` **card\_id**: `string`

Defined in: main.ts:31117

card id

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:31128

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:31115

description of the results element in SERP

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:31122

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

Defined in: main.ts:31130

contains results featured in the ‘hotels_pack’ element of SERP

***

### logo\_url?

> `optional` **logo\_url**: `string`

Defined in: main.ts:31124

URL of the logo from knowledge graph

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21404

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`position`](IBaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21400

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21397

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:31134

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: main.ts:31113

subtitle of the item

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31111

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21393

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:31119

relevant URL in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21406

the XPath of the element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`xpath`](IBaseSerpElementItem.md#xpath)
