[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphPartItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphPartItemDataforseoLabsSerpElementItem

Defined in: main.ts:107665

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphPartItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphPartItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:107679

#### Parameters

##### data?

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:107671

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#data_attrid)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:107675

link of the element

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:107673

description content

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#text)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:107667

title of the element

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:107684

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:107709

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:107702

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
