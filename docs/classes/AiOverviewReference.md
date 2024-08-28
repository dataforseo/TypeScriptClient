[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AiOverviewReference

# Class: AiOverviewReference

## Implements

- [`IAiOverviewReference`](../interfaces/IAiOverviewReference.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AiOverviewReference()

> **new AiOverviewReference**(`data`?): [`AiOverviewReference`](AiOverviewReference.md)

#### Parameters

• **data?**: [`IAiOverviewReference`](../interfaces/IAiOverviewReference.md)

#### Returns

[`AiOverviewReference`](AiOverviewReference.md)

#### Defined in

main.ts:38197

## Properties

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IAiOverviewReference`](../interfaces/IAiOverviewReference.md).[`domain`](../interfaces/IAiOverviewReference.md#domain)

#### Defined in

main.ts:38186

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the questions_and_answers_element

#### Implementation of

[`IAiOverviewReference`](../interfaces/IAiOverviewReference.md).[`source`](../interfaces/IAiOverviewReference.md#source)

#### Defined in

main.ts:38184

***

### text?

> `optional` **text**: `string`

reference text
text snippet from the page that was used to generate the ai_overview_element

#### Implementation of

[`IAiOverviewReference`](../interfaces/IAiOverviewReference.md).[`text`](../interfaces/IAiOverviewReference.md#text)

#### Defined in

main.ts:38193

***

### title?

> `optional` **title**: `string`

title of a given shopping element

#### Implementation of

[`IAiOverviewReference`](../interfaces/IAiOverviewReference.md).[`title`](../interfaces/IAiOverviewReference.md#title)

#### Defined in

main.ts:38190

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAiOverviewReference`](../interfaces/IAiOverviewReference.md).[`type`](../interfaces/IAiOverviewReference.md#type)

#### Defined in

main.ts:38181

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IAiOverviewReference`](../interfaces/IAiOverviewReference.md).[`url`](../interfaces/IAiOverviewReference.md#url)

#### Defined in

main.ts:38188

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:38206

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:38228

***

### fromJS()

> `static` **fromJS**(`data`): [`AiOverviewReference`](AiOverviewReference.md)

#### Parameters

• **data**: `any`

#### Returns

[`AiOverviewReference`](AiOverviewReference.md)

#### Defined in

main.ts:38221
