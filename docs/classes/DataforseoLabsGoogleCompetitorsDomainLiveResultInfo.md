[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

# Class: DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

Defined in: main.ts:103004

## Implements

- [`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCompetitorsDomainLiveResultInfo()

> **new DataforseoLabsGoogleCompetitorsDomainLiveResultInfo**(`data`?): [`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

Defined in: main.ts:103022

#### Parameters

##### data?

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)[]

Defined in: main.ts:103018

contains data related to the target and competitor domains

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:103016

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:103012

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:103010

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:103006

search engine type

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:103008

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:103014

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:103031

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:103058

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

Defined in: main.ts:103051

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)
