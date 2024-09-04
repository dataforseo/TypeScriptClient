[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphPartItemSerpElementItem

# Class: KnowledgeGraphPartItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphPartItemSerpElementItem()

> **new KnowledgeGraphPartItemSerpElementItem**(`data`?): [`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:28734

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:28720

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#links)

#### Defined in

main.ts:28726

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#position)

#### Defined in

main.ts:28712

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:28708

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:28705

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:28730

***

### text?

> `optional` **text**: `string`

content within the item

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#text)

#### Defined in

main.ts:28722

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#title)

#### Defined in

main.ts:28716

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#xpath)

#### Defined in

main.ts:28714

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:28739

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:28769

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:28762
