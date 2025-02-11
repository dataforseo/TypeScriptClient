[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordInfoNormalizedWithInfo

# Class: KeywordInfoNormalizedWithInfo

Defined in: main.ts:92634

## Implements

- [`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordInfoNormalizedWithInfo()

> **new KeywordInfoNormalizedWithInfo**(`data`?): [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:92649

#### Parameters

##### data?

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md)

#### Returns

[`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

## Properties

### is\_normalized?

> `optional` **is\_normalized**: `boolean`

Defined in: main.ts:92642

keyword info is normalized
if true, values are normalized with Bing data

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`is_normalized`](../interfaces/IKeywordInfoNormalizedWithInfo.md#is_normalized)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:92637

date and time when the clickstream dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`last_updated_time`](../interfaces/IKeywordInfoNormalizedWithInfo.md#last_updated_time)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:92645

monthly clickstream search volume rates
array of objects with clickstream search volume rates in a certain month of a year

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`monthly_searches`](../interfaces/IKeywordInfoNormalizedWithInfo.md#monthly_searches)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:92639

monthly average clickstream search volume rate

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`search_volume`](../interfaces/IKeywordInfoNormalizedWithInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92658

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92682

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:92675

#### Parameters

##### data

`any`

#### Returns

[`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)
