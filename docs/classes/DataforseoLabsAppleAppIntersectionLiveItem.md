[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAppleAppIntersectionLiveItem

# Class: DataforseoLabsAppleAppIntersectionLiveItem

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppIntersectionLiveItem()

> **new DataforseoLabsAppleAppIntersectionLiveItem**(`data`?): [`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

#### Defined in

main.ts:118661

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

 \[`key`: `string`\]: [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md#intersection_result)

#### Defined in

main.ts:118657

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md#keyword_data)

#### Defined in

main.ts:118653

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md#se_type)

#### Defined in

main.ts:118651

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:118670

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:118695

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

#### Defined in

main.ts:118688
