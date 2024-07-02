**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppIntersectionLiveItem

# Class: DataforseoLabsGoogleAppIntersectionLiveItem

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppIntersectionLiveItem(data)

> **new DataforseoLabsGoogleAppIntersectionLiveItem**(`data`?): [`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Source

main.ts:114722

## Properties

### intersection\_result?

> **`optional`** **intersection\_result**: `Object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index signature

 \[`key`: `string`\]: [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md#intersection_result)

#### Source

main.ts:114718

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md#keyword_data)

#### Source

main.ts:114714

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveItem.md#se_type)

#### Source

main.ts:114712

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:114731

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:114756

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)

#### Source

main.ts:114749
