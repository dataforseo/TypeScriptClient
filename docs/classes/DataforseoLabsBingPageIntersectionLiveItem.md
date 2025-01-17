[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBingPageIntersectionLiveItem

# Class: DataforseoLabsBingPageIntersectionLiveItem

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingPageIntersectionLiveItem()

> **new DataforseoLabsBingPageIntersectionLiveItem**(`data`?): [`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:108277
=======
main.ts:108310
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

 \[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md#intersection_result)

#### Defined in

<<<<<<< HEAD
main.ts:108273
=======
main.ts:108306
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md#keyword_data)

#### Defined in

<<<<<<< HEAD
main.ts:108269
=======
main.ts:108302
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md#se_type)

#### Defined in

<<<<<<< HEAD
main.ts:108267
=======
main.ts:108300
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
main.ts:108286
=======
main.ts:108319
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
main.ts:108311
=======
main.ts:108344
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:108304
=======
main.ts:108337
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
