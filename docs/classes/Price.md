[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / Price

# Class: Price

## Implements

- [`IPrice`](../interfaces/IPrice.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Price()

> **new Price**(`data`?): [`Price`](Price.md)

#### Parameters

• **data?**: [`IPrice`](../interfaces/IPrice.md)

#### Returns

[`Price`](Price.md)

#### Defined in

main.ts:73281

## Properties

### currency?

> `optional` **currency**: `string`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`currency`](../interfaces/IPrice.md#currency)

#### Defined in

main.ts:73275

***

### current?

> `optional` **current**: `number`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`current`](../interfaces/IPrice.md#current)

#### Defined in

main.ts:73272

***

### displayed\_price?

> `optional` **displayed\_price**: `string`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`displayed_price`](../interfaces/IPrice.md#displayed_price)

#### Defined in

main.ts:73277

***

### is\_price\_range?

> `optional` **is\_price\_range**: `boolean`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`is_price_range`](../interfaces/IPrice.md#is_price_range)

#### Defined in

main.ts:73276

***

### max\_value?

> `optional` **max\_value**: `number`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`max_value`](../interfaces/IPrice.md#max_value)

#### Defined in

main.ts:73274

***

### regular?

> `optional` **regular**: `number`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`regular`](../interfaces/IPrice.md#regular)

#### Defined in

main.ts:73273

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:73290

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:73312

***

### fromJS()

> `static` **fromJS**(`data`): [`Price`](Price.md)

#### Parameters

• **data**: `any`

#### Returns

[`Price`](Price.md)

#### Defined in

main.ts:73305
