[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo

Defined in: main.ts:100426

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo()

> **new DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo**(`data`?): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

Defined in: main.ts:100438

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)[]

Defined in: main.ts:100434

contains ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:100432

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items_count)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:100428

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:100430

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:100447

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:100471

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

Defined in: main.ts:100464

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)
