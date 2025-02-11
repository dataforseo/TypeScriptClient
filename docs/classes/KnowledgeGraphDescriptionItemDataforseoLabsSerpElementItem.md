[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem

Defined in: main.ts:105930

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:105940

#### Parameters

##### data?

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:105936

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:105932

description content

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:105945

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

Defined in: main.ts:105968

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:105961

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
