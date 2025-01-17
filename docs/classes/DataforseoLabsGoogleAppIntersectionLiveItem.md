[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppIntersectionLiveItem

# Class: DataforseoLabsGoogleAppIntersectionLiveItem

Defined in: main.ts:122886

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppIntersectionLiveItem()

> **new DataforseoLabsGoogleAppIntersectionLiveItem**(`data`?): [`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

Defined in: main.ts:122898

#### Parameters

##### data?

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

Defined in: main.ts:122894

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

\[`key`: `string`\]: [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md#intersection_result)

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:122890

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md#keyword_data)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:122888

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:122907

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:122932

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

Defined in: main.ts:122925

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)
