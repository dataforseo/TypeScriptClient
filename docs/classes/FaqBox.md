**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / FaqBox

# Class: FaqBox

## Implements

- [`IFaqBox`](../interfaces/IFaqBox.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FaqBox(data)

> **new FaqBox**(`data`?): [`FaqBox`](FaqBox.md)

#### Parameters

• **data?**: [`IFaqBox`](../interfaces/IFaqBox.md)

#### Returns

[`FaqBox`](FaqBox.md)

#### Source

main.ts:28655

## Properties

### items?

> **`optional`** **items**: [`FaqBoxElement`](FaqBoxElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`IFaqBox`](../interfaces/IFaqBox.md).[`items`](../interfaces/IFaqBox.md#items)

#### Source

main.ts:28651

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IFaqBox`](../interfaces/IFaqBox.md).[`type`](../interfaces/IFaqBox.md#type)

#### Source

main.ts:28649

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:28664

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:28686

***

### fromJS()

> **`static`** **fromJS**(`data`): [`FaqBox`](FaqBox.md)

#### Parameters

• **data**: `any`

#### Returns

[`FaqBox`](FaqBox.md)

#### Source

main.ts:28679
