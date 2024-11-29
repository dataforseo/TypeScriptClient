[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainRankOverviewLiveResultInfo()

> **new DataforseoLabsGoogleDomainRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:105242

## Properties

### items?

> `optional` **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items)

#### Defined in

main.ts:105238

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items_count)

#### Defined in

main.ts:105236

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#language_code)

#### Defined in

main.ts:105232

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#location_code)

#### Defined in

main.ts:105230

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#se_type)

#### Defined in

main.ts:105226

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#target)

#### Defined in

main.ts:105228

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#total_count)

#### Defined in

main.ts:105234

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:105251

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:105278

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:105271
