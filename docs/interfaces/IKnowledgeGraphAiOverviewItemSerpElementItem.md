[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKnowledgeGraphAiOverviewItemSerpElementItem

# Interface: IKnowledgeGraphAiOverviewItemSerpElementItem

Defined in: main.ts:31006

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asynchronous\_ai\_overview?

> `optional` **asynchronous\_ai\_overview**: `boolean`

Defined in: main.ts:31010

indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache;

***

### items?

> `optional` **items**: [`AiOverviewElement`](../classes/AiOverviewElement.md)[]

Defined in: main.ts:31013

additional items present in the element
if there are none, equals null

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

Defined in: main.ts:31020

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### references?

> `optional` **references**: [`AiOverviewReference`](../classes/AiOverviewReference.md)[]

Defined in: main.ts:31016

additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21393

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21406

the XPath of the element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`xpath`](IBaseSerpElementItem.md#xpath)
