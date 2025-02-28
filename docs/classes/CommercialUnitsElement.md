[**Documentation**](../README.md)

***

[Documentation](../README.md) / CommercialUnitsElement

# Class: CommercialUnitsElement

Defined in: main.ts:35775

## Implements

- [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CommercialUnitsElement()

> **new CommercialUnitsElement**(`data`?): [`CommercialUnitsElement`](CommercialUnitsElement.md)

Defined in: main.ts:35795

#### Parameters

##### data?

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:35783

website domain

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`domain`](../interfaces/ICommercialUnitsElement.md#domain)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:35785

price indicated in the element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`price`](../interfaces/ICommercialUnitsElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:35791

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`rating`](../interfaces/ICommercialUnitsElement.md#rating)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:35788

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`source`](../interfaces/ICommercialUnitsElement.md#source)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35779

title of a given link element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`title`](../interfaces/ICommercialUnitsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:35777

type of element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`type`](../interfaces/ICommercialUnitsElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:35781

URL

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`url`](../interfaces/ICommercialUnitsElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35804

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:35827

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`CommercialUnitsElement`](CommercialUnitsElement.md)

Defined in: main.ts:35820

#### Parameters

##### data

`any`

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)
