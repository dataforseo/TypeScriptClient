[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AiOverviewElement

# Class: AiOverviewElement

## Implements

- [`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AiOverviewElement()

> **new AiOverviewElement**(`data`?): [`AiOverviewElement`](AiOverviewElement.md)

#### Parameters

• **data?**: [`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

#### Returns

[`AiOverviewElement`](AiOverviewElement.md)

#### Defined in

main.ts:36478

## Properties

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element
if there are none, equals null

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`images`](../interfaces/IAiOverviewElement.md#images)

#### Defined in

main.ts:36471

***

### references?

> `optional` **references**: [`AiOverviewReference`](AiOverviewReference.md)[]

references relevant to the element
includes references to webpages that were used to generate the ai_overview_element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`references`](../interfaces/IAiOverviewElement.md#references)

#### Defined in

main.ts:36474

***

### text?

> `optional` **text**: `string`

reference text
text snippet from the page that was used to generate the ai_overview_element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`text`](../interfaces/IAiOverviewElement.md#text)

#### Defined in

main.ts:36468

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`title`](../interfaces/IAiOverviewElement.md#title)

#### Defined in

main.ts:36465

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`type`](../interfaces/IAiOverviewElement.md#type)

#### Defined in

main.ts:36463

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:36487

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:36516

***

### fromJS()

> `static` **fromJS**(`data`): [`AiOverviewElement`](AiOverviewElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AiOverviewElement`](AiOverviewElement.md)

#### Defined in

main.ts:36509
