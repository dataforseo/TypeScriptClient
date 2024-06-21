**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ClickstreamKeywordInfo

# Class: ClickstreamKeywordInfo

## Implements

- [`IClickstreamKeywordInfo`](../interfaces/IClickstreamKeywordInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ClickstreamKeywordInfo(data)

> **new ClickstreamKeywordInfo**(`data`?): [`ClickstreamKeywordInfo`](ClickstreamKeywordInfo.md)

#### Parameters

• **data?**: [`IClickstreamKeywordInfo`](../interfaces/IClickstreamKeywordInfo.md)

#### Returns

[`ClickstreamKeywordInfo`](ClickstreamKeywordInfo.md)

#### Source

main.ts:82908

## Properties

### age\_distribution?

> **`optional`** **age\_distribution**: `Object`

distribution of clickstream-based metrics by age

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IClickstreamKeywordInfo`](../interfaces/IClickstreamKeywordInfo.md).[`age_distribution`](../interfaces/IClickstreamKeywordInfo.md#age_distribution)

#### Source

main.ts:82901

***

### gender\_distribution?

> **`optional`** **gender\_distribution**: `Object`

distribution of estimated clickstream-based metrics by gender

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IClickstreamKeywordInfo`](../interfaces/IClickstreamKeywordInfo.md).[`gender_distribution`](../interfaces/IClickstreamKeywordInfo.md#gender_distribution)

#### Source

main.ts:82899

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when the clickstream dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Implementation of

[`IClickstreamKeywordInfo`](../interfaces/IClickstreamKeywordInfo.md).[`last_updated_time`](../interfaces/IClickstreamKeywordInfo.md#last_updated_time)

#### Source

main.ts:82897

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly clickstream search volume rates
array of objects with clickstream search volume rates in a certain month of a year

#### Implementation of

[`IClickstreamKeywordInfo`](../interfaces/IClickstreamKeywordInfo.md).[`monthly_searches`](../interfaces/IClickstreamKeywordInfo.md#monthly_searches)

#### Source

main.ts:82904

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average clickstream search volume rate

#### Implementation of

[`IClickstreamKeywordInfo`](../interfaces/IClickstreamKeywordInfo.md).[`search_volume`](../interfaces/IClickstreamKeywordInfo.md#search_volume)

#### Source

main.ts:82894

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:82917

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:82954

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ClickstreamKeywordInfo`](ClickstreamKeywordInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ClickstreamKeywordInfo`](ClickstreamKeywordInfo.md)

#### Source

main.ts:82947
