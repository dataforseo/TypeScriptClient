[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingCompetitorsDomainLiveResultInfo

# Class: DataforseoLabsBingCompetitorsDomainLiveResultInfo

Defined in: main.ts:116472

## Implements

- [`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingCompetitorsDomainLiveResultInfo()

> **new DataforseoLabsBingCompetitorsDomainLiveResultInfo**(`data`?): [`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

Defined in: main.ts:116490

#### Parameters

##### data?

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)[]

Defined in: main.ts:116486

contains data related to the target and competitor domains

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:116484

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:116480

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:116478

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:116474

search engine type

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:116476

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:116482

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:116499

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:116526

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

Defined in: main.ts:116519

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)
