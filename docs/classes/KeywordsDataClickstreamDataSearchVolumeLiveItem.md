[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataSearchVolumeLiveItem

# Class: KeywordsDataClickstreamDataSearchVolumeLiveItem

## Implements

- [`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataSearchVolumeLiveItem()

> **new KeywordsDataClickstreamDataSearchVolumeLiveItem**(`data`?): [`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md)

#### Returns

[`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)

#### Defined in

main.ts:147717

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword provided in the POST array

#### Implementation of

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md).[`keyword`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md#keyword)

#### Defined in

main.ts:147708

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly search volume rates
array of objects with search volume rates in a certain month of a year

#### Implementation of

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md).[`monthly_searches`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md#monthly_searches)

#### Defined in

main.ts:147713

***

### search\_volume?

> `optional` **search\_volume**: `number`

current search volume rate of a keyword

#### Implementation of

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md#search_volume)

#### Defined in

main.ts:147710

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:147726

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:147749

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)

#### Defined in

main.ts:147742
