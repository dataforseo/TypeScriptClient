[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForAppLiveItem

# Class: DataforseoLabsGoogleKeywordsForAppLiveItem

Defined in: main.ts:121838

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForAppLiveItem()

> **new DataforseoLabsGoogleKeywordsForAppLiveItem**(`data`?): [`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

Defined in: main.ts:121848

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:121842

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md#keyword_data)

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

Defined in: main.ts:121844

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md#ranked_serp_element)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121840

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:121857

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:121876

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

Defined in: main.ts:121869

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)
