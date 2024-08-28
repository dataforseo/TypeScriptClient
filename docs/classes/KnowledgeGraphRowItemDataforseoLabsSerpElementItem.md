[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KnowledgeGraphRowItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphRowItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphRowItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphRowItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:97884

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:97874

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:97880

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:97866

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:97862

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:97859

***

### text?

> `optional` **text**: `string`

row content

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#text)

#### Defined in

main.ts:97876

***

### title?

> `optional` **title**: `string`

title of the link

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:97870

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:97868

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:97889

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:97918

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97911
