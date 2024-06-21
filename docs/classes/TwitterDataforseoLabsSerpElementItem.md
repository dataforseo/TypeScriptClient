**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TwitterDataforseoLabsSerpElementItem

# Class: TwitterDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TwitterDataforseoLabsSerpElementItem(data)

> **new TwitterDataforseoLabsSerpElementItem**(`data`?): [`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md)

#### Returns

[`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:96457

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`TwitterElement`](TwitterElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:96453

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:96444

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:96440

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:96437

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#se_type)

#### Source

main.ts:96434

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:96448

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`url`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:96450

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:96446

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:96462

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:96491

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:96484
