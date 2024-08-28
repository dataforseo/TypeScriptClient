[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordInfoNormalizedWithInfo

# Class: KeywordInfoNormalizedWithInfo

## Implements

- [`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordInfoNormalizedWithInfo()

> **new KeywordInfoNormalizedWithInfo**(`data`?): [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

#### Parameters

• **data?**: [`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md)

#### Returns

[`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

#### Defined in

main.ts:84123

## Properties

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when the clickstream dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`last_updated_time`](../interfaces/IKeywordInfoNormalizedWithInfo.md#last_updated_time)

#### Defined in

main.ts:84114

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly clickstream search volume rates
array of objects with clickstream search volume rates in a certain month of a year

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`monthly_searches`](../interfaces/IKeywordInfoNormalizedWithInfo.md#monthly_searches)

#### Defined in

main.ts:84119

***

### search\_volume?

> `optional` **search\_volume**: `number`

monthly average clickstream search volume rate

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`search_volume`](../interfaces/IKeywordInfoNormalizedWithInfo.md#search_volume)

#### Defined in

main.ts:84116

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:84132

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:84155

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

#### Defined in

main.ts:84148
