[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGooglePageIntersectionLiveItem

# Class: DataforseoLabsGooglePageIntersectionLiveItem

## Implements

- [`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGooglePageIntersectionLiveItem()

> **new DataforseoLabsGooglePageIntersectionLiveItem**(`data`?): [`DataforseoLabsGooglePageIntersectionLiveItem`](DataforseoLabsGooglePageIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveItem`](DataforseoLabsGooglePageIntersectionLiveItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:100491
=======
main.ts:100524
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

[`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md#intersection_result)

#### Defined in

<<<<<<< HEAD
main.ts:100487
=======
main.ts:100520
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md#keyword_data)

#### Defined in

<<<<<<< HEAD
main.ts:100483
=======
main.ts:100516
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md#se_type)

#### Defined in

<<<<<<< HEAD
main.ts:100481
=======
main.ts:100514
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
main.ts:100500
=======
main.ts:100533
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
main.ts:100525
=======
main.ts:100558
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGooglePageIntersectionLiveItem`](DataforseoLabsGooglePageIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveItem`](DataforseoLabsGooglePageIntersectionLiveItem.md)

#### Defined in

<<<<<<< HEAD
main.ts:100518
=======
main.ts:100551
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
