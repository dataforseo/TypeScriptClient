[**Documentation**](../README.md)

***

[Documentation](../README.md) / PriceInfo

# Class: PriceInfo

Defined in: main.ts:23921

## Implements

- [`IPriceInfo`](../interfaces/IPriceInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PriceInfo()

> **new PriceInfo**(`data`?): [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:23943

#### Parameters

##### data?

[`IPriceInfo`](../interfaces/IPriceInfo.md)

#### Returns

[`PriceInfo`](PriceInfo.md)

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:23933

currency of the listed price
ISO code of the currency applied to the price

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`currency`](../interfaces/IPriceInfo.md#currency)

***

### current?

> `optional` **current**: `number`

Defined in: main.ts:23924

current price
indicates the current price of the product or service featured in the result

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`current`](../interfaces/IPriceInfo.md#current)

***

### displayed\_price?

> `optional` **displayed\_price**: `string`

Defined in: main.ts:23939

price string in the result
raw price string as provided in the result

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`displayed_price`](../interfaces/IPriceInfo.md#displayed_price)

***

### is\_price\_range?

> `optional` **is\_price\_range**: `boolean`

Defined in: main.ts:23936

price is provided as a range
indicates whether a price is provided in a range

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`is_price_range`](../interfaces/IPriceInfo.md#is_price_range)

***

### max\_value?

> `optional` **max\_value**: `number`

Defined in: main.ts:23930

the maximum price
the maximum price of the product or service as indicated in the result

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`max_value`](../interfaces/IPriceInfo.md#max_value)

***

### regular?

> `optional` **regular**: `number`

Defined in: main.ts:23927

regular price
indicates the regular price of the product or service with no discounts applied

#### Implementation of

[`IPriceInfo`](../interfaces/IPriceInfo.md).[`regular`](../interfaces/IPriceInfo.md#regular)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23952

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23974

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:23967

#### Parameters

##### data

`any`

#### Returns

[`PriceInfo`](PriceInfo.md)
