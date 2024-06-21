**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GoogleFlightsDataforseoLabsSerpElementItem

# Class: GoogleFlightsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleFlightsDataforseoLabsSerpElementItem(data)

> **new GoogleFlightsDataforseoLabsSerpElementItem**(`data`?): [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md)

#### Returns

[`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:98608

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`GoogleFlightsElement`](GoogleFlightsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:98604

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:98595

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:98591

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:98588

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:98599

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:98601

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:98597

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

main.ts:98613

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

main.ts:98641

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:98634
