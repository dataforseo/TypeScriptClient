**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TopSightsElement

# Class: TopSightsElement

## Implements

- [`ITopSightsElement`](../interfaces/ITopSightsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopSightsElement(data)

> **new TopSightsElement**(`data`?): [`TopSightsElement`](TopSightsElement.md)

#### Parameters

• **data?**: [`ITopSightsElement`](../interfaces/ITopSightsElement.md)

#### Returns

[`TopSightsElement`](TopSightsElement.md)

#### Source

main.ts:32484

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`description`](../interfaces/ITopSightsElement.md#description)

#### Source

main.ts:32477

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`rating`](../interfaces/ITopSightsElement.md#rating)

#### Source

main.ts:32480

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`title`](../interfaces/ITopSightsElement.md#title)

#### Source

main.ts:32473

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`type`](../interfaces/ITopSightsElement.md#type)

#### Source

main.ts:32471

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`url`](../interfaces/ITopSightsElement.md#url)

#### Source

main.ts:32475

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:32493

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:32514

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TopSightsElement`](TopSightsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopSightsElement`](TopSightsElement.md)

#### Source

main.ts:32507
