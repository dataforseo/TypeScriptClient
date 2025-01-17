[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForAppLiveItem

# Class: DataforseoLabsGoogleKeywordsForAppLiveItem

Defined in: main.ts:121722

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForAppLiveItem()

> **new DataforseoLabsGoogleKeywordsForAppLiveItem**(`data`?): [`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

Defined in: main.ts:121732

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:121726

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md#keyword_data)

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

Defined in: main.ts:121728

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md#ranked_serp_element)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121724

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:121741

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:121760

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

Defined in: main.ts:121753

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)
