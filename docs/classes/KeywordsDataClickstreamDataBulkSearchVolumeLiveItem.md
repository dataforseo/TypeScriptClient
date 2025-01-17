[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataClickstreamDataBulkSearchVolumeLiveItem

# Class: KeywordsDataClickstreamDataBulkSearchVolumeLiveItem

## Implements

- [`IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataBulkSearchVolumeLiveItem()

> **new KeywordsDataClickstreamDataBulkSearchVolumeLiveItem**(`data`?): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](KeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md)

#### Parameters

• **data?**: [`IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md)

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](KeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:137206
=======
main.ts:137239
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md).[`keyword`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md#keyword)

#### Defined in

<<<<<<< HEAD
main.ts:137195
=======
main.ts:137228
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md).[`monthly_searches`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md#monthly_searches)

#### Defined in

<<<<<<< HEAD
main.ts:137202
=======
main.ts:137235
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### search\_volume?

> `optional` **search\_volume**: `number`

clickstream-based average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea based on clickstream
you can learn more about clickstream search volume in this Help Center article

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md#search_volume)

#### Defined in

<<<<<<< HEAD
main.ts:137199
=======
main.ts:137232
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
main.ts:137215
=======
main.ts:137248
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

<<<<<<< HEAD
main.ts:137238
=======
main.ts:137271
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](KeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveItem`](KeywordsDataClickstreamDataBulkSearchVolumeLiveItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:137231
=======
main.ts:137264
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
