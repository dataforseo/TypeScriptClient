**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSubdomainsLiveResultInfo

# Class: DataforseoLabsGoogleSubdomainsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSubdomainsLiveResultInfo(data)

> **new DataforseoLabsGoogleSubdomainsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Source

main.ts:95489

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)[]

contains subdomains and related data

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items)

#### Source

main.ts:95485

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items_count)

#### Source

main.ts:95483

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#language_code)

#### Source

main.ts:95479

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#location_code)

#### Source

main.ts:95477

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#se_type)

#### Source

main.ts:95473

***

### target?

> **`optional`** **target**: `string`

domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#target)

#### Source

main.ts:95475

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#total_count)

#### Source

main.ts:95481

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:95498

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:95525

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Source

main.ts:95518
