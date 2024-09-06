[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / FaqBox

# Class: FaqBox

## Implements

- [`IFaqBox`](../interfaces/IFaqBox.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FaqBox()

> **new FaqBox**(`data`?): [`FaqBox`](FaqBox.md)

#### Parameters

• **data?**: [`IFaqBox`](../interfaces/IFaqBox.md)

#### Returns

[`FaqBox`](FaqBox.md)

#### Defined in

main.ts:29745

## Properties

### items?

> `optional` **items**: [`FaqBoxElement`](FaqBoxElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFaqBox`](../interfaces/IFaqBox.md).[`items`](../interfaces/IFaqBox.md#items)

#### Defined in

main.ts:29741

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IFaqBox`](../interfaces/IFaqBox.md).[`type`](../interfaces/IFaqBox.md#type)

#### Defined in

main.ts:29738

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:29754

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:29776

***

### fromJS()

> `static` **fromJS**(`data`): [`FaqBox`](FaqBox.md)

#### Parameters

• **data**: `any`

#### Returns

[`FaqBox`](FaqBox.md)

#### Defined in

main.ts:29769
