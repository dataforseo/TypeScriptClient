[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSubdomainsLiveResultInfo

# Class: DataforseoLabsGoogleSubdomainsLiveResultInfo

Defined in: main.ts:104272

## Implements

- [`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSubdomainsLiveResultInfo()

> **new DataforseoLabsGoogleSubdomainsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

Defined in: main.ts:104290

#### Parameters

##### data?

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)[]

Defined in: main.ts:104286

contains subdomains and related data

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:104284

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:104280

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:104278

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:104274

search engine type

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:104276

domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:104282

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:104299

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:104326

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

Defined in: main.ts:104319

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)
