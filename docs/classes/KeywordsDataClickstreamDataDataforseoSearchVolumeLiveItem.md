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

main.ts:135855

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword provided in the POST array

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md).[`keyword`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md#keyword)

#### Defined in

main.ts:135843

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly search volume rates
array of objects with search volume rates in a certain month of a year

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md).[`monthly_searches`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md#monthly_searches)

#### Defined in

main.ts:135851

***

### search\_volume?

> `optional` **search\_volume**: `number`

current search volume rate of a keyword

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md#search_volume)

#### Defined in

main.ts:135848

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

indicates if the use_clickstream parameter is active
possible values: true, false

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md).[`use_clickstream`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md#use_clickstream)

#### Defined in

main.ts:135846

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:135864

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:135888

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveItem.md)

#### Defined in

main.ts:135881
