**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PriceInfo

# Class: PriceInfo

## Implements

- [`IPriceInfo`](../interfaces/IPriceInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PriceInfo(data)

> **new PriceInfo**(`data`?): [`PriceInfo`](PriceInfo.md)

#### Parameters

• **data?**: [`IPriceInfo`](../interfaces/IPriceInfo.md)

#### Returns

[`PriceInfo`](PriceInfo.md)

#### Source

main.ts:21992

## Properties

### currency?

> **`optional`** **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`currency`](../interfaces/IPriceInfo.md#currency)

#### Source

main.ts:21982

***

### current?

> **`optional`** **current**: `number`

current price
indicates the current price of the product or service featured in the result

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`current`](../interfaces/IPriceInfo.md#current)

#### Source

main.ts:21973

***

### displayed\_price?

> **`optional`** **displayed\_price**: `string`

price string in the result
raw price string as provided in the result

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`displayed_price`](../interfaces/IPriceInfo.md#displayed_price)

#### Source

main.ts:21988

***

### is\_price\_range?

> **`optional`** **is\_price\_range**: `boolean`

price is provided as a range
indicates whether a price is provided in a range

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`is_price_range`](../interfaces/IPriceInfo.md#is_price_range)

#### Source

main.ts:21985

***

### max\_value?

> **`optional`** **max\_value**: `number`

the maximum price
the maximum price of the product or service as indicated in the result

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`max_value`](../interfaces/IPriceInfo.md#max_value)

#### Source

main.ts:21979

***

### regular?

> **`optional`** **regular**: `number`

regular price
indicates the regular price of the product or service with no discounts applied

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`regular`](../interfaces/IPriceInfo.md#regular)

#### Source

main.ts:21976

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:22001

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:22023

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PriceInfo`](PriceInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`PriceInfo`](PriceInfo.md)

#### Source

main.ts:22016
