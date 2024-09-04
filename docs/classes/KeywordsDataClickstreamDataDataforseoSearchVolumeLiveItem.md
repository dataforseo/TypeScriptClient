[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem

# Class: KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem

## Implements

- [`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem()

> **new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem**(`data`?): [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md)

#### Parameters

• **data?**: [`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md)

#### Returns

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md)

#### Defined in

main.ts:138956

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword provided in the POST array

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md).[`keyword`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md#keyword)

#### Defined in

main.ts:138944

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly search volume rates
array of objects with search volume rates in a certain month of a year

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md).[`monthly_searches`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md#monthly_searches)

#### Defined in

main.ts:138952

***

### search\_volume?

> `optional` **search\_volume**: `number`

current search volume rate of a keyword

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md#search_volume)

#### Defined in

main.ts:138949

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

indicates if the use_clickstream parameter is active
possible values: true, false

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md).[`use_clickstream`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md#use_clickstream)

#### Defined in

main.ts:138947

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:138965

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:138989

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md)

#### Defined in

main.ts:138982
