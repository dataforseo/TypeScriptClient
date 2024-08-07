**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MonthlySearches

# Class: MonthlySearches

## Implements

- [`IMonthlySearches`](../interfaces/IMonthlySearches.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MonthlySearches(data)

> **new MonthlySearches**(`data`?): [`MonthlySearches`](MonthlySearches.md)

#### Parameters

• **data?**: [`IMonthlySearches`](../interfaces/IMonthlySearches.md)

#### Returns

[`MonthlySearches`](MonthlySearches.md)

#### Source

main.ts:83313

## Properties

### month?

> **`optional`** **month**: `number`

month

#### Implementation of

[`IMonthlySearches`](../interfaces/IMonthlySearches.md).[`month`](../interfaces/IMonthlySearches.md#month)

#### Source

main.ts:83307

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate

#### Implementation of

[`IMonthlySearches`](../interfaces/IMonthlySearches.md).[`search_volume`](../interfaces/IMonthlySearches.md#search_volume)

#### Source

main.ts:83309

***

### year?

> **`optional`** **year**: `number`

year

#### Implementation of

[`IMonthlySearches`](../interfaces/IMonthlySearches.md).[`year`](../interfaces/IMonthlySearches.md#year)

#### Source

main.ts:83305

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:83322

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:83341

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MonthlySearches`](MonthlySearches.md)

#### Parameters

• **data**: `any`

#### Returns

[`MonthlySearches`](MonthlySearches.md)

#### Source

main.ts:83334
