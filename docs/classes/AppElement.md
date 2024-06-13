**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppElement

# Class: AppElement

## Implements

- [`IAppElement`](../interfaces/IAppElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppElement(data)

> **new AppElement**(`data`?): [`AppElement`](AppElement.md)

#### Parameters

• **data?**: [`IAppElement`](../interfaces/IAppElement.md)

#### Returns

[`AppElement`](AppElement.md)

#### Source

main.ts:30808

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`description`](../interfaces/IAppElement.md#description)

#### Source

main.ts:30800

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`price`](../interfaces/IAppElement.md#price)

#### Source

main.ts:30804

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`title`](../interfaces/IAppElement.md#title)

#### Source

main.ts:30798

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`type`](../interfaces/IAppElement.md#type)

#### Source

main.ts:30796

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`url`](../interfaces/IAppElement.md#url)

#### Source

main.ts:30802

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:30817

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:30838

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppElement`](AppElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppElement`](AppElement.md)

#### Source

main.ts:30831
