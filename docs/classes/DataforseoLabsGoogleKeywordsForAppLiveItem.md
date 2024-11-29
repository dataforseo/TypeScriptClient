[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForAppLiveItem

# Class: DataforseoLabsGoogleKeywordsForAppLiveItem

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForAppLiveItem()

> **new DataforseoLabsGoogleKeywordsForAppLiveItem**(`data`?): [`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

#### Defined in

main.ts:121664

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md#keyword_data)

#### Defined in

main.ts:121658

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md#ranked_serp_element)

#### Defined in

main.ts:121660

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveItem.md#se_type)

#### Defined in

main.ts:121656

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:121673

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:121692

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)

#### Defined in

main.ts:121685
