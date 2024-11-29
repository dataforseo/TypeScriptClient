[**Documentation**](../README.md)

***

[Documentation](../README.md) / AiOverviewElement

# Class: AiOverviewElement

## Implements

- [`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AiOverviewElement()

> **new AiOverviewElement**(`data`?): [`AiOverviewElement`](AiOverviewElement.md)

#### Parameters

##### data?

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

#### Returns

[`AiOverviewElement`](AiOverviewElement.md)

#### Defined in

main.ts:30849

## Properties

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`images`](../interfaces/IAiOverviewElement.md#images)

#### Defined in

main.ts:30843

***

### references?

> `optional` **references**: [`AiOverviewReference`](AiOverviewReference.md)[]

references relevant to the element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`references`](../interfaces/IAiOverviewElement.md#references)

#### Defined in

main.ts:30845

***

### text?

> `optional` **text**: `string`

description content

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`text`](../interfaces/IAiOverviewElement.md#text)

#### Defined in

main.ts:30841

***

### title?

> `optional` **title**: `string`

title of the element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`title`](../interfaces/IAiOverviewElement.md#title)

#### Defined in

main.ts:30839

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`type`](../interfaces/IAiOverviewElement.md#type)

#### Defined in

main.ts:30837

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:30858

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:30887

***

### fromJS()

> `static` **fromJS**(`data`): [`AiOverviewElement`](AiOverviewElement.md)

#### Parameters

##### data

`any`

#### Returns

[`AiOverviewElement`](AiOverviewElement.md)

#### Defined in

main.ts:30880
