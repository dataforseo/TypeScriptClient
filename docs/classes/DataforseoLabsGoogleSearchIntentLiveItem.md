[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSearchIntentLiveItem

# Class: DataforseoLabsGoogleSearchIntentLiveItem

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSearchIntentLiveItem()

> **new DataforseoLabsGoogleSearchIntentLiveItem**(`data`?): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md)

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Defined in

main.ts:96570

## Properties

### keyword?

> `optional` **keyword**: `string`

target keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword)

#### Defined in

main.ts:96562

***

### keyword\_intent?

> `optional` **keyword\_intent**: [`KeywordIntentInfo`](KeywordIntentInfo.md)

search intent data relevant for the specified keyword

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`keyword_intent`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword_intent)

#### Defined in

main.ts:96564

***

### secondary\_keyword\_intents?

> `optional` **secondary\_keyword\_intents**: [`KeywordIntentInfo`](KeywordIntentInfo.md)[]

contains objects with other possible search intents for the specified keyword

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`secondary_keyword_intents`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#secondary_keyword_intents)

#### Defined in

main.ts:96566

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:96579

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:96602

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Defined in

main.ts:96595
