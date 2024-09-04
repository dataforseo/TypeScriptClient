[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleAppIntersectionLiveItem

# Class: DataforseoLabsGoogleAppIntersectionLiveItem

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppIntersectionLiveItem()

> **new DataforseoLabsGoogleAppIntersectionLiveItem**(`data`?): [`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Defined in

main.ts:113465

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

 \[`key`: `string`\]: [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md#intersection_result)

#### Defined in

main.ts:113461

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md#keyword_data)

#### Defined in

main.ts:113457

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md#se_type)

#### Defined in

main.ts:113455

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:113474

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:113499

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Defined in

main.ts:113492
