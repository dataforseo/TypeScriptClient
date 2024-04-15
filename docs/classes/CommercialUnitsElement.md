**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CommercialUnitsElement

# Class: CommercialUnitsElement

## Implements

- [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CommercialUnitsElement(data)

> **new CommercialUnitsElement**(`data`?): [`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Parameters

• **data?**: [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Source

main.ts:34329

## Properties

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`domain`](../interfaces/ICommercialUnitsElement.md#domain)

#### Source

main.ts:34317

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`price`](../interfaces/ICommercialUnitsElement.md#price)

#### Source

main.ts:34319

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`rating`](../interfaces/ICommercialUnitsElement.md#rating)

#### Source

main.ts:34325

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`source`](../interfaces/ICommercialUnitsElement.md#source)

#### Source

main.ts:34322

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`title`](../interfaces/ICommercialUnitsElement.md#title)

#### Source

main.ts:34313

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`type`](../interfaces/ICommercialUnitsElement.md#type)

#### Source

main.ts:34311

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`url`](../interfaces/ICommercialUnitsElement.md#url)

#### Source

main.ts:34315

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:34338

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:34361

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Source

main.ts:34354
