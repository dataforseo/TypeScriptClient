[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / CommercialUnitsElement

# Class: CommercialUnitsElement

## Implements

- [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CommercialUnitsElement()

> **new CommercialUnitsElement**(`data`?): [`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Parameters

• **data?**: [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Defined in

main.ts:35295

## Properties

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`domain`](../interfaces/ICommercialUnitsElement.md#domain)

#### Defined in

main.ts:35283

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`price`](../interfaces/ICommercialUnitsElement.md#price)

#### Defined in

main.ts:35285

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`rating`](../interfaces/ICommercialUnitsElement.md#rating)

#### Defined in

main.ts:35291

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`source`](../interfaces/ICommercialUnitsElement.md#source)

#### Defined in

main.ts:35288

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`title`](../interfaces/ICommercialUnitsElement.md#title)

#### Defined in

main.ts:35279

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`type`](../interfaces/ICommercialUnitsElement.md#type)

#### Defined in

main.ts:35277

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`url`](../interfaces/ICommercialUnitsElement.md#url)

#### Defined in

main.ts:35281

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:35304

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:35327

***

### fromJS()

> `static` **fromJS**(`data`): [`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Defined in

main.ts:35320
