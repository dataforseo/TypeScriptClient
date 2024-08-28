[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo()

> **new DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo**(`data`?): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Defined in

main.ts:91947

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items)

#### Defined in

main.ts:91943

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items_count)

#### Defined in

main.ts:91941

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#se_type)

#### Defined in

main.ts:91937

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#total_count)

#### Defined in

main.ts:91939

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:91956

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:91980

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Defined in

main.ts:91973
