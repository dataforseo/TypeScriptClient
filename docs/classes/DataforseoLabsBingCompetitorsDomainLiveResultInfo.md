[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsBingCompetitorsDomainLiveResultInfo

# Class: DataforseoLabsBingCompetitorsDomainLiveResultInfo

## Implements

- [`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingCompetitorsDomainLiveResultInfo()

> **new DataforseoLabsBingCompetitorsDomainLiveResultInfo**(`data`?): [`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Defined in

main.ts:109525

## Properties

### items?

> `optional` **items**: [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)[]

contains data related to the target and competitor domains

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items)

#### Defined in

main.ts:109521

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items_count)

#### Defined in

main.ts:109519

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#language_code)

#### Defined in

main.ts:109515

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#location_code)

#### Defined in

main.ts:109513

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#se_type)

#### Defined in

main.ts:109509

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#target)

#### Defined in

main.ts:109511

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#total_count)

#### Defined in

main.ts:109517

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:109534

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:109561

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Defined in

main.ts:109554
