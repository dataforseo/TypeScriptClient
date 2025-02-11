[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphImagesItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphImagesItemDataforseoLabsSerpElementItem

Defined in: main.ts:105996

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphImagesItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphImagesItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106005

#### Parameters

##### data?

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)[]

Defined in: main.ts:106001

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#items)

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

Defined in: main.ts:105998

link of the element

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#link)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:106010

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

Defined in: main.ts:106033

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106026

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
