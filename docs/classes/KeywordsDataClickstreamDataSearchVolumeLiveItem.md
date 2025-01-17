[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataSearchVolumeLiveItem

# Class: KeywordsDataClickstreamDataSearchVolumeLiveItem

Defined in: main.ts:147774

## Implements

- [`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataSearchVolumeLiveItem()

> **new KeywordsDataClickstreamDataSearchVolumeLiveItem**(`data`?): [`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)

Defined in: main.ts:147785

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md)

#### Returns

[`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:147776

keyword provided in the POST array

#### Implementation of

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md).[`keyword`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md#keyword)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:147781

monthly search volume rates
array of objects with search volume rates in a certain month of a year

#### Implementation of

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md).[`monthly_searches`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md#monthly_searches)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:147778

current search volume rate of a keyword

#### Implementation of

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:147794

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:147817

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)

Defined in: main.ts:147810

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)
