[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TopSightsElement

# Class: TopSightsElement

## Implements

- [`ITopSightsElement`](../interfaces/ITopSightsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopSightsElement()

> **new TopSightsElement**(`data`?): [`TopSightsElement`](TopSightsElement.md)

#### Parameters

• **data?**: [`ITopSightsElement`](../interfaces/ITopSightsElement.md)

#### Returns

[`TopSightsElement`](TopSightsElement.md)

#### Defined in

main.ts:32805

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`description`](../interfaces/ITopSightsElement.md#description)

#### Defined in

main.ts:32798

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`rating`](../interfaces/ITopSightsElement.md#rating)

#### Defined in

main.ts:32801

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`title`](../interfaces/ITopSightsElement.md#title)

#### Defined in

main.ts:32794

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`type`](../interfaces/ITopSightsElement.md#type)

#### Defined in

main.ts:32792

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`ITopSightsElement`](../interfaces/ITopSightsElement.md).[`url`](../interfaces/ITopSightsElement.md#url)

#### Defined in

main.ts:32796

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:32814

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:32835

***

### fromJS()

> `static` **fromJS**(`data`): [`TopSightsElement`](TopSightsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopSightsElement`](TopSightsElement.md)

#### Defined in

main.ts:32828
