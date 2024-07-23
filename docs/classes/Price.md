**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Price

# Class: Price

## Implements

- [`IPrice`](../interfaces/IPrice.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Price(data)

> **new Price**(`data`?): [`Price`](Price.md)

#### Parameters

• **data?**: [`IPrice`](../interfaces/IPrice.md)

#### Returns

[`Price`](Price.md)

#### Source

main.ts:72685

## Properties

### currency?

> **`optional`** **currency**: `string`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`currency`](../interfaces/IPrice.md#currency)

#### Source

main.ts:72679

***

### current?

> **`optional`** **current**: `number`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`current`](../interfaces/IPrice.md#current)

#### Source

main.ts:72676

***

### displayed\_price?

> **`optional`** **displayed\_price**: `string`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`displayed_price`](../interfaces/IPrice.md#displayed_price)

#### Source

main.ts:72681

***

### is\_price\_range?

> **`optional`** **is\_price\_range**: `boolean`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`is_price_range`](../interfaces/IPrice.md#is_price_range)

#### Source

main.ts:72680

***

### max\_value?

> **`optional`** **max\_value**: `number`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`max_value`](../interfaces/IPrice.md#max_value)

#### Source

main.ts:72678

***

### regular?

> **`optional`** **regular**: `number`

#### Implementation of

[`IPrice`](../interfaces/IPrice.md).[`regular`](../interfaces/IPrice.md#regular)

#### Source

main.ts:72677

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:72694

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:72716

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Price`](Price.md)

#### Parameters

• **data**: `any`

#### Returns

[`Price`](Price.md)

#### Source

main.ts:72709
