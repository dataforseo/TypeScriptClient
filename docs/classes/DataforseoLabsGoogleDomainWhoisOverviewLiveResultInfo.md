**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo(data)

> **new DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo**(`data`?): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Source

main.ts:88237

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items)

#### Source

main.ts:88233

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items_count)

#### Source

main.ts:88231

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#se_type)

#### Source

main.ts:88227

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#total_count)

#### Source

main.ts:88229

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:88246

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:88270

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Source

main.ts:88263
