**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / LocalServicesDataforseoLabsSerpElementItem

# Class: LocalServicesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalServicesDataforseoLabsSerpElementItem(data)

> **new LocalServicesDataforseoLabsSerpElementItem**(`data`?): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md)

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:100542

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#domain)

#### Source

main.ts:100535

***

### items?

> **`optional`** **items**: [`LocalServicesElement`](LocalServicesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:100538

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:100527

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:100523

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:100520

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:100531

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`url`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:100533

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:100529

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

main.ts:100547

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

main.ts:100576

***

### fromJS()

> **`static`** **fromJS**(`data`): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:100569
